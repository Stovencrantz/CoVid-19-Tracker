$(document).ready(function () {
  


var globalUrl = "https://api.covid19api.com/summary";
console.log(globalUrl);




$.ajax({
  url: globalUrl,
  method: "GET",
}).then(function(response) {
  
  console.log(response.Countries);

  var country = "";
  var countryTableEl = $("#worldTable");
  for (var i = 0; i < response.Countries.length; i++) {
    var newRow = $("<tr scope = 'row'>");

    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Country));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalRecovered).css("color", "green"));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalDeaths).css("color", "red"));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewConfirmed).css("color", "orange"));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalConfirmed).css("color", "yellow"));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewDeaths).css("color", "red"));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Total).css("color", "orange"));
    countryTableEl.append(newRow);
    console.log(response.Countries.length)
  }
  
   country =$(this).text();


      if(response[i].NewConfirmed === null){
        NewConfirmed.country("No record");
      }
      else{
        NewConfirmed.text(response[i].NewConfirmed);
      }
      //lack of data handler for hospitalization increase
      if(response[i].totalConfirmed=== null){
        totalConfirmed.text("No record");
      }
      else{
        totalConfirmed.text(response[i].TotalConfirmed);
      }
      //lack of data handler for positive cases
      if(response[i].newDeaths === null){
        newDeaths.text("No record");
      }
      else{
        newDeaths.text(response[i].newDeaths);
      }
      //lack of data handler for current on ventilator count
      if(response[i].totalDeaths === null){
        totalDeaths.text("No record");
      }
      else{
        totalDeaths.text(response[i].totalDeaths);
      }
      //lack of data handler for current on ventilator count
      if(response[i].newRecovered === null){
        newRecovered.text("No record");
      }
      else{
        newRecovered.text(response[i].newRecovered);
      }
      if(response[i].totalRecovered === null){
        totalRecovered.text("No record");
      }
      else{
        totalRecovered.text(response[i].totalRecovered);
      };
    });


  
  console.log("column was clicked")
  
  // var column = $(this).data('comlumn')
  // var order = $(this).data('order')
  
  // if(order == 'desc'){
  //     $(this).data('order', "asc")
  //     myArray$()
  // }else{
  //    ( $(this).data('order', "desc"))
  // }
})
function sortTable() {
  var table, globalRows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(".countryName");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    globalRows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
$(".th").on("click", sortTable())
    
;


