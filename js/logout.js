/**
 * Created by EmmaSofie on 05/12/2016.
 */

function logout(){
   //Ingen variable da der ikke skal bruges noget identifikation for at logge ud

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/logout",
        dataType: "json",
        xhrFields: { withCredentials: true },

        success: function(data) { alert("Success");

        window.location.replace("index.html");

            alert("Du logges nu ud, og bliver først tilbage til startsiden");
            console.log(JSON.stringify(data));

        },


        error: function(data) { alert("Failure");
            console.log("DUM ");

            alert(JSON.stringify(data));

            console.log(JSON.stringify(data));
        } // prøv at kør det her prøv igen
    });
}