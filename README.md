# **Hang-Man**
### How it works
  1. We create a word bank (156 words)
  2. Select a random word from the bank
  3. Generate the static tables
  4. Make the buttons
  5. Control the GIF
  6. When the user press a button, we check if that letter is in the selected word.
  7.  If it is, then we insert the letter into the matching box.
  8.  Otherwise, we call `Errors.add()` and set the current frame of the GIF to the next one
  9.  When the GIF reaches it's last frame, we use `alert()` to tell the user that the user lost
  10. If all the boxes have a letter, we tell the user that they won

  Example\*:
  ```TypeScript
    let wordBank: String[] = [
        "apple",
        "fix",
        "etc"
    ];
  
    var word: String = selectRandom(wordBank);
  
    function updateGame(): null {
  
      if (buttonClicked() in Array.from(word)) {
        Word.add(buttonClicked().letter);
      }
  
      else {
        Errors.add();
        Man.nextFrame();
      }
  
      if (Word.full) {
        alert("You won!");
      }
  
      else if (Errors.lost) {
        alert("You lost.");
    }
  
    while (true) {
      drawGif();
      drawWord();
      drawKeyboard();
      updateGame();
    }
  ```
\*Not real example. Just an idea.
## How to run Hang-Man
+ Go to the [website](https://www.hangman.com/play).
