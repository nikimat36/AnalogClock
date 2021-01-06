var hod = document.getElementById("hr");
var min = document.getElementById("mn");
var sec = document.querySelector(".sc");
setInterval(() =>{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    hod.style.setProperty('--x', (h + (m/60))*30 + "deg");
    min.style.setProperty('--y', m*6 + "deg");
    sec.style.setProperty('--z', s*6 + "deg");
});