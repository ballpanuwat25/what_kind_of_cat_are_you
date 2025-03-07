$(document).ready(function() {
    $('#submit').click(function() {
        let name = $('#name').val();
        if(!name) {
            alert('ใส่ชื่อก่อนน้า 😘');
            return;
        }

        if(name != "น้องบอลรักพี่ไอซ์") {
            window.location.href = './pages/question.html';
        }

        $('#name').val('');
        // window.location.href = './pages/secret.html';
    });

    $("#start").click(function() {
        $("#myModal").fadeIn();
    });

    // ปิด Modal เมื่อกดปุ่ม X
    $(".close").click(function() {
        $("#myModal").fadeOut();
    });

    $("#suggest").click(function() {
        $("#myModal2").fadeIn();
    });

    // ปิด Modal เมื่อคลิกข้างนอก
    $(window).click(function(event) {
        if ($(event.target).is("#myModal")) {
            $("#myModal").fadeOut();
        }
        
        if ($(event.target).is("#myModal2")) {
            $("#myModal2").fadeOut();
        }
    });
});