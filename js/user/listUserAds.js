/**
 * Created by EmmaSofie on 12/12/2016.
 */

function listUserAds() {
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/getmyads",
        type: "POST",
        xhrFields: {withCredentials: true},

        success: function (data) {

            $("#listUserAdsBody").dataTable({

                data: data,
                bDestroy: true,
                columns: [
                    {data: "adId"},
                    {data: "isbn"},
                    {data: "price"},
                    {
                        data: "rating", render: function (data) {
                        switch (JSON.stringify(data)) {
                            case '1' :
                                return '*'
                                break;
                            case '2' :
                                return '**'
                                break;
                            case '3' :
                                return '***'
                                break;
                            case '4' :
                                return '****'
                                break;
                            case '5' :
                                return '*****'
                                break;
                        }
                    }
                    },
                    {data: "comment"},
                    {
                        data: "locked", render: function (data) {
                        switch (JSON.stringify(data)) {
                            case '0' :
                                return 'Ikke reseveret'
                                break;
                            case '1' :
                                return 'Reseveret'
                                break;
                        }
                    }
                    },
                ]
            });
        },
        error: function () {
            alert("Hov - du har ikke oprettet nogle annoncer");
            location.reload();
        }
    });
}
