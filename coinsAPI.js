
function clearList(a) {
    var table = document.getElementById(a);

    var lgth = document.getElementById(a).rows.length;

    for (i = lgth - 1; i > 0; i--) {
        table.deleteRow(i);

    }

}
function clearDiv(b) {
    var div = document.getElementById(b);
    while (div.firstChild)
        div.removeChild(div.firstChild);
}
async function populateExchange() {
    //populate string
    var urlString = "https://api.coinpaprika.com/v1/exchanges";
    var response = await fetch(urlString);
    var ele2 = document.getElementById('sel2');

    if (response.ok) {
        var myExchange = await response.json();
        for (let i = 1; i < 100; i++) {
            ele2.innerHTML = ele2.innerHTML +
                '<option value="' + myExchange[i]["id"] + '">' + myExchange[i]["name"] + '</option>';
        }
    }
}
async function populateSelect() {
    //populate string
    var urlString = "https://api.coinpaprika.com/v1/coins";
    var response = await fetch(urlString);
    var ele = document.getElementById('sel');

    if (response.ok) {
        var myCoins = await response.json();
        for (let i = 1; i < 100; i++) {
            ele.innerHTML = ele.innerHTML +
                '<option value="' + myCoins[i]["id"] + '">' + myCoins[i]["name"] + '</option>';
        }
    }
}
async function getCoinOHLC() {
    var txtCoinId = document.getElementById('sel').value;

    var urlString = "https://api.coinpaprika.com/v1/coins/" + txtCoinId + "/ohlcv/today/";
    var response = await fetch(urlString);
    if (response.ok) {
        var myCoinOHLC = await response.json();
        // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
        clearList("CryptoForYou");
        var table = document.getElementById("CryptoForYou");
        var row = table.insertRow(table.rows.length);
        var cell1, cell2, cell3;
        var link;
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
    var txtExchangeId = document.getElementById('sel2').value;

    var urlString = "https://api.coinpaprika.com/v1/exchanges/" + txtExchangeId + "/markets";
    
    var response = await fetch(urlString);
    if (response.ok) {
        var myExchangeData = await response.json();
        // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
        clearList("ExchangeForYou");
        var table = document.getElementById("ExchangeForYou");
        var row = table.insertRow(table.rows.length);
        var cell1, cell2, cell3;
        var link;
        for (var i in myExchangeData) {
            row = table.insertRow(table.rows.length);
            // cell1 = row.insertCell(0);
            // cell1.innerHTML = myExchangeData[0].pair;
            cell1 = row.insertCell(0);
            cell1.innerHTML = myExchangeData[0].base_currency_name;
            cell1 = row.insertCell(1);
            cell1.innerHTML = myExchangeData[0].quote_currency_name;
            cell1 = row.insertCell(2);
            cell1.innerHTML = myExchangeData[0].quotes.USD;
            cell1 = row.insertCell(3);
            cell1.innerHTML = myExchangeData[0].quotes.volume_24h;
            //cell1 = row.insertCell(4);
            //cell1.innerHTML = myExchangeData[0].market_cap;
        }
    } else {
        document.getElementById("CryptoForYou").innerHTML = "Invalid Crypto Name";
    }





}



