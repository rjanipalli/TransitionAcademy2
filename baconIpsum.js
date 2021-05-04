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

async function getTheData(){
    var numParagraphs = document.forms["form1"]["aNumber"].value;
    
    var urlString = "https://baconipsum.com/api/";

    //https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text
    urlString = urlString + "?type=meat-and-filler&paras=" + numParagraphs;
    //alert(urlString);

    var response = await fetch(urlString);
    var myJson = await response.json();

    document.getElementById("jsonDataBacon").innerHTML = JSON.stringify (myJson).replace (/\,/g, "\n" ) ;
    document.getElementById("splitDataBacon").innerHTML = myJson.join("<br><br>");
    //stringify (myJson).replace (/\,/g, "\n" ) ;
    //document.body.innerHTML = '<pre>' + JSON.stringify (json_obj, null, 2) + '</pre>'



       
}

    

            