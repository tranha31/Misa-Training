/** -------------------------------------------
 * lựa chọn trước mục Danh sách nhân viên
 * Create by: TQHa (5/7/2021)
 */
document.getElementById("menu-4").classList.add("nav-content-focus");
document.getElementById("p-1").classList.add("page-active");

/** ---------------------------------
 * Hiển thị form thêm nhân viên, focus vào mã nhân viên
 * Create by: TQHa (5/7/2021)
 */
document.getElementById("addemployee").addEventListener('click', () => {
    document.getElementById("form-infor").style.display = "flex";
    document.getElementById("form-infor").style.flexDirection = "column";
    document.getElementById("b-form").style.display = "block";
    $("#form-infor").attr("status", 0);
    $.ajax({
        method: "GET",
        url: "http://cukcuk.manhnv.net/v1/Employees/NewEmployeeCode"
    }).done(function (res) {
        document.getElementById("input1").value = res;
        toast({
            title: "Form thêm nhân viên mới",
            type: "info",
            duration: 3000
        });
    }).fail(function (res) {
        toast({
            title: "Hiển thị form thêm nhân viên mới thất bại",
            type: "error",
            duration: 3000
        });
    })
    document.getElementById("input1").focus();
    $("#input2").val("");
    $("#em-date-birth").val("");
    $("#content-selected2").val("");
    $("#input3").val("");
    $("#em-date-cmt").val("");
    $("#input5").val("");
    $("#employee-id").val("");
    $("#input6").val("");
    $("#input7").val("");
    $("#content-selected3").val("");
    $("#content-selected4").val("");
    $("#input8").val("");
    $("#input9").val("");
    $("#em-join").val("");
    $("#content-selected5").val("");
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
});

/**
 * Hiển thị cảnh báo đóng form
 * create by: TQHa (8/7/2021)
 */
function warningCloseForm() {
    $("#pop-up").fadeIn();
    document.getElementById("form-infor").style.zIndex = 0;
    document.getElementById("b-form").style.display = "block";
    document.getElementById("pop-up-title").innerHTML = "Đóng form thông tin nhân viên";
    document.getElementById("content-warning").innerHTML = `Bạn có chắc muốn đóng form nhập "<span>Thông tin nhân viên</span>" hay không`;

    document.getElementById("icon-warning").style.backgroundImage = "url(../../content/icons/warning.png)";
    document.getElementById("cancel").innerHTML = "Tiếp tục nhập";
    document.getElementById("submit").innerHTML = "Đóng";
    document.getElementById("submit").style.backgroundColor = "#01B075";

    document.getElementById("submit").removeEventListener("click", eventHiddenSubmit);
    document.getElementById("submit").addEventListener("click", eventHiddenSubmit);
    
    document.getElementById("close-pop-up").removeEventListener("click", eventHiddenCancel);
    document.getElementById("close-pop-up").addEventListener("click", eventHiddenCancel);
    
    document.getElementById("cancel").removeEventListener("click", eventHiddenCancel);
    document.getElementById("cancel").addEventListener("click", eventHiddenCancel);

}
/**
 * Điều khiển submit
 * create by: TQHa (8/7/2021)
 */
function eventHiddenSubmit() {
    hiddenForm();
    document.getElementById("form-infor").style.zIndex = 20;
    $("#pop-up").hide();
}

/**
 * Điều khiển cancel
 * create by: TQHa (8/7/2021)
 */
function eventHiddenCancel(){
    document.getElementById("form-infor").style.zIndex = 20;
    $("#pop-up").hide();
}

/** ------------------------------
 * Ẩn form thêm nhân viên
 * Create by: TQHa (5/7/2021)
 */
function hiddenForm() {
    document.getElementById("form-infor").style.display = "none";
    document.getElementById("b-form").style.display = "none";
}

/**
 * Tắt popup 
 * create by : TQHa (8/7/2021)
 */
function hiddenPopUp() {
    document.getElementById("pop-up").style.display = "none";
    document.getElementById("b-form").style.display = "none";
    document.getElementById("form-infor").style.zIndex = 20;
}
/** ------------------------------
 * Thu nhỏ kích thước menu
 * Create by: TQHa (5/7/2021)
 */
function resizeMenu() {
    if (document.getElementById("1").style.display == "none") {
        document.getElementById("header-top").style.borderRight = "1px solid #e5e5e5";
        document.getElementById("nav").style.width = "226px";
        document.getElementById("content").style.width = "calc(100% - 227px)";
        a = document.getElementsByClassName("nav-content-text");
        for (i = 0; i < a.length; i++) {
            a[i].style.display = "block";
        }
    }
    else {
        document.getElementById("header-top").style.borderRight = "none";
        document.getElementById("nav").style.width = "60px";
        document.getElementById("content").style.width = "calc(100% - 61px)";
        a = document.getElementsByClassName("nav-content-text");
        for (i = 0; i < a.length; i++) {
            a[i].style.display = "none";
        }
    }

}
/** -------------------------------
 * Kiểm tra file nhập vào có đúng định dạng. Nếu đúng thì hiển thị
 * @returns src của ảnh
 * Create by: TQHa (5/7/2021)
 */
function fileValidation() {
    var fileInput = document.getElementById("a-1");
    var filePath = fileInput.value;
    //console.log(filePath);
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        alert("Vui lòng upload các file có định dạng: .jpeg/.jpg/.png/.gif only.");
        fileInput.value = "";
        return false;
    }
    else {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("dislay-avatar").style.backgroundImage = 'url("' + e.target.result + '")';
            };
            //reader.readAsBinaryString(fileInput.files[0]);
            reader.readAsDataURL(fileInput.files[0]);

        }
    }
}

