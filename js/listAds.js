/**
 * Created by EmmaSofie on 05/12/2016.
 */


function listAds(){

    $.ajax({
        type: "GET",
        url: "https://localhost:8000/getads",
        dataType: "json",

        success: function(data) {

            $("#adsTableBody").dataTable({
                data: data,
                processing: true,
                bDestroy: true,
                columns: [
                    { data : "adId" },
                    { data : "userUsername" },
                    { data : "isbn" },
                    { data : "bookTitle" },
                    { data : "bookAuthor" },
                    { data : "bookEdition" },
                    { data : "rating" },
                    { data : "price" }
                ]
            });
        },

        error: function(data) { alert("Failure"); alert(JSON.stringify(data)); }
    });
}