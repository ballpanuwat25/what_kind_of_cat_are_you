$(document).ready(function() {
  let questions= [
      {
        "question": "คุณชอบใช้เวลาว่างทำอะไร?",
        "choices": ["นอนทั้งวัน 😴", "วิ่งเล่น สำรวจทุกซอกทุกมุม 🏃‍♂️", "นั่งนิ่ง ๆ ดูคนอื่นทำอะไรไปเรื่อย ๆ 👀", "หาอะไรกิน 😋"],
      },
      {
        "question": "คุณเข้ากับคนแปลกหน้าได้ง่ายแค่ไหน?",
        "choices": ["ชอบอยู่กับคนเยอะ ๆ เข้ากับคนง่าย 🥰", "ขอดูท่าทีก่อน ค่อยเข้าหา 😼", "ไม่ค่อยไว้ใจคนแปลกหน้าเท่าไหร่ 😾", "ใครก็ได้ แค่มีของกินมาให้ก็พอ 😹"],
      },
      {
        "question": "คุณเป็นคนเสียงดังหรือเงียบ?",
        "choices": ["ชอบส่งเสียง เรียกร้องความสนใจตลอด 🗣️", "มีเสียงนุ่ม ๆ อ้อนเก่ง ❤️", "ไม่ค่อยส่งเสียง อยู่เงียบ ๆ 😺", "มีเสียงเฉพาะตอนหิวเท่านั้น 😸"],
      },
      {
        "question": "คุณเป็นคนชอบความสะอาดแค่ไหน?",
        "choices": ["ต้องเป๊ะ! ทุกอย่างต้องสะอาดเรียบร้อย 🧼", "ก็ทำความสะอาดบ้าง แต่ไม่เยอะ 🧽", "ขี้เกียจทำความสะอาด แต่ก็อยู่ได้ 🤷‍♂️", "บ้านรกได้ไม่เป็นไร ขอให้มีของกินก็พอ 😋"],
      },
      {
        "question": "คุณชอบอาศัยอยู่ที่ไหน?",
        "choices": ["บ้านหรู สะอาด อบอุ่น 🏡", "กลางธรรมชาติ วิ่งเล่นได้ 🏞️", "บนโซฟานุ่ม ๆ ในบ้าน 🛋️", "ที่ไหนก็ได้ ขอให้มีของกิน 🥘"],
      },
      {
        "question": "ถ้าเลือกเป็นตัวละครในหนังแมว คุณจะเป็นแบบไหน?",
        "choices": ["แมวผู้ดี ราชวงศ์แบบ 'Aristocats' 👑", " แมวจอมป่วนแบบ 'Tom & Jerry' 😹", "แมวลึกลับฉลาดแบบ 'Cheshire Cat' 😼", "แมวจอมตะกละแบบ 'Garfield' 🥞"],
      },
      {
        "question": "เมื่อมีปัญหาเกิดขึ้น คุณจะทำยังไง?",
        "choices": ["พุ่งเข้าไปเผชิญหน้า! 💪", "ค่อย ๆ หาทางออกแบบชาญฉลาด 😼", "นอนนิ่ง ๆ รอให้มันผ่านไปเอง 😴", "หาของกินก่อน แล้วค่อยคิด 😋"],
      },
      {
        "question": "สเปคผู้หญิงของอ๊อดปากดีเป็นยังไง?",
        "choices": ["ผมสามเส้น 📊", "สูง 3 cm 📏", "ตาสีแดง 👀", "ถูกทุกข้อ 😎"],
      },
      {
        "question": "ตัวอะไรมี 8 ขา ผิวสีม่วง?",
        "choices": ["สิงโต 🦁", "กระต่าย 🐰", "ยีราฟ 🦒", "อาจารย์แดง 🐱‍🏍"],
      },
  ];

  let currentQuestion = 0;
  console.log("start question --> ", currentQuestion);
  for (let i = 0; i < questions.length; i++) {
      let question = questions[i];
      let choices = question.choices;

      let html = "";
      html += `<div class='swiper-slide question_page'>`;
      html += `<div class='question_box'>`;
      html += `<div class='question'>${question.question}</div>`;
      html += `<div class='choices'>`;
      for (let j = 0; j < choices.length; j++) {
          html += `<div class='choice'>${choices[j]}</div>`;
      }
      html += `</div>`;
      html += `</div>`;
      html += `</div>`;

      $(".swiper-wrapper").append(html);
  }

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    allowTouchMove: false,
  });

  console.log("count --> ", questions.length);
  $(".choice").click(function() {
    currentQuestion++;
    console.log("currentQuestion --> ", currentQuestion);
    if (currentQuestion == questions.length) {
      window.location.href = '../pages/result.html';
      return
    }

    swiper.slideNext();
  });
});