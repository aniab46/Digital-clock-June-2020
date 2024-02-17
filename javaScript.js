const hr=document.querySelector('#hour');
const mn=document.getElementById('minute');
const sc=document.getElementById('second');

setInterval(timing,1000);
function timing(){
let day= new Date();
let hh=day.getHours();
let mm=day.getMinutes();
let ss=day.getSeconds();

hr.innerHTML=hh;
mn.innerHTML=mm;
sc.innerHTML=ss;

}
timing();