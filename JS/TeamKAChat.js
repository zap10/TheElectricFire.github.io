var myDataRef = new Firebase('https://teamkachat.firebaseio.com/');
     myDataRef.limit(20).on('child_added', function(snapshot) {
       var message = snapshot.val();
       displayChatMessage(message.name, message.text);
       $("audio")[0].play()
     });
     function displayChatMessage(name, text) {
         "use strict";
       $('<div class = "message"/>').html("<br/>").append(safe(text ? text : "[blank comment]")).prepend($('<em class = "name"/>').text(name ? name : "Unknown")).appendTo($('#messagesDiv'));
       $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
     };
     function safe(text) {
         "use strict";
       var chatme = (new DOMParser).parseFromString("<div>"+text+"</div>", "text/html");
       var tags = chatme.getElementsByTagName("*");      
       for (var j = 4; j < tags.length; j++) {
            var replacement;
            if (safe.allowedElements.indexOf(tags[j].tagName) === -1) {
                replacement = document.createTextNode(tags[j].outerHTML);
            } else if (tags[j].tagName === "A") {
                var href = tags[j].getAttribute("href");
                replacement = document.createElement("a");
                if (href !== null && href.indexOf("javascript:") === -1) replacement.href = href;
                while (tags[j].childNodes[0]) replacement.appendChild(tags[j].childNodes[0]);
            } else {
                replacement = document.createElement(tags[j].tagName);
                while (tags[j].childNodes[0]) replacement.appendChild(tags[j].childNodes[0]);
            }
            var prev = tags[j];
            tags[j].parentNode.insertBefore(replacement, tags[j]);
            tags[j].parentNode.removeChild(prev);
        }
       return $(tags[3]);
     };
     safe.allowedElements = ["TIME", "SECTION", "NAV", "ARTICLE", "ASIDE", "HEADER", "FOOTER", "ADDRESS", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "EM", "STRONG", "SMALL", "S", "CITE", "DFN", "ABBR", "CODE", "VAR", "SAMP", "KBD", "SUB", "SUP", "I", "B", "U", "MARK", "RUBY", "RT", "RP", "BDI", "BDO", "WBR", "P", "A", "BR", "HR", "SPAN", "UL", "OL", "LI", "DIV", "INPUT", "SELECT", "OPTION", "TEXTAREA", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "MARQUEE", "H1", "H2", "H3", "H4", "H5", "H6"];
