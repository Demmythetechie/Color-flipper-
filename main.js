const hex = document.querySelector('#hex');
const body_color = document.querySelector('#clr');
const clck = document.querySelector('#clck');
const hex_code = document.querySelector('#code');
hex.addEventListener('click', function () {
    clck.addEventListener('click', function() {
        let color = [];
        for (let i = 0; i < 2; i++) {
            color.push(Math.floor(Math.random() * (1700 - 985 + 1) + 985).toString(16));
        }
        color.unshift('#');
        color = color.join('');
        body_color.style.backgroundColor = color;
        hex_code.textContent = color;
    });
});