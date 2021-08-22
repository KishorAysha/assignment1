// ১. Variable কি ?

    //Ans: Variable মানে এমন কিছু যা পরিবর্তিত হতে পারে। জাভাস্ক্রিপ্টে, একটি variable ডাটা সংরক্ষণ করে যা পরে পরিবর্তন করা যায়। বিভিন্ন সময়ে এই ডাটা ব্যবহার করা যায় আমাদের সুবিধামত।জাভাস্ক্রিপ্ট এ variable গোষণা করা হয় var,let & const key word দ্বারা।

// ২. Variable কিভাবে লিখতে হয় ?
    /* Ans: There are 3 ways to declare a JavaScript   variable:
       1.Using var
       2.Using let
       3 Using const 

       Exmple:
        var x = 5;
        var y = 6;
        var z = x + y;
        or,
        let firstName = 'Kishor'
        let lastName = 'Ahemd'
       */

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
     /*Ans: জাভাস্ক্রিপ্ট এ স্ট্রিং হলো টেক্সচুয়াল ডেটা উপস্থাপন করতে ব্যবহৃত হয়।জাভাস্ক্রিপ্ট স্ট্রিংগুলি অপরিবর্তনীয়।এর মানে হল যে একবার একটি স্ট্রিং তৈরি হয়ে গেলে, এটি সংশোধন করা সম্ভব নয়।
     Example:
     In JavaScript, there are three ways to write a string-তিন ভাবে লিখা যায়।  ১. single quotes এর ভেতর (' '),। ২.double quotes  এর ভেতর (" "). ৩.backticks এর ভেতর  (` `). 
        let firstName = 'Kishor'
        let lastName = "Ahemd"
        let fullName = `${firstName} ${lastName}`

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
     /* Ans:জাভাস্ক্রিপ্ট এ কোনো সংখ্যাকে কাটে ছাড়া   ডিক্লেয়ার করে হলো নাম্বার। 
     JavaScript has only one type of numbers:
     let num1 = 20.00;     // Written with decimals
     let num2 = 20;        // Written without decimals 
     */

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
     /*Ans:বুলিয়ান হলো একটি ডাটা টাইপ। true or false
       let num1 = 10;
       let num2 = 20;
       let num = (num1 == num2)//false
       let num = (num1 !== num2)//true
      */

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
     /*
       Ans: 
       Example:
        let country = `Bangladesh is my country`
        let country2 = `India is our neighboring countries`
        console.log(country.toUpperCase());
        console.log(country2.toLowerCase())
      */

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
   /*Ans: 
      There are four categories: arithmetic, comparison, assignment, and logical.
      1.Arithmetic:
       Operator    	Description
           +	    Addition
           -	    Subtraction
           *	    Multiplication
           **	    Exponentiation (ES2016)
           /	    Division
           %	    Modulus (Remainder)
           ++	    Increment
           --	    Decrement
      
        2.Comparison:
           Equal (==)
           Not equal (!=)
           Strict equal (===)
           Strict not equal (!==)
           Greater than (>)
           Greater than or equal (>=)
           Less than (<)
           Less than or equal (<=)
        
        3.Assignment:
            =	x = y	x = y
           +=	x += y	x = x + y
           -=	x -= y	x = x - y
           *=	x *= y	x = x * y
           /=	x /= y	x = x / y
           %=	x %= y	x = x % y
           <<=	x <<= y	x = x << y
           >>=	x >>= y	x = x >> y
         >>>=  x >>>= y	x = x >>> y
           &=	x &= y	x = x & y
           ^=	x ^= y	x = x ^ y
           |=	x |= y	x = x | y
         
                        */

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
      /* Ans: Return the absolute value of a number:
         Math.abs(-7.25);// 7.25

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
   /*Ans:
      দশমিক এর পর ১ থেকে ৯ পর্যন্ত যাই থাকুক না কেন সংখ্যাটিকে  upward to its nearest integer এ পরিণত করবে।
      example: 
      let num1 = 1.1;
      console.log(Math.celi(num1);// 2
      let num2 = 1.9;
      console.log(Math.celi(num2));// 2
    */

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
    /*Ans:
      দশমিক এর পর ১ থেকে ৯ পর্যন্ত যাই থাকুক না কেন সংখ্যাটিকে  downward to its nearest integer এ পরিণত করবে।
      example: 
      let num1 = 1.1;
      console.log(Math.floor(num1));// 1
      let num2 = 1.9;
      console.log(Math.floor(num2));// 1
     */

// ১১. Math.round() এর ব্যাবহার লিখুন ।
    /*Ans:
      দশমিক এর পর ১ থেকে 4 থাকলে সংখ্যাটিকে downward to its nearest integer এ পরিণত করবে। এবং দশমিক এর পর 5 থেকে 9 থাকলে সংখ্যাটিকে upward to its nearest integer এ পরিণত করবে.
      example: 
      let num1 = 1.4;
      console.log(Math.round(num1));// 1
      let num2 = 1.5;
      console.log(Math.round(num2));// 2
     */

// ১২. Math.random() এর ব্যাবহার লিখুন ।
  /*Ans:
     random() মেথড টি ০.১ থেকে ০.৯ পর্যন্ত সংখ্যাকে randomly জেনারেট করে। অর্থাৎ ০.১ থেকে ০.৯ এর মধ্যে  বিভিন্ন সময় ভিন্ন ভিন্ন ভ্যালু রিটার্ন করেন। 
     example:
       console.log(Math.random())// generate random value of 0.1 to 0.9

       এখন যদি আমরা চাই যে ১ থেকে ১০ পর্যন্ত এর মধ্যে যে কোনো ভ্যালু রিটার্ন করুক, তাহলে এই ভাবে লিখতে হবে :
       console.log(Math.floor(Math.random()*10 +1));// return randomvalue of 1 to 10
  */
  