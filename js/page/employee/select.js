/** --------------------------------------------
 * Thêm sự kiện ẩn hiện select box
 * @param {Number} i số hiệu của id đối tượng
 * Create by: TQHa (5/7/2021)
 */
function setEvent(i) {
    let tmp = ".selected" + i;
    let selected = document.querySelector(tmp);
    var a = ".option" + i;
    var b = ".options-container" + i;

    optionsList = document.querySelectorAll(a);

    let optionsContainer = document.querySelector(b);
    selected.addEventListener("click", () => {
        selected.classList.toggle("selected-active");
        optionsContainer.classList.toggle("active");
        var x = "selected-" + i;
        document.getElementById(x).classList.toggle("icon-selected");
    });
    optionsList.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element);
            var y = "content-selected" + i;
            var c = element.querySelector("label").innerHTML;
            if (i == 7) {
                document.getElementById(y).innerHTML = c;
            }
            else {
                document.getElementById(y).value = c;
            }

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
window.addEventListener('mouseup', function (e) {
    for (var i = 0; i < boxArray.length; i++) {

        var box = document.getElementById(boxArray[i]);
        if (e.target != box) {
            if (i == 0) {

                if (document.getElementById("content-selected0").value == "") {

                    let id = "options-container" + i;
                    var main = document.getElementById(id);
                    main.innerHTML = "";
                    bindingDataToComboBox(0, 0);
                }

            }
            if (i == 4) {
                if (document.getElementById("content-selected4").value == "") {

                    let id = "options-container" + i;
                    var main = document.getElementById(id);
                    main.innerHTML = "";
                    bindingDataToComboBox(4, 0);
                }
            }
            if (i == 1) {
                if (document.getElementById("content-selected1").value == "") {

                    let id = "options-container" + i;
                    var main = document.getElementById(id);
                    main.innerHTML = "";
                    bindingDataToComboBox(1, 1);
                }
            }
            if (i == 3) {
                if (document.getElementById("content-selected3").value == "") {

                    let id = "options-container" + i;
                    var main = document.getElementById(id);
                    main.innerHTML = "";
                    bindingDataToComboBox(3, 1);
                }
            }

            x = document.querySelectorAll(".options-container");
            x.forEach(element => {
                element.classList.remove("active");
            });
            y = document.querySelectorAll(".icon-select");
            y.forEach(e => {
                e.classList.remove("icon-selected");
            });
            z = document.querySelectorAll(".selected");
            z.forEach(e => {
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
function displayDeleteContentInput(i, type) {
    if (0 <= i && i <= 5) {
        let x = "#content-selected" + i;
        let y = "delete-icon" + i;
        if ($(x).val != "") {
            document.getElementById(y).style.visibility = "visible";
        }
        $(x).keyup(function () {
            var key = event.keyCode || event.charCode;
            if (key == 9) {
                document.getElementById(y).style.visibility = "hidden";
            }
            if (key == 8) {
                var dInput = this.value;
                if (dInput == "") {
                    document.getElementById(y).style.visibility = "hidden";

                }
            }
            if (type == 0) {
                var dInput = this.value;

                let id = "options-container" + i;
                var main = document.getElementById(id);
                let tmp = 0;
                main.innerHTML = "";
                for (k = 0; k < listDepartment.length; k++) {
                    if (listDepartment[k].includes(dInput)) {
                        tmp++;
                        var div = document.createElement("div");
                        div.classList.add("option");

                        div.classList.add(`option${i}`);

                        div.innerHTML = `
            
                        <input type="radio" class="radio" id="room-${k}"/>
                        <label for="room-${k}">${listDepartment[k]}</label>
                        
                        `;
                        main.appendChild(div);
                    }
                }
                if (tmp != 0) {
                    main.classList.add("active");
                }
                document.getElementById(y).style.visibility = "visible";
            }
            else if (type == 1) {
                var dInput = this.value;

                let id = "options-container" + i;
                var main = document.getElementById(id);

                main.innerHTML = "";
                var tmp = 0;
                for (k = 0; k < listPosition.length; k++) {
                    if (listPosition[k].includes(dInput)) {
                        tmp++;
                        var div = document.createElement("div");
                        div.classList.add("option");

                        div.classList.add(`option${i}`);

                        div.innerHTML = `
            
                        <input type="radio" class="radio" id="position-${k}"/>
                        <label for="position-${k}">${listPosition[k]}</label>
                        
                        `;
                        main.appendChild(div);
                    }
                }
                if (tmp != 0) {
                    main.classList.add("active");
                }
                document.getElementById(y).style.visibility = "visible";
            }


            var main = document.getElementById("options-container2").childNodes;
    var index;
    console.log(main);
    for (i = 0; i < main.length; i++) {
        if (i % 2 != 0) {
            if (main[i].classList.contains("option-selected")) {
                index = i;
            }
        }

    }
    console.log("bbb");

    var key = event.keyCode || event.charCode;

    if (key == 38) {
        for (i = 0; i < main.length; i++) {
            
                if (main[i].classList.contains("option-selected")) {
                    main[i].classList.remove("option-selected");
                    break;
                }
            

        }
        if (index > 0) {

            main[index - 1].classList.add("option-selected");
            var c = main[index - 1].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = index - 1;
        }
        else {
            main[main.length - 1].classList.add("option-selected");
            var c = main[main.length - 1].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = main.length - 1;
        }

    }
    else if (key == 40) {
        for (i = 0; i < main.length; i++) {
            
                if (main[i].classList.contains("option-selected")) {
                    main[i].classList.remove("option-selected");
                    break;
                }
            
        }
        if (index < main.length - 1) {
            main[index + 1].classList.add("option-selected");
            var c = main[index + 1].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = index + 1;
        }
        else {
            main[0].classList.add("option-selected");
            var c = main[0].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = 0;
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
function deleleContentInput(i) {
    let x = "#content-selected" + i;
    $(x).val("");
    let y = "delete-icon" + i;

    document.getElementById(y).style.visibility = "hidden";

    let z = ".option" + i;
    var k = document.querySelectorAll(z);

    k.forEach(element => {
        if (element.classList.contains("option-selected")) {
            element.classList.remove("option-selected");
        }
    });
    if (i == 0) {
        let id = "options-container" + i;
        var main = document.getElementById(id);
        main.innerHTML = "";
        bindingDataToComboBox(0, 0);
    }
    if (i == 1) {
        let id = "options-container" + i;
        var main = document.getElementById(id);
        main.innerHTML = "";
        bindingDataToComboBox(1, 1);
    }
    if (i == 3) {
        let id = "options-container" + i;
        var main = document.getElementById(id);
        main.innerHTML = "";
        bindingDataToComboBox(3, 1);
    }
    if (i == 4) {
        let id = "options-container" + i;
        var main = document.getElementById(id);
        main.innerHTML = "";
        bindingDataToComboBox(4, 0);
    }
}


function moveToChoose(event) {

    var main = document.getElementById("options-container2").childNodes;
    var index;
    console.log(main);
    for (i = 0; i < main.length; i++) {
        if (i % 2 != 0) {
            if (main[i].classList.contains("option-selected")) {
                index = i;
            }
        }

    }
    console.log("bbb");

    var key = event.keyCode || event.charCode;

    if (key == 38) {
        for (i = 0; i < main.length; i++) {
            if (i % 2 != 0) {
                if (main[i].classList.contains("option-selected")) {
                    main[i].classList.remove("option-selected");
                    break;
                }
            }

        }
        if (index > 1) {

            main[index - 2].classList.add("option-selected");
            var c = main[index - 2].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = index - 2;
        }
        else {
            main[main.length - 2].classList.add("option-selected");
            var c = main[main.length - 2].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = main.length - 2;
        }

    }
    else if (key == 40) {
        for (i = 0; i < main.length; i++) {
            if (i % 2 != 0) {
                if (main[i].classList.contains("option-selected")) {
                    main[i].classList.remove("option-selected");
                    break;
                }
            }
        }
        if (index < main.length - 2) {
            main[index + 2].classList.add("option-selected");
            var c = main[index + 2].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = index + 2;
        }
        else {
            main[1].classList.add("option-selected");
            var c = main[1].querySelector("label").innerHTML;
            document.getElementById("content-selected2").value = c;
            index = 1;
        }
    }


}

