
document.addEventListener('DOMContentLoaded', ()=> {
    let buy_modal = document.getElementById('buy-modal');
    let buy_ticket = document.getElementById('buy-ticket');
    let shadow = document.getElementById('shadow');
    let yes_active = document.getElementById('yes-active');
    let yes_inactive = document.getElementById('yes-inactive');

    buy_ticket.addEventListener('click', (e) => {
        console.log(e);
        buy_modal.style.visibility = 'visible';
        shadow.style.visibility = 'visible';
    })

});