
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


room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}
