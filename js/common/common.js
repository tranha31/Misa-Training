$(document).ready(function () {
    loadData();
});

/**--------------------------
 * Gọi API lấy dữ liệu
 * Create by: TQHa (6/7/2021)
 */
function loadData() {
    //Lấy dữ liệu
    $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        method: "GET"
    }).done(function (res) {
        //Xử lý dữ liệu
        var data = res;

        $.each(data, function (index, item){
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
            var tr = `<tr>
                        <td class="code">`+ employeeCode + `</td>
                        <td>`+ fullName + `</td>
                        <td>`+ genderName + `</td>
                        <td class="date-of-brith">`+ dateOfBirth +`</td>
                        <td>`+ phoneNumber + `</td>
                        <td class="email">`+ email + `</td>
                        <td>`+ positionName + `</td>
                        <td>`+ departmentName + `</td>
                        <td class="salary">`+ salary + `</td>
                        <td>`+ workStatusName + `</td>
                    </tr>`;
            $('tbody').append(tr);
        });
        $('#amount-employee').text(res.length);
    }).fail(function (res) {
        alert("Không thể lấy được dữ liệu");
    });
}

/**-----------------------------------------------
 * Kiểm tra biến đầu vào có dữ liệu hay không?
 * @param {*} item 
 * @returns nếu null, undefined thì trả lại rỗng, ngược lại dữ nguyên
 * Create by: TQHa (6/7/2021)
 */
function checkInvalid(item){
    if(!item){
        item = ""
    }
    return item;
}
 /** --------------------------------------------
  * Định dạng ngày sinh theo chuẩn dd/mm/yyyy
  * @param {date} date 
  * @returns ngày sinh được định dạng chuẩn
  * Create by: TQHa (6/7/2021)
  */
function formatDate(date){
    if(date == ""){
        return "";
    }
    var date = new Date(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if(day < 10){
        day = "0"+day;
    }
    if(month < 10){
        month = "0"+month;
    }
    return day+'/'+month+'/'+year;
}

/**----------------------------------------------
 * Định dạng tiền lương theo chuẩn 000.000.000
 * @param {*} salary 
 * @returns tiền lương được định dạng
 * create by: TQHa (6/7/2021)
 */
function formatSalary(salary){
    if(salary == ""){
        return "";
    }
    salary = salary.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return salary;
}

/**
 * Tạo sự kiện focus cho thẻ input
 * create by: TQHa (6/7/2021)
 */
document.getElementById("input0").addEventListener("focus", () => {
    document.getElementById("div-input0").classList.add("input-focus");
});
document.getElementById("input0").addEventListener("blur", () => {
    document.getElementById("div-input0").classList.remove("input-focus");
});
document.getElementById("input1").addEventListener("focus", () => {
    document.getElementById("div-input1").classList.add("input-focus");
});
document.getElementById("input1").addEventListener("blur", () => {
    document.getElementById("div-input1").classList.remove("input-focus");
});
document.getElementById("input2").addEventListener("focus", () => {
    document.getElementById("div-input2").classList.add("input-focus");
});
document.getElementById("input2").addEventListener("blur", () => {
    document.getElementById("div-input2").classList.remove("input-focus");
});
document.getElementById("input3").addEventListener("focus", () => {
    document.getElementById("div-input3").classList.add("input-focus");
});
document.getElementById("input3").addEventListener("blur", () => {
    document.getElementById("div-input3").classList.remove("input-focus");
});
document.getElementById("input5").addEventListener("focus", () => {
    document.getElementById("div-input5").classList.add("input-focus");
});
document.getElementById("input5").addEventListener("blur", () => {
    document.getElementById("div-input5").classList.remove("input-focus");
});
document.getElementById("input6").addEventListener("focus", () => {
    document.getElementById("div-input6").classList.add("input-focus");
});
document.getElementById("input6").addEventListener("blur", () => {
    document.getElementById("div-input6").classList.remove("input-focus");
});
document.getElementById("input7").addEventListener("focus", () => {
    document.getElementById("div-input7").classList.add("input-focus");
});
document.getElementById("input7").addEventListener("blur", () => {
    document.getElementById("div-input7").classList.remove("input-focus");
});
document.getElementById("input8").addEventListener("focus", () => {
    document.getElementById("div-input8").classList.add("input-focus");
});
document.getElementById("input8").addEventListener("blur", () => {
    document.getElementById("div-input8").classList.remove("input-focus");
});
document.getElementById("input9").addEventListener("focus", () => {
    document.getElementById("div-input9").classList.add("input-focus");
});
document.getElementById("input9").addEventListener("blur", () => {
    document.getElementById("div-input9").classList.remove("input-focus");
});


document.getElementById("content-selected0").addEventListener("focus", () => {
    document.getElementById("selected0").classList.add("input-focus");
});
document.getElementById("content-selected0").addEventListener("blur", () => {
    document.getElementById("selected0").classList.remove("input-focus");
});
document.getElementById("content-selected1").addEventListener("focus", () => {
    document.getElementById("selected1").classList.add("input-focus");
});
document.getElementById("content-selected1").addEventListener("blur", () => {
    document.getElementById("selected1").classList.remove("input-focus");
});
document.getElementById("content-selected3").addEventListener("focus", () => {
    document.getElementById("selected3").classList.add("input-focus");
});
document.getElementById("content-selected3").addEventListener("blur", () => {
    document.getElementById("selected3").classList.remove("input-focus");
});
document.getElementById("content-selected4").addEventListener("focus", () => {
    document.getElementById("selected4").classList.add("input-focus");
});
document.getElementById("content-selected4").addEventListener("blur", () => {
    document.getElementById("selected4").classList.remove("input-focus");
});
document.getElementById("content-selected5").addEventListener("focus", () => {
    document.getElementById("selected5").classList.add("input-focus");
});
document.getElementById("content-selected5").addEventListener("blur", () => {
    document.getElementById("selected5").classList.remove("input-focus");
});