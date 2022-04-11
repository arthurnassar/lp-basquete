var sec         = 1800,
    minTimer    = document.getElementById("minCounter"),
    secTimer    = document.getElementById("secondsCounter"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    minTimer.innerHTML = `<strong> ${min} </strong>`;
    secTimer.innerHTML = `<strong> ${remSec} </strong>`;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
    }
}