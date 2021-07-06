/** --------------------------------------------
 * Thêm sự kiện ẩn hiện select box
 * @param {Number} i số hiệu của id đối tượng
 * Create by: TQHa (5/7/2021)
 */
function setEvent(i){
    let tmp =  ".selected" + i;
    let selected = document.querySelector(tmp);
    var a = ".option" + i;
    var b = ".options-container" + i;
    console.log(i);
    optionsList = document.querySelectorAll(a);
    let optionsContainer = document.querySelector(b);
    selected.addEventListener("click", () => {
        selected.classList.toggle("selected-active");
        optionsContainer.classList.toggle("active");
        var x = "selected-" + i;
        document.getElementById(x).classList.toggle("icon-selected");
    });
    optionsList.forEach(element => {
        element.addEventListener("click", () =>{
            var y = "content-selected" + i;
            var c = element.querySelector("label").innerHTML;
            document.getElementById(y).value = c;
            optionsList.forEach(o => {
                //console.log(o);
                o.classList.remove("option-selected");
            });
            var x = "selected-" + i;
            document.getElementById(x).classList.remove("icon-selected");
            element.classList.add("option-selected");
            optionsContainer.classList.remove("active");
            selected.classList.remove("selected-active");
            displayDeleteContentInput(i);
        });
    });
    
}
//Tạo sự kiện nhấn ra ngoài thì ẩn select box
var boxArray = ['content-selected0', 'content-selected1', 'content-selected2', 'content-selected3', 'content-selected4',
                'content-selected5', 'content-selected6', 'content-selected7']
window.addEventListener('mouseup', function(e){
    for(var i=0; i<boxArray.length; i++){
        var box = document.getElementById(boxArray[i]);
        if(e.target != box){
            x = document.querySelectorAll(".options-container");
            x.forEach(element => {
                element.classList.remove("active");
            });
            y = document.querySelectorAll(".icon-select");
            y.forEach(e =>{
                e.classList.remove("icon-selected");
            });
            z = document.querySelectorAll(".selected");
            z.forEach(e =>{
                e.classList.remove("selected-active");
            });
        }
    }
    
});
/**--------------------------------------------------------------
 * Kiểm tra xem combox có dữ liệu không để ẩn hiện nút xóa
 * @param {Number} i số hiệu của id
 * Create by: TQHa (6/7/2021)
 */
function displayDeleteContentInput(i){
    if(0<=i && i<=5){
        let x = "#content-selected" + i;
        let y = "delete-icon" + i;
        if($(x).val != ""){
            document.getElementById(y).style.visibility = "visible";
        }
        $(x).keypress(function(){
            var dInput = this.value;
            document.getElementById(y).style.visibility = "visible";
        });
        $(x).keyup(function(){
            var key = event.keyCode || event.charCode;
            if(key == 9){
                document.getElementById(y).style.visibility = "hidden";
            }
            if(key == 8){
                var dInput = this.value;
                if(dInput == ""){
                    document.getElementById(y).style.visibility = "hidden";
                }
            }
        });
    }
    
}
/**
 * Xóa nội dung thẻ input tương ứng
 * @param {Number} i số hiệu của id
 * Create by: TQHa (6/7/2021) 
 */
function deleleContentInput(i){
    let x = "#content-selected" + i;
    $(x).val("");
    let y = "delete-icon" + i;
    document.getElementById(y).style.visibility = "hidden";
}
