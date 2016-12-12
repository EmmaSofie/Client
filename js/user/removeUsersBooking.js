/**
 * Created by EmmaSofie on 12/12/2016.
 */

function removeUsersBooking(){

   var id = +$("#usersBookingId").val();
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/deletereservation",
        type: "POST",
        xhrFields: { withCredentials: true },
        data: JSON.stringify({
            "id" : id
        }),
        success: function() {
            alert("Du har ikke længere reseveret denne annonce");
            location.reload();
        },
        error: function() {
            alert("Har du egentlig reseveret denne annonce?");
        }
    });
}







