const dininghalls = document.querySelector('.dininghalls')
const union = document.querySelector('.union')
const outside = document.querySelector('.outside')

document.querySelector(".one").addEventListener("click", function(){
    dininghalls.style.display='grid';
    union.style.display='none';
    outside.style.display='none';

});

document.querySelector(".two").addEventListener("click", function(){
    union.style.display='grid';
    dininghalls.style.display='none';
    outside.style.display='none';
});

document.querySelector(".three").addEventListener("click", function(){
    outside.style.display='grid';
    dininghalls.style.display='none';
    union.style.display='none';
});

document.querySelector(".four").addEventListener("click", function(){
    outside.style.display='grid';
    dininghalls.style.display='grid';
    union.style.display='grid';
});