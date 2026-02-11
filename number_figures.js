document.addEventListener("DOMContentLoaded", function() {
    let figures = document.querySelectorAll("img");
    figures.forEach((fig, index) => {
        let caption = document.createElement("figcaption");
        caption.innerHTML = `<strong>Figure SI-${index + 1}:</strong> <span class="caption-text">${fig.alt}</span>`;
        fig.parentNode.insertBefore(caption, fig.nextSibling);
    });
});
