window.onload = function() {
    document.getElementById('dataForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from being submitted

        // Get the data from the form
        var data1 = document.getElementById('secretKey').value;
        var data2 = document.getElementById('sendData').value;

        document.getElementById('dataForm').reset();
        // Encrypt the data
        var ciphertext1 = CryptoJS.AES.encrypt(data2, data1).toString();
        var ciphertext2 = CryptoJS.AES.encrypt(ciphertext1, "CS1102 - 2023/2024 Semester B").toString();

        // Display the encrypted data in the paragraph with id 'encryptedData'
        document.getElementById('displayEncrypted1').innerHTML = ciphertext1;
        document.getElementById('displayEncrypted2').innerHTML = ciphertext2;

        document.getElementById('encrypted').innerHTML = "<h2>Now the data your sent to us only can be decrypted by our private key</h2>";
    });
}
