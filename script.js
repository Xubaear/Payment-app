document.getElementById('logInButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber= 12347778910;
    const pinNumber= 7777; 

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
       window.location.href= "./home.html"
    }
    else{
        alert('Number or Pin incorrect')
    }




}) 