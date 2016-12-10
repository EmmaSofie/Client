/**
 * Created by EmmaSofie on 14/11/2016.
 */


function login() {

    var username1 = document.getElementById("usernameField").value;
    var password1 = document.getElementById("passwordField").value;

    console.log("Username1: " + username1);
    console.log("Password1: " + password1);

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/login",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "username": username1,
            "password": password1
        }),

        success: function (data) {



            localStorage.setItem("userIDName", JSON.stringify(data));

            // Når der logges ind, skal der skelnes mellem 1 = aministrator, 0 = brugere.

            if (data.type == 1) {
                window.location.href = "adminView.html"
                alert("Du logges nu ind som administrator!");
            }
            else {
                window.location.href = "userView.html"
                alert("Tillykke, du kan nu sælge eller købe studiebøger!");
            }
        },
        error: function (data) {
            alert("Du har desværre ikke indtastet korrekt brugernavn og/eller kodeord");

        }
    });
}