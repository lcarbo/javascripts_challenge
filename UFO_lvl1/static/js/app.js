// from data.js
showtable(data);

// YOUR CODE HERE!
d3.select('button').on('click', handleClick); 

//loop through data and append table rows 
function showtable (data) {
    d3.select('tbody').html('');
    data.forEach(obj => {
        var row = d3.select('tbody').append('tr'); 
        Object.values(obj).forEach(val => {
            var cell = row.append("td");
            cell.text(val);
        }); 
    });
};

function handleClick() {
    var filterData = data;
    var value = d3.select('input').property('value');
    if (value){
        filterData = filterData.filter(obj => obj.datetime == value);
    };
    d3.select('input').property('value', ''); 
    showtable(filterData);
};


// //event and button for text input 
// var sightings = data; 
// var button = d3.select("#filter-btn"); 
// var form = d3.select("#form"); 

// button.on("click", runSubmit); 
// form.on("submit", runSubmit); 

// function runSubmit(){ 
//     d3.event.preventDefault(); 
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.property("value"); 
//     // console.log(inputValue);
    
//     var filteredData = sightings.filter(sighting => sighting.datetime === inputValue); 
//     // console.log(filteredData);};  





    // return {
    //         init: function() {
    //             var result = filteredData.getElementsByClassName("tr");
    //             sightings.forEach.call(result, function(input) {
    //                 input.oninput = _onInputSearch;
    //             });
    //         }
    //     }};