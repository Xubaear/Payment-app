const validPin = 1234;
// add money 
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const account = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
   

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
   
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

    document.getElementById('available-balance').innerText= totalAvailableBalance;

})


const aPin = 4321;
// cashout money
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();

    const agentNumber = document.getElementById('agent-number').value

    const amount = parseInt(document.getElementById('withdraw-amount').value)

    const agentPin = parseInt(document.getElementById('agent-pin').value)

    const availableBalance= parseInt(document.getElementById('available-balance').innerText)
    

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

    document.getElementById('available-balance').innerText= totalAvailableBalance
})





//  toggling feature

document.getElementById('add-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display= 'block'
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display= 'none'
    document.getElementById('cash-out-parent').style.display = 'block'
    
})