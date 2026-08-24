let boxes=document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor="violet";
document.getElementById("blue").style.backgroundColor="blue";
document.querySelector(".box").style.backgroundColor="red"
console.log(document.querySelectorAll(".box"));
 document.querySelectorAll(".box")[1].style.backgroundColor="green";
 document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="skyblue";
 }) 
 