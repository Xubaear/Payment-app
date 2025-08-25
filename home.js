const validPin = 1234;


//  Reusable Function for number

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldNumber = parseInt(inputFieldValue)
    return inputFieldNumber;
}

//  Reusable Function for string

function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

//  Reusable Function for innertext
function getInnerText (id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

//function to set innertext

function setInnerText(value){
    const availableBalanceElemnt = document.getElementById('available-balance')
    availableBalanceElemnt.innerText = value
}

// function to toggle
function handleToggle(id){
     const forms =document.getElementsByClassName('form')

    for(const form  of forms){
        form.style.display= 'none'
    }

    document.getElementById(id).style.display ='block'
}

//function to toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){

        btn.classList.remove('border-[#0874F2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874F2]', 'bg-[#0874f20d]')
}



// add money 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();  

    const bank = getInputValue('bank')

    const account = document.getElementById('account-number').value;

    const amount = getInputValueNumber('add-amount')

    const pin = getInputValueNumber('add-pin')
   

    const availableBalance = getInnerText('available-balance')
   
     console.log(availableBalance)

     if(account.length < 11){
        alert('Please provide valid account number')
        return;
     }
if(pin !== validPin){
    alert('Please provide a valid pin number')
    return;
}



    var totalAvailableBalance = amount + availableBalance;

    
    setInnerText(totalAvailableBalance)

})


const aPin = 4321;
// cashout money
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = document.getElementById('agent-number').value

    const amount = getInputValueNumber('withdraw-amount')

    const agentPin = getInputValueNumber('agent-pin')

    const availableBalance= getInnerText('available-balance')
    

    var totalAvailableBalance = availableBalance - amount
    console.log(totalAvailableBalance)

    if(agentNumber.length < 11){
        alert('Please provide valid account number')
        return;
     }
if( agentPin !==  aPin){
    alert('Please provide a valid pin number')
    return;
}

    setInnerText(totalAvailableBalance)
})


//  tranfer money
document.getElementById('transfer-btn').addEventListener('click', function(e){
e,preventDefault( )
})



//  toggling feature

document.getElementById('add-btn').addEventListener('click', function(){
    handleToggle("add-money-parent")

    handleButtonToggle('add-btn')
})

document.getElementById('cash-out-btn').addEventListener('click', function(){
     handleToggle("cash-out-parent")

    handleButtonToggle('cash-out-btn')
})

document.getElementById("transfer-btn").addEventListener('click', function(){
     handleToggle("transfer-money-parent")

     handleButtonToggle('transfer-btn')
})