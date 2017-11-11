
// passing anonymous function as parameter to DisplaySum
function DisplaySum(sumfunction) {
	
	var num1 = 10;
	var num2 = 15;
	// passing parameters to anonymous function
	var result = sumfunction(num1, num2);

	console.log("Sum of "+num1+" and "+ num2 +" is: "+result)
}

// define a function as a parameter
DisplaySum(function(a, b) { return (a+b); });