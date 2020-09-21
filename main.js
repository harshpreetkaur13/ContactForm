function validateform()
      {  
          var name=document.myform.name.value;  
          var number=document.myform.number.value;  
          if (name==null || name=="")
          {  
              alert("Name can't be blank");  
              return false;  
          }
          else if(number.length<10)
          {  
              alert("Mobile number must contain 10 digits");  
              return false;  
          }  
      }  

var config = {
    apiKey: "AIzaSyBDItdyO5Kb_2q1XCtack-ypdsW3ELhMNc",
    authDomain: "contactform-27b34.firebaseapp.com",
    databaseURL: "https://contactform-27b34.firebaseio.com",
    projectId: "contactform-27b34",
    storageBucket: "contactform-27b34.appspot.com",
    messagingSenderId: "433537525520"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var number = getInputVal('number');
  var dropdown = getInputVal('dropdown');
  var desc = getInputVal('desc');

  // Save message
  saveMessage(name, email, number, dropdown, desc);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, number, dropdown, desc){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    number:number,
    dropdown:dropdown,
    desc:desc
  });
}
