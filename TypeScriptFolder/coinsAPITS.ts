export { }

function clearList(a:string) {
    let table = <HTMLTableElement>document.getElementById(a);
    let lgth: number = table.rows.length;

    for (let i = lgth - 1; i > 0; i--) {
        table.deleteRow(i);

    }

}
function clearDiv(b) {
    let div: HTMLElement = document.getElementById(b);
    while (div.firstChild)
        div.removeChild(div.firstChild);
}
async function populateExchange() {
    //populate string
    let urlString: string = "https://api.coinpaprika.com/v1/exchanges";
    const response: Response = await fetch(urlString);
    let ele2: HTMLElement = document.getElementById('sel2');

    if (response.ok) {
        const myExchange = await response.json();
        for (let i = 1; i < 100; i++) {
            ele2.innerHTML = ele2.innerHTML +
                '<option value="' + myExchange[i]["id"] + '">' + myExchange[i]["name"] + '</option>';
        }
    }
}
async function populateSelect() {
    //populate string
    let urlString: string = "https://api.coinpaprika.com/v1/coins";
    const response: Response = await fetch(urlString);
    let ele: HTMLElement = document.getElementById('sel');

    if (response.ok) {
        const myCoins = await response.json();
        for (let i = 1; i < 100; i++) {
            ele.innerHTML = ele.innerHTML +
                '<option value="' + myCoins[i]["id"] + '">' + myCoins[i]["name"] + '</option>';
        }
    }
}
async function getCoinOHLC() {
    let txtCoinId: any = (<HTMLInputElement>document.getElementById('sel')).value;

    let urlString: string = "https://api.coinpaprika.com/v1/coins/" + txtCoinId + "/ohlcv/today/";
    const response: Response = await fetch(urlString);
    if (response.ok) {
        const myCoinOHLC: any = await response.json();
        // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
        clearList("CryptoForYou");
        let table: any = <HTMLElement>document.getElementById("CryptoForYou");
        let row: HTMLTableRowElement = table.insertRow(table.rows.length);
        let cell1: HTMLElement;
        cell1 = row.insertCell(0);
        cell1.innerHTML = myCoinOHLC[0].open;
        cell1 = row.insertCell(1);
        cell1.innerHTML = myCoinOHLC[0].high;
        cell1 = row.insertCell(2);
        cell1.innerHTML = myCoinOHLC[0].low;
        cell1 = row.insertCell(3);
        cell1.innerHTML = myCoinOHLC[0].close;
        cell1 = row.insertCell(4);
        cell1.innerHTML = myCoinOHLC[0].volume;
        cell1 = row.insertCell(5);
        cell1.innerHTML = myCoinOHLC[0].market_cap;
    } else {
        document.getElementById("CryptoForYou").innerHTML = "Invalid Crypto Name";
    }
}
async function getExchangeInfo() {
    let txtExchangeId: any = (<HTMLInputElement>document.getElementById('sel2')).value;

    let urlString: string = "https://api.coinpaprika.com/v1/exchanges/" + txtExchangeId + "/markets";

    const response: Response = await fetch(urlString);
    if (response.ok) {
        const myExchangeData: any = await response.json();
        // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
        clearList("ExchangeForYou");
        let table: any = <HTMLElement>document.getElementById("ExchangeForYou");
        let row: HTMLTableRowElement = table.insertRow(table.rows.length);
        let cell1: HTMLElement;
        for (let i in myExchangeData) {
            row = table.insertRow(table.rows.length);
            cell1 = row.insertCell(0);
            cell1.innerHTML = myExchangeData[0].pair;
            cell1 = row.insertCell(1);
            cell1.innerHTML = myExchangeData[0].base_currency_name;
            cell1 = row.insertCell(2);
            cell1.innerHTML = myExchangeData[0].quote_currency_name;
            cell1 = row.insertCell(3);
            cell1.innerHTML = myExchangeData[0].quotes.USD.price;
            cell1 = row.insertCell(4);
            cell1.innerHTML = myExchangeData[0].quotes.USD.volume_24h;
            //cell1 = row.insertCell(4);
            //cell1.innerHTML = myExchangeData[0].market_cap;
        }
    } else {
        document.getElementById("CryptoForYou").innerHTML = "Invalid Crypto Name";
    }





}



