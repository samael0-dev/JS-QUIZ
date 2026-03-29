let answer;
let select;
let marks = 0;
let hintAns = {
    hints:["typeof return datatype",
        "the first step towards JS interpretation",
        "Abstract Syntax Tree",
        "Abstract Syntax Tree",
        "Node is built upon it",
        ".textContent",
        "Date",
        "Type of Asynchronous function",
        "synchronous",
        "Callback"],
    }

function hint() {
    hintAns.hints.forEach((item,index) => {
        if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        else if((index+1)==qc1.textContent) {
            hintQ.textContent=item;
        }
        
    });
    
}

function quizShow() {
    banner.remove();
    quizBanner.classList.remove("invsible");
    quizBanner.classList.add("visible");
    quiz.classList.remove("invisible");
}

function ans() {
    //Q1
    if(answer==="datatype" && document.getElementById("qc1").textContent==="1") {
        document.getElementById("reason").textContent="typeof gives datatype in JS";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn1.classList.add("bg-green-400");
    }

    //Q2
    else if(answer==="parser" && document.getElementById("qc1").textContent==="2") {
        document.getElementById("reason").textContent="JS interpretation uses parser first";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn1.classList.add("bg-green-400");
    }

    //Q3
    else if(answer==="AST" && document.getElementById("qc1").textContent==="3") {
        document.getElementById("reason").textContent="JS first goes through parser then AST";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn2.classList.add("bg-green-400");
    }

    //Q4
    else if(answer==="AST" && document.getElementById("qc1").textContent==="4") {
        document.getElementById("reason").textContent="AST convert human code to machine code";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn4.classList.add("bg-green-400");
    }

    //Q5
    else if(answer==="V8" && document.getElementById("qc1").textContent==="5") {
        document.getElementById("reason").textContent="Chrome uses V8 engine to process JS";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn2.classList.add("bg-green-400");
    }

    //Q6
    else if(answer===".textContent" && document.getElementById("qc1").textContent==="6") {
        document.getElementById("reason").textContent=".textContent is used to access the text in an element";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn2.classList.add("bg-green-400");
    }

    //Q7
    else if(answer==="Date()" && document.getElementById("qc1").textContent==="7") {
        document.getElementById("reason").textContent="object used to find time";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn3.classList.add("bg-green-400");
    }

    //Q8
    else if(answer==="setTimeout()" && document.getElementById("qc1").textContent==="8") {
        document.getElementById("reason").textContent="fucntion used to delay a function";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn4.classList.add("bg-green-400");
    }

    //Q9
    else if(answer==="synchronous" && document.getElementById("qc1").textContent==="9") {
        document.getElementById("reason").textContent="code which runs line by line and does skip to nextstep without running the previous step";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn3.classList.add("bg-green-400");
    }

    //Q10
    else if(answer==="callback" && document.getElementById("qc1").textContent==="10") {
        document.getElementById("reason").textContent="a function which will be called in the future";
        marks = marks + 1;
        document.getElementById("score").textContent=marks;
        btn2.classList.add("bg-green-400");
    }

    else {
        reason(document.getElementById("qc1").textContent);
    }
}

function questionChange() {
    //Q1-->Q2
    if(document.getElementById("qc1").textContent==="1") {
        document.getElementById("qc1").textContent="2";
        document.getElementById("qc2").textContent="2";
        document.getElementById("question").textContent="Through which JS goes first in V8 engine?";
        document.getElementById("value1").textContent="parser";
        document.getElementById("value2").textContent="gateway";
        document.getElementById("value3").textContent="JIT";
        document.getElementById("value4").textContent="node";
        document.getElementById("reason").textContent="";
        hintQ.textContent="";
        submit.classList.add("invisible");
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q2-->Q3
    else if(document.getElementById("qc1").textContent==="2") {
        document.getElementById("qc1").textContent="3";
        document.getElementById("qc2").textContent="3";
        document.getElementById("question").textContent="Though what JS goes after parser?";
        document.getElementById("value1").textContent="stringify";
        document.getElementById("value2").textContent="AST";
        document.getElementById("value3").textContent="JIT";
        document.getElementById("value4").textContent="Gemini";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        hintQ.textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q3-->Q4
    else if(document.getElementById("qc1").textContent==="3") {
        document.getElementById("qc1").textContent="4";
        document.getElementById("qc2").textContent="4";
        document.getElementById("question").textContent="After parser what converts human code to machine code?";
        document.getElementById("value1").textContent="node";
        document.getElementById("value2").textContent="gateway";
        document.getElementById("value3").textContent="JIT";
        document.getElementById("value4").textContent="AST";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        hintQ.textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q4-->Q5
    else if(document.getElementById("qc1").textContent==="4") {
        document.getElementById("qc1").textContent="5";
        document.getElementById("qc2").textContent="5";
        document.getElementById("question").textContent="Chrome uses what JS interpreter?";
        document.getElementById("value1").textContent="parser";
        document.getElementById("value2").textContent="V8";
        document.getElementById("value3").textContent="MSI";
        document.getElementById("value4").textContent="Vercel";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        hintQ.textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q5-->Q6
    else if(document.getElementById("qc1").textContent==="5") {
        document.getElementById("qc1").textContent="6";
        document.getElementById("qc2").textContent="6";
        document.getElementById("question").textContent="What object is used to access only the text?";
        document.getElementById("value1").textContent=".innerHTML";
        document.getElementById("value2").textContent=".textContent";
        document.getElementById("value3").textContent=".innerChild";
        document.getElementById("value4").textContent=".nextChild";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        hintQ.textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q6-->Q7
    else if(document.getElementById("qc1").textContent==="6") {
        document.getElementById("qc1").textContent="7";
        document.getElementById("qc2").textContent="7";
        document.getElementById("question").textContent="JS object which helps in finding time?";
        document.getElementById("value1").textContent="Day()";
        document.getElementById("value2").textContent="Hour()";
        document.getElementById("value3").textContent="Date()";
        document.getElementById("value4").textContent="time()";
        submit.classList.add("invisible");
        hintQ.textContent="";
        document.getElementById("reason").textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q7-->Q8
    else if(document.getElementById("qc1").textContent==="7") {
        document.getElementById("qc1").textContent="8";
        document.getElementById("qc2").textContent="8";
        document.getElementById("question").textContent="Function used which delays a function?";
        document.getElementById("value1").textContent="interval()";
        document.getElementById("value2").textContent="time()";
        document.getElementById("value3").textContent="setTimeInterval()";
        document.getElementById("value4").textContent="setTimeout()";
        document.getElementById("reason").textContent="";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        submit.classList.add("invisible");
        hintQ.textContent="";
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q8-->Q9
    else if(document.getElementById("qc1").textContent==="8") {
        document.getElementById("qc1").textContent="9";
        document.getElementById("qc2").textContent="9";
        document.getElementById("question").textContent="Code executed order by order?";
        document.getElementById("value1").textContent="line by line";
        document.getElementById("value2").textContent="order";
        document.getElementById("value3").textContent="synchronous";
        document.getElementById("value4").textContent="asynchronous";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        hintQ.textContent="";
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    //Q9-->Q10
    else if(document.getElementById("qc1").textContent==="9") {
        document.getElementById("qc1").textContent="10";
        document.getElementById("qc2").textContent="10";
        document.getElementById("question").textContent="A function which will be called later in future?";
        document.getElementById("value1").textContent="hoisting";
        document.getElementById("value2").textContent="callback";
        document.getElementById("value3").textContent="await";
        document.getElementById("value4").textContent="async";
        document.getElementById("reason").textContent="";
        submit.classList.add("invisible");
        submit.textContent="Result";
        btn1.classList.remove("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
        btn1.classList.remove("bg-red-400");
        btn2.classList.remove("bg-red-400");
        hintQ.textContent="";
        btn3.classList.remove("bg-red-400");
        btn4.classList.remove("bg-red-400");
    }

    else if(document.getElementById("qc1").textContent==="10") {
        function result() {
        resultPage.classList.remove("invisible");
        quizBanner.remove();
        quiz.remove();
        document.getElementById("final").textContent=marks;
        }
        result();
    }
   
}

function reason(question) {
    if(question==="1") {
        document.getElementById("reason").textContent="typeof gives datatype in JS";
    }

    else if(question==="2") {
        document.getElementById("reason").textContent="JS interpretation uses parser first";
    }

    else if(question==="3") {
        document.getElementById("reason").textContent="JS first goes through parser then AST";
    }

    else if(question==="4") {
        document.getElementById("reason").textContent="AST convert human code to machine code";
    }

    else if(question==="5") {
        document.getElementById("reason").textContent="Chrome uses V8 engine to process JS";
    }

    else if(question==="6") {
        document.getElementById("reason").textContent=".textContent is used to access the text in an element";
    }

    else if(question==="7") {
        document.getElementById("reason").textContent="object used to find time";
    }

    else if(question==="8") {
        document.getElementById("reason").textContent="function used to delay a function";
    }

    else if(question==="9") {
        document.getElementById("reason").textContent="code which runs line by line and does skip to nextstep without running the previous step";
    }

    else if(question==="10") {
        document.getElementById("reason").textContent="a function which will be called in the future";
    }

}


function ansActiveColor() {
    if(select.children[0].id=="A") {
        select.classList.add("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
    }

    if(select.children[0].id=="B") {
        select.classList.add("bg-green-400");
        btn1.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
    }

    if(select.children[0].id=="C") {
        select.classList.add("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn1.classList.remove("bg-green-400");
        btn4.classList.remove("bg-green-400");
    }

    if(select.children[0].id=="D") {
        select.classList.add("bg-green-400");
        btn2.classList.remove("bg-green-400");
        btn3.classList.remove("bg-green-400");
        btn1.classList.remove("bg-green-400");
    }
}

function color() {
    //Q1
    if(select.children[1].outerText!="datatype" && document.getElementById("qc1").textContent==="1") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn1.classList.add("bg-green-400");
        }
    
    //Q2
    else if(select.children[1].outerText!="parser" && document.getElementById("qc1").textContent==="2") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn1.classList.add("bg-green-400");
        }

    //Q3
    else if(select.children[1].outerText!="AST" && document.getElementById("qc1").textContent==="3") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn2.classList.add("bg-green-400");
        }

    //Q4
    else if(select.children[1].outerText!="AST" && document.getElementById("qc1").textContent==="4") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn4.classList.add("bg-green-400");
        }

    //Q5
    else if(select.children[1].outerText!="V8" && document.getElementById("qc1").textContent==="5") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn2.classList.add("bg-green-400");
        }

    //Q6    
    else if(select.children[1].outerText!=".textContent" && document.getElementById("qc1").textContent==="6") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn2.classList.add("bg-green-400");
        }

    //Q7
    else if(select.children[1].outerText!="Date()" && document.getElementById("qc1").textContent==="7") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn3.classList.add("bg-green-400");
        }

    //Q8
    else if(select.children[1].outerText!="setTimeout()" && document.getElementById("qc1").textContent==="8") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn4.classList.add("bg-green-400");
        }

    //Q9
    else if(select.children[1].outerText!="synchronous" && document.getElementById("qc1").textContent==="9") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn3.classList.add("bg-green-400");
        }

    //Q10
    else if(select.children[1].outerText!="callback" && document.getElementById("qc1").textContent==="10") {
            select.classList.remove("bg-green-400");
            select.classList.add("bg-red-400");
            btn2.classList.add("bg-green-400");
        }
}

function visible() {
    submit.classList.remove("invisible");
}