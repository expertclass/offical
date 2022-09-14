// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAHeVJd4qQQepzeHsI_r5nqCg0NuTSd9wo",
    authDomain: "member-form-3974e.firebaseapp.com",
    databaseURL: "https://member-form-3974e-default-rtdb.firebaseio.com",
    projectId: "member-form-3974e",
    storageBucket: "member-form-3974e.appspot.com",
    messagingSenderId: "313291589513",
    appId: "1:313291589513:web:f81c114253d79b8d274358",
    measurementId: "G-TZ9VXFK7HK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();




function save() {
    var name = document.getElementById("name").value;
    var desginataion = document.getElementById("desginataion").value;
    var age = document.getElementById("age").value;
    
    var gender = document.getElementById("gender").value;
    
    var userno = document.getElementById("userno").value;
    var email = document.getElementById("email").value;
    
    var address = document.getElementById("address");

  database.ref("Expert Education Society Membership Form/" + name).set({
    Name: name,
     Desginataion: desginataion,
     Age: age,
     Gender: gender,
     PhoneNumber: userno,
     Email: email,
     Address: address
  })

 


 // show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 s
  setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
   }, 5000)
  //clear form
  document.getElementById("Expert Education Society Membership Form").reset();

  }