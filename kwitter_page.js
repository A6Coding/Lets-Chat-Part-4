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



function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        username: user_name,
        message: msg,
        likes: 0
    });
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();