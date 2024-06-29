const images = document.querySelector('#images').addEventListener('click', function (e) {

        if (e.target.tagName === "IMG") {
                e.target.parentNode.remove()
        }
}, false);