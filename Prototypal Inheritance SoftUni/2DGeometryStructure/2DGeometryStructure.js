/**
 * Created by Just Nasko on 4/19/2016.
 */
//this will inherit prototype of a parent object
Function.prototype.extends=function(parent){
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
}

var Shape = (function () {
    var Shape = (function () {

        function Shape(name) {
            this.name = name;
            return this;
        }

        Object.defineProperties(Shape.prototype, {
            "toString": {
                value: function () {
                    return "Name: " + this.name;
                }
            }
        });

        return Shape
    }());

    var Circle = (function () {
        function Circle() {
            this.name = "Circle";
            return this;
        }

        Object.defineProperties(Circle.prototype, {
            O: {
                value: function (x, y) {
                    this.Ox = x;
                    this.Oy = y;
                    return this;

                }
            },
            rad: {
                value: function (r) {
                    this.radius = r;
                    return this;
                }
            },
            col: {
                value: function (c) {
                    this.color = c;
                    return this;
                }
            },
            toString: {
                value: function () {
                    var shapeToStr = Shape.prototype.toString.call(this);
                    return shapeToStr + ", point O(" + this.Ox + "," + this.Oy + "), radius=" + this.radius + ", color=" + this.color;
                }
            }
        });

        Circle.prototype.constructor = Circle;
        return Circle;
    })();

    var Line = (function () {
        function Line() {
            this.name = "Line";
            return this;
        }

        Object.defineProperties(Line.prototype, {
            A: {
                value: function (x, y) {
                    this.Ax = x;
                    this.Ay = y;
                    return this;
                }
            },
            B: {
                value: function (x, y) {
                    this.Bx = x;
                    this.By = y;
                    return this;

                }
            },
            col: {
                value: function (c) {
                    this.color = c;
                    return this;
                }
            },
            toString: {
                value: function () {
                    var fromShape = Shape.prototype.toString.call(this);
                    return fromShape + ", color: " + this.color + ", point A(" + this.Ax + "," + this.Ay + "), point B(" + this.Bx + "," + this.By + ")"
                }
            }
        });
        Line.prototype.constructor = Line;
        return Line;
    }());

    var Triangle = (function (parent) {

        function Triangle() {
            this.name = "Triangle";
            return this;
        }

        Triangle.extends(parent);
        Object.defineProperties(Triangle.prototype, {
            C: {
                value: function (x, y) {
                    this.Cx = x;
                    this.Cy = y;
                    return this;
                }
            },
            toString:{
               configurable:true,
               value:function(){
                   var fromParent = parent.prototype.toString.call(this);
                   return fromParent+", point C("+this.Cx+","+this.Cy+")";
               }
            }


        });

        return Triangle;

    }(Line));

    var Segment=(function(parent){

        function Segment(){
            this.name="Segment";
            return this;
        }

        Segment.extends(Line);

        return Segment;

    }(Line));

    var Rectangle = (function(){
        function Rectangle(){
            this.name = "Recrangle";
            return this;
        }

        Object.defineProperties(Rectangle.prototype,{
            A:{
                value:function(x,y){
                    this.Ax=x;
                    this.Ay=y;
                    return this;
                }
            },
            w:{
                value:function(w){
                    this.width = w;
                    return this;
                }
            },
            h:{
                value:function(h){
                    this.height = h;
                    return this;
                }
            },
            c:{
                value:function(c){
                    this.color=c;
                    return this;
                }
            },
            toString:{
                value:function(){
                    var fromShape = Shape.prototype.toString.call(this);
                    return fromShape+", width="+this.width+", height="+this.height+
                        ", color="+this.color+", point A("+this.Ax+","+this.Ay+")"
                }
            }
        });

        return Rectangle;

    }());

    return {
        circle: Circle,
        line: Line,
        triangle: Triangle,
        segment: Segment,
        rectangle: Rectangle
    }
}());

var circle = new Shape.circle().O(21, 1).rad(32).col("Green");
console.log(circle.toString());

var line = new Shape.line().A(12, 1).B(32, 6).col("Blue");
console.log(line.toString());

var triangle = new Shape.triangle().A(32,1).B(43,21).C(43,12).col("Green");
console.log(triangle.toString());

var segment = new Shape.segment().A(12,31).B(87,21).col("Orange");
console.log(segment.toString());

var rectangle = new Shape.rectangle().A(76,89).c("Pink").w(22).h(11);
console.log(rectangle.toString());