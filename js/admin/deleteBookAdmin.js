/**
 * Created by EmmaSofie on 13/12/2016.
 */


function deleteBookAdmin () {
    var isbn = +$('#deleteBookAdminId').val();
    $.ajax({
        dataType: "json",
        url: "https://localhost:8000/deletebook",
        type: 'POST',
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "isbn" : isbn
        }),
        success: function () {
            alert("Bogen slettes nu i systemet");
            alert("Du bliver viderestillet til oprettelse af en ny bog");
            //location.reload();
            $('#centerPageAdminView').load('html/centerAdmin.html #newBook')
        },
        error: function () {
            alert("Bogen kunne ikke slettes - dette skyldes måske den bruges af bruger" );
        }
    })
}