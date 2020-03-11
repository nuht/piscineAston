var app = {
    init: function() {
        console.log('init');
        var form = document.getElementById('form');
        form.addEventListener('submit', app.submitForm);
    },

    submitForm: function(evt) {
        evt.preventDefault();
        console.log('clickSubmit');
        var textFieldValue = document.getElementById('textField').value.trim();
        console.log(textFieldValue);
        if(textFieldValue != '')
        {
            console.log('pas vide');
            document.getElementById('form').remove();
            var div = document.createElement('div');
            var content = document.createTextNode('Bonjour ' + textFieldValue);
            div.appendChild(content);
            document.body.appendChild(div);
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);