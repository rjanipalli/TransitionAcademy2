function clearList(a) {
    //var Table = document.getElementById(a);
    //Table.innerHTML = "";
    var table = document.getElementById(a);
    var lgth = document.getElementById(a).rows.length;
    
    for (i=lgth-1;i>0;i--)    {   
        table.deleteRow(i);
        
    }   
    //var rowCount = myTable.rows.length; while(--rowCount) myTable.deleteRow(rowCount);    
                 //var x =document.getElementById("feddback").value;
                 // if (x=="")
    //                alert("Feedback Submitted! " );
}

function addToList() {
    //var textOne = document.forms["form1"]["text1"].value;
    var addNumber = document.forms["form1"]["addNumber"].value;
    var minNumber = document.forms["form1"]["minNumber"].value;
    var maxNumber = document.forms["form1"]["maxNumber"].value;
    if (isNaN(addNumber)) {
        alert( "this is not a number");
    } else if ((parseInt(addNumber) < parseInt(minNumber)) || parseInt(addNumber) > parseInt(maxNumber)) {
        alert(addNumber + " is out of range, please try again");
    }
     else {
        var table = document.getElementById("listOne");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        cell1.innerHTML = addNumber; 
        
  //       var mode = calcMode();
        
  //       var median = calcMedian();
    }
}
function calcuateValues(a){
    clearList("listTwo");
    sortTable();
    var mean = calcMean();
    var table = document.getElementById("listTwo");
        var row = table.insertRow(table.rows.length);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = mean;
    var median = calcMedian();  
   // var row = table.insertRow();
    var cell2 = row.insertCell(1);
    cell2.innerHTML = median;  
    var mode = calcMode();  
    // var row = table.insertRow();
     var cell2 = row.insertCell(2);
     cell2.innerHTML = mode; 
}
function calcMean(){
    
    var refTab=document.getElementById("listOne") 
    var  ttl; 
    var total = 0;
    // Loop through all rows and columns of the table and popup alert with the value 
    // /content of each cell. 
    for ( var i = 0; i<refTab.rows.length; i++ ) { 
      
        var row = refTab.rows.item(i); 
      for ( var j = 0; j<row.cells.length; j++ ) { 
        var col = row.cells.item(j).innerHTML;
        
        total = parseInt(col) + parseInt(total);
        
      } 
    }
    rowsNum = total/refTab.rows.length;
    var mean = rowsNum.toFixed(2);
   
    return (mean);
}  

function calcMedian(){
    var refTab=document.getElementById("listOne"); 
    
    var  ttl; 
    for ( var i = 0; i<refTab.rows.length; i++ ) { 
      //  var row = refTab.rows.item(i); 

    }
        var half1 = (refTab.rows.length)%2;
        var col1 = (Math.trunc((refTab.rows.length)/2));
        var row = refTab.rows.item(col1); 
        var nextRow = refTab.rows.item(col1-1);
        if (parseInt(half1) == 0){
            var m1 = row.cells.item(0).innerHTML;
            var m2 = nextRow.cells.item(0).innerHTML;
            var median = (parseInt(m1) + parseInt(m2))/2;
            }
        else {
        var median = (row.cells.item(0).innerHTML);
        

    } 
    
    return median;
}  

function calcMode(){
    var table, rows, modCount1 =0, modCount2 = 0, mode= 0;
    var table=document.getElementById("listOne"); 
    rows = table.rows;

    for (i = 0; i < (rows.length -1 ); i++) {
        
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        
        if (Number(x.innerHTML) == Number(y.innerHTML)) {
          
           modCount1 = Number(modCount1) + 1;
          if (modCount1 > modCount2){
             mode = Number(x.innerHTML)
          }
        } else if(Number(x.innerHTML) != Number(y.innerHTML)){
             modCount2 = modCount1
        }
        

    } 
    
    return mode;
}  
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("listOne");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length -1 ); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
    
  }




        
    

            