/*
I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy. No part of this assessment has been copied
 manually or electronically from any other source (including web sites) except for the information supplied by the WEB222 instructors 
 and / or made available in this assessment for my use. I also declare that no part of this assignment has been distributed to other students.

Name: Jiya Giri
Student Id: 127950210
Section: ZAA
*/

function fn() {
  let hiring = document.getElementById("hiring");
  if (hiring.checked == true) {
    document.getElementById("rate").style.display = "block";
  } else {
    document.getElementById("rate").style.display = "none";
  }
}
