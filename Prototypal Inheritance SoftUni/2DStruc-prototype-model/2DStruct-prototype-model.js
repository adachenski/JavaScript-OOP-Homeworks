/**
 * Created by Just Nasko on 4/20/2016.
 */

var shape =(function(){

    var shape=(function(){
        var shape = {};

        Object.defineProperties(shape,{
            Name:{
                value:function(){
                    this.name = "Shape";
                    return this;
                }
            },
            toString:{
                value:function(){
                    return "name: "+this.name;
                }
            }
        });

        return shape;
    }());

    var line =(function(parent){
        var line = Object.create(parent);
        Object.defineProperties(line,{

            Name:{
                value:function(){
                    this.name="Line";
                    return this;
                }
            },
            A:{
                value:function(x,y){
                    this.Ax=x;
                    this.Ay=y;
                    return this;
                }
            },
            B:{
                value: function (x,y) {
                    this.Bx=x;
                    this.By=y;
                    return this;
                }
            },
            col:{
                value:function(c){
                    this.color=c;
                }
            },
            toString:{
                value:function(){
                    var fromShape= parent.toString.call(this);
                    return fromShape +", color="+this.color+"" +
                        ", point A("+this.Ax+","+this.Ay+"), point B("+this.Bx+","+this.By+")";
                }
            }

        });
        return line;
    }(shape));

    var segment=(function(parent){
        var segment = Object.create(parent);
        Object.defineProperty(segment,"Name",{
            value:function(){
                this.name = "Segment";
                return this;
            }
        });

        return segment;
    }(line));

    var triangle = (function(parent){
        var triangle = Object.create(parent);

        Object.defineProperties(triangle,{

            Name:{
                value:function(){
                    this.name= "Triangle";
                    return this;
                }
            },
            C:{
                value: function (x,y) {
                    this.Cx =x;
                    this.Cy = y;
                    return this;
                }
            },
            toString:{
                value:function(){
                    var fromParent = parent.toString.call(this);
                    return fromParent+", point C("+this.Cx+","+this.Cy+")";
                }
            }
        });

        return triangle;

    }(segment));

    var circle = (function(parent){
        var circle = Object.create(parent)
        Object.defineProperties(circle,{
            Name:{
                value:function(){
                    this.name = "Circle";
                    return this;
                }
            },
            O:{
                value:function(x,y){
                    this.x=x;
                    this.y=y;
                    return this;
                }
            },
            col:{
                value:function(c){
                    this.color=c;
                    return this;
                }
            },
            rad:{
                value:function(r){
                    this.radius = r;
                    return this;
                }
            },
            toString:{
                value:function(){
                    var fromParent = parent.toString.call(this);
                    return fromParent+", color="+this.color+", radius="+
                            this.radius+", point O("+this.x+","+this.y+")";
                }
            }
        });

        return circle;
    }(shape));

    var rectangle = (function(parent){
        var rectangle = Object.create(parent)
        Object.defineProperties(rectangle,{
            Name:{
                value:function(){
                    this.name="Rectangle";
                    return this;
                }
            },
            A:{
                value:function(x,y){
                    circle.O.call(this,x,y);
                    return this;
                }
            },
            col:{
                value:function(c){
                    circle.col.call(this,c);
                    return this;
                }
            },
            w:{
                value: function (w) {
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
            toString:{
                value:function(){

                    var fromShape = parent.toString.call(this);
                    return fromShape+", width="+this.width+", height="+this.height+
                            ", color="+this.color+", point A("+this.x+","+this.y+")";
                }
            }
        })

        return rectangle;
    }(shape));

    return{
        line:line,
        segment:segment,
        triangle:triangle,
        circle:circle,
        rectangle:rectangle
    }

}());


var line = Object.create(shape.line);
line.Name().A(32,12).B(43,19).col("green");
console.log(line.toString());

var segment = Object.create(shape.segment);
segment.Name().A(43,2).B(90,139).col("Peen");
console.log(segment.toString());

var triangle = Object.create(shape.triangle);
triangle.Name().A(423,22).B(9,19).C(54,2).col("Nasko");
console.log(triangle.toString());

var circle = Object.create(shape.circle);
circle.Name().O(33,54).col("#43223").rad(111);
console.log(circle.toString());

var rect = Object.create(shape.rectangle);
rect.Name().A(11,22).col("#54334").w(123).h(44);
console.log(rect.toString());