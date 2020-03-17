var app = {
    init: function() {
        console.log('init');
        let PLAYERS = null;
        app.intervalID = null;
        var form = document.getElementById('form');
        form.addEventListener('submit', app.sendPlayer);
        app.getJsonAjax();

    },

    getJsonAjax: function() {
        fetch('http://api.opusidea.net/player')
        .then(res => res.json())
        .then(players => {
            PLAYERS = players;
            app.fillList();
            app.refreshList();
        })
    },

    fillList: function() {
        var ul = document.getElementById('ulPlayers');
        ul.innerHTML = '';
        PLAYERS['players'].forEach(player => {
            var li = document.createElement('li');
            li.innerHTML = player.firstname + ' ' + player.lastname;
            ul.appendChild(li);
        });
    },

    sendPlayer: function(evt) {
        evt.preventDefault();

        let inputFirstName = document.getElementById('firstname');
        let inputLastName = document.getElementById('lastname');
        let inputTeam = document.getElementById('team');
        let inputPosition = document.getElementById('position');

        let firstName = inputFirstName.value;
        let lastName = inputLastName.value;
        let team = inputTeam.value;
        let position = inputPosition.value;
        

        fetch('http://api.opusidea.net/player', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
            player: {
                firstname: firstName,
                lastname: lastName,
                team: team,
                position: position,
                }
            })
        })
        // .then(function(response) {
        //     app.getJsonAjax();
        // })
        .then(response => {
            response => app.getJsonAjax();
        })
    },

    refreshList: function() {
        clearInterval(app.intervalID);
        app.intervalID = window.setInterval(app.getJsonAjax, 60000);
    }

};
document.addEventListener('DOMContentLoaded', app.init);