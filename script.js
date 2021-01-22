import {uuidv4 as uuid} from "./helpers/functions.js";
import User from "./models/User.js";


const users = [];
let userdata;


document.getElementById('button').addEventListener('click', () => {
    userdata = new User(`${firstname.value}`, `${lastname.value}`, `${email.value}`, `${phone.value}`, `${address.value}`, `${city.value}`, `${zip.value}`)
    users.push(userdata)
    // document.getElementById('text-output').innerText = 'Created'
    console.log(userdata)
 
  
})



let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 3) {
            e.preventDefault();
            document.getElementById(`${e.target.id}-error`).innerText = 'För få tecken i ' + e.target.id
            document.getElementById('button').disabled = true
        }
        else {
            document.getElementById(`${e.target.id}-error`).innerText = ' '
            document.getElementById('button').disabled = false
        }
    })
} 

function validateEmail(email) {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(email);
  }
  function validate() {
    let result = $("#email-error");
    let email = $("#email").val();
    result.text("");
    if(validateEmail(email)) {
      result.text(email + " is valid");
      result.css("color", "blue");
    } else {
      result.text(email + " is not a valid email");
      result.css("color", "red");
    }
    return false;
  }

$(document).ready(function(){
    
  

    $("#email").on("keyup", validate);
    $("#button").on("click", validate);
 
    $("body").delegate(".flip", "click", function(){
      $('.panel').not($(this).next(".panel").slideToggle("slow")).slideUp("slow");
    });
      $("#button").click(function() {
          $("#users").append(`<div class="flip">${userdata.displayName}</div><div class="panel"> Email: ${userdata.email}, 
          <br>Phone: ${userdata.phonenumber}
          <br>Adress: ${userdata.address}
          <br>City: ${userdata.city}
          <br>Zipcode: ${userdata.zip}
          
          </div>`);
  });


});




