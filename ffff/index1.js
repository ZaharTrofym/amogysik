let inputWidth=document.querySelector(".input_width")
let inputHeight=document.querySelector(".input_height")
let inputColor=document.querySelector(".input_color")
let btnCreate=document.querySelector(".btn_create")

btnCreate.addEventListener("click", createDiv)

function createDiv(){
    newDiv=document.createElement("div")
    newDiv.style.width = 100 +"px"
    newDiv.style.height = 100 +"px"
    newDiv.style.backgroundColor = "red"

    document.querySelector(".field_create").prepend(newDiv)
}