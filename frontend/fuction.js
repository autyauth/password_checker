// เอา fuction ไปใช้ เอา file ไปใช้
const password = "xxxxx";

passwordBrutedorcetime(password, password.length);


function passwordBrutedorcetime(targetPassword, passwordLenght) {
    var result = 0;
    const characterSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // base on human check
    var base = 1;
    var index = 0;
    var len = parseInt(passwordLenght);
    //console.log(len);
    while (index < len) {
        result += characterSet.length ** index;
        index++;
    }
    index = 0;
    while (targetPassword[index]) {
        // result = result + parseInt((convert_to_dec(characterSet, targetPassword[index]) * base));
        let sum = characterSet.indexOf(targetPassword[index]);
        //console.log(`${sum}`);
        //console.log(`*${base}:`);
        sum *= base;
        //console.log(`${sum}`);
        result += sum;
        base *= characterSet.length;
        index++;
    }
    // time section

    y = BigInt(Math.floor(result));
    //console.log(Number.isSafeInteger(y));

}

