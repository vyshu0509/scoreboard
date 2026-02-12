let home = document.getElementById("home_score");
let res = 0;
function inc1(){
    res = res + 1
    home.textContent = res;
}
function inc2(){
    res = res + 2
    home.textContent = res;
}
function inc3(){
    res = res + 3
    home.textContent = res;
}

let guest = document.getElementById("guest_score");
let result = 0;
function add1(){
    result = result + 1
    guest.textContent = result;
}
function add2(){
    result = result + 2;
    guest.textContent = result;
}
function add3(){
    result = result + 3;
    guest.textContent = result;
}