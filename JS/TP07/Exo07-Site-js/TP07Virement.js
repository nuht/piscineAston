var app = {
    init: function() {
        console.log('init');
        var form = document.getElementById('frmListeOperations');
        form.addEventListener('submit', app.submitForm);
    },

    submitForm: function(evt) {
        evt.preventDefault();
        console.log('clickSubmit');

        var alert = document.getElementById('alert');

        if ((app.checkAccounts()) && (app.checkAmmount()))
        {
            alert.classList.remove('hide');
            alert.classList.add('show');
            alert.innerHTML = 'LES COMPTES SONT BIEN DIFFERENTS et LE VIREMENT EST SUPERIEUR A 0';
        } else if (app.checkAccounts() === '') {
            evt.preventDefault();
            alert.classList.remove('hide');
            alert.classList.add('show');
            alert.innerHTML = 'VEUILLEZ SELECTIONNER UN COMPTE';
        } else if ((app.checkAccounts() === false) && (app.checkAmmount() === false)) {
            evt.preventDefault();
            alert.classList.remove('hide');
            alert.classList.add('show');
            alert.innerHTML = 'LE COMPTE EMETTEUR NE PEUT PAS ETRE LE COMPTE DESTINATAIRE ET LE VIREMENT DOIT ETRE SUPERIEUR A 0';
        } else if (app.checkAccounts() === false) {
            evt.preventDefault();
            alert.classList.remove('hide');
            alert.classList.add('show');
            alert.innerHTML = 'LE COMPTE EMETTEUR NE PEUT PAS ETRE LE COMPTE DESTINATAIRE';
        } else if (app.checkAmmount() === false) {
            evt.preventDefault();
            alert.classList.remove('hide');
            alert.classList.add('show');
            alert.innerHTML = 'LE MONTANT DU VIREMENT DOIT ETRE SUPERIEUR A 0';
        }
    },

    checkAccounts: function() {
        var accountEme = document.getElementById('inCmptEme').value;
        var accountDest = document.getElementById('inCmptDes').value;

        console.log(accountEme, accountDest);

        if (accountEme === '' || accountDest === '')
        {
            return '';
        }
        if (accountEme === accountDest)
        {
            return false;
        } else {
            return true;
        }
    },

    checkAmmount: function() {
        var amount = document.getElementById('inMontant').value;
        if (amount > 0) {
            return true;
        } else {
            return false;
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);