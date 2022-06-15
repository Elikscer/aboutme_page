function changePage(targetPage) {
    if (targetPage == "home") {
        $target = $(".home");
        $closing = [$(".portfolio"), $(".about"), $(".contact")];
    }
    else if (targetPage == "portfolio") {
        $target = $(".portfolio");
        $closing = [$(".home"), $(".about"), $(".contact")];
    }
    else if (targetPage == "about") {
        $target = $(".about");
        $closing = [$(".portfolio"), $(".home"), $(".contact")];
    }
    else if (targetPage == "contact") {
        $target = $(".contact");
        $closing = [$(".portfolio"), $(".about"), $(".home")];
    }
    for (i = 0; i < $closing.length; i++) {
        $closing[i].css("display", "none");
    }
    $target.css("display", "flex");
}

function addCss() {
    var link = $("<link />",{
        rel: "stylesheet",
        type: "text/css",
        href: "css/altTheme.css"
      })
      $('head').append(link);
   }
 
function removeCss() {
    $('link[rel=stylesheet][href~="css/altTheme.css"]').remove();
}

function changeCss() {
    $altCss = $('link[rel=stylesheet][href~="css/altTheme.css"]');
    if ($altCss.length > 0) {
        removeCss();
    }
    else {
        addCss();
    }
}