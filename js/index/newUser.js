/**
 * Created by EmmaSofie on 05/12/2016.
 */
function newUser() {
    var username = $("#newUsername").val();
    var password = $("#newPassword").val();
    var email = $("#newEmail").val();
    var phonenumber = +$("#newPhonenumber").val();
    var address = $("#newAddress").val();
    var mobilepay = +$("#newMobilepay").prop("checked");
    var cash = +$("#newCash").prop("checked");
    var transfer = +$("#newTransfer").prop("checked");

    $.ajax({
        type: "POST",
        url: "https://localhost:8000/createuser",
        dataType: "json",
        data: JSON.stringify({
            "username" : username,
            "password" : password,
            "email" : email,
            "phonenumber" : phonenumber,
            "address" : address,
            "mobilepay" : mobilepay,
            "cash" : cash,
            "transfer" : transfer
        }),

        success: function(data) { alert("Din bruger er nu oprettet, og du kan nu logge ind med dine indtastede oplysninger"); location.reload()},
        error: function(data) { alert("Ups - noget gik galt! Prøv igen, husk at udfylde alle felter"); }
    });
}