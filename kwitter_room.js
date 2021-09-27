
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDGWq2XaU4mN9dtE0yhIl9enCMVSZjgk6c",
      authDomain: "kwitter-e858b.firebaseapp.com",
      databaseURL: "https://kwitter-e858b-default-rtdb.firebaseio.com",
      projectId: "kwitter-e858b",
      storageBucket: "kwitter-e858b.appspot.com",
      messagingSenderId: "628728368437",
      appId: "1:628728368437:web:0f6bd04858d2112756d07c"
    };
    
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " +  user_name + "!";

function addRoom(){
      room_name = document.getElementById("type_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding the room names."
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

