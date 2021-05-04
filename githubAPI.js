function clearList(a) {
    var table = document.getElementById(a);
    if (table != null){
    var lgth = document.getElementById(a).rows.length;
    
    for (i=lgth-1;i>0;i--)    {   
        table.deleteRow(i);
        
    }   
}
    
}

async function getTheREPO(){
    var txtREPO = document.forms["form1"]["aText"].value;
    
    var urlString = "https://api.github.com/users/" + txtREPO + "/repos";
    var response = await fetch(urlString);
    if (response.ok){
        var myREPO = await response.json();  
        var linkREPO ="";
        var link;
        for (var x in myREPO){
            //link = myREPO[x].name;
            //linkREPO += myREPO[x].html_url;
            //document.getElementById("REPOForYou").innerHTML = link.link(linkREPO);   
             linkREPO += "<p><a href=" + myREPO[x].html_url + ">" + myREPO[x].name + "</a></p>";
             document.getElementById("REPOForYou").innerHTML = linkREPO;
            
        }
    } else {
        document.getElementById("REPOForYou").innerHTML = "Invalid REPO Name, Please try again";  
    }
    
 


       
}

    

            