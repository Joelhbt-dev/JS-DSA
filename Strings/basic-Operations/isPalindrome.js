let s = "Madam";

s = s.toLowerCase();

let isPalindrome = true;

let i = 0;
let j = s.length-1;

while(i<j){

    if(s.charAt(i )!= s.charAt(j)){

        isPalindrome = false;
        break;

    }

    j--;
    i++;
}

    if(isPalindrome){

        console.log("The string is palindrome.");
    }

    else{

        console.log("The string is not palindrome.");
    }


    
    


