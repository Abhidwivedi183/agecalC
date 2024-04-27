let user = document.getElementById("date");
user.max = new Date().toISOString().split("T")[0];

const btn = document.getElementById("btn");

const ans = document.querySelector("#result");


btn.addEventListener('click',function(e){
  calculateage();
})


function calculateage(){
let birthdate = new Date(user.value);

let d1 = birthdate.getDate();
let m1 = birthdate.getMonth() + 1;
let y1 = birthdate.getFullYear();

let date = new Date();

let d2 = date.getDay();
let m2 = date.getMonth() + 1;
let y2 = date.getFullYear();

let d3 ;
let m3 ;
let y3 = y2-y1;

if(m2>=m1){
  m3 = m2-m1;
}
else{
  y3--;
  m3 = 12+m2-m1;
}

if(d2>=d1){
d3 = d2-d1;
}
else{
m3--;
d3 = getdays(y1,m1)+ d2 - d1;
}
if(m3<0){
  m3 = 11;
  y3--;
}

ans.innerHTML = `${y3} year , ${m3} months ans ${d3} days`

}
function getdays(year,nonth){
  return new Date(year,nonth,0).getDate();
}







