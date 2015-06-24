/**
 * IMPORTANT:
 * In order for this to work, you need to either clear the databases or add a fake date to all of the now-existing comments.
 * Also, I think the action attribute of the form is getting too big, so instead, I'm adding the event using jQuery. You can continue to use the action attribute, but it'll be a bunch of lines of JavaScript code all mushed into one so I think we should just remove it.
*/

function cleartext(){
    document.getElementById("messageInput").value = "";
};
//By setting the event handler to the click event of the button, it becomes our "action attribute" for the form. That means that this event will run even if someone submits the form by pressing Enter in the name box even though we didn't program that in.
$("#messageSubmit").click(function(event) {
    //Prevent the form from using GET parameters and refreshing the page.
    event.preventDefault();
    var currentTime = new Date();
    myDataRef.push({
        name: document.forms.commenter.name.value,
        text: document.forms.commenter.text.value.split('\n').join('<br>'),
        //Remember save the date in Firebase so we can add it into the comments in the child_added event client-side.
        date: currentTime.toGMTString()
    });
    cleartext();
});

var myDataRef = new Firebase('https://teamkachat.firebaseio.com/');
//Also, I got rid of this indentation with Emacs because Emacs is _great_ at doing that kind of stuff.
myDataRef.limit(20).on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text, message.date);
    $("audio")[0].play()
});
function displayChatMessage(name, text, date) {
    "use strict";
    //We first prepend the date then we prepend the name so the name goes before the date. Also, the date is just a text node, it is not italicized.
    $('<div class = "message"/>').html("<br/>").prepend($(document.createTextNode("posted on "+date))).prepend($('<em class = "name"/>').text(name ? name + " " : "Unknown ")).append(safe(text ? text : "[blank comment]")).appendTo($("#messagesDiv"));
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
//I added the <pre> tag into here because I think that'll be helpful in sharing code in the chats.
safe.allowedElements = ["PRE", "TIME", "SECTION", "NAV", "ARTICLE", "ASIDE", "HEADER", "FOOTER", "ADDRESS", "DL", "DT", "DD", "FIGURE", "FIGCAPTION", "EM", "STRONG", "SMALL", "S", "CITE", "DFN", "ABBR", "CODE", "VAR", "SAMP", "KBD", "SUB", "SUP", "I", "B", "U", "MARK", "RUBY", "RT", "RP", "BDI", "BDO", "WBR", "P", "A", "BR", "HR", "SPAN", "UL", "OL", "LI", "DIV", "INPUT", "SELECT", "OPTION", "TEXTAREA", "TABLE", "CAPTION", "COLGROUP", "COL", "TBODY", "THEAD", "TFOOT", "TR", "TD", "TH", "MARQUEE", "H1", "H2", "H3", "H4", "H5", "H6"];