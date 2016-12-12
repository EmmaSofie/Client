/**
 * Created by EmmaSofie on 12/12/2016.
 */

function deleteUser() {

    var id = +$('#deleteUserID').val();

    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/deleteuseradmin",
        type: "POST",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({

            "id": id


        }),


        success: function (data) {
            alert("Brugeren bliver nu slettet fra systemet");
        },


        error: function (data) {
            alert("Den valgte bruger kunne ikke slettes");
        }
    });
}