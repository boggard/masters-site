function updateLinks() {
    updateLink(document.getElementById("self"), document.getElementById("self-link"));
    updateLink(document.getElementById("since"), document.getElementById("since-link"));
    updateLink(document.getElementById("goal"), document.getElementById("goal-link"), true);
}

document.getElementsByTagName("main")[0].addEventListener("scroll", updateLinks);
