const bus = document.getElementById('transportation')
const resource = document.getElementById('resource')
const atlas = document.getElementById('atlas')

function one(){
    bus.style.display='flex';
    resource.style.display='none';
    atlas.style.display='none';
}

function two(){
    bus.style.display='none';
    resource.style.display='flex';
    atlas.style.display='none';
}

function three(){
    bus.style.display='none';
    resource.style.display='none';
    atlas.style.display='flex';
}

function four(){
    bus.style.display='flex';
    resource.style.display='flex';
    atlas.style.display='flex';
}

