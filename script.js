const select = document.querySelector("#select")
const btn = document.querySelector('#button')
const input = document.querySelector('#text')
const span = document.querySelector('#title')

function inputVazio(){
    if(input.value.length === 0){
        span.textContent = 'Massa necessária'
        resultado.classList.remove('hidden')
        title.classList.remove('hidden')
        return true
    }
    return false
}


btn.addEventListener('click', e => {
    const imgs = document.querySelectorAll('img')
    imgs.forEach( img => img.classList.add('esconder'))
    if(inputVazio()){
        return
    }
    document.querySelector('#gif').classList.remove('esconder')
    
    let selectOptions = select.options[select.selectedIndex].value


    if(selectOptions === 'mercurio'){
        document.querySelector('#imgMerc').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Mercúrio é: <span id = "pesoMerc">${input.value * merc}KG</span>`
    }else if(selectOptions === 'terra'){
        document.querySelector('#imgTer').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto na Terra é: <span id = "pesoTerra">${input.value * ter}KG</span> `
    }else if(selectOptions === 'jupiter'){
        document.querySelector('#imgJup').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Júpiter é: <span id = "pesoJup">${Math.floor(input.value * jup)}KG</span>`
    }else if(selectOptions === 'plutao'){
        document.querySelector('#imgPlut').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Plutão é: <span id = "pesoPlut">${input.value * plut}KG</span>`
    }else if(selectOptions === 'saturno'){
        document.querySelector('#imgSat').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Saturno é: <span id = "pesoSat">${Math.ceil(input.value * sat)}KG</span>`
    }else if(selectOptions === 'urano'){
        document.querySelector('#imgUra').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Urano é: <span id = "pesoUra>${input.value * ura}KG</span>`
    }else if(selectOptions === 'netuno'){
        document.querySelector('#imgNet').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Netuno é: <span id = "pesoNet">${Math.ceil(input.value * net)}KG</span>`
    }else if(selectOptions === 'venus'){
        document.querySelector('#imgVen').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Venus é: <span id = "pesoVen">${input.value * ven}KG</span>`
    }else if(selectOptions === 'marte'){
        document.querySelector('#imgMar').classList.remove('esconder')
        resultado.innerHTML = `O peso desse objeto em Marte é: <span id = "pesoMar">${input.value * mar}KG</span>`
    } else{
        resultado.textContent = 'Selecione um planeta'
    }
        resultado.classList.remove('hidden')
        
})