"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
function clearList(a) {
    var table = document.getElementById(a);
    var lgth = table.rows.length;
    for (var i = lgth - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}
function clearDiv(b) {
    var div = document.getElementById(b);
    while (div.firstChild)
        div.removeChild(div.firstChild);
}
function populateExchange() {
    return __awaiter(this, void 0, void 0, function () {
        var urlString, response, ele2, myExchange, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlString = "https://api.coinpaprika.com/v1/exchanges";
                    return [4 /*yield*/, fetch(urlString)];
                case 1:
                    response = _a.sent();
                    ele2 = document.getElementById('sel2');
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    myExchange = _a.sent();
                    for (i = 1; i < 100; i++) {
                        ele2.innerHTML = ele2.innerHTML +
                            '<option value="' + myExchange[i]["id"] + '">' + myExchange[i]["name"] + '</option>';
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function populateSelect() {
    return __awaiter(this, void 0, void 0, function () {
        var urlString, response, ele, myCoins, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlString = "https://api.coinpaprika.com/v1/coins";
                    return [4 /*yield*/, fetch(urlString)];
                case 1:
                    response = _a.sent();
                    ele = document.getElementById('sel');
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    myCoins = _a.sent();
                    for (i = 1; i < 100; i++) {
                        ele.innerHTML = ele.innerHTML +
                            '<option value="' + myCoins[i]["id"] + '">' + myCoins[i]["name"] + '</option>';
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getCoinOHLC() {
    return __awaiter(this, void 0, void 0, function () {
        var txtCoinId, urlString, response, myCoinOHLC, table, row, cell1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txtCoinId = document.getElementById('sel').value;
                    urlString = "https://api.coinpaprika.com/v1/coins/" + txtCoinId + "/ohlcv/today/";
                    return [4 /*yield*/, fetch(urlString)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    myCoinOHLC = _a.sent();
                    // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
                    clearList("CryptoForYou");
                    table = document.getElementById("CryptoForYou");
                    row = table.insertRow(table.rows.length);
                    cell1 = void 0;
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
                    return [3 /*break*/, 4];
                case 3:
                    document.getElementById("CryptoForYou").innerHTML = "Invalid Crypto Name";
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getExchangeInfo() {
    return __awaiter(this, void 0, void 0, function () {
        var txtExchangeId, urlString, response, myExchangeData, table, row, cell1, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txtExchangeId = document.getElementById('sel2').value;
                    urlString = "https://api.coinpaprika.com/v1/exchanges/" + txtExchangeId + "/markets";
                    return [4 /*yield*/, fetch(urlString)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    myExchangeData = _a.sent();
                    // var count1 = Math.max.apply(Math,myWeather.properties.periods.map(function(o){return o.number;}))
                    clearList("ExchangeForYou");
                    table = document.getElementById("ExchangeForYou");
                    row = table.insertRow(table.rows.length);
                    cell1 = void 0;
                    for (i in myExchangeData) {
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
                    return [3 /*break*/, 4];
                case 3:
                    document.getElementById("CryptoForYou").innerHTML = "Invalid Crypto Name";
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
