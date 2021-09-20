
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
