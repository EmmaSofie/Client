/**
 * Created by EmmaSofie on 12/12/2016.
 */

function listUsersReservations() {
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/getmyreservations",
        type: "GET",
        xhrFields: {withCredentials: true},
        success: function (data) {
             $('#listUserReservations').dataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    {data: "adId"},
                    {data: "timestamp"},
                    {data: "bookIsbn"},
                    {data: "userUsername"},
                    {data: "userPhonenumber"},

                ]
            });

        },
        error: function (data) {
            alert("Hov du har stadig ikke reseveret nogen annoncer!");
            location.reload();
        }
    });
}

