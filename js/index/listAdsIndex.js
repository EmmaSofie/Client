/**
 * Created by EmmaSofie on 11/12/2016.
 */


function listAdsUser() {

    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/getads",
        type: "GET",


        success: function (data) {

            $('#adsTableBodyIndex').dataTable({
                data: data,
                bDestroy: true,
                columns: [
                    {data: "userUsername"},
                    {data: "isbn"},
                    {data: "bookTitle"},
                    {data: "bookAuthor"},
                    {data: "bookEdition"},
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
                    {data: "price"}




                ]
            });
        },

        error: function (data) {
            alert("Der skete en fejl i indlæsningen af data, prøv venligst igen!");
            alert(JSON.stringify(data));
        }
    });
}