$(document).ready(function(){
    $('#signup').on('click', '#submitBtn', function(){
        event.preventDefault();
        var fn = $('#inputFirstName').val().trim();
        var ln = $('#inputLastName').val().trim();
        var pw = $('#inputPassword').val().trim();
        var email = $('#inputEmail').val().trim();
        saveUser({
            firstname: fn,
            lastname: ln,
            password: pw,
            email: email
        });
    });

    // $('#login').om('click', '#loginBtn', function(){

    // });

    function saveUser(userInfo){
        $.post("/api/users", userInfo)
        .then(function(){
            console.log("User saved");
        });
    };

});