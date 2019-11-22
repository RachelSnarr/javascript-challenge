// from data.js
let tbody = d3.select("tbody");
let button = d3.select("#filter-btn");

function tableDataCollection(tableData) { 
    tableData.forEach(function(data) {
        console.log(data);
        let row = tbody.append("tr");

        Object.entries(data).forEach(function([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

function clearTable() {

    d3.select("tbody").selectAll("tr").remove()

};

function userInput(row, id) {

    const inputValue = d3.select(`#${id}`).property("value") || undefined;

    if (inputValue === undefined) {
        return true;
    } else {
        return row[`${id}`] === inputValue.toLowerCase();
    }
};

function filterButton() {

    clearTable();

    filteredData = data.filter(row => userInput(row, "datetime"))
    .filter(row => userInput(row, "city"))
    .filter(row => userInput(row, "state"))
    .filter(row => userInput(row, "country"))
    .filter(row => userInput(row, "shape"))
    ;

    tableDataCollection(filteredData);
};

// regular expression - regex tester 

function refreshButton() {

    clearTable();

    tableDataCollection(data);

};

tableDataCollection(data);