var app = {
    init: function() {
        console.log('init');
        app.QUOTES = [
            { body: "patience1", topic: "patience" },
            { body: "patience2", topic: "patience" },
            { body: "patience3", topic: "patience" },
            { body: "santé1", topic: "santé" },
            { body: "santé2", topic: "santé" },
            { body: "santé3", topic: "santé" },
            { body: "courage1", topic: "courage" },
            { body: "courage2", topic: "courage" },
            { body: "courage3", topic: "courage" },
            { body: "force1", topic: "force" },
            { body: "force2", topic: "force" },
            { body: "force3", topic: "force" },
        ];

        app.intervalID = null;
        
        app.setOptions();
    },

    setOptions: function() {
        app.select = document.getElementById('select');
        app.select.addEventListener('click', app.setInterval);
        var options = [];
        var count = 0;
        for (var quote of app.QUOTES) {
            if (count === 0) {
                options[count] = quote.topic;
                count++;
            }
            if ((count >= 0) && quote.topic != options[count-1]) {
                options[count] = quote.topic;
                count++;
            }
        }
        console.log(options);

        for (var i = 0; i<options.length; i++){
            var opt = document.createElement('option');
            opt.value = options[i];
            opt.innerHTML = options[i];
            app.select.appendChild(opt);
        }
    },

    setInterval: function() {
        clearInterval(app.intervalID);

        app.intervalID = window.setInterval(app.showQuote, 2000);
        console.log(app.intervalID);
    },

    showQuote: function() {
        var randTab = [];
        var count = 0;

        for (var quote of app.QUOTES) {
            if (quote.topic == app.select.value) {
                console.log('test');
                randTab[count] = quote.body;
                count++;
            }
        }
        var rand = Math.round(Math.random() * randTab.length);
        var h1 = document.getElementById('currentQuote');
        h1.innerHTML = randTab[rand];
    }
};
document.addEventListener('DOMContentLoaded', app.init);