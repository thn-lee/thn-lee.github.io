for (let i = 1; i <= 16; i++) {
    let box = document.createElement('div');
    box.classList.add("box")
    document.body.appendChild(box)
}
let random = (number) => {
    return Math.floor(Math.random() * number)
}
let bgChange = () => {
    let rndColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndColor
}
let boxGroup = document.querySelectorAll('div');
for (let i = 0; i < boxGroup.length; i++) {
    if (i % 2 == 1) {
        boxGroup[i].onclick = (e) => {
            e.target.style.backgroundColor = 'rgb(255, 255, 0)';
        }
    } else {
        boxGroup[i].onclick = (e) => {
            e.target.style.backgroundColor = bgChange();
        }
    }
}