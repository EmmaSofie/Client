/**
 * Created by EmmaSofie on 08/12/2016.
 */

function listAdsAdmin() {


    $.ajax({
        type: "GET",
        url: "https://localhost:8000/getallads",
        dataType: "json",

        success: function (data) {

            console.log("Data: " + JSON.stringify(data));

            $("#adsTableBodyAdmin").DataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    {data: "adId"},
                    {data: "userUsername"},
                    {data: "isbn"},
                    {data: "price"},
                    {data: "rating"},
                    {data: "bookAuthor"},
                    {data: "deleted"},
                    {data: "locked"}
                ]
            });
        },
        error: function (data) {
            alert("Der skete en fejl i indlæsningen af data, prøv venligst igen!");

        }
    });
}