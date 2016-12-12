/**
 * Created by EmmaSofie on 12/12/2016.
 */


function listBooks() {

    $.ajax({
        type: "GET",
        url: "https://localhost:8000/getbooks",
        dataType: "json",

        success: function (data) {

            $("#booksTableBodyUser").DataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    {data: "isbn"},
                    {data: "title"},
                    {data: "edition"},
                    {data: "author"}
                ]
            });
        },
        error: function (data) {
            alert("Fejl i indlæsningen af data! Prøv venligst igen!");

        }
    });
}