//export  {}


 // Interface to define the structure of Todo
interface ITodo1{
  name:string;
  description: string;
  done: boolean;
}

//Class Implementing the interface
class Todo1 implements ITodo{
  completed: boolean;
  constructor(public name: string, public description: string, public done: boolean){}

} 
 
/* interface ITodo{
  name:string;
  description: string;
  done: boolean;
} */
/* class Todo {
  public name: string;
  public description: string;
  public done: boolean; 

 constructor(public name: string, public description: string, public done: boolean) {}
  /* name: string;
  description: string;
  completed: boolean; */
    /* this.name = name;
    this.description = description;
    this.done = done; */

  //} 

 
class ActivityList {
  public static allActivity: Todo[] = new Array;

  createNewActivity(name: string, description: string): number {
    let newActivity = new Todo(name, description, false);
    let totalCount: number = ActivityList.allActivity.push(newActivity);
    return totalCount;
  }
  allActivity(): Todo[] {
    return ActivityList.allActivity;
  }
}

//function getActivity() {
  window.onload = function(){
  let task = (<HTMLInputElement>document.getElementById("newToDo")).value;
  let description = (<HTMLInputElement>document.getElementById("newDescription")).value;

  document.getElementById("addToDo")?.addEventListener('click', () => loadActivity(task, description));

}

function loadActivity(task: string, description: string) {
  let activity = new ActivityList();
  activity.createNewActivity(task, description);
  //dont like this
  let div = <HTMLDivElement>document.getElementById("todoList");
  let list = "<dl class='dl-horizontal'>";

  for (let i = 0; i < ActivityList.allActivity.length; i++) {
    list = list + " <dt>" + ActivityList.allActivity[i].name + '</dt> <dd>' + ActivityList.allActivity[i].description + '</dd>';
  }
  list += "</dl>";
  div.innerHTML = list;

  (<HTMLInputElement>document.getElementById("newToDo")).value = "";
  (<HTMLInputElement>document.getElementById("newDescription")).value = "";

}
/* function clearList(a:string) {
    //var Table = document.getElementById(a);
    //Table.innerHTML = "";
    let table = <HTMLTableElement>document.getElementById(a);
    let lgth : number =table.rows.length;

    for (let i=lgth-1;i>0;i--)    {
      table.deleteRow(i);

    }
    //var rowCount = myTable.rows.length; while(--rowCount) myTable.deleteRow(rowCount);
                 //var x =document.getElementById("feddback").value;
                 // if (x=="")fdsfsdfdsfsdnmnbmnbmn
    //                alert("Feedback Submitted! " );

}

function addToList(){
    //var textOne = document.forms["form1"]["text1"].value;
    let testNumber : string = document.forms["form1"]["addNumber"].value;
    let addNumber : number;
    let minNumber : number = document.forms["form1"]["minNumber"].value;
    let maxNumber : number = document.forms["form1"]["maxNumber"].value;
    addNumber = parseInt(testNumber);
    if (isNaN(addNumber)) {
        alert( "this is not a number");
    } else if ((addNumber < minNumber) || (addNumber > maxNumber)) {
        alert(addNumber + " is out of the ranffge, please try again");
    }
     else {
        let table =  <HTMLTableElement>document.getElementById("listOne");
        let row: HTMLTableRowElement = table.insertRow();
        let cell1 = row.insertCell(0);
        //cell1.appendChild(document.createTextNode(addNumber.toString()));
        cell1.innerHTML = addNumber.toString();

  //       var mode = calcMode();

  //       var median = calcMedian();
    }
}
function calcuateValues(){
    clearList("listTwo");
    sortTable();
    let mean: number = calcMean();
    let table = <HTMLTableElement>document.getElementById("listTwo");
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = mean.toString();
    let median: number = calcMedian();
   // var row = table.insertRow();
    cell1 = row.insertCell(1);
    cell1.innerHTML = median.toString();
    let mode: number = calcMode();
    // var row = table.insertRow();
    cell1 = row.insertCell(2);
     cell1.innerHTML = mode.toString();
}
function calcMean(){

    let refTab=<HTMLTableElement>document.getElementById("listOne") ;

    let total : number= 0;
    // Loop through all rows and columns of the table and popup alert with the value
    // /content of each cell.
    for ( let i = 0; i<refTab.rows.length; i++ ) {

        let row = refTab.rows.item(i);
      for ( let j = 0; j<row.cells.length; j++ ) {
        let col1 = row.cells.item(j).innerHTML;
        let col: number = parseInt(col1);
        total = col + total;

      }
    }
    let rowsNum: number = total/refTab.rows.length;
    let mean = parseInt(rowsNum.toFixed(2));

    return (mean);
}

function calcMedian() {
    let refTab=<HTMLTableElement>document.getElementById("listOne");

    var  ttl;
    for ( let i = 0; i<refTab.rows.length; i++ ) {
      //  var row = refTab.rows.item(i);

    }
        let half1 : number = (refTab.rows.length)%2;
        let col1: number = (Math.trunc((refTab.rows.length)/2));
        let row = refTab.rows.item(col1);
        let nextRow = refTab.rows.item(col1-1);
        let median: number;
        if (half1 == 0){
            let m1: number = parseInt(row.cells.item(0).innerHTML);
            let m2: number = parseInt(nextRow.cells.item(0).innerHTML);
            median = (m1+ m2)/2;
            }
        else {
          median = parseInt(row.cells.item(0).innerHTML);


    }

    return median;
}

function calcMode(){
    let  modCount1: number =0, modCount2: number = 0, mode: number= 0;
    let table=<HTMLTableElement>document.getElementById("listOne");
    let rows = table.rows;

    for (let i = 0; i < (rows.length -1 ); i++) {

        let x = rows[i].getElementsByTagName("TD")[0];
        let y = rows[i + 1].getElementsByTagName("TD")[0];

        if (Number(x.innerHTML) == Number(y.innerHTML)) {

           modCount1 = modCount1 + 1;
          if (modCount1 > modCount2){
             mode = Number(x.innerHTML);
          }
        } else if(Number(x.innerHTML) != Number(y.innerHTML)){
             modCount2 = modCount1
        }


    }

    return mode;
}
function sortTable() {

  let  switching: boolean;
  let  i: number;
  let shouldSwitch: boolean;
    let table = <HTMLTableElement>document.getElementById("listOne");
    switching = true;

    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      let rows = table.rows;

      for (i = 0; i < (rows.length -1 ); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;

        let x = rows[i].getElementsByTagName("TD")[0];
        let y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }

  }







             */