var firebaseConfig = {
    apiKey: "AIzaSyDzXMhm_4mmSiVZpIO1loauLaWTiuMmKpg",
    authDomain: "kwitter-ba0f7.firebaseapp.com",
    databaseURL: "https://kwitter-ba0f7-default-rtdb.firebaseio.com/",
    projectId: "kwitter-ba0f7",
    storageBucket: "kwitter-ba0f7.appspot.com",
    messagingSenderId: "551941488929",
    appId: "1:551941488929:web:3dc566a989b58d44f23e60"
  };
  firebase.initializeApp(firebaseConfig);
  var audifono=localStorage.getItem("halloween");
  function luz(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(audifono).push({
        nombre:libro,
        message: msg,
        like: 0

  });
  }
  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("botella").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                nombre = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4> " + nombre + "<img class='user_tick' src='tick.png'></h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("botella").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updateLike(message_id) {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like: updated_likes
    });

}

function logout() {
    localStorage.removeItem("comentario.html");
    localStorage.removeItem("kwitter_room.html");
    window.location.replace("index.html");
}