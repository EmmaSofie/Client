/**
 * Created by EmmaSofie on 08/12/2016.
 */

function reserveBook() {

    var adID = document.getElementById("resID").value;


    $.ajax({
        type: "POST",
        url: "https://localhost:8000/reservead",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id": adID
        }),

        success: function () {
            alert("Du har nu reserveret bogen.")
            alert("Du kommer til startsiden.")
            location.reload();
        },
        error: function () {
            alert("Det lykkedes desværre ikke at reservere bogen, prøv venligst igen!");

        }
    });
}