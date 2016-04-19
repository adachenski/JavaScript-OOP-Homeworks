# Prototypal Inheritance

###Problem 2. 2D Geometry Structure – Pseudo-Classical Model

*   Define a function constructor Shape. Define the following types of shapes:
   
    Circle – holds a center point O with coordinates x and y (written for simplicity as O(x, y)).
    Also has a radius r (number) and a color (in hexadecimal format)

    Rectangle – holds the coordinates of its top left corner A(x, y), width (number), 
    height (number) and color (in hexadecimal format)
    
    Triangle – consists of three points A(x, y), B(x, y) and C(x, y). Also has a color (in hexadecimal format)
    
    Line – holds two points A(x, y) and B(x, y), has a color (in hexadecimal format)
    
    Segment – consists of two endpoints A(x, y) and B(x, y), also has a color (in hexadecimal format)
    
    Override the toString() method to print information about each object. Add all shapes in a module.
    Debug your code and see what the prototype is and what the __proto__ is in each object and function 
    constructor. Use the browser developer tools and watch the locals.
