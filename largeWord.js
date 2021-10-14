
allWords = [ 'Mamam', 'Mamamama', 'Jajajaj', 'KAKAKAKAK', 'Ñañañañañ', 'JAJAJAJAJAJJAJA' ];

function getLargeWord(str) {

   let arr;
   let largeWord = '';
   let index;

   typeof str  === 'string' ? arr = str.split(' ') : arr = str;

   for ( let word of arr ) {
      if ( word.length >= largeWord.length ) {
         largeWord = word;
         index = arr.indexOf(largeWord);
      };
   };

   let result = `Large word: ${largeWord} at index: ${index}`;
   console.log(result)

   return result
};

getLargeWord('Hola juan carlos');
getLargeWord(allWords)