/**
 * Created by EmmaSofie on 05/12/2016.
 */

/* Creating HTTP call.  */

function listAds() {

    $.ajax({

        url: "https://localhost:8000/getads",
        type: "GET",
        dataType: "json",

        success: function (data) {

            /* Creating table based upon the received data.
            "Data" is the data in the table and "adID" etc. is the field, which is returned from backend
            for the purpose of inserting the wanted into the table. */

            $("#adsTableBody").DataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    {data: "adId"},
                    {data: "userUsername"},
                    {data: "isbn"},
                    {data: "bookTitle"},
                    {data: "bookAuthor"},
                    {data: "bookEdition"},
                    {data: "rating"},
                    {data: "price"},

                ]
            });
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}