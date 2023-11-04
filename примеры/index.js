// alert('hello')
var btn = document.getElementById('button1')
btn.addEventListener('click', btnClick)

function btnClick(){
    let number1=parseInt(document.getElementById('input1').value) 
    let number2=parseInt(document.getElementById('input2').value) 
    alert(number1+number2)
}

let color = 'red'

function btn2Click(){
    let div1 = document.getElementById('div1')
    div1.style.backgroundColor = 'yellow'
    
    if (color =='red'){
        div1.style.backgroundColor = 'yellow'
        color = 'yellow'
    }
    else if (color=='yellow'){
        div1.style.backgroundColor = 'green'
        color = 'green'
    }
    else if (color == 'green'){
        div1.style.backgroundColor = 'red'
        color = 'red'
    }
}

function btn3Click(){
    let selectedValue = document.getElementById('mySelect')
    let div1 = document.getElementById('myDiv')
    // alert(selectedValue.value)

    if ('1val' == selectedValue.value){
        div1.style.backgroundColor = 'red'
    }
    else if ('2val'==selectedValue.value){
        div1.style.backgroundColor = 'yellow'
    }
    else if ('3val' == selectedValue.value){
        div1.style.backgroundColor = 'green'
    }
}