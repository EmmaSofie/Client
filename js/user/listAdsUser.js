/**
 * Created by EmmaSofie on 05/12/2016.
 */

/* Creating HTTP call.  */

function listAds() {

    $.ajax({
        type: "GET",
        url: "https://localhost:8000/getads",
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
                    {data: "price"},
                    {
                        data: "rating", render: function (data) {
                        switch (JSON.stringify(data)) {
                            case '1' :
                                return '*';
                                break;
                            case '2' :
                                return '**';
                                break;
                            case '3' :
                                return '***';
                                break;
                            case '4' :
                                return '****';
                                break;
                            case '5' :
                                return '*****';
                                break;
                        }
                    }




                    },



                    {data: "bookTitle"},
                    {data: "bookAuthor"},
                    {data: "bookEdition"}



                ]
            });
        },
        error: function (data) {
            alert(JSON.stringify(data))
        }
    });
}