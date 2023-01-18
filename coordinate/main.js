const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const img = document.querySelector('img');
const span = document.querySelector('span');

function handleMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.left = `${x}px`;
    horizontal.style.top = `${y}px`;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    span.style.left = `${x}px`
    span.style.top = `${y}px`
    span.innerText = `${x}px, ${y}px`
}

document.addEventListener('mousemove', handleMove)
