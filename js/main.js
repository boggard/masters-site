function isElementInViewport(el, last) {
    var rect = el.getBoundingClientRect();

    if (last) {
        var main = document.getElementsByTagName("main")[0];
        return main.scrollTop === (main.scrollHeight - main.offsetHeight);
    } else {
        return rect.bottom > (window.innerHeight || document.documentElement.clientHeight) / 2 &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight) / 2;
    }
}

function updateLink(element, link, last) {
    if (isElementInViewport(element, last)) {

        if (last) {
            var subLinks = document.getElementsByClassName("sub-menu-item");
            Array.prototype.forEach.call(subLinks, function (element) {
                element.classList.remove("active");
            })
        }

        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
}
