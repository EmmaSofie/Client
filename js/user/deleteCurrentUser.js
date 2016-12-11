/**
 * Created by EmmaSofie on 12/12/2016.
 */


function deleteCurrentUser(){

    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/deleteuser",
        type: "POST",
        xhrFields: { withCredentials: true },

        success: function(data) {
            alert("Din bruger slettes!!");
            alert("Du omstilles til startsiden");
            window.location.href = "index.html";

        },


        error: function(data) {
            alert("Din bruger kan ikke slettes - Prøv igen");
        }
    });
}