/**
 * Created by EmmaSofie on 12/12/2016.
 */

function removeBuyersBooking() {



    var id = +$("#removeBookingId").val();
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/unlockad",
        type: "POST",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id": id

        }),
        success: function () {
            alert("Annoncen vil blive sat til salg igen");
        },
        error: function () {
            alert("Annoncen er allerede til salg");
        }
    });
}
