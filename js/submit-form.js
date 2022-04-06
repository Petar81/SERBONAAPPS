// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    var form = document.getElementById('form');
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var message = document.getElementById('message');

    form.addEventListener('submit', function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "send-email.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("fname="+firstName+"&lname="+lastName+"&email="+email+"&message="+message);
    });
  
  })();  