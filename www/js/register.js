(function() { 'use strict';

    var BASE_URL = 'http://localhost/cross-platform-app-course-december-2017/simple-login-example-backend';

    function onDeviceReady() {
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.getElementById('exampleInputEmail1').value,
                 password = document.getElementById('exampleInputPassword1').value;
            fetch(new Request(BASE_URL + '/register.php'), {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }).then(function (response) {
                return response.json();
            }).then(function (responseJSON) {
                alert(responseJSON.message);
                if(responseJSON.success) {
                    localStorage.setItem('token', responseJSON.data.token);
                    localStorage.setItem('user_id', responseJSON.data.id);
                    document.getElementById('registrationForm').reset();
                }
            });
            return false;
        }, false);
    }

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    onDeviceReady();
    
})();