/**
 * Thay đổi bản ghi khi nhấn chuột vào
 */
$("tbody").on("click", "tr", function(){
    $(this).siblings().removeClass("after-click");
    $(this).toggleClass("after-click");
});
