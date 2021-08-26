function action(e) {
    var btn = e.target || e.srcElement;
    document.getElementById('res').innerHTML += btn.innerHTML;
}

function clear(e) {
    document.getElementById('res').innerHTML = ""
}

function result(e) {
    var exp = document.getElementById('res').innerHTML;
    var exparr = exp.split(/[\*\+\/\-]+/);
    document.getElementById('res').innerHTML = exparr[0]+' '+exparr[1];
    var a = parseInt(exparr[0], 2);
    var b = parseInt(exparr[1], 2);
    
    if(exp.includes('+'))
        exparr.push('+');
    else if(exp.includes('-'))
        exparr.push('-');
    else if(exp.includes('*'))
        exparr.push('*');
    else{
        var a = parseInt(exparr[0]);
        var b = parseInt(exparr[1]);
        exparr.push('/');
    }
    
    switch(exparr[2]){
        case '+' : document.getElementById('res').innerHTML = (a+b).toString(2);break;
        case '-' : document.getElementById('res').innerHTML = (a-b).toString(2);break;
        case '*' : document.getElementById('res').innerHTML = (a*b).toString(2);break;
        case '/' : document.getElementById('res').innerHTML = Math.floor(a/b);break;
    }

}

document.getElementById('btn0').onclick = action;
document.getElementById('btn1').onclick = action;
document.getElementById('btnSum').onclick = action;
document.getElementById('btnSub').onclick = action;
document.getElementById('btnMul').onclick = action;
document.getElementById('btnDiv').onclick = action; 

document.getElementById('btnClr').onclick = clear; 
document.getElementById('btnEql').onclick = result; 