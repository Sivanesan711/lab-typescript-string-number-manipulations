class StringManipulation implements StringManipulationService
{
    print(word: String): void
    {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(0));
        console.log(word.concat('  FacePrep'));
        console.log(word.slice(0, 4));
        console.log(word.length);
    }


    printWithSpace(sentence: String): void
    {
        console.log(sentence.split("").join(" "));
    }


    findVowel(str: String): void
    {
        console.log(str.replace(/[^aeiouAEIOU]/gi,"").length);
    }
}

let string = new StringManipulation();
string.print('ProGrads');
string.printWithSpace('ProGrads');
string.findVowel('ProGrads');


class NumberManipulation implements NumberManipulationService
{
    findPrime(num: number): void
    {
        console.log(num);
        if(num%2 == 0)
        {
            console.log(num+" is not a prime number");
        }
        else
        {
            console.log(num+" is a prime number");
        }
    }

    findMagic(num: number): void
    {
        console.log(num);
        if(num%9 == 1)
        {
            console.log(`${num} is a magic number`);
        }
        else
        {
            console.log(num+" is not a magic number");
        }
    }
}

let num1 = new NumberManipulation();
num1.findPrime(20);
num1.findMagic(45);