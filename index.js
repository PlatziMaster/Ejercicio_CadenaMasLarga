const arr = ['test', 'ahora lo soy yo porque este string s muchisimo mas largo', 'other test', 'longer test', 'longest test', 'yo soy mucho mas largo'];

const longestString = (string) => {
  let longest = string[0];
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > longest.length) {
      longest = string[i];
    }
  }
  console.log(`El string mas largo es: ${longest}, y su extension de caracteres es de ${longest.length} caracteres`);
}

longestString(arr);