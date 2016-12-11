/**
 * Created by EmmaSofie on 07/12/2016.
 */

function listAllUsers() {

    console.log("Test");

    $.ajax({
        type: "GET",
        url: "http://localhost:8000/getusers",
        dataType: "json",

        success: function (data) {

            $("#userList").DataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    {data: "Username"},
                    {data: "E-mail"},
                    {data: "Adresse"},
                    {data: "Telefon"}
                ]
            });
        },
        error: function (data) {
            alert("Fejl i indlæsningen af data, prøv venlist igen!");
        }
    });
}