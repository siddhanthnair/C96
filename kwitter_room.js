
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCOKShIZc9rSC6aCT1JGkEiyEMc0fT75fM",
      authDomain: "kwitter-app-2.firebaseapp.com",
      databaseURL: "https://kwitter-app-2-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-2",
      storageBucket: "kwitter-app-2.appspot.com",
      messagingSenderId: "449807373524",
      appId: "1:449807373524:web:5a491d1f880dc5f5991741"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  username= localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome "+username;
  function addroom(){
        console.log("testing");

roomname= document.getElementById("roomname").value;
firebase.database().ref("/").child(roomname).update({
purpose:"add the room name"
});
localStorage.setItem("roomname", roomname);
window.location="kwitter_page.html";
  }
  


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname"+ Room_names);
row="<div class ='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" +Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("roomname", name);
window.location= "kwitter_page.html";
}

function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location="index.html";
}