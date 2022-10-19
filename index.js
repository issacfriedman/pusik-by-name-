// Import stylesheets
import './style.css';
import berishis from './berishis.json';

var gematriya = require('gematriya');

// Write Javascript code!
const appDiv = document.getElementById('app');
console.log(gematriya(5776, { punctuate: false }));
console.log(berishis.heTitle);
const mainArray = [];

function addSifer(saifer, category, textArr) {
  textArr.forEach((kapital, kapitalNumber) => {
    kapitalNumber = kapitalNumber + 1;
    kapital.forEach((pusik, pusikNumber) => {
      pusikNumber = pusikNumber + 1;
      pusik = pusik.replaceAll('׃', '');
      pusik = pusik.replaceAll('(ס)', '');
      pusik = pusik.replaceAll('(פ)', '');
      pusik = pusik.trim();
      //console.log(pusikNumber, pusik);
      mainArray.push({
        saifer,
        text: pusik,
        pusikNumber,
        pusikHeb: gematriya(pusikNumber, { punctuate: false }),
        kapitalNumber,
        kapitalHeb: gematriya(kapitalNumber, { punctuate: false }),
        category,
        startWith: pusik[0],
        endWith: pusik[pusik.length - 1],
      });
    });
  });

  console.log(saifer);
  console.log(category);
  //console.log(textArr);
}
addSifer(berishis.heTitle, 'torah', berishis.text);
console.log(mainArray);

const exeple = {
  text: 'asdf',
  pusikNumber: 3,
  pusikHeb: 'df',
  kapitalNumber: 4,
  kapitalHeb: 'sd',
  category: 'torah',
  startWith: 'g',
  endWith: 'd',
};
