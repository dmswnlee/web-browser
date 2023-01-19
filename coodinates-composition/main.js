const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');
const imgRect = img.getBoundingClientRect();
const imgHalfWidth = imgRect.width / 2;
const imgHalfHeigh = imgRect.height / 2;

function handleMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    img.style.transform = `translate(${x-imgHalfWidth}px, ${y-imgHalfHeigh}px)`;
    span.style.transform = `translate(${x}px, ${y}px)`;
    span.innerText = `${x}px, ${y}px`
}

document.addEventListener('mousemove', handleMove)
