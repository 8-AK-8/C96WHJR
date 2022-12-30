var firebaseConfig = {
  apiKey: "AIzaSyAtXyq_ghFsXeIpIEEWFrciV8lepSgSiOU",
  authDomain: "chat-web-3c176.firebaseapp.com",
  databaseURL: "https://chat-web-3c176-default-rtdb.firebaseio.com",
  projectId: "chat-web-3c176",
  storageBucket: "chat-web-3c176.appspot.com",
  messagingSenderId: "615048429265",
  appId: "1:615048429265:web:bf664390e0d179d54a4ff0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem('username');

room_name = localStorage.getItem('room_name');

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });
  document.getElementById("msg").value = "";
}

function getData(){
  firebase.database().ref("/"+ room_name).on('value',
  function (snapshot){
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
      if(childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
      }
    });
  });
}