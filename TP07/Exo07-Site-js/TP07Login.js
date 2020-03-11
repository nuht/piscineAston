var app = {
    init: function() {
        console.log('init');
        var form = document.getElementById('frmLogin');
        form.addEventListener('submit', app.submitForm);
    },

    submitForm: function(evt) {
        evt.preventDefault();
        console.log('clickSubmit');
        var idlogin = document.getElementById('idlogin').value;
        var idpassword = document.getElementById('idpassword').value;
        if(idlogin != '' && idpassword != '')
        {
            document.frmLogin.submit();
        } else
        {
            var alert = document.getElementById('alert');

            alert.classList.remove('hide');
            alert.classList.add('show');
            console.log('password ou login vide');
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);