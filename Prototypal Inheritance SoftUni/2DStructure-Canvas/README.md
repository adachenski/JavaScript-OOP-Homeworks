###Problem 4. * 2D Geometry - Canvas

*	Your task is to use one of the previous structures (by your choice) 
	and to add a draw() method for each shape to draw itself on Canvas.
	Design your object-oriented hierarchy to avoid code repetition and 
	increase abstraction. Encapsulate all data and validate the input 
	(for example, you cannot create a triangle with only two points).
	You can use Canvas API tutorial from 
	https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial 
	Basics steps:
	1. You should create canvas element in your HTML page with width and height.
	2. In your JavaScript file you should get a canvas element and assign it to a variable.
	Example: var canvas = document.getElementById("canvas");
	3. You should get context from this variable 
	Example: var context = canvas.getContext("2d");
	4. You can use context methods for drawing shapes and drawing path method for the other shapes:
	context.fillRect(), context.strokeRect(), context.clearRect()
	context.beginPath(), context.closePath(), context.stroke(), context.fill()
	https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes 