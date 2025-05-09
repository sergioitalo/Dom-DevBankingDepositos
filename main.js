const formulario = document.getElementById('formulario-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formEValido = false



function verificaNome (nome) {

    const arrayNome = nome.split(' ')

    return arrayNome.length >= 2

}

formulario.addEventListener('submit', function (e) {
    
    e.preventDefault()

    
    const numeroConta = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const descricaoDeposito = document.getElementById ('descricao-deposito')
    const containerMsgDeposito = document.getElementById('mensagemSucessoDeposito')
    const mensagemDeposito = `Um valor de <strong> R$${valorDeposito.value} </strong> foi depositado na conta: <strong> ${numeroConta.value} </strong>  do beneficiário: <strong> ${nomeBeneficiario.value} </strong> `
    
    formEValido = verificaNome(nomeBeneficiario.value)

    if (!formEValido) {

        alert ('O nome não está completo')

    } else {

        containerMsgDeposito.innerHTML = mensagemDeposito
        containerMsgDeposito.style.display = 'block'
        
        nomeBeneficiario.value = ''
        nomeBeneficiario.value = ''
        numeroConta.value = ''
        valorDeposito.value = ''
        descricaoDeposito.value = ''

    }


})

nomeBeneficiario.addEventListener('change', function (e) {

    const containerErroNome = document.getElementById('containerMsgErroName')

    formEValido = verificaNome(e.target.value)

    if (!formEValido) {
        containerErroNome.style.display = 'block'
        nomeBeneficiario.classList.add('errorName')

    } else {
        containerErroNome.style.display = ''
        nomeBeneficiario.classList.remove('errorName')
    }
    


})



