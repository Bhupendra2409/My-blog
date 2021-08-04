var ele = document.getElementById('maintext');
var scrollicon = document.getElementById('scrollicon');


window.addEventListener('scroll', ()=>{
    let header = document.getElementById('navelements');
    header.classList.toggle('scrolling-active',window.scrollY>0);
});
// Array.from(navitmbefire).forEach(element,()=>{alert('hello');});
//Animation for text

var initialstr = ['Hello!', 'I am Bhupendra', 'Glad to See you'];
var allstring = [];
for (i = 0; i < initialstr.length; i++) {
    var substrings = [];
    substrings.push('|');
    var j = 1;
    for (k = 0; k < initialstr[i].length; k++)
        substrings.push(initialstr[i].substr(0, j++) + '|');

    allstring.push(substrings);
}

var tx = 0;
var incdc = 0;
var timegap = 150;
var konsistring = 0;
function testanimation(element) {
    element.innerHTML = allstring[konsistring][tx];
    if (incdc == 0) {
        tx++;
        if (tx == initialstr[konsistring].length + 1) {
            clearInterval(nu);
            nu = setInterval(testanimation, 50, ele);
            tx--;
            incdc = 1;
            timegap = 50;
        }
    }
    else {
        tx--;
        if (tx == -1) {
            clearInterval(nu);
            nu = setInterval(testanimation, 150, ele);
            tx++;
            incdc = 0;
            timegap = 150;
            konsistring++;
            if (konsistring == allstring.length) konsistring = 0;
        }
    }
}
let nu = setInterval(testanimation, 150, ele);

//Animation for Scrollicon

let isup = false;
let p = 1;
function upanddown(element) {
    if (isup) {
        element.style.transform = "translateY(20px)";
        isup = false;
    }
    else {
        element.style.transform = "translateY(0px)";
        isup = true;
    }
}

setInterval(upanddown, 500, scrollicon);

