let inputbox=document.querySelector('#input-box')
let listcontainer=document.querySelector('#list-container')
let btn=document.querySelector('button')

function add(){
    if(inputbox.value===''){
        alert("you must write something")
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="x" 
        li.appendChild(span)   
    }
    inputbox.value=""
    savedata()

}
listcontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
        savedata()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)
btn.addEventListener('click',()=>{
    add()
})
function savedata(){
    localStorage.setItem('data',listcontainer.innerHTML)
}
function show(){
    listcontainer.innerHTML=localStorage.getItem('data')
}
show()
