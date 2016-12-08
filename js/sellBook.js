/**
 * Created by EmmaSofie on 07/12/2016.
 */


function sellBook() {
    var title = $("#title").val();
    var author = $("#author").val();
    var edition = $("#edition").val();
    var isbn = $("#isbn").val();

    console.log("Du er her!");

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