var app = {
    init: function() {
        console.log('init');
        
        app.inputCity = document.getElementById('citySearch');
        app.inputCity.addEventListener('keyup', app.searchAndShowCities);

        app.select = document.getElementById('select');
        app.select.addEventListener('click', app.showCityPop);
    },

    searchAndShowCities: function() {
        app.cities = [
            { name: 'Paris', population: 2187526 },
            { name: 'Perpignan', population: 121875 },
            { name: 'Marseille', population: 863310 },
            { name: 'Lyon', population: 516092 },
            { name: 'Toulouse', population: 479553 },
            { name: 'Nice', population: 340017 }
        ];

        app.result = [];
        var count = 0;

        app.inputCityValue = app.inputCity.value;

        app.result = document.getElementById('result');
        app.result.innerHTML = '';

        var select = document.getElementById('select');
        select.innerHTML = '';

        for(var city of app.cities)
        {
            if (city.name.startsWith(app.inputCityValue)) {

                app.select.classList.remove('hide');
                app.select.classList.add('show');
                console.log('match');
                app.result[count] = city;

                var option = document.createElement('option');
                option.innerHTML = city.name;
                app.select.appendChild(option);
            
                count++;
            }
        }
        console.log(app.result);
    },

    showCityPop: function() {
        console.log(app.result);
        app.inputCity.value = '';

        for(var city of app.cities)
        {
            if (app.select.value == city.name) {
                app.result.innerHTML = city.population;
            }
        }
    }

};

document.addEventListener('DOMContentLoaded', app.init);