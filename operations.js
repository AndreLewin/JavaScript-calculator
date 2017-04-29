// Own Code
var buttons = document.querySelectorAll('#calculator span');
var display = document.querySelector('.display');


// The operation string will accumulate on the display
for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = function(e) {

		// Different behaviours depending on the buttonHTML
		var buttonHTML = this.innerHTML;

		// If C is pressed, erase
		if (buttonHTML == 'C') {
			display.innerHTML = '';
		}

		// If = is pressed, evaluate
		else if (buttonHTML == '=') {
			var equation = display.innerHTML;
			var lastChar = equation[equation.length - 1];

			// Replace all operator signs with real computer operation signs
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			// Remove the last char if it is a . or an operator sign
			if (['+', '-', 'x', '÷'].indexOf(lastChar) > -1 || lastChar === '.')
				equation = equation.substring(0, equation.length-1);

			// To the avoid the display of "undefined" is no equation is given
			if (equation)
				display.innerHTML = eval(equation);
		}

		// For every button else
		else {
			display.innerHTML += buttonHTML;
		}
	}
}