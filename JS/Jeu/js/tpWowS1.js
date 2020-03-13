var app = {
    init: function() {
        console.log('init');
        app.main();
    },

    // Return one random int between a min and max
    getRandom: function(min, max) {
        return Math.random() * (max - min) + min;
    },

    // Return an array containing some datas
    getNameAndStats: function() {
        var tabNameAndStats = [];

        tabNameAndStats['HeroName'][0]['Arthur'];
        tabNameAndStats['HeroName'][1]['Accolon'];
        tabNameAndStats['HeroName'][2]['Agravain'];
        tabNameAndStats['HeroName'][3]['Bedivere'];
        tabNameAndStats['HeroName'][4]['Mordred'];
        tabNameAndStats['HeroName'][5]['Gauvain'];
        tabNameAndStats['HeroName'][6]['Hector'];
        tabNameAndStats['HeroName'][7]['Lancelot'];
        tabNameAndStats['HeroName'][8]['Perceval'];
        tabNameAndStats['HeroName'][9]['Tristan'];

        tabNameAndStats['MonsterName'][0]['Nathanos Marris'];
        tabNameAndStats['MonsterName'][1]['Ramstein Grandgosier'];
        tabNameAndStats['MonsterName'][2]['Lardeur'];
        tabNameAndStats['MonsterName'][3]['Lardeur'];
        tabNameAndStats['MonsterName'][4]['Morbent Lagangrène'];
        tabNameAndStats['MonsterName'][5]['Zalazane'];
        tabNameAndStats['MonsterName'][6]['Illucia Barov'];
        tabNameAndStats['MonsterName'][7]['Barean Ponevent'];
        tabNameAndStats['MonsterName'][8]["Ar'kelos"];
        tabNameAndStats['MonsterName'][9]['Masophet le Noir'];

        tabNameAndStats['WeaponName']['Hero'][0]['Excalibur'];
        tabNameAndStats['WeaponName']['Hero'][1]['Skullcrusher'];
        tabNameAndStats['WeaponName']['Hero'][2]['Deathbringer'];
        tabNameAndStats['WeaponName']['Hero'][3]['Infamy'];
        tabNameAndStats['WeaponName']['Hero'][4]['Restored Guardian'];
        tabNameAndStats['WeaponName']['Hero'][5]['Ghastly Spellblade'];
        tabNameAndStats['WeaponName']['Hero'][6]["Pride's Adamantite Swiftblade"];
        tabNameAndStats['WeaponName']['Hero'][7]['Cataclysmic Mithril Broadsword'];
        tabNameAndStats['WeaponName']['Hero'][8]['Abyssal Shard'];
        tabNameAndStats['WeaponName']['Hero'][9]['Peacekeeper Scimitar'];

        tabNameAndStats['WeaponName']['Monster'][0]['Hammer'];
        tabNameAndStats['WeaponName']['Monster'][1]['Bow'];
        tabNameAndStats['WeaponName']['Monster'][2]['Gunlance'];
        tabNameAndStats['WeaponName']['Monster'][3]['Switch Axe'];
        tabNameAndStats['WeaponName']['Monster'][4]['Long Sword'];
        tabNameAndStats['WeaponName']['Monster'][5]['Excalibur'];
        tabNameAndStats['WeaponName']['Monster'][6]['Excalibur'];
        tabNameAndStats['WeaponName']['Monster'][7]['Excalibur'];
        tabNameAndStats['WeaponName']['Monster'][8]['Excalibur'];
        tabNameAndStats['WeaponName']['Monster'][9]['Excalibur'];


        return tabNameAndStats; 
    },

    // Declare all classes and return them
    getClasses: function() {
        var classArray = [];

        classArray[0] = class Weapon {
            constructor(name, power, length, weight) {
                this.name = name;
                this.power = power;
                this.length = length;
                this.weight = weight;
            }
        }

        classArray[1] = class Character {
            constructor(type, hp, level) {
                this.type = type;
                this.hp = hp;
                this.level = level;
            }
        }
        
        classArray[2] = class Team {
            constructor(size, type, members) {
                this.size = size;
                this.type = type;
                this.members = members;
            }
        }

        return classArray;
    },


    generateTeamMembersAndGear: function() {
        
    },

    main: function() {
        var classes = app.getClasses();
        const character1 = new classes[0](10, 5);
        console.log(character1);

        var nbTeam = 2;
        var teams = [];

        for (i = 0; nbTeam > i; i++) {
            if (i === 0) {
                teams[0] = new classes[]
            }
        }

    }
}
document.addEventListener('DOMContentLoaded', app.init);