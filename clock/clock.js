



setInterval(() => {
    var hourHand = document.getElementById("hourHand");
    var minhand = document.getElementById("minhand");
    var secHand = document.getElementById("secHand");

    var date = new Date();
    var htime = date.getHours();
    var mtime = date.getMinutes();
    var stime = date.getSeconds();
    
    var hrotation = 30*htime + mtime/2;
    console.log('hrotation:', hrotation)
    var mrotation =  6*mtime ;
    var srotation =  6*stime ;
    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minhand.style.transform = `rotate(${mrotation}deg)`;
    secHand.style.transform = `rotate(${srotation}deg)`;

    
}, 500);
 