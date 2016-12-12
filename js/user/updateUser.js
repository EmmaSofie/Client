/**
 * Created by EmmaSofie on 07/12/2016.
 */


function updateUser() {


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
        url: "https://localhost:8000/updateuser",
        dataType: "json",
        xhrFields: {withCredentials: true},
        data: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "phonenumber": phonenumber,
            "address": address,
            "mobilepay": mobilepay,
            "cash": cash,
            "transfer": transfer
        }),

        success: function () {
            alert("Dine oplysninger er nu opdaterede!");
            location.reload();

        },
        error: function () {
            alert("Ups - noget gik galt! Det lykkedes desværre ikke at opdatere dine oplysninger. Prøv igen!");

        }
    });
}