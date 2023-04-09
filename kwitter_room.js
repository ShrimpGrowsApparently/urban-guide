var firebaseConfig = {
      apiKey: "AIzaSyBad0dPA6rQiMyGbylQVwU_FFiNHalvalA",
      authDomain: "twitterbutnothing.firebaseapp.com",
      databaseURL: "https://twitterbutnothing-default-rtdb.firebaseio.com",
      projectId: "twitterbutnothing",
      storageBucket: "twitterbutnothing.appspot.com",
      messagingSenderId: "820755401617",
      appId: "1:820755401617:web:d7dd4df7b85f13c3d0a830",
      measurementId: "G-GXQEE4C8KJ"
    };
  

      firebase.initializeApp(firebaseConfig);
      

      userName = localStorage.getItem("userName");
      document.getElementById("displayUser").innerHTML= "Welcome, " + userName + " !";

function newRoom() {
   room_name = document.getElementById("roomName").value;
 firebase.database().ref("/").child(room_name).update({
    purpose :   "adding room names"
      });
       localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
 }
        
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -->  " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;



      


      //End code
      });});}
getData();
function Logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
