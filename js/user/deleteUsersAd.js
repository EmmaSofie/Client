/**
 * Created by EmmaSofie on 12/12/2016.
 */



function deleteUsersAd() {
    var id = +$('#deleteUsersAdId').val();
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/deletead",
        type: "POST",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id": id
        }),
        success: function () {
            alert("Din annonce slettes nu helt fra vores database");
            location.reload();
        },
        error: function () {
            alert("Er du sikker på annoncen, ikke allerede er slettet?");
        }
    });
}