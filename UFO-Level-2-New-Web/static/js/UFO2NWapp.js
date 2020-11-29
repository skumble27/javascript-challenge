// from data.js
// Initially sorting out the tables in ascending order by Date
var tableData = data.sort((a,b) => new Date(a.datetime) - new Date(b.datetime));

// YOUR CODE HERE!
var tbody = d3.select("tbody")


// Utilising the arrow function to present the table onto the website
tableData.forEach((alien) => {
    var row = tbody.append("tr");
    Object.entries(alien).forEach(([key,value]) =>{
        var cell = row.append("td");
        cell.text(value);
    });
});

// Selecting Filter Table
var inputDate = d3.select("#filter-btn");

inputDate.on("click", filteredTable);

// Reseting the table to show all data again

var resetButton = d3.select("#reset-table-btn")
resetButton.on("click", resetTable);

function filteredTable(){
    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the site from refreshing
    d3.event.preventDefault();

    // Obtaining the input value when users enter the date
    var dateSelect = d3.select("#datetime").property("value");
    console.log(dateSelect);

    var citySelect = d3.select('#cityselect').property("value").toLowerCase();
    console.log(citySelect);

    var stateSelect = d3.select('#stateselect').property("value").toLowerCase();
    console.log(stateSelect);

    var countrySelect = d3.select('#countryselect').property("value").toLowerCase();
    console.log(countrySelect);

    var shapeSelect = d3.select('#shapeselect').property("value").toLowerCase();
    console.log(shapeSelect); 

    // Setting the default variable prior to filtration
    dataFilter = tableData;

        // Creating IF statements to filter the table accordingly
    if (dateSelect){
        dataFilter = dataFilter.filter(data => data.datetime === dateSelect);
        console.log(dataFilter);

    }

    if (citySelect){
        dataFilter = dataFilter.filter(data => data.city === citySelect);
        console.log(dataFilter);
    }

    if (stateSelect){
        dataFilter = dataFilter.filter(data => data.state === stateSelect);
        console.log(dataFilter);
    };
    
    if (countrySelect){
        dataFilter = dataFilter.filter(data => data.country === countrySelect);
        console.log(dataFilter);
    };

    if (shapeSelect){
        dataFilter = dataFilter.filter(data => data.shape === shapeSelect);
        console.log(dataFilter);
    };
    
    // Providing data based on selected dates
    dataFilter.forEach((selectedDate) => {
        var row = tbody.append("tr");
        Object.entries(selectedDate).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });

}

function resetTable(){
    // Remove existing table
    d3.select("tbody").html("");

    // Prevent the site from refreshing
    d3.event.preventDefault();

    // Returning the original table when reset is clicked
    tableData.forEach((alien) => {
        var row = tbody.append("tr");
        Object.entries(alien).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
