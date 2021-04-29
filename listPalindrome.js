function clearList(a) {
    var table = document.getElementById(a);
    var lgth = document.getElementById(a).rows.length;
    
    for (i=lgth-1;i>0;i--)    {   
        table.deleteRow(i);
        
    }   
    //Table.innerHTML = "";

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
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
       
        cell1.innerHTML = textOne;
       
        cell2.innerHTML = validatePalindrome(textOne);
        
    } else 
    if (numberX == 2) {
        var table = document.getElementById("listTwo");
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
         cell1.innerHTML = textOne;
        
        cell2.innerHTML = validatePalindrome(textOne);
    }
    else   {
        alert(numberX + " not a right choice");
    }   
}
function validatePalindrome(word){
   
        var j=  word.length - 1;
        for(i=0; i<word.length; i++){
            if (i==j || i > j){
                return true;
            }
            if(word[i] != word[j]){
                return false;

            } else {
                j--;
            }
        }
}

    

            