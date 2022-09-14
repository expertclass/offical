// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBzy_r1G9lTJ0o3-0wj0oYFZGHW3TCL7xU",
  authDomain: "faculty-form-18e6b.firebaseapp.com",
  databaseURL: "https://faculty-form-18e6b-default-rtdb.firebaseio.com",
  projectId: "faculty-form-18e6b",
  storageBucket: "faculty-form-18e6b.appspot.com",
  messagingSenderId: "417960973359",
  appId: "1:417960973359:web:40e92d7b89ffb4e1a8e2da",
  measurementId: "G-HX827QDTXB",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();

function save() {
  var name = document.getElementById("name").value;
  var degree = document.getElementById("degree").value;
  var experince = document.getElementById("experince").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var userno = document.getElementById("userno").value;

  var email = document.getElementById("email").value;

  var address = document.getElementById("address");

  database.ref("Expert Education Society Teacher Form/" + name).set({
    Name: name,
    Degree: degree,
    Experince: experince,
    Age: age,
    Gender: gender,
    PhoneNumber: userno,
    Email: email,
    Address: address,
  });

  // show alert
  document.querySelector(".alert").style.display = "block";

  //Hide alert after 3 s
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
  //clear form
  document.getElementById("Expert Education Society Teacher Form").reset();
}
