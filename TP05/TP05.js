function point2D(x, y)
{
    if (x < 0 || y < 0) {
        throw new Error(' X ou Y est négatif');
    }
    this.attrX = x;
    this.attrY = y;



    this.afficherXY = function() {
        console.log('[', this.attrX, ',' , this.attrY, ']');
    };
    this.translater = function(dX, dY) {
        this.attrX = this.attrX + dX;
        this.attrY = this.attrY + dY;
    };
    this.getX = function() {
        console.log(this.attrX);
    };
    this.getY = function() {
        console.log(this.attrY);
    };
    this.setX = function(x) {
        if (x < 0) {
            throw new Error(' X est négatif');
        } else {
            this.attrX = x;
        }
    };
    this.setY = function(y) {
        if (y < 0) {
            throw new Error(' Y est négatif');
        } else {
            this.attrX = y;
        }
    };
}

var point2D = new point2D(10, 5);

try {
    point2D.setY(-10);
} catch(error) {
    console.log("Une exception a été attrapée");
    console.log("Nom de l'exception :" + error.name);
    console.log("Message de l'exception :" + error.message);
} finally {
    console.log(point2D);
}



