// calculate function
let number
let operator
let result;
let symbol = [];
let string ='';

    
    function calculator() {
        number=[];
        operator=[];
        for(let j=0; j<symbol.length; j++){
            if(typeof(symbol[j])==='number'){
                number.push(symbol[j]);
                console.log({number});
            }
            else{
                operator.push(symbol[j]);
            }
        }
        console.log({operator});
        result = number[0];
        for (let i=0; i<operator.length; i++){
            if (operator[i] === "+"){
                result += number[1+i];
            }
            else if (operator[i] === "-"){
                result -= number[1+i];
            }
            else if (operator[i] === "*"){
                result *= number[1+i];
            }
            else if (operator[i] === "/"){
                result /= number[1+i];
            }
        }
        return result;

    }

    //input number and save
    const dot = document.getElementById('.')
    dot.addEventListener('click',function(e){
        string = string + '.';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const one = document.getElementById('1')// when click '1', show 1 on the html but not input number 1
    one.addEventListener('click', function(e){
        string = string + '1';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const two = document.getElementById('2')// when click '2', show 1 on the html but not input number 1
    two.addEventListener('click', function(e){
        string = string + '2';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const three = document.getElementById('3')// when click '2', show 1 on the html but not input number 1
    three.addEventListener('click', function(e){
        string = string + '3';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const four = document.getElementById('4')// when click '2', show 1 on the html but not input number 1
    four.addEventListener('click', function(e){
        string = string + '4';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const five = document.getElementById('5')// when click '2', show 1 on the html but not input number 1
    five.addEventListener('click', function(e){
        string = string + '5';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const six = document.getElementById('6')// when click '2', show 1 on the html but not input number 1
    six.addEventListener('click', function(e){
        string = string + '6';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const seven = document.getElementById('7')// when click '2', show 1 on the html but not input number 1
    seven.addEventListener('click', function(e){
        string = string + '7';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const eight = document.getElementById('8')// when click '2', show 1 on the html but not input number 1
    eight.addEventListener('click', function(e){
        string = string + '8';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const night = document.getElementById('9')// when click '2', show 1 on the html but not input number 1
    night.addEventListener('click', function(e){
        string = string + '9';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const zero = document.getElementById('0')// when click '2', show 1 on the html but not input number 1
    zero.addEventListener('click', function(e){
        string = string + '0';
        document.getElementById("symbol-display-number").innerHTML= string;
    })

    const add = document.getElementById('add')
    add.addEventListener('click', function(e){
        if (typeof(symbol[symbol.length-1])==="number") {
            symbol.push('+');
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
            console.log(symbol);
        }
        else if (string !=='') {
            symbol.push(parseFloat(string));
            symbol.push('+');
            string = '';
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
            console. log(symbol);
            }
        else {
            return;
        }
    })

    const subtract = document.getElementById('subtract')
    subtract.addEventListener('click', function(e){
        if (typeof(symbol[symbol.length-1])==="number") {
            symbol.push('-');
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        }
        else if(string !==''){
            symbol.push(parseFloat(string));
            symbol.push('-');
            string = '';
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        } else {
            return;
        }
            
    })

    const multiply = document.getElementById('multiply')
    multiply.addEventListener('click', function(e){
        if (typeof(symbol[symbol.length-1])==="number"){
            symbol.push('*');
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        }
        if(string !==''){
            symbol.push(parseFloat(string));
            symbol.push('*');
            string = '';
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        } else {
            return;
        }
    })

    const divide = document.getElementById('divide')
    divide.addEventListener('click', function(e){
        if (typeof(symbol[symbol.length-1])==="number"){
            symbol.push('/');
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        }
        else if(string !==''|| typeof(symbol[symbol.length-1]==="number")){
            symbol.push(parseFloat(string));
            symbol.push('/');
            string = '';
            document.getElementById("symbol-display-number").innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            document.getElementById('result').innerHTML= '';
        } else {
            return;
        }
    })

    const enter = document.getElementById('enter')
    enter.addEventListener('click', function(e){
        console.log (symbol);
        if(string !== ''){
            symbol.push(parseFloat(string));
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            result = calculator();
            document.getElementById('result').innerHTML= '= '+ result;
            number=[];
            operator=[];
            symbol.pop();
            result=0;
        }
        else if(typeof(symbol[symbol.length-1]) === 'number'){
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            result = calculator();
            document.getElementById('result').innerHTML= '= '+ result;
            number=[];
            operator=[];
            symbol.pop();
            result=0;
        }
        else {
        return;
        }
    });
        

    const clear = document.getElementById('clear');
    clear.addEventListener('click',function(e){
        symbol =[];
        result =0;
        string = '';
        document.getElementById('result').innerHTML= '';
        document.getElementById("symbol-display").innerHTML= symbol.join(' ');
        document.getElementById("symbol-display-number").innerHTML= '';
        console.log(result);
    })

    const Delete = document.getElementById('delete');
    Delete.addEventListener('click',function(e){
        if (string !== '' ){
            string = '';
            document.getElementById('result').innerHTML= '';
            document.getElementById("symbol-display-number").innerHTML= string;
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            console.log(symbol);
        }
        else if (symbol.length !== 0) {
            symbol.pop();
            document.getElementById('result').innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            console.log(symbol);
        }
        else {
            document.getElementById('result').innerHTML= '';
            document.getElementById("symbol-display").innerHTML= symbol.join(' ');
            console.log(result);
        }
    })






