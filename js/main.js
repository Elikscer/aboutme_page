function changePage(targetPage) {
    if (targetPage == "home") {
        $target = $(".home");
        $closing = [$(".portfolio"), $(".about"), $(".contact"), $(".visitor-log")];
    }
    else if (targetPage == "portfolio") {
        $target = $(".portfolio");
        $closing = [$(".home"), $(".about"), $(".contact"), $(".visitor-log")];
    }
    else if (targetPage == "about") {
        $target = $(".about");
        $closing = [$(".portfolio"), $(".home"), $(".contact"), $(".visitor-log")];
    }
    else if (targetPage == "contact") {
        $target = $(".contact");
        $closing = [$(".portfolio"), $(".about"), $(".home"), $(".visitor-log")];
    }
    else if (targetPage == "visitor-log") {
        $target = $(".visitor-log");
        $closing = [$(".portfolio"), $(".about"), $(".home"), $(".contact")];
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

function toggleMenu() {
    $menu = $(".topnav");
    var display = $menu.css("display");
    if (display === "block") {
        $menu.css("display", "none");
    } 
    else {
        $menu.css("display", "block");
    }
}
