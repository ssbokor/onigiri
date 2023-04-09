function navibar() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// From https://www.w3schools.com/howto/howto_js_topnav_responsive.asp