$(document).ready(function() {
    // $('#start').click(function() {
    //     // window.location.href = './pages/question.html';
    // });

    $("#start").click(function() {
        $("#myModal").fadeIn();
    });

    // ปิด Modal เมื่อกดปุ่ม X
    $(".close").click(function() {
        $("#myModal").fadeOut();
    });

    // ปิด Modal เมื่อคลิกข้างนอก
    $(window).click(function(event) {
        if ($(event.target).is("#myModal")) {
            $("#myModal").fadeOut();
        }
    });
});