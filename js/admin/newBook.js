/**
 * Created by EmmaSofie on 07/12/2016.
 */


function newBook() {
    var title = $("#title").val();
    var author = $("#author").val();
    var edition = $("#edition").val();
    var isbn = $("#isbn").val();


    $.ajax({
        type: "POST",
        url: "https://localhost:8000/createbook",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "isbn": isbn,
            "title": title,
            "edition": edition,
            "author": author
        }),

        success: function () {
            alert("Din bog er nu sat tilsalg!");

        },
        error: function () {
            alert("Din bog blev ikke oprette - prøv venligst igen!");

        }
    });
}