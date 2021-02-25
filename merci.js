let merci = document.getElementById('merci');
let button = document.getElementById('frmContact');


button.addEventListener('submit', submit, false);
console.log(function submit(){
    merci.classList.toggle('visible');
}
)
function submit(){
    merci.classList.toggle('visible');
}

merci.addEventListener('click', closeMerci, false);

function closeMerci(){
    merci.classList.toggle('visible');
};

