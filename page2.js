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

user_name = localStorage.getItem("username");

document.getElementById("username").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })

  localStorage.setItem("room_name", room_name);
  window.location = "page3.html"
}
function getdata() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("Trending_rooms").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirecttothisroom(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("Trending_rooms").innerHTML += row
    });
  });
}

getdata()

function redirecttothisroom(name) {
  localStorage.setItem("room_name", name);
  window.location = "page3.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}