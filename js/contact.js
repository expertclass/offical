// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOFyoYV9uSAp06PCvzZ1XPrNSBuohMP7w",
    authDomain: "contact-us-21f8d.firebaseapp.com",
    databaseURL: "https://contact-us-21f8d-default-rtdb.firebaseio.com",
    projectId: "contact-us-21f8d",
    storageBucket: "contact-us-21f8d.appspot.com",
    messagingSenderId: "923344470035",
    appId: "1:923344470035:web:8a162b1fd31677603b3fe6",
    measurementId: "G-CWYEGHE86J"
};
firebase.initializeApp(config);

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // get Values
    let userfirstname = getInputVal('userfirstname');
    let userlastname = getInputVal('userlastname');
    let useremail = getInputVal('useremail');
    let usernumber = getInputVal('usernumber');
    let message = getInputVal('message');

    //save message

    saveMessage(userfirstname, userlastname, useremail, usernumber, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 2 s
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 2000)
    //clear form
    document.getElementById('contactForm').reset();
}
//function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(userfristname, userlastname, useremail, usernumber, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        Name: userfristname,
        Surname: userlastname,
        Email: useremail,
        PhoneNumber: usernumber,
        Message: message
    })
}