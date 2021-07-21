//YOUR FIREBASE LINKS
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
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");

    function send(){
message=document.getElementById("message").value;
firebase.database().ref(roomname).push({
name:username, 
message:message,
likes:0
})
    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
      }