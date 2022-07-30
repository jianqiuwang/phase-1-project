const input = document.getElementById('input')
const search_btn = document.getElementById('search_btn')
const save_btn = document.getElementById('save_btn')
const invalid = document.querySelector('.invalid')
const getText = document.querySelector('.show-data')
const saveData = document.querySelector('.save-data')

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
    .then(resp=>{
        if(resp.ok===false){
            invalid.textContent='No result was found'
        }else{
            invalid.textContent=''
        }
        return resp.json()
    })
    .then(data=>{
        // save_btn.addEventListener('click',saveData(data))
        console.log(data)
        function getResult(){
            getText.innerText = data[0].meanings[0].definitions[0].definition
            let res ={}
            res[input.value]=getText.innerText

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


