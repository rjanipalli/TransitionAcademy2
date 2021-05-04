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

async function getTheQuote(){
    var numLetters = document.forms["form1"]["aNumber"].value;
    
    var urlStringSmall = "https://api.quotable.io/random?maxLength=100";
    var urlStringMed = "https://api.quotable.io/random?minLength=100&maxLength=200";
    var urlStringLarge = "https://api.quotable.io/random?minLength=250"; 
    //alert(numLetters);
    if (numLetters == 1){
        var response = await fetch(urlStringSmall);
    //    var myQuote = await response.json();
        //alert(response.status);
        //if (response.ok){
        //    alert(myQuote.content);
            //document.getElementById("quoteForYou").innerHTML = myQuote.content;
        //}

    } else if (numLetters == 2){
        var response = await fetch(urlStringMed);
    //    var myQuote = await response.json();
    } else if (numLetters == 3){
        var response = await fetch(urlStringLarge);
    //    var myQuote = await response.json();
    }
    
   var myQuote = await response.json();

    document.getElementById("quoteForYou").innerHTML = ( myQuote.content + "<br/> - " + myQuote.author);
    //document.getElementById("splitDataBacon").innerHTML = myJson.join("<br><br>");
    //stringify (myJson).replace (/\,/g, "\n" ) ;
    //document.body.innerHTML = '<pre>' + JSON.stringify (json_obj, null, 2) + '</pre>'



       
}

    

            