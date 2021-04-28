function clearList(a) {
    var Table = document.getElementById(a);
    Table.innerHTML = "";

    //var rowCount = myTable.rows.length; while(--rowCount) myTable.deleteRow(rowCount);    
                 //var x =document.getElementById("feddback").value;
                 // if (x=="")
    //                alert("Feedback Submitted! " );
}

function addToList(){
    var textOne = document.forms["form1"]["text1"].value;
    var numberX = document.forms["form1"]["number1"].value;
    
    if (numberX == 1) {
        
        var table = document.getElementById("listOne");
         (table.insertRow()).innerHTML = textOne;
    } else 
    if (numberX == 2) {
        var table = document.getElementById("listTwo");
        (table.insertRow()).innerHTML = textOne;
    }
    else   {
        alert(numberX + " not a right choice");
    }   
    
}
            