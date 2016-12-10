/**
 * Created by EmmaSofie on 08/12/2016.
 */

function createAd() {
    var rating = $("#rating").val();
    var comment = $("#comment").val();
    var price = $("#price").val();
    var isbn = $("#isbn").val();

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/createaad",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "isbn": isbn,
            "rating": rating,
            "price": price,
            "comment": comment
        }),

        success: function (data) {
            alert("Den er nu oprettet!");

        },
        error: function (data) {
            alert("Der skete en fejl, prøv venligst igen!");

        }
    });
}