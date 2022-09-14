// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGoWrKhqUbxVC5SAPk6rUhc49Ak16ZiCY",
  authDomain: "admission-form-989aa.firebaseapp.com",
  databaseURL: "https://admission-form-989aa-default-rtdb.firebaseio.com",
  projectId: "admission-form-989aa",
  storageBucket: "admission-form-989aa.appspot.com",
  messagingSenderId: "666001934082",
  appId: "1:666001934082:web:a47b66332b96f49543641b",
  measurementId: "G-LJEE7M96Y9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database();




function save() {
 
    var name = document.getElementById('name').value;
    var branch =  document.getElementById('branch').value;
    var year = document.getElementById('year').value;
    var roolnumber = document.getElementById('roolnumber').value;
    var fathername = document.getElementById('fathername').value;
    var mothername = document.getElementById('mothername').value;
    var email = document.getElementById('email').value;
    var qualification = document.getElementById('qualification');
    var caste = document.getElementById('caste').value;
    var gender = document.getElementById('gender').value;
    var religion = document.getElementById('religion').value;
    var course = document.getElementById('course').value;
    var slottime = document.getElementById('slot-time').value;
    var starttime = document.getElementById('start-time').value;
    var endtime = document.getElementById('end-time');
    var address = document.getElementById('address');
    var userno = document.getElementById('userno').value;
    var parentsno = document.getElementById('parentsno').value;

    



  database.ref('Expert Computer Education Centre/' + name).set({
    Year: year,
    RollNumber: roolnumber,
    StudentName: name,
    Branch: branch,
        FatherName: fathername,
        Mothername: mothername,
        Email: email,
        Qualification: qualification,
        Caste: caste,
        Gender: gender,
        Religion: religion,
        Course: course,
        Slottime: slottime,
        Starttime: starttime,
        Endtime: endtime,
        Address: address,
        StudentNo: userno,
        Parentsno: parentsno
  })

 


 // show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 s
  setTimeout(function () {
      document.querySelector('.alert').style.display = 'none';
   }, 3000)
  //clear form
  document.getElementById('Expert Computer Education Centre').reset();


  var body = 'New Admission' + '<br/> Name: '  +name + '<br/> Branch: ' + branch + '<br/> PhoneNumber: ' + userno + '<br/> Email: ' + email
  

  Email.send({
    Host : "smtp.elasticemail.com",
    Port : "2525",
    Username : "devarajbadiger618@gmail.com",
    Password : "7CE2EABF907A4CE879A26D4DD39932ADDDF5",
    To : "expertcomputer153@gmail.com",
    From : "devarajbadiger618@gmail.com",
    Subject : "New Admission" ,
    Body : body  
})
}