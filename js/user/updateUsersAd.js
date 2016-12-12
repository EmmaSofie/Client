/**
 * Created by EmmaSofie on 12/12/2016.
 */

function updateUsersAd() {



    var price = +$("#newAdPrice").val();
    var rating = +$("#newAdRating").val();
    var comment = $("#newAdComment").val();
    var adId = +$("#adId").val();


    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/updatead",
        type: "POST",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "id": adId,
            "rating": rating,
            "comment": comment,
            "price": price
        }),
        success: function () {
            alert("Dine ændringer for annoncen lykkedes!");
        },
        error: function () {
            alert("Prøv igen");
        }
    });
}

