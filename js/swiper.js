$(document).ready(function() {
  let questions= [
      {
          "question": "คุณชอบใช้เวลาว่างทำอะไร??",
          "choices": ["นอนทั้งวัน 😴", "วิ่งเล่น สำรวจทุกซอกทุกมุม 🏃‍♂️", "นั่งนิ่ง ๆ ดูคนอื่นทำอะไรไปเรื่อย ๆ 👀", "หาอะไรกิน 😋"],
      },
  ];

  for (let i = 0; i < questions.length; i++) {
      let question = questions[i];
      let choices = question.choices;

      let html = "";
      html += "<div class='swiper-slide question_page'>";
      html += "<div class='question_box'>";
      html += "<div class='question'>" + question.question + "</div>";
      html += "<div class='choices'>";
      for (let j = 0; j < choices.length; j++) {
          html += "<div class='choice'>" + choices[j] + "</div>";
      }
      html += "</div>";
      html += "</div>";
      html += "</div>";

      $(".swiper-wrapper").append(html);
  }

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
});