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
    man=localStorage.getItem("lulu");
    console.log(man);
    document.getElementById("hola").innerHTML="hola que tal "+man;
function poker() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("dib").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       halloween = childKey;
      mouster="<div id="+halloween+" onclick='bubli(this.id)'>"+halloween+" </div> <br>";
      document.getElementById("dib").innerHTML+=mouster;

      //Final del código
      });});}
function bubli(halloween){
      localStorage.setItem("halloween",halloween);
      window.location.replace("comentario.html");
}
poker();
function moño(){
      scuter= document.getElementById("bratz").value;
      firebase.database().ref("/").child(scuter).update({
            purpose:"añadir sala"
      });
      localStorage.setItem("scuter",scuter);
      window.location.replace("comentario.html");
}
function pelota(){
      localStorage.removeItem("lulu");
      localStorage.removeItem("halloween");
      window.location.replace("index.html");
}