

// var count=0;
    $("document").ready(function(){
        $("#btn").click(()=>{
            $.get("https://jsonplaceholder.typicode.com/todos",(res,status,xhr)=>{
                if(status=="success"){
                    var response=JSON.parse(xhr.responseText);
                    var table="";
                    var table="<tr><th>Check</th><th>User Id</th><th>Id</th><th>Title</th><th>Completed</th></tr>";
                    for(var i=0;i<res.length;i++){
                        table +="<tr>";
                        table+="<td> "+"<input type=\"checkbox\">"+"</td>";
                        table+="<td> "+ response[i].userId +"</td>";
                        table+="<td> "+ response[i].id+"</td>";
                        table+="<td> "+ response[i].title +"</td>";
                        table+="<td> "+ response[i].completed +"</td>";
                        table+="</tr>";
                    }
                    $("#data").html(table);   
                    table = document.getElementById("data");
                    tr = table.getElementsByTagName("tr");  

                    for (i = 1; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[4];  
                    if(td.innerHTML=="true"||td.innerText=="true"){
                    //    console.log("entered true");
                       var inputs= document.getElementsByTagName("input");
                    //    console.log("entered loop"+inputs.length);
                         inputs[i-1].disabled = true;
                        
                    }
                  
                     }      
                }
            })
        });
    });
$("#data").click((e)=>{
    console.log("element"+e.target.type);
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    var promise=new Promise(function(resolve,reject){
        setTimeout(function(){
            if(checkboxes.length==5)
            resolve();
            
        },1000);
    });

promise.then(getpost);

function getpost(){
    alert("Congrats!!! 5 Tasks have been Successfully Completed");
    for (var i = 0; i < checkboxes.length; i++) {
             console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].disabled = true;
             }
         }
}
});
