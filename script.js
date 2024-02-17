const inputbox = document.getElementById("input-box");
let result = 0
let arr = []
function display(el){
    const exp = `${inputbox.value}${el.value}`
    arr.append = exp
    inputbox.value = exp;
    result = eval(exp);
}

function rm(){
    inputbox.value = ""
}

function ans(){
    inputbox.value = result;
}

