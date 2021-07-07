/**
 * Thay đổi bản ghi khi nhấn chuột vào
 */
$("tbody").on("click", "tr", function () {
    $(this).siblings().removeClass("after-click");
    $(this).toggleClass("after-click");
});

/**
 * Double click thì hiển thị form thông tin nhân viên
 */
$("tbody").on("dblclick", "tr", function () {
    $(this).siblings().removeClass("after-click");
    $(this).toggleClass("after-click");
    var id = $(this).attr("name");
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Employees/" + id
    }).done(function (res) {
        var item = res;
        employeeId = item["EmployeeId"];
        employeeCode = checkInvalid(item["EmployeeCode"]);
        fullName = checkInvalid(item["FullName"]);
        genderName = checkInvalid(item["GenderName"]);
        dateOfBirth = checkInvalid(item["DateOfBirth"]);
        dateOfBirth = formatDate(dateOfBirth);
        phoneNumber = checkInvalid(item["PhoneNumber"]);
        email = checkInvalid(item["Email"]);
        positionName = checkInvalid(item["PositionName"]);
        departmentName = checkInvalid(item["DepartmentName"]);
        salary = checkInvalid(item["Salary"]);
        salary = formatSalary(salary);
        workStatusName = checkInvalid(item["WorkStatusName"]);
        identityNumber = item["IdentityNumber"];
        identityDate = item["IdentityDate"];
        identityPlace = item["IdentityPlace"];
        personalTaxCode = item["PersonalTaxCode"];
        joinDate = item["JoinDate"];
        console.log(dateOfBirth);
        dateOfBirth = new Date(2000,08,31);
        identityDate = new Date(identityDate);
        joinDate = new Date(joinDate);
        
        console.log(dateOfBirth);

        document.getElementById("form-infor").style.display = "flex";
        document.getElementById("form-infor").style.flexDirection = "column";
        document.getElementById("b-form").style.display = "block";
        
        $("#input1").val(employeeCode);
        $("#input2").val(fullName);
        $("#em-date-birth").val(dateOfBirth);
        $("#content-selected2").val(genderName);
        $("#input3").val(identityNumber);
        $("#em-date-cmt").val(identityDate);
        $("#input5").val(identityPlace);
        $("#employee-id").val(employeeId);
        $("#input6").val(email);
        $("#input7").val(phoneNumber);
        $("#content-selected3").val(positionName);
        $("#content-selected4").val(departmentName);
        $("#input8").val(personalTaxCode);
        $("#input9").val(salary);
        $("#em-join").val(joinDate);
        $("#content-selected5").val(workStatusName);

    }).fail(function (res) {
        alert("Fail");
    })
})
