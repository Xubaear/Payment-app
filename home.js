const transactionData =[]

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


const validPin = 1234;
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

    alert('Money Credited')

    const data= {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
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
    alert('Money Debited')

     const data= {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})

const tPin = 1234
//  tranfer money
document.getElementById('send-btn').addEventListener('click', function(e){
e.preventDefault( )

const userAccountNumber = document.getElementById('transfer-money').value

    const amount = getInputValueNumber('transfer-amount')

    const transferPin = getInputValueNumber('transfer-pin')

    const availableBalance= getInnerText('available-balance')

    var totalAvailableBalance = availableBalance - amount
    console.log(totalAvailableBalance)
    

    if(userAccountNumber.length < 11){
        alert('Please provide valid account number')
        return;
     }
if( transferPin !== tPin){
    alert('Please provide a valid pin number')
    return;
}

var totalAvailableBalance = availableBalance - amount
    console.log(totalAvailableBalance)
    
 setInnerText (totalAvailableBalance);

    alert('Money transferred successfully!');


})

//  get bonus
document.getElementById('get-bonus-btn').addEventListener('click', function(e){
    e.preventDefault()

     const data= {
        name: "Transfered Money",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
   
})

//pay bill
document.getElementById('pay-btn').addEventListener('click', function(e){
    e.preventDefault()

     const data= {
        name: "Bill Paid",
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)

})

document.getElementById('transactions-btn').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText= ''

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML= `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#F4F5F7]">
                    <img src="assets/wallet1.png" class="mx-auto">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>`
        transactionContainer.appendChild(div)
    }
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

document.getElementById('bonus-btn').addEventListener('click', function(){
    handleToggle('get-bonus-parent')
    
    handleButtonToggle('bonus-btn')

})

document.getElementById('bill-btn').addEventListener('click', function(){
    handleToggle('pay-bill-parent')

    handleButtonToggle('bill-btn')
})

document.getElementById('transactions-btn').addEventListener('click', function(){
    handleToggle('transactions-parent')

    handleButtonToggle('transactions-btn')
})