/*
typeof a   用于检查变量的类型

* 在js中所有的数值都是Number类型
*   包括整数和浮点数（小数）
*
*   js中可以表示的数字的最大值
*   Number.MAX_VALUE
*
*   Number.MIN_VALUE 大于0的最小值
*       5e-324  //科学计数法
*
*   如果使用Number表示的数字超过最大值，则会返回一个
*       Infinity  表示正无穷
*       -infinity 表示负无穷
*       使用typeof检查Infinity也会放回number类型
*   NaN 是一个特殊的数字，表示Not A Number
*       使用typeof检查一个NaN也会返回number
*
* */
var  a;
// a=Number.MAX_VALUE * Number.MAX_VALUE;
a=-Number.MAX_VALUE * Number.MAX_VALUE;
a="abc" * "bcd";
console.log(a);  //NaN

/*
如果使用js进行浮点运算，可能得到一个不精确的结果，
所以千万不要使用JS对精确度要求比较高的运算。
* */
var b= 0.1+0.2;
console.log(b);  //0.30000000000000004 计算浮点数，不准确。


/*
Boolean 布尔值
  布尔值只有两个，主要用来做逻辑判断
  true
     -表示真
  false
     -表示假

   使用typeof检查一个布尔值时，返回boolean
* */

/*
* Null（空值）类型的值只有一个，就是null
*  null这个值专门用来表示一个为空的对象
*  使用typeof检查一个null值时，会返回object
*
*  Undefined(未初始化)类型的值只有一个，当声明一个变量，但是并不对
*  变量赋值时，它的值就是undefined。
* */

/*
    将其他的数据类型转化为String
      方式一：
           - 调用被转化数据类型的toString()方法
           - 该方法不会影响到原变量，它会将转化的结果返回
           - 但是注意，null和undefined这两个值没有toString
              如果调用他们的方法会报错。

      方式二：
           - 调用String()函数，并将被转化的数据作为参数传递给函数
           - 使用String()函数强制类型转换时，
                对于Number和Boolean实际上调用的是toString()方法
                但是对于null和undefined就不会调用toString()方法
                   它会将null直接转换为"null"
                   将undefined 直接转换为"undefined"

* */
a=null;
// console.log(a.toString()); 报错

a=undefined;
// console.log(a);   报错

a=123;
a=String(a);
console.log(typeof a);


/*
* 将其他的数据类型转换为Number
*   转换方式一：
*       使用Number()函数
*           - 字符串  --> 数字
*             1.如果是纯数字的字符串，则直接将其转换为数字
*             2.如果字符串中有非数字的内容，则转换为NaN
*             3.如果字符串是一个空串或者全是空格，则转换为0
*           - 布尔 -->数字
*               true  转成1
*               false  转成0
*           -null --> 数字  0
*           - undefined  --> 数字NaN
*       转换方式二：
*           - 这种方式专门用来对付字符串
*           - parseInt() 把一个带有数字的字符串转换为一个整数
*           - parseFloat() 把一个带有小数点的字符串转换为一个浮点数
* */
a="123.456p";
console.log(parseInt(a));

//如果对于非String使用parseInt()或parseFloat()
//它会先将其转换为string然后在操作
a = true;
a=parseInt(a);
console.log(a); //NaN


/*
* 在js中，如果需要表示16进制的数字，则需要以0x开头
*       如果需要表示8进制的数字，则需要以0开头
*       如果需要表示2进制数，则需要以0b开头
*           但是不是所有的浏览器都支持（IE浏览器不支持）
* */
//十六进制
a=0x10;
a=0xff;
console.log(a);

//八进制数字
a=070;
console.log(a);

//二进制数字
a=0b10;
console.log(a);
//可以在parseInt()中传递第二个参数，来指定数字的进制
a='070';
a=parseInt(a,10);
console.log(a);

/*
* 将其他的数据类型转换为Boolean
* 使用Boolean()函数
*   -数字 --> 布尔
*      -除了0和NaN，其余都是true
*   -字符串 -->布尔
*     -除了空串其余都是true  例如:a=''; Boolean(a); console.log(a); //false;
*   -null和undefined都会转换为false。
*   -对象也会转换成  true
* */
a='';
a=Boolean(a);
console.log(a);

/*
* 运算符也叫做操作符
*   通过运算符可以写一个或多个值进行运算，并获取运算结果
*   比如：typeof 就是运算符，可以来获取一个值的类型
*      它会将该值的类型以字符串的形式返回
*      number string boolean undefined object
*
*    算数运算符
*       当对非number类型的值进行运算时，会将这些值转换为number在进行运算。
*           例如：null、false会转换为0 ，true转换为1
*           任何数值和NaN做运算都转换成NaN
*           var result = 123+ NaN  //NaN
*
*        +
*           任何值和字符串相加都会转换为字符串，并做拼串操作。
*           我们可以利用这点将任何数据转换成String
*           我们只需为任意的数据类型+一个""（var a=123;a=a+"";）
*           a=a+""//实际上是一种隐式类型转换，由浏览器自动完成，实际上它也是调用了String()函数
*
*        任何数值（字符串数值）做 - * /运算多会自动转换为Number
*          我们可以用这个特点做隐式类型转换
*            可以通过一个值 -0  *1  /1来将其转换为number
*            原理和Number()函数一样
*           例如：result ="123"-0;
                  或者
                  result ="123"*1;

           %
             求余数：9%3  // 0
                    9%4  //  1
*
* */
var result =1+null;
console.log(typeof result);
console.log(result); //1

//运算顺序左往右
result = 1 + 2 + "3"; //33
result ="1"+2+3;  //123
console.log(result);

//可以通过+或者-将一个字符串数值转化为number类型（隐式转换）
result=+"123";
console.log(typeof result);
console.log(result);

/*
//对非布尔值进行运算
* 与运算
*    &&(返回的是原值)
*     - 如果第一个值为true,则必然返回第二个值（返回原值）
*     - 如果第一个值为false，则直接返回第一个值（返回原值）
*
*    ||或运算
*     - 如果第一个值为true，则直接返回第一个值
*     - 如果第一个值为false，则返回第二个值
* */
var result1=5  && 8;  //8
console.log(result1);
result1= 0 && 1; //0
result1= NaN && 1;  //NaN
console.log(result1);

result1 = "" || "hello";
console.log(result1); // hello

var arr=[1,2,3,4,5,1,2,3,6,85,2];
var arr1={"a":"111"};
let unique=[...new Set(arr)];  //去掉重复数组
console.log(unique);

/*
* 在字符中使用转义字符输入Unicode编码
*  \u四位编码
* */
console.log("\u2620");  //十六进制（输出骷髅图标）
/*在网页中使用Unicode编码
       &#编码；  （这里的编码需要的是十进制）
       例如  <h1 style="font-size: 100px;">&#9760;</h1>（输出骷髅图标）
* */


/*相等运算符
数值相等比较
 ==
 !=
  会做自动类型转换
  console.log('4' == 4);  //true
  console.log(true == "1"); //true
  console.log(null == 0);  //false


* undefined 衍生自null
*   所有这两个值做相等判断时，会返回true  //console.log(undefined==null);
*
* NaN不和任何值相等，包括他本身  //console.log(NaN==NaN);  //false
*
* 判断一个值是否为NaN
*   var d=NaN;
    console.log(isNaN(d));  //true
  ===
  两个值如果类型不同，直接返回false
  !==

* */
console.log(undefined==null);  //true
console.log(NaN==NaN);  //false

/*
条件运算符也叫三元运算符
  语法：
    条件表达式？语句1:语句2;
  - 如果表达式为true，执行语句1
  - 如果表达式为false，执行语句2
  例如：
    var a=10;
    var b=20;
    console.log(a > b ? "A大" : "B大"); // B大
* */

/*代码块（ 只用于分组）
   {
        var  a=10;
        console.log(a);
   }

* */

/*prompt()可以弹出一个提示框，该提示框中会带有一个文本框
    在html页面中才能生效
    var a=prompt('请输入');  //a获取弹窗输入的值（'请输入'的关键字为弹窗提示词）
    而prompt()的返回值是string类型
* */

/*switch语句*/
var num='g';
switch(num){
    case 1 :
        console.log(1);
        break;
    case 2 :
        console.log(2);
        break;
    case 3 :
        console.log(3);
        break;
    default :
        console.log("非法数字");
        break;
}

/*编写一个三位数的水仙花数，三位数各个位数上的立方等于它本身*/
    for(var i=100;i<1000;i++){
        var bai=parseInt(i/100);//百位数
        var shi=parseInt((i-bai*100) /10 );     //十位数
        var ge=i%10;
        if(Math.pow(bai,3)+Math.pow(shi,3)+Math.pow(ge,3)==i){
            console.log(i);
        }
    }

/*编写一个函数判断一个数是否为质数，输出质数*/
/*var num1=prompt('请输入一个数：');
if(num1<1){
    console.log("不合法");
}
else{
    var flag=true;
    for(var i=2;i<num1;i++){
        //如果num1被i整除，则说明num一定不是质数
        if(num1%i==0){
            flag=false;
        }
    }
    if(flag){
        console.log("是质数："+i);
    }
    else{
        console.log("不是质数！");
    }
}*/












