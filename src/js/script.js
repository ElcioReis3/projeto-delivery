let btn_prev = document.querySelector('#prev');
let btn_next = document.querySelector('#next');
let banner = document.querySelector('.banner');
let arrayBanner = document.querySelectorAll('.banner');

count = 0;
let valor = 500;

btn_prev.onclick = () => {
    console.log(count)
    if (count == 0) {
        count = arrayBanner.length;
    }
    count--
    banner.style.marginLeft = `${count * -500}px`

}
btn_next.onclick = () => {
    console.log(count)
    if (count == arrayBanner.length - 1) {
        count = -1;
    }
    count++
    banner.style.marginLeft = `${count * 500}px`

}