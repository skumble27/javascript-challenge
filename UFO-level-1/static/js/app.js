// from data.js
var tableData = data;

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

    // Filtering alien sightings by date
    var dateFilter = tableData.filter(alienDate => alienDate.datetime === dateSelect);
    console.log(dateFilter);

    // Providing data based on selected dates
    dateFilter.forEach((selectedDate) => {
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
