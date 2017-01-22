/**
 * Created by EmmaSofie on 08/12/2016.
 */

function createAd() {
    var rating = +$("#ratingNewAd").val();
    var comment = $("#commentNewAd").val();
    var isbn = +$("#isbnNewAd").val();
    var price = +$("#priceNewAd").val();

    console.log(price);

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
            $('#centerPageUserView').load('html/centerUser.html #home')

        },
        error: function (data) {
            alert("Der skete en fejl, prøv venligst igen!");
        }
    });
}