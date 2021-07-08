var idEmployee = new Array();
var listDepartment = new Array();
var listPosition = new Array();
var idDepartments = new Array();
var idPosistions = new Array();
$(document).ready(function () {
    loadData();
    loadDepartment();
    loadPosition();
    
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
            var tr = `<tr index="`+index+`">
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
            idEmployee.push(employeeId);
        });
        $('#amount-employee').text(res.length);
        toast({
            title: "Tải dữ liệu thành công",
            type : "success",
            duration : 3000
        });
    }).fail(function (res) {
        toast({
            title: "Tải dữ liệu thất bại",
            type : "error",
            duration : 3000
        });
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
        item = "";
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

function refesh(){
    $("tbody").empty();
    loadData();
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

/**
 * Lấy dữ liệu phòng ban
 * create by: TQHa (8/7/2021)
 */
function loadDepartment(){
    $.ajax({
        method: "GET",
        url : "http://cukcuk.manhnv.net/api/Department"
    }).done(function(res){
        var data = res;
        $.each(data, function (index, item){
            nameDepartment = item["DepartmentName"];
            idDepartment = item["DepartmentId"];
            debugger
            console.log(nameDepartment);
            listDepartment.push(nameDepartment);
            debugger
            idDepartments.push(idDepartment);
        }
        
    )}).fail(function(res){
        toast({
            title: "Tải dữ liệu phòng ban thất bại",
            type : "error",
            duration : 3000
        });
    })
}

/**
 * Lấy dữ liệu vị trí
 * create by: TQHa (8/7/2021)
 */
 function loadPosition(){
    $.ajax({
        method: "GET",
        url : "http://cukcuk.manhnv.net/v1/Positions"
    }).done(function(res){
        var data = res;
        $.each(data, function (index, item){
            namePosition = item["PositionName"];
            idPosistion = item["PositionId"];

            listPosition.push(namePosition);
            idPosistions.push(idPosistion);
        }
    )}).fail(function(res){
        toast({
            title: "Tải dữ liệu vị trí thất bại",
            type : "error",
            duration : 3000
        });
    })
}

/**
 * Thêm dữ liệu vào combo box
 * @param {Number} i số hiệu id
 * @param {Number} type type = 0 là phòng ban, type = 1 là vị trí
 * create by: TQHa (8/7/2021) 
 */
function bindingDataToComboBox(i, type){
    if(type == 0){
        var id = "options-container"+i;
        var main = document.getElementById(id);
        console.log(listDepartment);
        for (var i = 0; i < listDepartment.length; i++){
            console.log(listDepartment[i]);
            var div = document.createElement("div");
            div.classList.add("option");
            div.classList.add("option-selected");
            div.classList.add(`option${i}`);
            
            div.innerHTML= `
            
              <input type="radio" class="radio" id="room-${i}"/>
              <label for="room-${i}">${listDepartment[i]}</label>
            
            `;
            main.appendChild(div);
            
        }
        
    }
}

bindingDataToComboBox(0,0);