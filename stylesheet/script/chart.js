// forecaster.js
function updateChart() {
    const selectedFuelTypes = Array.from(document.getElementById('fuel-types').selectedOptions).map(option => option.value);
    const selectedMode = document.getElementById('forecast-mode').value;

}

    var chart; // Global variable to store the Chart instance

    function computeForecast() {
        // Retrieve selected fuel type and fuel amount
        var fuelType = document.getElementById("fuel-types").value;
        var fuelAmount = document.getElementById("fuel-amount").value;

        // Validate input
        if (fuelAmount < 0 || fuelAmount > 10000 || isNaN(fuelAmount)) {
            alert("Please enter a valid fuel amount between 0 and 10000.");
            return;
        }

        // Perform computations and update chart (replace with actual logic)
        var forecastResult = /* Your forecasting logic here */;

        // Update the chart with the computed result
        updateChart(fuelType, fuelAmount, forecastResult);
    }

    function updateChart(fuelType, fuelAmount, forecastResult) {
        // Check if the chart already exists, destroy it before creating a new one
        if (chart) {
            chart.destroy();
        }

        // Get the canvas element
        var ctx = document.getElementById("fuel-chart").getContext("2d");

        // Create a new chart
        chart = new Chart(ctx, {
            type: 'bar', // You can change the chart type as needed
            data: {
                labels: [fuelType],
                datasets: [{
                    label: 'Fuel Amount',
                    data: [fuelAmount],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Set the color as needed
                    borderColor: 'rgba(75, 192, 192, 1)', // Set the border color as needed
                    borderWidth: 1
                }, {
                    label: 'Forecast Result',
                    data: [forecastResult],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Set the color as needed
                    borderColor: 'rgba(255, 99, 132, 1)', // Set the border color as needed
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }