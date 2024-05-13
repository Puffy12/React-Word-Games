import wordBank from "./wordle-bank2.txt";

export const boardDefault: string[][] = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet: Set<string> | undefined; // Initialize as undefined
  let todaysWord: string | undefined; // Initialize as undefined
  await fetch(wordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      if (wordArr.length > 0) {
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      } else {
        // Handle empty word array case
        todaysWord = undefined;
        wordSet = new Set();
      }
    })
    .catch((error) => {
      console.error("Error fetching word bank:", error);
      todaysWord = undefined; // Handle fetch error
      wordSet = new Set();
    });
  return { wordSet, todaysWord };
};
