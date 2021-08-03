let html = document.querySelector("#html");  // 通过选择器找到元素demo 
let style = document.querySelector("#style");
let string =
    `/*你好，Taysia
*接下我演示一下前端操作
*首先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来我把 div 变成一个八卦图
*首先，把 div 变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    /*  背景渐变  css ga background*/
    background: linear-gradient(90deg,rgba(255,255,255,1) 0%,
                rgba(255,255,255,1) 50%,rgba(0,0,0,1) 50%,rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left:50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(0,0,0,1) 0%,rgba(0,0,0,1) 25%,
                rgba(255,255,255,1) 25%,rgba(255,255,255,1) 100%,rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left:50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle,rgba(255,255,255,1) 0%,
                rgba(255,255,255,1) 25%,rgba(0,0,0,1) 25%,rgba(0,0,0,1) 100%);
`;
let string2 = "";
let n = 0;

/*  //   -----------   实现换行，把 \n 替换成 <br>   -------------
//  但是这个方法会使得<br>的尖括号也在html中显示，不用这个方法
string = string.replace("\n", "<br>");  //  replace 只把第一个 \n 替换成 <br>

//  使用正则表达式，把所有 \n 替换成 <br>
string = string.replace(/\n/g, "<br>")
*/


// ----------    demo的值不断变化   ----------
/*
setInterval(() => {
    n = n + 1;
    html.innerHTML = n;
}, 1000);

*/


//  用递归实现setInterval的效果,可以控制停止的时机
let step = () => {
    setTimeout(() => {
        // console.log(n);  //调试
        if (string[n] === "\n") {
            //  如果是回车，加一个换行符<br>
            string2 += "<br>";
        }
        else if (string[n] === " ") {
            //  如果是空格,转换成&nbsp
            string2 += "&nbsp";
        }
        else {
            //  如果不是回车，把string加入到string2
            string2 += string[n];
        }


        //html.innerHTML = string[n];               //  在html写入string第n个元素
        //html.innerHTML = string.substring(0, n);  // 在html写入string的第0个到第n-1个元素,第n个元素不会被写入
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);  //  把样式也加到style上面

        //  设置滚动条，当页面不够高时自动往下滚动 (x,y)
        window.scrollTo(0, 999999);
        html.scrollTo(0, 999999);
        if (n < string.length - 1) {
            //  如果n不是最后一个字符
            n = n + 1;
            step();
        }
        else {
            // 当n>=string.length时，什么都不做
        }
    }, 15);
}

step();


