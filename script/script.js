// var initialstr = ['Hello', 'I am Bhupendra', 'Glad to See you'];
//         var allstring = [];
//         for (i = 0; i < initialstr.length; i++) {
//             var substrings = [];
//             substrings.push('|');
//             var j = 1;
//             for (k = 0; k < initialstr[i].length; k++)
//                 substrings.push(initialstr[i].substr(0, j++)+'|');

//             allstring.push(substrings);
//         }

//         var tx = 0;
//         var incdc = 0;
//         var timegap=150;
//         var konsistring = 0;
//         function testanimation(element) {
//             element.innerHTML = allstring[konsistring][tx];
//             if (incdc == 0) {
//                 tx++;
//                 if (tx == initialstr[konsistring].length + 1) {
//                     clearInterval(nu);
//                     nu=setInterval(testanimation,50,ele);
//                     tx--;
//                     incdc = 1;
//                     timegap=50;
//                 }
//             }
//             else {
//                 tx--;
//                 if (tx == -1) {
//                     clearInterval(nu);
//                     nu=setInterval(testanimation,100,ele);
//                     tx++;
//                     incdc = 0;
//                     timegap=150;
//                     konsistring++;
//                     if (konsistring == allstring.length) konsistring = 0;
//                 }
//             }
//         }

//         var ele = document.getElementById('maintext');
//         // test(ele);
//         // while(true){
//         //     setTimeout(testanimation,100);
//         // }
        
//         let nu = setInterval(testanimation, 100, ele);