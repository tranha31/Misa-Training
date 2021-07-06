/**----------------------------------------
 * Hiển thị nút xóa nội dung thẻ input
 * @param {Number} i số hiệu id
 * Create by: TQHa (6/7/2021)
 */
function displayDeleteContent(i) {
    let x = "#input" + i;
    let y = "delete-input" + i;
    if ($(x).val != "") {
        document.getElementById(y).style.visibility = "visible";
    }
    $(x).keypress(function () {
        var key = event.keyCode || event.charCode;
        var dInput = this.value;
        document.getElementById(y).style.visibility = "visible";

    });
    $(x).keyup(function () {
        var key = event.keyCode || event.charCode;
        if (key == 9) {
            alert("aa");
            document.getElementById(y).style.visibility = "hidden";
        }
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
function deleteContent(i) {
    let x = "#input" + i;
    $(x).val("");
    let y = "delete-input" + i;
    document.getElementById(y).style.visibility = "hidden";
}


