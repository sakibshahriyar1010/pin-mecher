function getPin() {
    const pin = Math.round(Math.random() * 10000);
    pinStirng = pin + '';
    if (pinStirng.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}


function getGenaretor() {
    document.getElementById('display-pin').value = getPin();
}

document.getElementById('key-ped').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('display-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }

    } else {


        const currentcalc = calc.value;
        const newcalc = currentcalc + number;
        calc.value = newcalc;
    }
});

function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('display-number').value;
    if(pin == number){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('notify-fail').style.display = 'none';
    }
    else{
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('notify-success').style.display = 'none';
    }

}