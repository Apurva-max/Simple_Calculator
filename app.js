//         EVEN  OR  ODD


function even_odd(num){
    if (num%2 == 0){
        return 'It is an even number';
    } else {
        return "It is an odd number";
    }
};
console.log(even_odd(4));


//        LARGEST OF TWO NUMBERS


function largest_number(arr){
    if (arr.length == 0){
        return null;
    }
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        } 
    } 
    return largest;
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log(largest_number(arr));



//    FACTORIAL  


function factorial(num){
    if (num < 0){
        return null;

    } let result = 1;
    for (let i=1; i<=num ; i++){
        result *=i;
    }

    return result;
}
console.log(factorial(5));



//       SIMPLE_INTEREST


function simple_interest(p,r,t){
  return ((p*r*t)/100);
}

let p= 10000;
let r=5;
let t =3;

console.log("Simple Interest", simple_interest(p,r,t));



//        GRADE_CALCULATOR



function garde_calculator(score){
    if (score < 0 || score > 100){
        return "Invalid Score";
    } else if(score >=90){
        return 'A';
    } else if (score>=80){
        return 'B';
    } else if(score >= 70){
        return 'C';
    }else if(score >=60){
        return 'D';
    }else{
        return'F';
    }
}

console.log(garde_calculator(95)); 
console.log(garde_calculator(82)); 
console.log(garde_calculator(76)); 
console.log(garde_calculator(61)); 
console.log(garde_calculator(45)); 
console.log(garde_calculator(110));



//      VOWEL_CONSONANT


function vowel_or_consonant(ch){
    if (ch=='A' || ch =='a'){
        return `Vowel ${ch}`;
    } else if(ch=='E' || ch=='e'){
        return `Vowel ${ch}`;
    } else if(ch=="I" || ch=="i"){
        return `Vowel ${ch}`;
    } else if (ch="O" || ch=="o"){
        return `Vowel ${ch}`;
    }else if(ch=="U" || ch == "u"){
        return `Vowel ${ch}`;
    }else {
        return `Consonant ${ch}`;
    }
}

console.log(vowel_or_consonant("a"));



//        LOGIN SYSTEM


function login_system(username, password){
    let userinput = "Apurva";
    let passwordinput = "4567";

    if (username == userinput && password == passwordinput){
        return "Login Successfully";
    } else{
        return "Login Failed";
    }
}

console.log(login_system("Apurva","4567"));



//           AREA_CALCULATOR


function area_reactangle(l,b){
    return l*b;
}
console.log(area_reactangle(4,5));

function area_circle(r){
    return 3.141 * r;
}
console.log(area_circle(4));

function area_triangle(l,b,h){
    return ((1/2) * l * b * h);
}
console.log(area_triangle(4,6,9));