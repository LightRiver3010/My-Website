const proudBoxes = {};

for (let i = 1; i <= 3; i++) {
    proudBoxes[i] = {
        source : document.getElementById(`proud-image${i}`)
    };

    proudBoxes[i].source.addEventListener("mouseenter", function() {
    proudBoxes[i].source.classList.remove('dulled');
    })

proudBoxes[i].source.addEventListener("mouseleave", function() {
    proudBoxes[i].source.classList.add('dulled');
    })
}