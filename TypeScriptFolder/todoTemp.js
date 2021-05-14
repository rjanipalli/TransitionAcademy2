"use strict";
exports.__esModule = true;
function clearList(a) {
    var table = document.getElementById(a);
    var lgth = table.rows.length;
    for (var i = lgth - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}
function delRow(x) {
    //let table2 = <HTMLTableElement>document.getElementById(x);
    var table1 = x.parentNode.parentNode.parentNode;
    var rowCount = table1.rows.length;
    if (rowCount === 1) {
        return;
    }
    var row = x.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
var Todo = /** @class */ (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
    }
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    TodoList.allTodos = new Array;
    return TodoList;
}());
window.onload = function () {
    var task = document.getElementById("todoName");
    var description = document.getElementById("todoDescription");
    document.getElementById("add").addEventListener('click', function () { return toAlltask(task.value, description.value); });
};
/*
function delRow(x: HTMLTableElement) {
  
  let table1: any = x.parentNode.parentNode.parentNode;
  let rowCount = table1.rows.length;
  if(rowCount === 1) {
    alert('Cannot delete the last row');
    return;
  }
  let row = x.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
 */
//Function called when add is clicked
function toAlltask(task, description) {
    var todo = new TodoList();
    //clearList("ActivityListForYou");
    // adds the task to list
    todo.createTodoItem(task, description);
    //Fetched the updated list and create a list item for UI
    var table = document.getElementById("ActivityListForYou");
    var row1 = table.insertRow(table.rows.length);
    var cell;
    var list = "<dl class='dl-horizontal'>";
    var doneFlag;
    //
    //
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        cell = row1.insertCell(0);
        cell.innerHTML = TodoList.allTodos[index].name;
        cell = row1.insertCell(1);
        cell.innerHTML = TodoList.allTodos[index].description;
        doneFlag = TodoList.allTodos[index].completed;
        if (doneFlag == true) {
            cell = row1.insertCell(2);
            cell.innerHTML = "Not Done Yet";
        }
        else {
            cell = row1.insertCell(2);
            cell.innerHTML = "All Done";
        }
        cell = row1.insertCell(3);
        cell.innerHTML = "<input type= 'button' class='btn btn-success' id = 'delete' value= 'delete' onclick='delRow(this)'>";
        row1 = HTMLTableRowElement = table.insertRow((table.rows.length));
    }
}
