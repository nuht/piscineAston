var app = {
    init: function() {
        console.log('init');
        var form = document.getElementById('frmListeOperations');

        const start = datepicker('.start', { 
            id: 1,
            formatter: (input, date, instance) => {
                const value = date.toLocaleString().split(' ')
                input.value = value[0]
            }
        });
        const end = datepicker('.end', { 
            id: 1,
            formatter: (input, date, instance) => {
                const value = date.toLocaleString().split(' ')
                input.value = value[0]
            }
        });
        
        form.addEventListener('submit', app.submitForm);
    },

    submitForm: function(evt) {
        evt.preventDefault();
        console.log('clickSubmit');
        startDate = new Date(document.getElementById('inDateDebut').value.split(' ')[0]).getTime();
        endDate = new Date(document.getElementById('inDateFin').value.split(' ')[0]).getTime();
        console.log(startDate);
        console.log(endDate);
        if (startDate > endDate)
        {
            console.log('ALERTE LA DATE DE DEBUT DOIT ETRE INFERIEUR A LA DATE DE FIN, MAIS JE NE PEUX PAS RENTRER DANS LA CONDITION CAR LE CAS EST GERE PAR DATEPICKR');
        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);