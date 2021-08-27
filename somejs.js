let isOpen = false;

function toggleNav() {
    if (!isOpen) {
        document.getElementById("navbar").style.flex = "2 1 0%";
        document.getElementById("menu-btn").style.transform = "rotate(90deg)"
        isOpen = !isOpen;
    } else {
        document.getElementById("navbar").style.flex = "0 1 0%";
        document.getElementById("menu-btn").style.transform = "rotate(0deg)"
        isOpen = !isOpen;
    }
}