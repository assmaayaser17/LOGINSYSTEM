
var signname = document.getElementById("signName");
var signemail = document.getElementById("signEmail");
var signpass = document.getElementById("signPassword");
var objlist = [];
if (localStorage.getItem('user') != null) {
    user = JSON.parse(localStorage.getItem('user'))
} else {
user=[];
}

function add() {
    if (signname.value === "" || signemail.value === "" || signpass.value === "") {
        document.getElementById("message").innerHTML = `<p class="text-center">All inputs are required</p>`;
    } else {
        document.getElementById("message").innerHTML = `<p class="text-center">SUCSSES</p>`;
        var obj = {
            SIGNNAME: signname.value,
            SIGNEMAIL: signemail.value,
            SIGNPASS: signpass.value,
        };
        objlist.push(obj);
        localStorage.setItem('user', JSON.stringify(obj));
        location.href = '../login/index.html';
    }
}