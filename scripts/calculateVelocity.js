function simpsonsIntegration(values, step) {
    // Assuming 'values' is an array of function values at equally spaced points
    // and 'step' is the spacing between adjacent points.

    const n = values.length;
    let integral = 0;

    if (n % 2 === 0) {
        // Simpson's rule requires an even number of intervals
        for (let i = 1; i < n - 1; i += 2) {
            // Simpson's rule: (h/3) * (f(x[i-1]) + 4*f(x[i]) + f(x[i+1]))
            integral += (step / 3) * (values[i - 1] + 4 * values[i] + values[i + 1]);
        }
    } else {
        console.error("Simpson's rule requires an even number of intervals.");
    }

    return integral;
}

// Example usage:
const functionValues = [1, 4, 9, 16, 25]; // Replace with your own function values
const spacing = 1; // Assuming equally spaced points

const result = simpsonsIntegration(functionValues, spacing);
console.log(`Numerical integration result using Simpson's rule: ${result}`);