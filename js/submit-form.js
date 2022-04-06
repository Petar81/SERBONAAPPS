// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    var form = document.getElementById('form');

    form.addEventListener('submit', function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", "send-email.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("fname=Henry&lname=Ford");
    });
  
  })();  