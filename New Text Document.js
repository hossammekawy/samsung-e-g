let note=document.getElementById('note')
let ultra =document.getElementById('ultra')
let s22 =document.getElementById('s22')
let paragraph =document.getElementById('pragraph')
let notee22= document.getElementById('notee22')
let note22 =document.getElementById('note22')
note.onclick=function(){
    s22.style.display='none'
    paragraph.style.display='none'
    notee22.style.display='block'
    note22.style.display='block'
}
ultra.onclick=function(){
    s22.style.display='block'
    paragraph.style.display='block'
    notee22.style.display='none'
    note22.style.display='none'
}
