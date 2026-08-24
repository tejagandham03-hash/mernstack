let button=document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="<b>i have created successfully</b>"
})
button.addEventListener("contextmenu",()=>{
    alert("dont hack us by right click please")
})
document.addEventListener("keydown",e=>{
    console.log(e,e.key,e.keyCode)
    
})