const dininghalls = document.querySelector('.dininghalls')
const union = document.querySelector('.union')
const outside = document.querySelector('.outside')

function one(){
    dininghalls.style.display='grid';
    union.style.display='none';
    outside.style.display='none';
}

function two(){
    union.style.display='grid';
    dininghalls.style.display='none';
    outside.style.display='none';
}

function three(){
    outside.style.display='grid';
    dininghalls.style.display='none';
    union.style.display='none';
}