function openSelection(evt, selection) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(selection).style.display = "block";
    evt.currentTarget.className += " active";
}

function generateKey() {
    var key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    document.getElementById("secretKey").innerHTML = key;
  }

window.onload = function() {

    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        // Get the data from the form
        var data1 = document.getElementById('secretKey').innerHTML;
        var data2 = document.getElementById('sendData').value;

        document.getElementById('dataForm').reset();
        // Encrypt the data
        var ciphertext1 = CryptoJS.AES.encrypt(data2, data1).toString();
        var ciphertext2 = CryptoJS.AES.encrypt(ciphertext1, "CS1102 - 2023/2024 Semester B").toString();

        // Display the encrypted data in the paragraph with id 'encryptedData'
        document.getElementById('displayEncrypted1').innerHTML = ciphertext1;
        document.getElementById('displayEncrypted2').innerHTML = ciphertext2;

        document.getElementById('encrypted').innerHTML = "<h1>Now, we can communicate through the encrypted channel!</h1>";
    });
}
