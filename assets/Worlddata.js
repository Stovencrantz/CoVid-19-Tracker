$(document).ready(function () {
  

var globalCountryResponse;
var showAsc = true

var globalUrl = "https://api.covid19api.com/summary";
console.log(globalUrl);

function compareAsc( a, b ,) {
  if ( a.Country < b.Country ){
    return -1;
  }
  if ( a.Country > b.Country ){
    return 1;
  }
  return 0;
}

function compareDsc( a, b ,) {
  if ( a.Country > b.Country ){
    return -1;
  }
  if ( a.Country < b.Country ){
    return 1;
  }
  return 0;
}

function displayCountries(response) {
  console.log('Display countries is happening!!!!!!!!')

  var country = "";
  var countryTableEl = $(".countryName");
  countryTableEl.empty()
  console.log('response.Countries', response.Countries)
  if (showAsc === true){
    response.Countries = response.Countries.sort(compareAsc)
    showAsc = false
  } else {
    response.Countries = response.Countries.sort(compareDsc)
    showAsc = true
  }


  for (var i = 0; i < response.Countries.length; i++) {
    var newRow = $("<tr scope = 'row'>");

    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Country));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalRecovered));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalDeaths));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewConfirmed));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].TotalConfirmed));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].NewDeaths));
    newRow.append($("<td scope = 'col'>").text(response.Countries[i].Total));
    countryTableEl.append(newRow);
    console.log(response.Countries.length);


    // if(response[i].newConfirmed === null){
    //     newConfirmed.country("No record");
    //   }
    //   else{
    //     newConfirmed.text(response[i].NewConfirmed);
    //   }
    //   //lack of data handler for hospitalization increase
    //   if(response[i].totalConfirmed=== null){
    //     totalConfirmed.text("No record");
    //   }
    //   else{
    //     totalConfirmed.text(response[i].TotalConfirmed);
    //   }
    //   //lack of data handler for positive cases
    //   if(response[i].newDeaths === null){
    //     newDeaths.text("No record");
    //   }
    //   else{
    //     newDeaths.text(response[i].newDeaths);
    //   }
    //   //lack of data handler for current on ventilator count
    //   if(response[i].totalDeaths === null){
    //     totalDeaths.text("No record");
    //   }
    //   else{
    //     totalDeaths.text(response[i].totalDeaths);
    //   }
    //   //lack of data handler for current on ventilator count
    //   if(response[i].newRecovered === null){
    //     newRecovered.text("No record");
    //   }
    //   else{
    //     newRecovered.text(response[i].newRecovered);
    //   }
    //   if(response[i].totalRecovered === null){
    //     totalRecovered.text("No record");
    //   }
    //   else{
    //     totalRecovered.text(response[i].totalRecovered);
    //   };
  }

}

$('#country-sort').on('click', function() {
  console.log("you got clicked")
  displayCountries(globalCountryResponse)
})




$.ajax({
  url: globalUrl,
  method: "GET",
}).then(function(response) {
  globalCountryResponse = response

  displayCountries(response)
  
  //console.log(response.Countries);
   //country =$(this).text();


      
    });




  });


