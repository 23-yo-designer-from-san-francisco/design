let shadow = document.getElementById('shadow');

function buy(id) {
    id = id > 3 ? id - 1 : id;
    shadow.style.visibility = 'visible';
    document.getElementById(`buy${id}`).style.visibility = 'visible';
}

function close_modal(e) {
    e.parentElement.style.visibility = 'hidden';
    shadow.style.visibility = 'hidden';
}