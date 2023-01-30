const firebaseConfig = {
      apiKey: "AIzaSyB5bD2KEPfvj9CC7GFYE1P7tlgSC4yy-hA",
      authDomain: "kwitter-de34e.firebaseapp.com",
      databaseURL: "https://kwitter-de34e-default-rtdb.firebaseio.com",
      projectId: "kwitter-de34e",
      storageBucket: "kwitter-de34e.appspot.com",
      messagingSenderId: "894153462976",
      appId: "1:894153462976:web:5a9a0c005594a9a28fc925"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").value = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding a room"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}