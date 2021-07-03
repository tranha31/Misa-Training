document.getElementById("menu-4").classList.add("nav-content-focus");
document.getElementById("p-1").classList.add("page-active");
document.getElementById("addemployee").addEventListener('click', () => {
    document.getElementById("form-infor").style.display = "flex";
    document.getElementById("form-infor").style.flexDirection = "column";
    document.getElementById("b-form").style.display = "block";
    document.getElementById("em-code").focus();
});
        
function hiddenForm(){
    document.getElementById("form-infor").style.display = "none";
    document.getElementById("b-form").style.display = "none";
}
function resizemenu(){
    if(document.getElementById("1").style.display == "none"){
        document.getElementById("header-top").style.borderRight = "1px solid #e5e5e5";
        document.getElementById("nav").style.width = "226px";
        document.getElementById("content").style.width = "calc(100% - 227px)";
        a = document.getElementsByClassName("nav-content-text");
        for(i=0; i<a.length; i++){
            a[i].style.display = "block";
        }
    }
    else{
        document.getElementById("header-top").style.borderRight = "none";
        document.getElementById("nav").style.width = "60px";
        document.getElementById("content").style.width = "calc(100% - 61px)";
        a = document.getElementsByClassName("nav-content-text");
        for(i=0; i<a.length; i++){
            a[i].style.display = "none";
        }
    }
            
}
function fileValidation(){
    var fileInput = document.getElementById("a-1");
    var filePath = fileInput.value;
    //console.log(filePath);
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert("Vui lòng upload các file có định dạng: .jpeg/.jpg/.png/.gif only.");
        fileInput.value = "";
        return false;
    }
    else{
        if(fileInput.files && fileInput.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                document.getElementById("dislay-avatar").style.backgroundImage = 'url("'+e.target.result+'")';
            }; 
            //reader.readAsBinaryString(fileInput.files[0]);
            reader.readAsDataURL(fileInput.files[0]);
                        
        }
    }
}