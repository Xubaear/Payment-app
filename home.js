document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const account = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = document.getElementById('add-pin').value;
   

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
   
     console.log(availableBalance)

    var totalAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText= totalAvailableBalance;
    
   
})