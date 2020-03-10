function point2D(x, y)
{
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
        this.attrX = x;
    };
    this.setY = function(y) {
        this.attrY = y;
    };
}

var point2D = new point2D(10, 5);
point2D.afficherXY();

point2D.translater(10, 5);

console.log(point2D);
point2D.setX(1);
point2D.setY(5);
console.log(point2D);

point2D.getX();
point2D.getY();



