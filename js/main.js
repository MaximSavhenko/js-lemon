function homeWerk1_1() {
        
        function realization_1() {
            let numb;
            for (let i = 0; i < 9; i++) {
                ++numb 
                if (numb = 1) {
                    console.log('Один');
                } 
                if (numb = 2) {
                    console.log('Два');
                } 
                if (numb = 3) {
                    console.log('Три');
                } 
                if (numb = 4) {
                    console.log('Четыре');
                } 
                if (numb = 5) {
                    console.log('Пять');
                } 
                if (numb = 6) {
                    console.log('Шесть');
                } 
                if (numb = 7) {
                    console.log('Семь');
                } 
                if (numb = 8) {
                    console.log('Восемь');
                } 
                if (numb = 9) {
                    console.log('Девять');
                    break;
                }           
            }
        }

        // realization_1();


        // function realization_2() {
        //     let nameNum = {
        //         0 : 'Ноль' ,
        //         1 : 'Один' ,
        //         2 : 'Два' ,
        //         3 : 'Три' ,
        //         4 : 'Четыре' ,
        //         5 : 'Пять' ,
        //         6 : 'Шесть' ,
        //         7 : 'Семь' ,
        //         8 : 'Восемь' ,
        //         9 : 'Девять' 
        //     }

        //     // for (let value of Object.values(nameNum)) {
        //     //     console.log(value);
        //     //   }
        //     for (let i = 0; i < 10; i++) {
        //         let result;
        //         let value = Object.values(nameNum)
        //         if (value = i) {
        //             result = value + [i];
        //             console.log(result);
        //         }
                
        //     }
        // }

        // realization_2();
}

homeWerk1_1();

function homeWerk1_2() {
    let num = -10;

    if (num > 0) {
        console.log('Положительное');
    } else if (num < 0) {
        console.log('Отрицательное');
    } else if (num == 0 ) {
        console.log('Ноль');
    }
}

// homeWerk1_2();

function homeWerk1_3() {
    let unit = 'MB';
    let quantity = 3;
    
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

// homeWerk1_3();

function homeWerk1_4() {
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

// homeWerk1_4();




