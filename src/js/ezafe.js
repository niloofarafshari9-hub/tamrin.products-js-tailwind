const ezafe=document.querySelector(".ezafe")
const packate=document.querySelector(".packate")
const btn=document.querySelector(".btn")
ezafe.addEventListener("click",()=>{
    packate.classList.remove("hidden")
    packate.classList.add("block")
})
btn.addEventListener("click",()=>{
    packate.classList.remove("block")
    packate.classList.add("hidden")
})
