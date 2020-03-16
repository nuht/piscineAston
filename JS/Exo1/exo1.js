var app = {
    init: function() {
        console.log('init');
        var button = document.getElementById('button');
        button.addEventListener('click', app.writeInDiv);
    },

    writeInDiv: function() {
        console.log('click');
        input = document.getElementById('input');
        inputVal = input.value;

        select = document.getElementById('select');
        selectVal = parseInt(select.value);

        console.log(selectVal);

        div = document.getElementById('write');

        for(i = 0; i < selectVal; i++) {
            div.innerText += ' ' + String(inputVal);
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);