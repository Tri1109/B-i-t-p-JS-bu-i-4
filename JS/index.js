//--------------Bài tập 1---------------//
function handleConvertNumber() {
    var num1 = +document.getElementById("number1").value;
    var num2 = +document.getElementById("number2").value;
    var num3 = +document.getElementById("number3").value;
    var min1;
    var min2;
    var min3;
    if (num1 < num2 && num1 < num3) {
        min1 = num1;
    } else if (num2 < num1 && num2 < num3) {
        min1 = num2;
    } else {
        min1 = num3;
    }

    if (num1 > num2 && num1 < num3) {
        min2 = num1;
    } else if (num2 > num1 && num2 < num3) {
        min2 = num2;
    } else if (num3 > num1 && num3 < num2) {
        min2 = num3;
    } else if (num2 < num1 && num2 > num3) {
        min2 = num2;
    } else {
        min2 = num3;
    }
    
    if (num1 > num2 && num1 > num3) {
        min3 = num1;
    } else if (num2 > num1 && num2 > num3) {
        min3 = num2;
    } else {
        min3 = num3;
    }
    
    document.getElementById("result1").innerHTML = `${min1} ${min2} ${min3}`;
}




//--------------Bài tập 2---------------//
function handleQuestion() {
    var question = document.getElementById("question").value;
    console.log(question);
    var result2;
    switch (question) {
        case question = "B":
            result2 = "Chào bố";
          break;
        case question = "M":
            result2 = "Chào mẹ";
          break;
          case question = "A":
            result2 = "Chào anh trai";
          break;
          case question = "E":
            result2 = "Chào em gái";
          break;
        default:
            result2 = "Vui lòng trả lời đúng câu hỏi";
      }
      document.getElementById("result2").innerHTML = result2;
}

//--------------Bài tập 3---------------//
function handleNumber() {
    var number1 = +document.getElementById("so1").value;
    var number2 = +document.getElementById("so2").value;
    var number3 = +document.getElementById("so3").value;
    var soChan1 = 0;
    var soLe1 = 0;
    var soChan2 = 0;
    var soLe2 = 0;
    var soChan3 = 0;
    var soLe3 = 0;

    if (number1 % 2 == 0) {
        soChan1 = 1;
    } else {
        soLe1 = 1;
    }

    if (number2 % 2 == 0) {
        soChan2 = 1;
    } else {
        soLe2 = 1;
    }

    if (number3 % 2 == 0) {
        soChan3 = 1;
    } else {
        soLe3 = 1;
    }

    var totalChan = soChan1 + soChan2 + soChan3;
    var totalLe = soLe1 + soLe2 + soLe3;

    document.getElementById("result3").innerHTML = `<p>Số chẵn có ${totalChan} số</p>
    <p>Số lẻ có ${totalLe} số</p>`;
}

//--------------Bài tập 4---------------//
function handleTriangle() {
    var a = +document.getElementById("chieuDai").value;
    var b = +document.getElementById("chieuRong").value;
    var c = +document.getElementById("canhHuyen").value;
    var result4;
    if (a == b && b == c) {
        result4 = "Tam giác đều";
    } else if (a == b) {
        result4 = "Tam giác cân";
    } else if ((c**2) == (a**2) + (b**2)) {
        result4 = "Tam giác vuông";
    }
    document.getElementById("result4").innerHTML = `Đây là ${result4}`;
}