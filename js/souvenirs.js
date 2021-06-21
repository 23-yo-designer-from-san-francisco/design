let shadow = document.getElementById('shadow');

function buy(id) {
    id = id > 3 ? id - 1 : id;
    shadow.style.visibility = 'visible';
    document.getElementById(`buy${id}`).style.visibility = 'visible';
}