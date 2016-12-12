/**
 * Created by EmmaSofie on 08/12/2016.
 */

function createAd() {
    var rating = +$("#ratingNewAd").val();
    var comment = $("#commentNewAd").val();
    var isbn = +$("#isbnNewAd").val();
    var price = +$("#priceNewAd").val();

    console.log("hey tjek")

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/createad",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "isbn": isbn,
            "rating": rating,
            "price": price,
            "comment": comment
        }),

        success: function () {
            alert("Den er nu oprettet!");
            location.reload();

        },
        error: function (data) {
            alert("Der skete en fejl, prøv venligst igen!");
            alert(JSON.stringify(data));
        }
    });
}