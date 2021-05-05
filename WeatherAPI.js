function clearList(a) {
    var table = document.getElementById(a);
   
    var lgth = document.getElementById(a).rows.length;
    
    for (i=lgth-1;i>0;i--)    {   
        table.deleteRow(i);
        
    }   
   
}
function clearDiv(b){
    var div = document.getElementById(b);
    while(div.firstChild)
        div.removeChild(div.firstChild);
}
async function getTheWeather(){
    var txtWeather = document.forms["form1"]["aCity"].value;
    
    var urlString = "https://api.weather.gov/gridpoints/" + txtWeather + "/25,45/forecast/";
    var response = await fetch(urlString);
    if (response.ok){
        var myWeather = await response.json();  
        var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
        //todo try math.max here to get max days
        clearDiv("WeatherForYou");
        clearDiv("WeatherForYou2");
        clearDiv("WeatherForYou3");
        
       //document.getElementById("WeatherForYou").remove();
       // document.getElementById("WeatherForYou2").reset();
       // document.getElementById("WeatherForYou3").reset();

        var link;
       
           for (var i in myWeather.properties.periods){
            document.getElementById("WeatherForYou").innerHTML +=  myWeather.properties.periods[i].name + "<br>";   
            document.getElementById("WeatherForYou2").innerHTML +=  myWeather.properties.periods[i].shortForecast + "<br>" ;
            var temp = myWeather.properties.periods[i].temperature;
            if (temp > 35)
                document.getElementById("WeatherForYou3").innerHTML +=  "BBQ Time" + "<br>";    
             else
                document.getElementById("WeatherForYou3").innerHTML +=  "Chill by the Fireplace" + "<br>";
            

            
        }
    } else {
        document.getElementById("REPOForYou").innerHTML = "Invalid City Name, Please try again";  
    }
    
 


       
}

    

            