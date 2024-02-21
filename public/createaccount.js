class PassWordValidation {
    constructor(){

    }
    getPwStrengthText(){
         return document.querySelector('#pwPower');
    }
    getPwInput(){
    return document.querySelector('#createPasswordAcc');
    }

    pwPower(){
        const passwordInput = this.getPwInput().value;
        const passwordStrengthText = this.getPwStrengthText();

        if(passwordInput.length < 5){
            passwordStrengthText.innerText='Svagt';
        
        }
        else if(passwordInput.length > 10){
            passwordStrengthText.innerText='Starkt'
        }
        else {
            passwordStrengthText.innerText = 'Lagom';
        }
        
    }

        validationInput(){
        const pwInput = this.getPwInput();
        pwInput.addEventListener('input',()=>{
        this.pwPower();
        });
    }
   
}

const validator = new PassWordValidation();
validator.validationInput();
