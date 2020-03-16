var app = {
    init: function() {
        console.log('init');
        
        var inputCity = document.getElementById('citySearch');
        inputCity.addEventListener('keyup', app.searchAndShowCities);

        var select = document.getElementById('select');
        select.addEventListener('click', app.showCityPop);
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

        var inputCity = document.getElementById('citySearch');
        inputCityValue = inputCity.value;

        var result = document.getElementById('result');
        result.innerHTML = '';

        console.log(inputCityValue);

        var select = document.getElementById('select');
        select.innerHTML = '';

        for(var city of app.cities)
        {
            if (city.name.startsWith(inputCityValue)) {

                select.classList.remove('hide');
                select.classList.add('show');
                console.log('match');
                app.result[count] = city;

                var option = document.createElement('option');
                option.innerHTML = city.name;
                select.appendChild(option);
            
                count++;
            }
        }
        console.log(app.result);
    },

    showCityPop: function() {
        console.log(app.result);
        var inputCity = document.getElementById('citySearch');
        inputCity.value = '';
        var result = document.getElementById('result');
        var select = document.getElementById('select');

        for(var city of app.cities)
        {
            if (select.value == city.name) {
                result.innerHTML = city.population;
            }
        }

        console.log(select.value);
    }

};

document.addEventListener('DOMContentLoaded', app.init);