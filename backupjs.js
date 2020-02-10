/ JavaScript source code
var db = firebase.firestore();




//store
function storedata(){
    var inputText = document.getElementById("text_field").value;
    // Add a new document in collection "cities"
    db.collection("Users").doc("one").update({
        name: inputText,
       
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}




//store
const list_div = document.querySelector("#list_div");
const crime_div = document.querySelector("#crime_div");
const chat = document.querySelector("#chat");

//store
db.collection("peopleData").get().then(function(querySnapshot) {
    
    querySnapshot.forEach(function(doc) {
       list_div.querySelector("#peopleRow").innerHTML += "<div class='w3-col m4 l3'><img class='w3-left w3-circle w3-margin-right' src="+  doc.data().dp  +"><h3>"  +  doc.data().name  +  "</h3><h3>"  +  doc.data().age  +  "</h3><h3>"  +  doc.data().occupation  +  "</h3><h3>"  +  doc.data().address  +  "</h3></div>";
    });
});

//store
db.collection("forimage").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
       list_div.innerHTML += "<div class='list-item'><img src="+  doc.data().dp  + ">" 
    });
});
//store
db.collection("mostwanted").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
       crime_div.querySelector('#criminalRow').innerHTML += "<div class='w3-col m4 l3'><img src="+  doc.data().dp  +"><h3>"  +  doc.data().name  +  "</h3><h3>"  +  doc.data().crime  +  "</h3><h3>"  +  doc.data().location  +  "</h3>"
    });
});
//store
   //  db.collection("notificationss").get().then(function(querySnapshot) {
//                    querySnapshot.forEach(function(doc) {
  //                  chat.innerHTML += "<div class='profile'><img src="+  doc.data().image  +"></div><div class='message'><p>" +  doc.data().content  +  "</p></div><div class='user'>" +  doc.data().from  +"</div><div class='user'>" +  doc.data().time  +"</div>
    //            </div><br /><br />"
      //          });
        //        });