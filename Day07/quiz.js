var questions = ['1+2=?', '3+9=?', '6-5=?'];
var count = 0;
function myfunc() {
    var person = prompt("Enter your name:", "dordordordor");
    if (person != "" && person != null) {
        document.getElementById("demo").innerHTML = "Henlooo " + person + " the quiz will start when you click the start button";
        document.getElementById("star").style.display = "block";
    }
}

function func() {
    document.getElementById("ques").innerHTML = questions[0]
    count = 0
    document.getElementById("demo").innerHTML = "";
    document.getElementById("scr").innerHTML = "";
    document.getElementById("hela").style.display = "none";
}
function bfunc(i) {
    var c = i + 1
    var d = questions.length
    document.getElementById("ques").innerHTML = questions[c]
    ans()
}
function next() {
    document.getElementById("result").innerHTML = ""
    var i = 0
    var c = questions.length
    for (i; i < c; i++) {
        if (document.getElementById("ques").innerHTML === questions[i]) {
            bfunc(1)
            break
        }
    }
}
function ans() {
    if (document.getElementById("ques").innerHTML === "1+2=?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6";
        document.body.appendChild(opt1);
        opt1.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "3";
        document.body.appendChild(opt2);
        opt2.onclick = function optal() {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Correct answer";
            count++
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "9";
        document.body.appendChild(opt3);
        opt3.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "0";
        document.body.appendChild(opt4);
        opt4.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }

    }
    if (document.getElementById("ques").innerHTML === "3+9=?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6";
        document.body.appendChild(opt1);
        opt1.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "12";
        document.body.appendChild(opt2);
        opt2.onclick = function optal() {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Correct answer";
            count++
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "9";
        document.body.appendChild(opt3);
        opt3.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "0";
        document.body.appendChild(opt4);
        opt4.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }

    }
    if (document.getElementById("ques").innerHTML === "6-5=?") {
        var opt1 = document.createElement("button")
        opt1.innerHTML = "6";
        document.body.appendChild(opt1);
        opt1.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt2 = document.createElement("button")
        opt2.innerHTML = "1";
        document.body.appendChild(opt2);
        opt2.onclick = function optal() {
            document.getElementById("result").style.color = "green"
            document.getElementById("result").innerHTML = "Correct answer";
            count++
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt3 = document.createElement("button")
        opt3.innerHTML = "9";
        document.body.appendChild(opt3);
        opt3.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
        var opt4 = document.createElement("button")
        opt4.innerHTML = "0";
        document.body.appendChild(opt4);
        opt4.onclick = function optal() {
            document.getElementById("result").style.color = "red"
            document.getElementById("result").innerHTML = "wrong answer";
            setTimeout(next, 1000)
            opt1.style.display = "none"
            opt2.style.display = "none"
            opt3.style.display = "none"
            opt4.style.display = "none"
        }
       
    }

}