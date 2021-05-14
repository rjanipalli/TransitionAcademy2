

function clearList(a:string) {
  let table = <HTMLTableElement>document.getElementById(a);
  let lgth: number = table.rows.length;

  for (let i = lgth - 1; i > 0; i--) {
      table.deleteRow(i);

  }

}

function delRow(x:any) {
  //let table2 = <HTMLTableElement>document.getElementById(x);

  let table1: any | null = x.parentNode.parentNode.parentNode;
  let rowCount = table1.rows.length;
  if(rowCount === 1) {
    return;
  }
  let row = x.parentNode.parentNode; 
  row.parentNode.removeChild(row);
}

function changeStatus(y: any){
  if (y.value == "All Done"){
    y.value = "Not Done Yet";
  }
    else {
      y.value = "All Done";
  }
  /* let  table2 = <HTMLButtonElement>document.getElementById(y);
  
  if (table2.textContent == "All Done") {
      table2.textContent = "Not Done Yet";
      table2.value = "Not Done Yet";
  } else {
      y.table2.textContent = "All Done";
      y.table2.value = "All Done";
  } */

}
interface ITodo{
  name:string;
  description: string;
  completed: boolean;
}


class Todo implements ITodo{
  constructor(public name: string, public description: string, public completed: boolean){}

}


class TodoList{
  public static allTodos: Todo[]= new Array;

  
  createTodoItem(name:string,description:string):number {
      let newItem = new Todo(name,description, false);
      let totalCount: number = TodoList.allTodos.push(newItem);
      return totalCount;
  }

  
  allTodoItems():Todo[]{
      return TodoList.allTodos;
  }
}

window.onload = function(){
  
  let task= <HTMLInputElement>document.getElementById("todoName");
  let description = <HTMLInputElement>document.getElementById("todoDescription");

  
  (<HTMLElement>document.getElementById("add")).addEventListener('click', () => toAlltask(task.value, description.value));    
  
}
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
function toAlltask(task:string, description:string){

  let todo = new TodoList();
  clearList("ActivityListForYou");
  // adds the task to list
  todo.createTodoItem(task, description);

  //Fetched the updated list and create a list item for UI
  let table: any = <HTMLElement>document.getElementById("ActivityListForYou");
  let row1: HTMLTableRowElement = table.insertRow(table.rows.length);
  let cell: HTMLElement;
  let list="<dl class='dl-horizontal'>";
  let doneFlag: boolean;
  //

//
  for(let index=0; index < TodoList.allTodos.length;index++){
        
    cell = row1.insertCell(0);
    cell.innerHTML = TodoList.allTodos[index].name;
    cell = row1.insertCell(1);
    cell.innerHTML = TodoList.allTodos[index].description;
    doneFlag = TodoList.allTodos[index].completed;
     /* if (doneFlag == false){
          cell = row1.insertCell(2);
          cell.innerHTML = "Not Done Yet";
      }
      else
          {
          cell = row1.insertCell(2);
          cell.innerHTML = "All Done";
      }     */
      cell = row1.insertCell(2);
    cell.innerHTML = "<input type= 'button' class='btn btn-success' id = 'delete' value= 'delete' onclick='delRow(this)'>";
    cell = row1.insertCell(3);
    cell.innerHTML = "<input type= 'button' class='btn btn-success' id = 'changeButton' value='Not Done Yet' onclick='changeStatus(this)'>";
    
     
    row1 = table.insertRow((table.rows.length));
    
  }
  
  
}
