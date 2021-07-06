/**----------------------------------------
 * Hiển thị nút xóa nội dung thẻ input
 * @param {Number} i số hiệu id
 * Create by: TQHa (6/7/2021)
 */
function displayDeleteContent(i) {
    var id = "div-input" + i;
    document.getElementById(id).classList.remove("input-focus");
    let x = "#input" + i;
    let y = "delete-input" + i;
    if ($(x).val != "") {
        document.getElementById(y).style.visibility = "visible";
    }
    $(x).keypress(function () {
        var dInput = this.value;
        document.getElementById(y).style.visibility = "visible";
    });
    $(x).keyup(function () {
        var key = event.keyCode || event.charCode;
        if (key == 8) {
            var dInput = this.value;
            if (dInput == "") {
                document.getElementById(y).style.visibility = "hidden";
            }
        }
    });
}
/**--------------------------------
 * Xóa nội dung của input
 * @param {Number} i 
 */
function deleteContent(i){
    let x = "#input" + i;
    $(x).val("");
    let y = "delete-input" + i;
    document.getElementById(y).style.visibility = "hidden";
}
/**--------------------------------------
 * Bỏ focus input khi không nhập kí tự
 * @param {Number} i số hiệu id
 * create by: TQHa (6/7/2021)
 */
 function focusInput1(i){
    console.log("aaa");
    var id = "div-input" + i;
    document.getElementById(id).classList.add("input-focus");
}

