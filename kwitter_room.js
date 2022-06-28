const firebaseConfig = {
      apiKey: "AIzaSyDwGs9CLCqgPbB4VlQ168EvU6ubvoZzINw",
      authDomain: "let-s-chat-d65c0.firebaseapp.com",
      databaseURL: "https://let-s-chat-d65c0-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d65c0",
      storageBucket: "let-s-chat-d65c0.appspot.com",
      messagingSenderId: "1079461607265",
      appId: "1:1079461607265:web:9ef58389cf3895965db720"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
    // Initialize Firebase
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
