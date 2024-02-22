function openNav() {
    if (document.getElementById("togglemenu").className == "content-width") {
        let hamburger = document.getElementById("togglemenu");
        hamburger.classList.add("hidden");
    } else {
        let hamburger = document.getElementById("togglemenu");
        hamburger.classList.remove("hidden");
    }   
  }