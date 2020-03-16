var app = {
    init: function() {
        console.log('init');
        inputName = document.getElementById('name');
        inputPassword = document.getElementById('password');
        button = document.getElementById('button');

        inputName.addEventListener('change', app.isNameOk);
        inputPassword.addEventListener('change', app.isPasswordOk);
    },


    isNameOk: function() {
        console.log('changeName');
        inputName = document.getElementById('name');
        inputValueN = inputName.value;
        button = document.getElementById('button');
        if (app.isNameOk && app.isPasswordOk) {
            button.removeAttribute('disabled');
        }
        if (inputValueN.length >= 3) {
            return true;
        } else {
            button.setAttribute('disabled', '');
        }
    },

    isPasswordOk: function() {
        console.log('changePassword');
        button = document.getElementById('button');
        inputPassword = document.getElementById('password');
        inputValuePW = inputPassword.value;
        console.log(inputValuePW);
        regex = new RegExp("(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])");
        test = regex.test(inputValuePW);
        if (app.isNameOk && app.isPasswordOk) {
            button.removeAttribute('disabled');
        }
        if (test) {
            return true;
        } else {
            button.setAttribute('disabled', '');
        }
    },
};

document.addEventListener('DOMContentLoaded', app.init);