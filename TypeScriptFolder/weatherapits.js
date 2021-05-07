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
    //var Table = document.getElementById(a);
    //Table.innerHTML = "";
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
function getTheWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var txtWeather, urlString, response, myWeather, count1, table, row, cell1, i, temp, day;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    txtWeather = document.forms["form1"]["aCity"].value;
                    urlString = "https://api.weather.gov/gridpoints/" + txtWeather + "/25,45/forecast/";
                    return [4 /*yield*/, fetch(urlString)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    myWeather = _a.sent();
                    count1 = Math.max.apply(Math, myWeather.properties.periods.map(function (o) { return o.number; }));
                    clearList("WeatherForYou");
                    table = document.getElementById("WeatherForYou");
                    row = table.insertRow(table.rows.length);
                    cell1 = void 0;
                    for (i in myWeather.properties.periods) {
                        row = table.insertRow(table.rows.length);
                        cell1 = row.insertCell(0);
                        cell1.innerHTML = myWeather.properties.periods[i].name;
                        cell1 = row.insertCell(1);
                        cell1.innerHTML = myWeather.properties.periods[i].shortForecast;
                        temp = myWeather.properties.periods[i].temperature;
                        day = myWeather.properties.periods[i].isDaytime;
                        cell1 = row.insertCell(2);
                        if (day) {
                            if (temp > 35) {
                                cell1.innerHTML = "BBQ Time";
                            }
                            else {
                                cell1.innerHTML = "Chill by the Fireplace";
                            }
                        }
                        else
                            cell1.innerHTML = "Please go to Bed!";
                    }
                    return [3 /*break*/, 4];
                case 3:
                    document.getElementById("REPOForYou").innerHTML = "Invalid City Name, Please try again";
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
