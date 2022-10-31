//lecture/week 3 video timestamp 28:00


document.addEventListener("DOMContentLoaded", function() {
    //Nav Menu
    const menus = document.querySelectorAll("Nav");
    M.Sidenav.init(menus, { edge: "right" });
    // Add Questions
    const forms = document.querySelectorAll(".qs");
    M.Sidenav.init(forms, { edge: "left" });
});