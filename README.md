# **Hang-Man**
### How it works
  1. We create a word bank (117 words)
  2. Select a random word from the bank
  3. Generate the static tables
  4. Make the buttons
  5. Control the GIF
  6. When the user press a button, we check if that letter is in the selected word.
  7.  If it is, then we insert the letter into the matching box.
  8.  Otherwise, we call `Errors.add()` and set the current frame of the GIF to the next one
  9.  When the GIF reaches it's last frame, we use `alert()` to tell the user that the user lost
  10. If all the boxes have a letter, we tell the user that they won

  Example:
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

## How to run Hang-Man
+ Open [hangman.html](github.com/amaiaroto/Hang-man/hangman.html).
+ Run with live server (or host the userr own).
+ **Tip:** *Go to devoloper tools. Find the header and look to find out the word.*\*

\*If the user want to remove the "hidden" option. the user may. But, it only stays that way until the user refresh or close the page.
