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

    var result = true;
    //Kiểm tra các điều kiện
    if (employeeCode == "") {
        notificationNull(1);
        result = false;
    }

    if (employeeName == "") {
        notificationNull(2);
        result = false;
    }
    else {
        if (!checkFullName(employeeName)) {
            notificationInputAfterSubmit(2, "Tên không hợp lệ");
            result = false;
        }
    }

    if (employeeIdential == "") {
        notificationNull(3);
        result = false;
    }
    else {
        if (!checkIndentialCode(employeeIdential)) {
            notificationInputAfterSubmit(3, "CMND/CCCD không hợp lệ");
            result = false;
        }
    }

    if (employeeEmail == "") {
        notificationNull(6);
        result = false;
    }
    else {
        if (!validateEmail(employeeEmail)) {
            notificationInputAfterSubmit(6, "Email không hợp lệ");
            result = false;
        }

    }

    if (employeePhoneNumber == "") {
        notificationNull(7);
        result = false;
    }
    else {
        if (!checkPhoneNumber(employeePhoneNumber)) {
            notificationInputAfterSubmit(7, "Số điện thoại không hợp lệ");
            result = false;
        }
    }

    if (!checkTaxCode(employeeTaxCode)) {
        notificationInputAfterSubmit(8, "Mã số thuế phải có 10 hoặc 13 số");
        result = false;
    }

    if (!checkSalary(employeeSalary)) {
        notificationInputAfterSubmit(9, "Lương cơ bản tối thiểu là 1.000");
        result = false;
    }

    if (checkAge(employeeDOB) < 18) {
        notificationInputAfterSubmit(10, "Chưa đủ 18 tuổi");
        result = false;
    }

    //Nếu thỏa mãn hết điều kiện thì gửi 
    if(result){
        
    }
}
/**
 * Kiểm tra email nhập vào có hợp lệ
 * @param {String} email 
 * @returns đúng hoặc sai
 * Create by: TQHa (6/7/2021)
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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


    if (phone.match(numbers) || phone.match(num) || phone.match(numb) || phone.match(n)) {
        return true;
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
function checkFullName(name) {
    var letters = /^[A-Za-z       ]+$/;

    if (name.match(letters)) {
        return true;
    }
    else {
        return false;
    }

}

/**
 * Kiểm tra độ dài số CMND/CCCD
 * @param {Number} code số CMND/CCCD 
 * @returns đúng hoặc sai
 * Create by: TQHa (7/7/2021)
 */
function checkIndentialCode(code) {

    if (code.length == 9 || code.length == 12) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * Kiểm tra mã số thuế nhập vào có 10 hoặc 13 số
 * @param {Number} code mã số thuế
 * @returns hợp lệ hoặc không
 * create by: TQHa (7/7/2021)
 */
function checkTaxCode(code) {
    if (code == "") {
        return false;
    }
    else {
        if (code.length == 10 || code.length == 13) {
            return true;
        }
        else {
            return false;
        }
    }

}
/**
 * Kiểm tra tiền lương nhập vào có lớn hơn 1k vnđ
 * @param {Number} salary 
 * @returns hợp lệ hoặc không
 * create by: TQHa (7/7/2021)
 */
function checkSalary(salary) {
    if (salary.length > 0) {
        if (salary.length >= 4) {
            return true;
        }
        else {
            return false;
        }
    }
    return true;
}
/**
 * Chi cho phép nhập số từ bàn phím
 * @param {Element} textbox đối tượng cần đặt sự kiện 
 * @param {String} inputFilter nội dung nhập 
 * create by: TQHa (7/7/2021)
 */
function setInputFilter(textbox, inputFilter) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
        textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    });
}


/**
 * Đặt sự kiện nhập số cho các trường số cmnd, mã số thuế cá nhân và mức lương.
 */
setInputFilter(document.getElementById("input3"), function (value) {
    return /^\d*$/.test(value); // Allow digits
});
setInputFilter(document.getElementById("input9"), function (value) {
    return /^\d*$/.test(value); // Allow digits
});
setInputFilter(document.getElementById("input8"), function (value) {
    return /^\d*$/.test(value); // Allow digits
});

/**
 * Thêm dấu chấm khi nhập mức lương
 * create by : TQHa (7/7/2021)
 */
function formatCurrency() {
    var currency = document.getElementById("input9").value;
    var x = new Intl.NumberFormat('vi-VN', { style: 'decimal', currency: 'VND' }).format(currency);
    document.getElementById("input9").value = x;
}
document.getElementById("input9").addEventListener("keyup", () => {
    formatCurrency();
})

/**
 * Tính tuổi của nhân viên
 * @param {mm/dd/yyyy} date ngày sinh 
 * @returns tuổi của nhân viên (tính theo ngày tháng năm)
 * Create by: TQHa (7/7/2021)
 */
function checkAge(date) {
    var dob = new Date(date);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}
/**
 * Thông báo khi input bắt buộc bị bỏ trống
 * @param {Number} i số hiệu id
 * @param {String} content nội dung thông báo  
 * create by : TQHa (7/7/2021)
 */
function notificationInput(i, content) {
    var id = "input" + i;
    var idError = "error-em-code" + i;
    var idTrigle = "trigle-em-code" + i;
    var idDiv = "div-input" + i;
    if (i == 10) {
        document.getElementById("em-date-birth").addEventListener("focus", () => {
            document.getElementById(idError).style.display = "none";
            document.getElementById(idTrigle).style.display = "none";
            document.getElementById("em-date-birth").classList.remove("input-error");
        });
    }
    else {
        document.getElementById(id).addEventListener("focus", () => {
            document.getElementById(idError).style.display = "none";
            document.getElementById(idTrigle).style.display = "none";
            document.getElementById(idDiv).classList.remove("input-error");
        });

        if (i != 8 || i != 9) {
            document.getElementById(id).addEventListener("blur", () => {
                if (document.getElementById(id).value == "") {
                    document.getElementById(idError).style.display = "flex";
                    document.getElementById(idError).innerHTML = "Bạn không thể bỏ trống mục này";
                    document.getElementById(idTrigle).style.display = "flex";
                    document.getElementById(idDiv).classList.add("input-error");
                }

            });
        }
    }


}

/**
 * Thông báo không thể bỏ trống input khi nhấn nút xóa
 * @param {Number} i số hiệu id 
 * Create by: TQHa (7/7/2021)
 */
function notificationNull(i) {
    if ((1 <= i && i <= 3) || (6 <= i && i <= 7)) {
        var id = "input" + i;
        var idError = "error-em-code" + i;
        var idTrigle = "trigle-em-code" + i;
        var idDiv = "div-input" + i;
        document.getElementById(idError).style.display = "flex";
        document.getElementById(idError).innerHTML = "Bạn không thể bỏ trống mục này";
        document.getElementById(idTrigle).style.display = "flex";
        document.getElementById(idDiv).classList.add("input-error");
    }

}
/**
 * Hiển thị cảnh cáo lỗi khi nhập sai quy định
 * @param {Number} i số hiệu input 
 * @param {String} content nội dung cảnh báo
 * Create by: TQHa (7/7/2021)
 */
function notificationInputAfterSubmit(i, content) {
    var id = "input" + i;
    var idError = "error-em-code" + i;
    var idTrigle = "trigle-em-code" + i;
    var idDiv = "div-input" + i;

    if (i == 10) {
        document.getElementById(idError).style.display = "flex";
        document.getElementById(idError).innerHTML = content;
        document.getElementById(idTrigle).style.display = "flex";
        document.getElementById("em-date-birth").classList.add("input-error");
    }
    else{
        document.getElementById(idError).style.display = "flex";
        document.getElementById(idError).innerHTML = content;
        document.getElementById(idTrigle).style.display = "flex";
        document.getElementById(idDiv).classList.add("input-error");
    }
    
}

/**
 * Đặt sự kiện kiểm tra nội dung có trống không cho input
 * create by : TQHa (7/7/2021)
 */
notificationInput(1);
notificationInput(2);
notificationInput(3);
notificationInput(6);
notificationInput(7);
notificationInput(8);
notificationInput(9);
notificationInput(10);