const parentSelector = document.querySelector(".block");
const childSelector = document.querySelectorAll(".block1");

function colorBlack() {
    childSelector.forEach(item => {
        item.style.background = "black";
    });
}

function colorGren(i = 0) {
    childSelector[i].style.background = "green";
}

parentSelector.addEventListener("click", (e) => {
    const target = e.target;
    // console.log(target.classList.contains(".block1".replace(/\./, "")));
    if (target.classList.contains(".block1".replace(/\./, ""))) {
        childSelector.forEach((item, i) => {
            if (target == item || target.parentNode == item) {
                // console.log(target);
                // console.log(item);
                // console.log(target == item);
                colorBlack();
                colorGren(i);
            }
        });
    }
});
