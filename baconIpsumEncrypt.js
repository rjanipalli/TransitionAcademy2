function clearList(a) {
    var table = document.getElementById(a);
    if (table != null){
    var lgth = document.getElementById(a).rows.length;
    
    for (i=lgth-1;i>0;i--)    {   
        table.deleteRow(i);
        
    }
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
    
 //   var encryptJson1 = encryptData(myJsonData2);
    var encryptJson2 = encryptData(myJson);
   
    document.getElementById("encryptDataBacon").innerHTML = encryptJson2.join("<p></p>");


       
}

function encryptData(myJson1){
        var asciiChar; //newChar
        var encryptJson=[]; //newJson
      //  alert(myJson1.length);
        for (var para in myJson1){
            var asciiPara ="";
         for (var chara in myJson1[para]){
             var char1 = myJson1[para][chara];
            var asciiCode = char1.charCodeAt(0);
            if (asciiCode >=65 && asciiCode <= 77){
                asciiChar = String.fromCharCode(asciiCode + 13);
            } else if (asciiCode >=78 && asciiCode <= 77){
                asciiChar = String.fromCharCode(asciiCode  - 13);
            } else if (asciiCode >=91 && asciiCode <= 109){
                asciiChar = String.fromCharCode(asciiCode + 13);
            } else if (asciiCode >=110 && asciiCode <= 122){
                asciiChar = String.fromCharCode(asciiCode - 13);
            }
            asciiPara += asciiChar;     
         }   
         encryptJson.push(asciiPara);
        }
        return encryptJson;   
}





    

            