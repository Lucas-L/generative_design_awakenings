var canvas;
canvas = document.getElementsByTagName('canvas')[0];

var wi, he, dpi;
wi = canvas.width = 1555;
he = canvas.height = 780;
dpi = 2 * Math.PI;

// CONTEXT
var context;
context = canvas.getContext('2d');
context.fillStyle = '#fff';
context.fillRect(0, 0, wi, he);
context.fillStyle = 'rgba(1,1,1,0.3)';
noise.seed(Math.random());




// 	hsl(236, 57%, 33%) (blue), hsl(323, 99%, 45%) (pink) , hsl(359, 82%, 55%)
var drawSinSat;
drawSinSat = function (theme) {
    var h=[236,323,359]
    var s=[57,99,82]
    var l=[33,45,55]
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    // Logic for progressive colors
    for (j = 0; j < theme.length; j++) {
        var pos=j/theme.length
        if(pos<0.33){
            p=0
        }
        else if(pos>0.33 && pos<0.66){
            p=1
        }
        else{
            p=2
        }
        // Name custom logic
        
        pa = theme[j];
        v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
        context.beginPath(); 
        var mult=Math.floor(Math.random() * 3)
        context.fillStyle = "hsla(" + (h[p]+Math.floor(v+22)) + ", "+s[p]+"%, "+(l[p]+(l[p]*0.4))+"%, 1)"; //Couleur , proche du noir , intensitié color
        context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
        pa.he++;
        a = v * 2 * Math.PI + pa.a;
        pa.x += Math.sin(a);
        particleFinals.push(pa.y += Math.cos(a));
        context.closePath();
    }
    
    return particleFinals;
    
};

// 	
var drawSinSun;
drawSinSun = function (theme) {
    var h=[347,48,20]
    var s=[92,98,97]
    var l=[51,64,64]
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    for (j = 0; j < theme.length; j++) {
            // Logic for progressive colors
            var pos=j/theme.length
            if(pos<0.33){
                p=0
            }
            else if(pos>0.33 && pos<0.66){
                p=1
            }
            else{
                p=2
            }
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            var mult=Math.floor(Math.random() * 3)
            context.fillStyle = "hsla(" + (h[p]+Math.floor(v+2))  + ", "+s[p]+"%, "+(l[p])+"%, 1)"; //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = v * 2 * Math.PI + pa.a;
            pa.x += Math.sin(a);
            particleFinals.push(pa.y += Math.cos(a));
            context.closePath();
        }
        
    return particleFinals;
    
};

var drawSinFull;
drawSinFull = function (theme) {
    var h=[236,323,183]
    var s=[83,99,45]
    var l=[41,85,68]
    var a, pa, v, j, particleFinals;
    particleFinals = [];
    for (j = 0; j < theme.length; j++) {
            // Logic for progressive colors
            var pos=j/theme.length
            if(pos<0.33){
                p=0
            }
            else if(pos>0.33 && pos<0.66){
                p=1
            }
            else{
                p=2
            }
            pa = theme[j];
            v = noise.perlin2(pa.x * pa.per, pa.y * pa.per);
            context.beginPath();
            var mult=Math.floor(Math.random() * 3)
            context.fillStyle = "hsla(" + (h[p]+Math.floor(v+2))  + ", "+s[p]+"%, "+l[p]+"%, 1)"; //Couleur , proche du noir , intensitié color
            context.fillRect(pa.x, pa.y, 2.0, 2.0); // Espacement x,y et epaisseur x,y
            pa.he++;
            a = v * 2 * Math.PI + pa.a;
            pa.x += Math.sin(a);
            particleFinals.push(pa.y += Math.cos(a));
            context.closePath();
        }
        
    return particleFinals;
    
};


drawSat = function () {
    anim(drawSat);
    return drawSinSat(sinewSa);
};
drawSun = function () {
    anim(drawSun);
    return drawSinSun(sinewSu);
};
drawFull = function () {
    anim(drawFull);
    return drawSinFull(sinewFu);
};
