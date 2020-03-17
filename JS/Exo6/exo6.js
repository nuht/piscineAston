var app = {
    init: function() {
        console.log('init');
        let PLAYERS = null;
        app.getJsonAjax();
    },

    getJsonAjax: function() {
        fetch('player.json')
        .then(res => res.json())
        .then(players => {
            PLAYERS = players;
            app.createTab();
            var inputText = document.getElementById('inputText');
            inputText.addEventListener('keyup', app.searchAndLoadTab);
        })
    },

    createTab: function() {
        var table = document.createElement('table');
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');

        var count = 0;
        var col = [];
        var keyCount = 0;

        for (var player in PLAYERS) {
            var key = player;
            var val = PLAYERS[player];
            var stopCount = val.length;
            console.log(val);
            for(var j in val) {
                if(val.hasOwnProperty(j)) {
                    keyCount++;
                }
                col[count] = j;
                count++;
            }
        }

        col = col.slice(0, keyCount/PLAYERS.length);
        console.log(col);

        var thead = document.createElement('thead');
        var tr = document.createElement('tr');

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement('th');
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        thead.appendChild(tr);
        table.appendChild(thead);

        var divContainer = document.getElementById('table');
        divContainer.appendChild(table);
    },

    searchAndLoadTab: function() {
        console.log('search');
    }

};
document.addEventListener('DOMContentLoaded', app.init);

array.filter(function(p) {
    return p.lastname.indexOf(input) != -1 || p.team.indexOf(input) != -1);
})

players.filter(
    p => p.lastname.indexOf(input) != -1 || p.team.indexOf(input) != -1
    );