
export { }


function clearList(a:string) {
    //var Table = document.getElementById(a);
    //Table.innerHTML = "";
    let table = <HTMLTableElement>document.getElementById(a);
    let lgth: number = table.rows.length;

    for (let i = lgth - 1; i > 0; i--) {
        table.deleteRow(i);

    }
}
function clearDiv(b:string) {
    let div: HTMLElement = document.getElementById(b);
    while (div.firstChild)
        div.removeChild(div.firstChild);
}
async function getTheWeather() {
    let txtWeather: string = document.forms["form1"]["aCity"].value;

    let urlString: string = "https://api.weather.gov/gridpoints/" + txtWeather + "/25,45/forecast/";
    const response: Response = await fetch(urlString);
    if (response.ok) {
        const myWeather: any = await response.json();
        let count1: number = Math.max.apply(Math, myWeather.properties.periods.map(function (o) { return o.number; }))

        clearList("WeatherForYou");

        let table: any = <HTMLElement>document.getElementById("WeatherForYou");

        let row: HTMLTableRowElement = table.insertRow(table.rows.length);
        let cell1: HTMLElement;

        for (let i in myWeather.properties.periods) {
            row = table.insertRow(table.rows.length);
            cell1 = row.insertCell(0);
            cell1.innerHTML = myWeather.properties.periods[i].name;
            cell1 = row.insertCell(1);
            cell1.innerHTML = myWeather.properties.periods[i].shortForecast;

            let temp: number = myWeather.properties.periods[i].temperature;
            let day: boolean = myWeather.properties.periods[i].isDaytime;
            cell1 = row.insertCell(2);
            if (day) {
                if (temp > 35) {
                    cell1.innerHTML = "BBQ Time";
                }
                else {
                    cell1.innerHTML = "Chill by the Fireplace";
                }
            } else
                cell1.innerHTML = "Please go to Bed!";


        }
    } else {
        document.getElementById("REPOForYou").innerHTML = "Invalid City Name, Please try again";
    }





}



