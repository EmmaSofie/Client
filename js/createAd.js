/**
 * Created by EmmaSofie on 08/12/2016.
 */

function createAd() {
    var rating = $("#rating").val();
    var comment = $("#comment").val();
    var price = $("#price").val();
    var isbn = $("#isbn").val();

    console.log("Du er her!");

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
            alert("Success");
            alert(JSON.stringify(data))
        },
        error: function (data) {
            alert("Failure");
            alert(JSON.stringify(data))
        }
    });
}