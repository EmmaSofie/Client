/**
 * Created by EmmaSofie on 08/12/2016.
 */

function reserveBook() {

    var adID = document.getElementById("resID").value;

    console.log("ADID: " + adID);

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/reservead",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id": adID
        }),

        success: function (data) {
        },
        error: function (data) {
            alert("Failure");
            alert(JSON.stringify(data))
        }
    });
}