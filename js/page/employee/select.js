
//Tạo sự kiện nhấn ra ngoài thì ẩn select box
var boxArray = ['selected-0', 'selected-1', 'selected-2', 'selected-3', 'selected-4',
    'selected-5', 'selected-6', 'selected-7']
function unDisplayComboBox(k) {
    var id = "selected-" + k;
    window.addEventListener('mouseup', function (e) {

        var box = document.getElementById(id);
        if (e.target != box) {
            x = "options-container" + k;
            document.getElementById(x).classList.remove("active");
            y = "selected-" + k;
            document.getElementById(y).classList.remove("icon-selected");

            if (k != 6 && k != 7) {
                z = "selected" + k
                document.getElementById(z).classList.remove("selected-active");
            }
        }


    });
}

unDisplayComboBox(0);
unDisplayComboBox(1);
unDisplayComboBox(2);
unDisplayComboBox(3);
unDisplayComboBox(4);
unDisplayComboBox(5);
unDisplayComboBox(6);
unDisplayComboBox(7);



/**
 * Hiển thị list option
 * @param {Number} i số hiệu id
 * create by : TQHa (11/7/2021) 
 */
function setEvent(i) {
    if (i == 7 || i == 6) {
        var idOption = "options-container" + i;
        var idIcon = "selected-" + i;
        var idCombo = "selected" + i;
        var classOps = ".option" + i;
        var idI = "content-selected" + i;
        let optionContainer = document.getElementById(idOption);
        optionContainer.classList.toggle("active");
        document.getElementById(idIcon).classList.toggle("icon-selected");
        if (i == 6) {
            document.getElementById(idCombo).toggle("icon-selected");
        }
        var optionContainer1 = document.querySelectorAll(classOps);
        optionContainer1.forEach(e => {
            var va = e.querySelector("label").innerHTML;
            e.classList.remove("option-selected");
            if (va == document.getElementById(idI).innerHTML) {
                e.classList.add("option-selected");
            }
        })
        setValue(i);
        
    }
    else {


        var id = "content-selected" + i;
        var dIput = document.getElementById(id).value;
        //document.getElementById(id).focus();

        if (dIput == "") {
            if (i == 0) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                var d = document.createElement("div");
                d.classList.add("option");
                d.classList.add(`option${i}`);
                d.innerHTML = `
            <input type="radio" class="radio" id="room-0"/>
            <label for="room-0">Tất cả phòng ban</label>
            `;
                main.appendChild(d);
                for (var k = 0; k < listDepartment.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="room-${k + 1}"/>
                  <label for="room-${k + 1}">${listDepartment[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 4) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listDepartment.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="roomf-${k + 1}"/>
                  <label for="roomf-${k + 1}">${listDepartment[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 1) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                var d = document.createElement("div");
                d.classList.add("option");
                d.classList.add(`option${i}`);
                d.innerHTML = `
            <input type="radio" class="radio" id="position-0"/>
            <label for="position-0">Tất cả vị trí</label>
            `;
                main.appendChild(d);
                for (var k = 0; k < listPosition.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="position-${k + 1}"/>
                  <label for="position-${k + 1}">${listPosition[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 3) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listPosition.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="positionf-${k + 1}"/>
                  <label for="positionf-${k + 1}">${listPosition[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 2) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listGender.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="gender-${k + 1}"/>
                  <label for="gender-${k + 1}">${listGender[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 5) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listStatusWork.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="status-${k + 1}"/>
                  <label for="status-${k + 1}">${listStatusWork[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }

        }
        else {
            if (i == 0) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                var d = document.createElement("div");
                d.classList.add("option");
                d.classList.add(`option${i}`);
                d.innerHTML = `
            <input type="radio" class="radio" id="room-0"/>
            <label for="room-0">Tất cả phòng ban</label>
            `;
                if (dIput == "Tất cả phòng ban") {
                    d.classList.add("option-selected");
                }
                main.appendChild(d);
                for (var k = 0; k < listDepartment.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    if (dIput == listDepartment[k]) {
                        div.classList.add("option-selected");

                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="room-${k + 1}"/>
                  <label for="room-${k + 1}">${listDepartment[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 4) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listDepartment.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);
                    if (dIput == listDepartment[k]) {
                        div.classList.add("option-selected");
                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="roomf-${k + 1}"/>
                  <label for="roomf-${k + 1}">${listDepartment[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 1) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                var d = document.createElement("div");
                d.classList.add("option");
                d.classList.add(`option${i}`);
                d.innerHTML = `
            <input type="radio" class="radio" id="position-0"/>
            <label for="position-0">Tất cả vị trí</label>
            `;
                if (dIput == "Tất cả vị trí") {
                    d.classList.add("option-selected");
                }
                main.appendChild(d);
                for (var k = 0; k < listPosition.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    if (dIput == listPosition[k]) {
                        div.classList.add("option-selected");

                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="position-${k + 1}"/>
                  <label for="position-${k + 1}">${listPosition[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 3) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listPosition.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);
                    if (dIput == listPosition[k]) {
                        div.classList.add("option-selected");
                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="positionf-${k + 1}"/>
                  <label for="positionf-${k + 1}">${listPosition[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 2) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listGender.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);
                    if (dIput == listGender[k]) {
                        div.classList.add("option-selected");
                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="gender-${k + 1}"/>
                  <label for="gender-${k + 1}">${listGender[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
            else if (i == 5) {
                var id = "options-container" + i;
                var main = document.getElementById(id);
                main.innerHTML = "";
                for (var k = 0; k < listStatusWork.length; k++) {

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);
                    if (dIput == listStatusWork[k]) {
                        div.classList.add("option-selected");
                    }
                    div.innerHTML = `
                
                  <input type="radio" class="radio" id="gender-${k + 1}"/>
                  <label for="gender-${k + 1}">${listStatusWork[k]}</label>
                
                `;
                    main.appendChild(div);

                }
            }
        }
        var idOption = "options-container" + i;
        var idIcon = "selected-" + i;
        var idCombo = "selected" + i;
        let optionContainer = document.getElementById(idOption);
        optionContainer.classList.toggle("active");
        document.getElementById(idIcon).classList.toggle("icon-selected");
        document.getElementById(idCombo).classList.toggle("selected-active");
        setValue(i);
    }
}

/**
 * Set giá trị cho thẻ input
 * @param {Number} i số hiệu id
 * create by: TQHa (11/7/2021) 
 */
function setValue(i) {
    var classOp = ".option" + i;
    var options = document.querySelectorAll(classOp);
    var idII = "#content-selected" + i;

    options.forEach(function (element, index) {

        element.addEventListener("click", function () {

            var idInput = "content-selected" + i;
            console.log(idInput);
            var value = element.querySelector("label").innerHTML;
            if (i == 7 || i == 6) {
                document.getElementById(idInput).innerHTML = value;

                var idOption = "options-container" + i;
                var idIcon = "selected-" + i;
                var idCombo = "selected" + i;
                let optionContainer = document.getElementById(idOption);
                optionContainer.classList.remove("active");
                //document.getElementById(idIcon).classList.remove("icon-selected");

            }
            else {
                $(idII).attr("index", index);
                if (i == 0 || i == 4) {
                    $(idII).attr("type", 0);
                }
                if (i == 1 || i == 3) {
                    $(idII).attr("type", 1);
                }
                if (i == 2) {
                    $(idII).attr("type", 2);
                }
                if (i == 5) {
                    $(idII).attr("type", 3);
                }
                document.getElementById(idInput).value = value;
                var idOption = "options-container" + i;
                var idIcon = "selected-" + i;
                var idCombo = "selected" + i;
                let optionContainer = document.getElementById(idOption);
                optionContainer.classList.remove("active");
                document.getElementById(idIcon).classList.remove("icon-selected");
                document.getElementById(idCombo).classList.remove("selected-active");
            }

        });
    })
}

/**
 * Tự động hiển thị kết quả
 * @param {Number} i số hiệu id
 * @param {Number} type loại combobox
 * create by : TQHa(11/7/2021) 
 */
function autoComplete(i, type) {
    var idInput = "#content-selected" + i;
    j = -1;
    $(idInput).keyup(function () {
        idI = "content-selected" + i;
        var dInput = document.getElementById(idI).value;
        var id = "options-container" + i;
        var main = document.getElementById(id);
        main.innerHTML = "";
        var tmp = 0;
        if (type == 0) {
            var x;
            if (i == 0) {
                x = "room";
            }
            else if (i == 4) {
                x = "roomf";
            }
            for (var k = 0; k < listDepartment.length; k++) {
                if (listDepartment[k].includes(dInput)) {
                    tmp = 1;

                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                    
                      <input type="radio" class="radio" id="${x}-${k + 1}"/>
                      <label for="${x}-${k + 1}">${listDepartment[k]}</label>
                    
                    `;
                    main.appendChild(div);

                }

            }
        }
        else if (type == 1) {
            var x;
            if (i == 1) {
                x = "position";
            }
            else if (i == 3) {
                x = "positionf";
            }
            for (var k = 0; k < listPosition.length; k++) {
                if (listPosition[k].includes(dInput)) {
                    tmp = 1;
                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                    
                      <input type="radio" class="radio" id="${x}-${k + 1}"/>
                      <label for="${x}-${k + 1}">${listPosition[k]}</label>
                    
                    `;
                    main.appendChild(div);

                }

            }
        }
        else if (type == 2) {
            for (var k = 0; k < listGender.length; k++) {
                if (listGender[k].includes(dInput)) {
                    tmp = 1;
                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                    
                      <input type="radio" class="radio" id="gender-${k + 1}"/>
                      <label for="gender-${k + 1}">${listGender[k]}</label>
                    
                    `;
                    main.appendChild(div);

                }

            }
        }
        else if (type == 3) {
            for (var k = 0; k < listStatusWork.length; k++) {
                if (listStatusWork[k].includes(dInput)) {
                    tmp = 1;
                    var div = document.createElement("div");
                    div.classList.add("option");

                    div.classList.add(`option${i}`);

                    div.innerHTML = `
                    
                      <input type="radio" class="radio" id="status-${k + 1}"/>
                      <label for="status-${k + 1}">${listStatusWork[k]}</label>
                    
                    `;
                    main.appendChild(div);

                }

            }
        }
        if (tmp == 0) {
            var idS = "selected" + i;
            var idOption = "options-container" + i;
            var idIc = "selected-" + i;
            var idIN = "content-selected" + i;
            document.getElementById(idOption).style.display = "none";
            document.getElementById(idS).classList.add("selected-error");
            document.getElementById(idIc).classList.remove("icon-selected");

            document.getElementById(idIN).title = "Dữ liệu không tồn tại trong hệ thống";
            document.getElementById(idIN).setAttribute("status", 0);
        }
        else {
            var idS = "selected" + i;
            document.getElementById(idS).classList.remove("selected-error");
            var idOption = "options-container" + i;
            var idIcon = "selected-" + i;
            var idCombo = "selected" + i;
            var idIN = "content-selected" + i;
            document.getElementById(idIN).title = "";
            document.getElementById(idIN).setAttribute("status", 1);
            document.getElementById(idOption).style.display = "block";
            let optionContainer = document.getElementById(idOption);
            optionContainer.classList.add("active");
            document.getElementById(idIcon).classList.add("icon-selected");
            document.getElementById(idCombo).classList.add("selected-active");
            setValue(i);

            var classdO = ".option" + i;
            optionList = document.querySelectorAll(classdO);
            var key = event.keyCode;

            if (key == 38) {

                if (j <= 0) {
                    j = optionList.length - 1;
                    optionList[j].classList.toggle("option-hover");
                }
                else {
                    j--;
                    optionList[j].classList.toggle("option-hover");
                }

            }
            if (key == 40) {
                if (j == optionList.length - 1) {
                    j = 0;
                    optionList[j].classList.toggle("option-hover");

                }
                else {
                    j++;
                    optionList[j].classList.toggle("option-hover");
                }
            }
            if (key == 8) {
                j = -1;
            }

            if (key == 13) {

                var v = optionList[j].querySelector("label").innerHTML;
                document.getElementById(idI).value = v;
                var idOption = "options-container" + i;
                var idIcon = "selected-" + i;
                var idCombo = "selected" + i;
                let optionContainer = document.getElementById(idOption);
                optionContainer.classList.remove("active");
                document.getElementById(idIcon).classList.remove("icon-selected");
                document.getElementById(idCombo).classList.remove("selected-active");
                if (type == 0) {
                    for (m = 0; m < listDepartment.length; m++) {
                        if (v == listDepartment[m]) {


                            var idIn = "#content-selected" + i;
                            $(idIn).attr("index", m);

                            $(idIn).attr("type", 0);

                        }
                    }
                }
                else if (type == 1) {
                    for (m = 0; m < listPosition.length; m++) {
                        if (v == listPosition[m]) {

                            var idIn = "#content-selected" + i;
                            $(idIn).attr("index", m);
                            $(idIn).attr("type", 1);

                        }
                    }
                }
                else if (type == 2) {
                    for (m = 0; m < listGender.length; m++) {
                        if (v == listGender[m]) {

                            var idIn = "#content-selected" + i;
                            $(idIn).attr("index", m);
                            $(idIn).attr("type", 2);


                        }
                    }
                }
                else if (type == 3) {
                    for (m = 0; m < listStatusWork.length; m++) {
                        if (v == listStatusWork[m]) {
                            var idIn = "#content-selected" + i;
                            $(idIn).attr("index", m);
                            $(idIn).attr("type", 3);

                        }
                    }
                }
                j = -1;

            }

        }

    });

}

autoComplete(0, 0);
autoComplete(1, 1);
autoComplete(4, 0);
autoComplete(3, 1);
autoComplete(2, 2);
autoComplete(5, 3);

/**
 * Ẩn option khi thẻ input blur
 * @param {Number} i số hiệu id
 * create by : TQHa (12/7/2021)
 */
// function blurOption(i) {
//     var idI = "content-selected" + i;
//     var idOption = "#options-container" + i;
//     var idIcon = "selected-" + i;
//     var idCombo = "selected" + i;
//     document.getElementById(idI).addEventListener("blur", function () {

//         // let optionContainer = document.getElementById(idOption);
//         // optionContainer.classList.remove("active");
//         $(idOption).hide();
//         document.getElementById(idIcon).classList.remove("icon-selected");
//         document.getElementById(idCombo).classList.remove("selected-active");
//     });

// }

// blurOption(0);
// blurOption(1);
// blurOption(2);
// blurOption(3);
// blurOption(4);
// blurOption(5);

/**
 * Method trả về giá trị của combobox
 * create by : TQHa (11/7/2021)
 */
(function ($) {
    $.fn.getText = function () {
        if (this.attr("status") == 0) {
            return null;
        }
        else {
            return this.val();
        }

    };
})(jQuery);

/**
 * Method trả về vị trí của giá trị combobox
 * create by : TQHa (11/7/2021)
 */
(function ($) {
    $.fn.getValue = function () {
        if (this.val() == "") {
            return null;
        }
        else {
            if (this.attr("status") == 0) {
                return null;
            }
            else {
                if(this.val() == "Tất cả phòng ban" || this.val() == "Tất cả vị trí"){
                    return null;
                }

                if(this.attr("type") == 0){
                    var x = this.attr("index")
                    return (idDepartments[x-1]);
                }
                else if(this.attr("type") == 1){
                    var x = this.attr("index")
                    return (idPosistions[x-1]);
                }
                else if(this.attr("type") == 2){
                    var x = this.attr("index")
                    return (idGender[x-1]);
                }
                else{
                    var x = this.attr("index")
                    return (idStatusWork[x-1]);
                }
               
            }
        }
    };
})(jQuery);


