const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const save_btn = document.getElementById('save_btn')
const invalid = document.querySelector('.invalid')
const getText = document.querySelector('.show-data')
const saveData = document.querySelector('.save-data')
const content_box = document.querySelector('.contanier')

document.addEventListener('DOMContentLoaded',preventDefault)
   
function preventDefault(e){
    e.preventDefault()
}

search_btn.addEventListener('click', handleInput)
document.addEventListener('keydown',keyDownEvent)

function keyDownEvent(event){
    if(event.key === "Enter"){
        handleInput()
    }
}

function handleInput(){
    if(input.value === ''){
        alert('Please enter a word')
    }else{
        getResult(input.value)
    }
}

function getResult(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
    .then(resp=>{
        if(resp.ok===false){
            invalid.textContent='No result was found'
        }else{
            invalid.textContent=''
        }
        return resp.json()
    })
    .then(data=>{
        console.log(data)
        function getResult(){
            const result=data[0].meanings[0].definitions[0].definition
            let res =[]
            res.push(result)
            res.forEach(element=>{
                getText.innerText=element

            })

        }
        getResult(data)
    })
    
} 

    save_btn.addEventListener('click',saveResult)
    function saveResult(){
        let p = document.createElement('p')
        p.textContent=`${input.value}: `+getText.innerText
        saveData.appendChild(p)
        let btn = document.createElement('button')
        btn.addEventListener('click',handleDelete)
        btn.textContent='x'
        p.appendChild(btn)

    }
    function handleDelete(e){
        e.target.parentNode.remove()

    }
