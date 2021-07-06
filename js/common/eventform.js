/**
 * Kiểm tra dữ liệu nhập vào form có hợp lệ, nếu có gọi api gửi dữ liệu
 * create by: TQHa (6/7/2021)
 */
function postValue() {
    var employeeCode = document.getElementById("input1").value;
    var employeeName = document.getElementById("input2").value;
    var employeeDOB = document.getElementById("em-date-birth").value;
    var employeeGender = document.getElementById("content-selected2").value;
    var employeeIdential = document.getElementById("input3").value;
    var dateGetIndential = document.getElementById("em-date-cmt").value;
    var placeGetIndential = document.getElementById("input5").value;
    var employeeEmail = document.getElementById("input6").value;
    var employeePhoneNumber = document.getElementById("input7").value;
    var employeePosition = document.getElementById("content-selected3").value;
    var employeeDepartment = document.getElementById("content-selected4").value;
    var employeeTaxCode = document.getElementById("input8").value;
    var employeeSalary = document.getElementById("input9").value;
    var employeeDateJoin = document.getElementById("em-join").value;
    var employeeWorkStatus = document.getElementById("content-selected5").value; 

    if(!validateEmail(employeeEmail)){
        alert("aaaa");
    }

}
/**
 * Kiểm tra email nhập vào có hợp lệ
 * @param {String} email 
 * @returns đúng hoặc sai
 * Create by: TQHa (6/7/2021)
 */
function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value != "") {
        if (email.value.match(mailformat)) {
            return true;
        }
        else {
            email.focus();
            return false;
        }
    }
    else {
        return false;
    }
}
/**
 * Kiểm tra số điện thoại có hợp lệ
 * @param {String} phone 
 * @returns đúng hoặc sai
 * create by: TQHa (7/7/2021)
 */
function checkPhoneNumber(phone) {
    var numbers = /((09|03|07|08|05|84)+([0-9]{8})\b)/g;
    var numb = /((84)+([0-9]{9})\b)/g;
    var n = /([+]+(84)+([0-9]{9})\b)/g;
    var num = /((02)+([0-9]{9})\b)/g;

    if (phone.value !== '') {
        if (phone.value.match(numbers) || phone.value.match(num) || phone.value.match(numb) || phone.value.match(n)) {
            return true;
        }
        else {
            phone.focus();
            return false;
        }
    }
    else {
        return false;
    }
}

/**
 * Kiểm tra tên nhập có hợp lệ
 * @param {String} name 
 * @returns hợp lệ hoặc không
 * create by : TQHa (7/7/2021)
 */
function checkFullName(fname) {
    var letters = /^[A-Za-z       ]+$/;
    if (fname.value != "") {
        if (fname.value.match(letters)) {
            return true;
        }
        else {
            name.focus();
            return false;
        }
    }
    else {
        return false;
    }
}
