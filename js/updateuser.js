/**
 * Created by EmmaSofie on 07/12/2016.
 */


function updateUser() {

    var username = " ";
    var password = " ";
    var email = " ";
    var phonenumber = " ";
    var address = " ";
    var mobilepay = " ";
    var cash = " ";
    var transfer = " ";

    var username = localStorage.getItem("userIDName");
    var password = $("#newPassword").val();
    var email = $("#newEmail").val();
    var phonenumber = +$("#newPhonenumber").val();
    var address = $("#newAddress").val();
    var mobilepay = +$("#newMobilepay").prop("checked");
    var cash = +$("#newCash").prop("checked");
    var transfer = +$("#newTransfer").prop("checked");

    console.log("UserIDddd: " + localStorage.getItem("userIDName"));

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

        success: function (data) {
            alert("Success");
            alert(JSON.stringify(data))
        },
        error: function (data) {
            alert("Failure");
            alert(JSON.stringify(data))
        }
    });
}