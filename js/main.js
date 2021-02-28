// HOME WORK # 1 +++++++++++++++++++++++



function numCounter() {
        
        function realization_1() {
            let numb;
            for (let i = 0; i < 9; i++) {
                ++numb 
                if (numb = '0') {
                    console.log(numb + ' =' + ' Ноль');
                } 
                if (numb = 1) {
                    console.log(numb + ' =' + ' Один');
                } 
                if (numb = 2) {
                    console.log(numb + ' =' + ' Два');
                } 
                if (numb = 3) {
                    console.log(numb + ' =' + ' Три');
                } 
                if (numb = 4) {
                    console.log(numb + ' =' + ' Четыре');
                } 
                if (numb = 5) {
                    console.log(numb + ' =' + ' Пять');
                } 
                if (numb = 6) {
                    console.log(numb + ' =' + ' Шесть');
                } 
                if (numb = 7) {
                    console.log(numb + ' =' + ' Семь');
                } 
                if (numb = 8) {
                    console.log(numb + ' =' + ' Восемь');
                } 
                if (numb = 9) {
                    console.log(numb + ' =' + ' Девять');
                    break;
                }           
            }
        }
        realization_1();

        function realization_2() {
            let num = ['Ноль','Один','Два','Три','Четыре','Пять','Шесть','Семь','Восемь','Девять']
            let count = 0; 
            for (let i = 0; i < num.length; i++) {
                console.log( count++ + ' = ' + num[i]);
            }
        }

        realization_2()
}

numCounter();

function negativeOrPositiveValue() {
    let num = -10;

    if (num > 0) {
        console.log('Положительное');
    } else if (num < 0) {
        console.log('Отрицательное');
    } else if (num == 0 ) {
        console.log('Ноль');
    }
}

negativeOrPositiveValue(); 

function unitCounter(unit , quantity) {
    
    if (unit == 'KB') {
        let result = Math.pow(1024, 1) * quantity;
        console.log(result);
    }  else if (unit == 'MB') {
        let result = Math.pow(1024, 2) * quantity;
        console.log(result);
    } else if (unit == 'GB') {
        let result = Math.pow(1024, 3) * quantity;
        console.log(result);
    }
}

unitCounter('KB' , 1);



function customerCounter() {
    let loanPercentage = 3.2;
    let loanBody = 40000;
    let creditTerm = 5;

    function allInterest() {
        let result;
        const allMonth = 12 * creditTerm;
        result = allMonth * loanPercentage 
        console.log(result.toFixed(1));
    }
    allInterest()

    function interestPerYear() {
        let result;
        const allMonth = 12;
        result = allMonth * loanPercentage 
        console.log(result.toFixed(1));
    }
    interestPerYear()

    function profitFromTheСlient() {
        let result;
        const allMonth = 12;
        result = (loanBody * loanPercentage) * allMonth * creditTerm;
        console.log(result);
    }
    profitFromTheСlient()
    
}

customerCounter();



// HOME WORK # 2 +++++++++++++++++++++++

function reverseString() {
    let srt = "Hello , Max";
     console.log(srt.split("").reverse().join(""));
}

reverseString();

function factorial(num) {
    let count = 1;
    for (let i = 0; i < num; i++) {
        count*= (num - i);
    }
    console.log(count);
}

factorial(8);

function integer(numb) {

    let count = 100;
    for (let i = 0; i < count; i++) {
       let integer = numb / i

        if (Number.isInteger(integer)) {
            console.log(integer);
        }
    }
}

integer(50);

function sum(sum) {
    
}

sum(30);











