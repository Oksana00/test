
const myForm = document.getElementById('myForm');

const ans1_1 = document.getElementById('ans_1.1');
const ans2_2 = document.getElementById('ans_2.2');
const ans3_1 = document.getElementById('ans_3.1');
const ans4_1 = document.getElementById('ans_4.1');
const ans5_2 = document.getElementById('ans_5.2');


myForm.addEventListener('submit', function() {
    let result_1 = 0,
        result_2 = 0,
        result_3 = 0,
        result_4 = 0 ,
        result_5 = 0 ;

    if (ans1_1.checked) {
        result_1 = 1;
    };

    if (ans2_2.checked) {
        result_2 = 1;
    };

    if (ans3_1.checked) {
        result_3 = 1;
    };

    if (ans4_1.checked) {
        result_4 = 1;
    };

    if (ans5_2.checked) {
        result_5 = 1;
    };

    let result = result_1 + result_2 + result_3 + result_4 + result_5;
    
    alert('Вы ответили верно на: ' + result + ' из 5 вопросов.');

});