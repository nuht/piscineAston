var app = {
    init: function() {
        console.log('init');

        app.form = document.createElement('form');
        app.form.addEventListener('submit', app.submitEventListener);
        document.body.appendChild(app.form);
        app.createDiv();
    },

    createDiv: function() {
        console.log('createDiv');

        app.calculations = [
            { operand1: 5, operand2: 2, operator: '+' },
            { operand1: 20, operand2: 2, operator: '*' },
            { operand1: 100, operand2: 2, operator: '-' },
        ];

        var count = 0;

        for(var calculation of app.calculations) {
            var div = document.createElement('div');
            app.form.appendChild(div);
            div.id = count;

            var p = document.createElement('p');
            p.innerHTML = calculation.operand1 + calculation.operator + calculation.operand2 + '=';
            
            div.appendChild(p);

            var input = document.createElement('input');
            input.type = 'text';
            div.appendChild(input);
            count++;
        }

        var button = document.createElement('button');
        button.innerHTML = 'Validate';
        app.form.appendChild(button);
    },

    submitEventListener: function(evt) {
        evt.preventDefault();
        var numberGoodAnswer = 0;
        var count = 0;
        console.log('clic');
        for (var calculation of app.calculations) {
            var result = eval(calculation.operand1 + calculation.operator + calculation.operand2);
            var userResultInput = document.getElementById(count).querySelector('input');
            var userResultValue = parseInt(userResultInput.value);
    
            if (result == userResultValue) {
                numberGoodAnswer++;
            }
            
            var currentP = document.getElementById(count).querySelector('p');
            currentP.innerHTML += result;
            count++;
        }

        var numberGoodAnswerElement = document.createElement('p');
        numberGoodAnswerElement.innerHTML = 'Resultat: ' + numberGoodAnswer + '/' + count;
        app.form.appendChild(numberGoodAnswerElement);
    }
};
document.addEventListener('DOMContentLoaded', app.init);