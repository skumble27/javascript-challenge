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

// If the users want to view the entire table once more after filtering, they have the option to click the resent button upon which, the entire table will load onto the page.
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
