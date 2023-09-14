const endDate = "14 September 2023 11:00 AM";
document.getElementById("end-date").innerText=endDate;
document.getElementById("end-date").style.color = "red";
const input = document.querySelectorAll("input");


function check() {

    const end =  new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor(diff/3600)% 24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;
    if(diff < 0){
        return ;
      }

 }
check();
setInterval(
    ()=>{
        check();
    },1000
)

