const typewriter = function(sentence) {
  let results = 0;
  for (const char of sentence) {
    if (results < sentence.length) {
      setTimeout(() => {
        process.stdout.write(char);
      }, 50 * results); // multiply delay time by results to delay
      results++;
    }
  }
  // wait to until the last character is printed before adding new line
  setTimeout(() => {
    console.log();
  }, 50 * results);
};
const wordsToPrint = "hello there from lighthouse labs";
typewriter(wordsToPrint);