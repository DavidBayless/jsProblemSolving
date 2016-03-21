var backronymMap = {
  'A': ['Able', 'Adventuring', 'Androgynous', 'Animals'],
  'B': ['Beastly', 'Buccaneering', 'Buttoned', 'Bacon'],
  'C': ['Clear', 'Cool', 'Catastrophic', 'Cadavers'],
  'D': ['Disappointing', 'Discombobulated', 'Dry', 'of Dooooooooooooooom'],
  'E': ['Elated', 'Eerie', 'Egotistical', 'Elephants'],
  'F': ['Fuming', 'Fiery', 'Flamboyant', 'Fairies'],
  'G': ['Going', 'Gallant', 'Ga', 'Gargoyles'],
  'H': ['Heroic', 'Heinous', 'Hitchhikers'],
  'I': ['Inventive', 'Idiotic', 'Indigo', 'Individuals'],
  'J': ['Jubilant', 'Jaundiced', 'Jovial', 'Jobs'],
  'K': ['Killer', "Kickin'", 'Kites'],
  'L': ['Lemony', 'Lunar', 'Legacy', 'LAZORZ'],
  'M': ['Magical', 'Martian', 'Mineral', 'Microorganisms'],
  'N': ['Naughty', 'New', 'Narcoleptic', 'Narcissists'],
  'O': ['Operatic', 'Oprah-loving', 'Oblong', 'Oil'],
  'P': ['Pushover', 'Playing', 'Problematic', 'Pharoah'],
  'Q': ['Quintessential', 'Quick', 'Quitters'],
  'R': ['Radical', 'Redundant', 'Razors'],
  'S': ['Slimy', 'Suggestive', 'Swimmingly', 'Supermen'],
  'T': ['Titanic', 'Totally', 'Tyrannical', 'Teeth'],
  'U': ['Unjust', 'Uncool', 'Unilateral', 'Unitarians'],
  'V': ['Victorious', 'Visceral', 'Vindicative', 'Veins'],
  'W': ['Wise', 'Worldly', 'Wide', 'Weather'],
  'X': ['Xylophones', 'Xtreme', 'Xylophones'],
  'Y': ['You', 'Years', 'Youth'],
  'Z': ['Zesty', 'Zooming', 'Zebras']
};

function randAdj(arr) {
  var looping = true;
  while (looping) {
    var num = Math.floor(Math.random() * arr.length - 1);
    if (num >= 0) {
      var retString = arr[num];
      looping = false;
      return (retString);
    }
  }
}

function backronym(str) {
  var newString = [];
  for (var i = 0; i < str.length; i++) {
    for (var letters in backronymMap) {
      if (str.charAt(i) === letters && i !== str.length - 1) {
        stringHold = randAdj(backronymMap[letters]);
        newString.push(stringHold);
      } else if (str.charAt(i) === letters) {
        numHold = backronymMap[letters].length;
        stringHold = backronymMap[letters][numHold - 1];
        newString.push(stringHold);
      }
    }
  }
  newString = newString.join(' ');
  return(newString);
}

console.log(backronym('ZEBRA'));
