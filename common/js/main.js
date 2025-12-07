$(document).ready(function() {
    "use strict";
    const questions = [{
            question: "HTML là viết tắt của từ gì?",
            options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markdown Language"],
            answer: 0
        },
        {
            question: "Thẻ nào dùng để chèn hình ảnh vào trang web?",
            options: ["&lt;img&gt", "&lt;image&gt", "&lt;src&gt", "&lt;picture&gt"],
            answer: 0
        },
        {
            question: "CSS viết tắt của từ gì?",
            options: ["Creative Style Sheet", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
            answer: 1
        },
        {
            question: "Thẻ nào dùng để tạo liên kết trong HTML?",
            options: ["&lt;a&gt", "&lt;link&gt", "&lt;href&gt", "&lt;url&gt"],
            answer: 0
        },
        {
            question: "Thuộc tính nào dùng để đổi màu chữ trong CSS?",
            options: ["font-color", "text-color", "color", "font-style"],
            answer: 2
        },
        {
            question: "Cách viết comment trong HTML là gì?",
            options: ["// comment", "# comment", "/* comment */", "&lt;!-- comment --&gt"],
            answer: 3
        },
        {
            question: "Trong JavaScript, kiểu dữ liệu nào sau đây là kiểu số?",
            options: ["'42'", "true", "42", "null"],
            answer: 2
        },
        {
            question: "Hàm nào dùng để in ra console trong JavaScript?",
            options: ["print()", "log()", "console.log()", "echo()"],
            answer: 2
        },
        {
            question: "Câu lệnh nào dùng để khai báo biến trong JavaScript?",
            options: ["int", "var", "define", "value"],
            answer: 1
        },
        {
            question: "Sự kiện nào xảy ra khi người dùng nhấp chuột vào phần tử?",
            options: ["onhover", "onload", "onclick", "onchange"],
            answer: 2
        }
    ];

    let currentIndex = 0;
    let score = 0;

    function loadQuestion() {
        let q = questions[currentIndex];
        $("#question").text((currentIndex + 1) + ". " + q.question);
        if (currentIndex == 9) {
            $('#next-btn').text('Kết thúc');
        }
        let html = "";
        q.options.forEach((option, index) => {
            html += `<div class="option" data-index="${index}">${option}</div>`;
        });
        $("#options").html(html);
        $("#score").text("Điểm: " + score);
        $(".option").on("click", chooseAnswer);
    }

    function chooseAnswer() {
        let selected = parseInt($(this).attr("data-index"));
        let correct = questions[currentIndex].answer;
        $(".option").addClass("disabled");

        if (selected === correct) {
            $(this).addClass("correct");
            score++;
            $("#score").text("Điểm: " + score);
        } else {
            $(this).addClass("wrong");
            $(".option[data-index='" + correct + "']").addClass("correct");
        }

        $("#next-btn").addClass('active');
    }

    $("#next-btn").click(function() {
        currentIndex++;

        if (currentIndex >= questions.length) {
            $("#quiz-box").html(
                `<p class="ttl">MindX Quiz</p>
                <p class="bold center mb10"><span class="big">Kết Quả</span></p>
                <p class ="center">Bạn đạt được: ${score}/${questions.length}</p>
                <div class="btn_center_box"><p class="btn center"><span class="loadpage">Làm lại</span></p></div>`
            );
            return;
        }

        loadQuestion();
    });

    loadQuestion();

    $(document).on("click", ".loadpage", function() {
        location.reload();
    });

});