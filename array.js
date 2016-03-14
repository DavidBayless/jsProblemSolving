function palindromes(stringArray) {
    var index = [];
    for (var i = 0; i < stringArray.length; i++) {
        looping = true;
        stringArray[i] = stringArray[i].toLowerCase();
        while (looping) {
            for (var j = 0; j < stringArray[i].length; j++) {
                if (stringArray[i].charAt(j) === " ") {
                    var newString = stringArray[i].charAt(j).replace(/\s/, "");
                    stringArray[i] = newString;
                }
            }

            for (j = 0; j < stringArray[i].length; j++) {
                if (stringArray[i].charAt(j) != stringArray[i].charAt(stringArray[i].length - 1 -j)) {
                    index.push(false);
                    looping = false;
                    break;
                }
            }
            if (looping) {
              index.push(true);
            }
            looping = false;
            break;
        }
    }
    console.log(index);
    return(index);
}
// function end

palins = ["dog", "blue", "racecar", "mom", "lion oil", "Step on no pets"];
palindromes(palins);
