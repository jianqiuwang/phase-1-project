const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const save_btn = document.getElementById('save_btn')

document.addEventListener('DOMContentLoaded',e=>{
    e.preventDefault()
})

search_btn.addEventListener('click', handleInput)

function handleInput(){
    if(input.value === ''){
        alert('Please enter a word')
    }else{
        getResult(input.value)
    }
}


function getResult(){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`)
}