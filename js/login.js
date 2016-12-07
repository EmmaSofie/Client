/**
 * Created by EmmaSofie on 14/11/2016.
 */


function login(){
    var username = $("#username").val();
    var password = $("#password").val();

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/login",
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "username" : username,
            "password" : password
        }),

        success: function(data) { alert("Success");

            console.log("Data: " + JSON.stringify(data));


            // Når logges ind, skal der skelnes mellem 1 = aministrator, 0 = brugere.

            if (data.type == 1)

            {
                window.location.href = "adminView.html"
            }
            else {
                window.location.href ="userView.html"
            }
        },
        error: function(data) { alert("Failure"); alert(JSON.stringify(data)) }
    });
}