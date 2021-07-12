/**
 * Thay đổi bản ghi khi nhấn chuột vào
 */
$("tbody").on("click", "tr", function () {
    $(this).siblings().removeClass("after-click");
    $(this).toggleClass("after-click");
    index = $(this).attr("index");

    $("#delete-btn").attr("index", index);
});

/**
 * Double click thì hiển thị form thông tin nhân viên
 */
$("tbody").on("dblclick", "tr", function () {
    $(this).siblings().removeClass("after-click");
    $(this).toggleClass("after-click");
    var id = $(this).attr("index");
    id = idEmployee[id];
    $("#form-infor").attr("status", 1);
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

        dateOfBirth = convertDate(dateOfBirth);
        identityDate = convertDate(identityDate);
        joinDate = convertDate(joinDate);

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

        errors = document.querySelectorAll(".error");
        errors.forEach(element => {
            element.style.display = "none";
        });
        trigles = document.querySelectorAll(".trigle");
        trigles.forEach(element => {
            element.style.display = "none";
        });
        inputs = document.querySelectorAll(".input");
        inputs.forEach(element => {
            element.classList.remove("input-error");
        });
        toast({
            title: "Hiển thị dữ liệu nhân viên",
            type: "info",
            duration: 3000
        });
    }).fail(function (res) {
        toast({
            title: "Không thể hiển thị thông tin nhân viên",
            type: "warning",
            duration: 3000
        });
    })
});

/**
 * Định dạng lại ngày
 * @param {String} date ngày 
 * @returns ngày dạng yyyy-mm-dd
 * create by : TQHa (8/7/2021)
 */
function convertDate(date) {
    if (date == null) {
        return "";
    }

    d = new Date(date);

    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let a = `${ye}-${mo}-${da}`;

    return a;
}

/**
 * Cảnh báo xóa bản ghi
 * create by: TQHa (8/7/2021)
 */
function deleteWarning() {
    if ($("#delete-btn").attr("index") != "") {
        $("#pop-up").fadeIn();
        document.getElementById("b-form").style.display = "block";
        document.getElementById("pop-up-title").innerHTML = "Xóa nhân viên";
        document.getElementById("content-warning").innerHTML = `Bạn có chắc muốn <span>Xóa nhân viên</span> hay không`;

        document.getElementById("icon-warning").style.backgroundImage = "url(../../content/icons/warning-delete.png)";
        document.getElementById("cancel").innerHTML = "Hủy";
        document.getElementById("cancel").style.width = "100px";
        document.getElementById("submit").innerHTML = "Xóa";
        document.getElementById("submit").style.backgroundColor = "#FF4747";

        document.getElementById("submit").removeEventListener("click", eventPopUp1);
        document.getElementById("submit").addEventListener("click", eventPopUp1);
        
        document.getElementById("close-pop-up").removeEventListener("click", eventPopUp2);
        document.getElementById("close-pop-up").addEventListener("click", eventPopUp2);
        
        document.getElementById("cancel").removeEventListener("click",eventPopUp2);
        document.getElementById("cancel").addEventListener("click", eventPopUp2);
    }
    else {
        toast({
            title: "Bạn chưa chọn nhân viên cần xóa",
            type: "warning",
            duration: 3000
        });
    }

}

/**
 * Điều khiển popup
 * create by : TQHa (8/7/2021)
 */
function eventPopUp1() {
    document.getElementById("b-form").style.display = "none";
    $("#pop-up").hide();
    deleteEmployee();
}
function eventPopUp2() {
    document.getElementById("b-form").style.display = "none";
    $("#pop-up").hide();
}

/**
 * Xóa nhân viên
 * create by: TQHa (8/7/2021)
 */
function deleteEmployee() {
    $.ajax({
        method: "DELETE",
        url: "http://cukcuk.manhnv.net/v1/Employees/" + idEmployee[$("#delete-btn").attr("index")],

    }).done(function (res) {
        $("tbody").empty();
        loadData();
        document.getElementById("submit").removeEventListener("click", eventPopUp1);
        toast({
            title: "Xóa nhân viên thành công",
            type: "success",
            duration: 3000
        });
        $("#delete-btn").attr("index", "");
    }).fail(function (res) {
        document.getElementById("submit").removeEventListener("click", eventPopUp1);
        toast({
            title: "Xóa nhân viên thất bại",
            type: "error",
            duration: 3000
        });
    });

}

