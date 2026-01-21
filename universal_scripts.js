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

const images = [
    "assets/eating my food.png",
    "assets/headshot with torch.png",
    "assets/pointing to windmill.png",
    "assets/senior headshot.png",
    "assets/nice headshot (in tree).jpg"
]
const random = Math.floor(Math.random() * images.length);
document.getElementById('random_headshot_image').src = images[random];