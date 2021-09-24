let pericia = document.querySelector("input#pericia")
let lista = []
let rolar = document.querySelector('button#rolar')
let modalDados = document.getElementById('dados')
let modalResults = document.getElementById('result')
 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 20) {
        return true
    } else {
        return false
    }
}

function listElement() {
    if(lista.length === 1) {
        return false
    } else {
        return true
    }
}


function toList() {
    if(isNumero(pericia.value) === true && listElement() === true) {
        
        lista.push(pericia.value)
        console.log(lista)
        window.alert("perícia adicionada")
    } else {
        window.alert("valor inválido ou perícia já preenchida, limpe sua perícia para adicionar um elemento diferente!")
    }
}

function cleanList() {
    lista.shift()
    console.log(lista)
    window.alert('perícia removida')
}


function calcular() {

    function dado() {
        return Math.round(Math.random()*20)
    }

    let numString = dado().toString()

    checkPericy()

    function checkPericy() {
        if(lista.length == 0) {
            window.alert("Preencha sua perícia para rolar")
        } else {
            choosePericy()
        }
    }

    function choosePericy() {
        if(lista == "20") {
            pericy20()
        } else if (lista == "19") {
            pericy19()
        } else if (lista == "18") {
            pericy18()
        } else if (lista == "17") {
            pericy17()
        } else if (lista == "16") {
            pericy16()
        } else if (lista == "15") {
            pericy15()
        } else if (lista == "14") {
            pericy14()
        } else if (lista == "13") {
            pericy13()
        } else if (lista == "12") {
            pericy12()
        } else if (lista == "11") {
            pericy11()
        } else if (lista == "10") {
            pericy10()
        } else if (lista == "9") {
             pericy9()
        } else if (lista == "8") {
             pericy8()
        } else if (lista == "7") {
             pericy7()
        } else if (lista == "6") {
             pericy6()
        } else if (lista == "5") {
             pericy5()
        } else if (lista == "4") {
             pericy4()
        } else if (lista == "3") {
             pericy3()
        } else if (lista == "2") {
             pericy2()
        } else {
             pericy1()
        }
    }
        
    function pericy20() {

    if(numString === '10' || numString === '9' || numString === '8' || numString === '7' || numString === '6' || numString === '5' || numString === '4' || numString === '3' || numString === '2'|| numString === '1'  ) {
        console.log(numString)
        console.log("esse ataque foi normal")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi normal"
    } else if(numString === '11' || numString === '12' || numString === '13' || numString === '14' || numString === '15'|| numString === '16' ) {
        console.log(numString)
        console.log("esse ataque foi bom")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi bom"
     } else if(numString === '17'|| numString === '18' || numString === '19'|| numString === '20') {
        console.log(numString)
          console.log("esse ataque foi extremo")
          modalDados.innerHTML = numString
          modalResults.innerHTML = "esse ataque foi extremo"
     } else {
         console.log(numString)
         console.log("você errou o ataque")
         modalDados.innerHTML = numString
         modalResults.innerHTML = "você errou o ataque"
     }
    }

    function pericy19() {
     
      if(numString === '11' || numString === '10' || numString === '9' || numString === '8' || numString === '7' || numString === '6' || numString === '5' || numString === '4'|| numString === '3'|| numString === '2' ) {
        console.log(numString)
        console.log("esse ataque foi normal")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi normal"
    } else if(numString === '17' || numString === '16' || numString === '15' || numString === '14' || numString === '13'|| numString === '12') {
        console.log(numString)
        console.log("esse ataque foi bom")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi bom"
     } else if(numString === '20' || numString === '19'|| numString === '18' ) {
        console.log(numString)
          console.log("esse ataque foi extremo")
          modalDados.innerHTML = numString
          modalResults.innerHTML = "esse ataque foi extremo"
     }  else {
        console.log(numString)
          console.log("você errou o ataque")
          modalDados.innerHTML = numString
          modalResults.innerHTML = "você errou o ataque"
      }
    }

    function pericy18() {
      
       if(numString === '11' || numString === '10' || numString === '9' || numString === '8' || numString === '7' || numString === '6' || numString === '5' || numString === '4' || numString === '3') {
        console.log(numString)
        console.log("esse ataque foi normal")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi normal"
    } else if(numString === '17' || numString === '16' || numString === '15' || numString === '14' || numString === '13' || numString === '12' ) {
        console.log(numString)
        console.log("esse ataque foi bom")
        modalDados.innerHTML = numString
        modalResults.innerHTML = "esse ataque foi bom"
     } else if(numString === '18' || numString === '19'|| numString === '20' ) {
        console.log(numString)
          console.log("esse ataque foi extremo")
          modalDados.innerHTML = numString
          modalResults.innerHTML = "esse ataque foi extremo"
      } else {
          console.log(numString)
          console.log("você errou o ataque")
          modalDados.innerHTML = numString
          modalResults.innerHTML = "você errou o ataque"
      }
    }

      function pericy17() {
        if(numString === '12' || numString === '11' || numString === '10' || numString === '9' || numString === '8' || numString === '7' || numString === '6' || numString === '5' || numString === '4') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '17' || numString === '16' || numString === '15' || numString === '14' || numString === '13') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '18' || numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy16() {
        if(numString === '5' || numString === '6' || numString === '7' || numString === '8' || numString === '9' || numString === '10' || numString === '11' || numString === '12') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '13' || numString === '14' || numString === '15' || numString === '16' || numString === '17') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '18' || numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy15() {
        if(numString === '6' || numString === '7' || numString === '8' || numString === '9' || numString === '10' || numString === '11' || numString === '12' || numString === '13') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '14' || numString === '15' || numString === '16' || numString === '17') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '18' || numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy14() {
        if(numString === '7' || numString === '8' || numString === '9' || numString === '10' || numString === '11' || numString === '12' || numString === '13') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '14' || numString === '15' || numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy13() {
        if(numString === '8' || numString === '9' || numString === '10' || numString === '11' || numString === '12' || numString === '13' || numString === '14') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '15' || numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy12() {
        if(numString === '9' || numString === '10' || numString === '11' || numString === '12' || numString === '13' || numString === '14') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '15' || numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy11() {
        if(numString === '10' || numString === '11' || numString === '12' || numString === '13' || numString === '14' || numString === '15') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy10() {
        if(numString === '11' || numString === '12' || numString === '13' || numString === '14' || numString === '15') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '19'|| numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy9() {
        if(numString === '12' || numString === '13' || numString === '14' || numString === '15' || numString === '16') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '17' || numString === '18' || numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '20') {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy8() {
        if(numString === '13' || numString === '14' || numString === '15' || numString === '16') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '17' || numString === '18' || numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '20') {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy7() {
        if(numString === '14' || numString === '15' || numString === '16' || numString === '17') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '18' || numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy6() {
        if(numString === '15' || numString === '16' || numString === '17') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '18' || numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy5() {
        if(numString === '16' || numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else if(numString === '20' ) {
            console.log(numString)
              console.log("esse ataque foi extremo")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "esse ataque foi extremo"
          } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy4() {
        if(numString === '17' || numString === '18') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '19') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalResults.innerHTML = "esse ataque foi bom"
            modalDados.innerHTML = numString
         } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy3() {
        if(numString === '18' || numString === '19') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '20') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy2() {
        if(numString === '19') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else if(numString === '20') {
            console.log(numString)
            console.log("esse ataque foi bom")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi bom"
         } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }

    function pericy1() {
        if(numString === '20') {
            console.log(numString)
            console.log("esse ataque foi normal")
            modalDados.innerHTML = numString
            modalResults.innerHTML = "esse ataque foi normal"
        } else {
              console.log(numString)
              console.log("você errou o ataque")
              modalDados.innerHTML = numString
              modalResults.innerHTML = "você errou o ataque"
          }
    }
}


