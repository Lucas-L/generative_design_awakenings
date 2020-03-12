

var part, particles, period, anim;



// Art Saturday
sinewSa = [];

for (var i = 1; i <= 3000; i++) {
    partSinewSa = {
        x:  wi / 0.5 * Math.random(),
        y: he * Math.random() * dpi * Math.random(),
        a: 0,
        per: 1 / 720
        
    };
    sinewSa.push(partSinewSa);
    sinewSa.push({
        x: partSinewSa.x,
        y: partSinewSa.y,
        a: dpi / 2,
        per:partSinewSa.per
    });
    
}

// Art Sunday
sinewSu = [];

for (var i = 1; i <= 3000; i++) {
    partSinewSu = {
        x:  wi / 0.5 * Math.random(),
        y: he * Math.random() * dpi * Math.random(),
        a: 0,
        per: 1 / 720
        
    };
    sinewSu.push(partSinewSu);
    sinewSu.push({
        x: partSinewSu.x,
        y: partSinewSu.y,
        a: dpi / 2,
        per:partSinewSu.per
    });
    
}

// Art Full
sinewFu = [];

for (var i = 1; i <= 3000; i++) {
    partSinewFu = {
        x:  wi / 0.5 * Math.random(),
        y: he * Math.random() * dpi * Math.random(),
        a: 0,
        per: 1 / 720
        
    };
    sinewFu.push(partSinewFu);
    sinewFu.push({
        x: partSinewFu.x,
        y: partSinewFu.y,
        a: dpi / 2,
        per:partSinewFu.per
    });
    
}

anim = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
};




