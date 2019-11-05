const keyboard = {

  lang: 'en',
  shift: false,

  elements: {
    input: null,
    main: null,
    keysContainer: null,
  },

  createKeys() {

    const wideButtons = ['Backspace', 'CapsLock', 'Enter', 'Shift'];

    const codeLayout = [
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
      ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
      ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
      ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
      ['ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
    ];

    const engLayout = [
      ['\`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', wideButtons[0]],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'DEL'],
      [wideButtons[1], 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', wideButtons[2]],
      [wideButtons[3], 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Up', wideButtons[3]],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
    ];

    const ENGshiftLayout = [
      ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', wideButtons[0]],
      ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '\|', 'DEL'],
      [wideButtons[1], 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', wideButtons[2]],
      [wideButtons[3], 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Up', wideButtons[3]],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
    ];

    const RUSshiftLayout = [
      ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', wideButtons[0]],
      ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\/', 'DEL'],
      [wideButtons[1], 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', wideButtons[2]],
      [wideButtons[3], 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Up', wideButtons[3]],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
    ];

    const rusLayout = [
      ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', wideButtons[0]],
      ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL'],
      [wideButtons[1], 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', wideButtons[2]],
      [wideButtons[3], 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', wideButtons[3]],
      ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Left', 'Down', 'Right', 'Ctrl']
    ];

    let keyLayout = engLayout;

    // Create keys
    for (let i = 0; i < keyLayout.length; i++) {
      for (let j = 0; j < keyLayout[i].length; j++) {

        let key = document.createElement('button');
        key.setAttribute('type', 'button');
        key.classList.add('keyboard__key');
        key.cl = codeLayout[i][j];
        key.eng = engLayout[i][j];
        key.rus = rusLayout[i][j];
        key.seng = ENGshiftLayout[i][j];
        key.srus = RUSshiftLayout[i][j];
        if (wideButtons.includes(keyLayout[i][j])) {
          key.classList.add('keyboard__key--wide');
        }
        if (keyLayout[i][j] == 'Space') {
          key.classList.add('keyboard__key--space');
        }
        if (keyLayout[i][j] == 'CapsLock') {
          key.classList.add('keyboard__key--activatable');
          if (keyboard.shift) {
            key.classList.add('keyboard__key--active-on');
          }
        }

        key.innerHTML = `<span class="ENG keySpan">${engLayout[i][j]}</span><span class="RUS keySpan">${rusLayout[i][j]}</span><span class="SHIFT keySpan">${ENGshiftLayout[i][j]}</span><span class="RUS_SHIFT keySpan">${RUSshiftLayout[i][j]}</span>`;
        
        if (keyboard.lang == 'en' && keyboard.shift == false) {
          key.querySelector('.RUS').classList.add('HIDDEN');
          key.querySelector('.SHIFT').classList.add('HIDDEN');
          key.querySelector('.RUS_SHIFT').classList.add('HIDDEN');
        } else if (keyboard.lang == 'en' && keyboard.shift == true) {
          key.querySelector('.RUS').classList.add('HIDDEN');
          key.querySelector('.ENG').classList.add('HIDDEN');
          key.querySelector('.RUS_SHIFT').classList.add('HIDDEN');
        } else if (keyboard.lang == 'rus' && keyboard.shift == false) {
          key.querySelector('.ENG').classList.add('HIDDEN');
          key.querySelector('.SHIFT').classList.add('HIDDEN');
          key.querySelector('.RUS_SHIFT').classList.add('HIDDEN');
        } else if (keyboard.lang == 'rus' && keyboard.shift == true) {
          key.querySelector('.RUS').classList.add('HIDDEN');
          key.querySelector('.SHIFT').classList.add('HIDDEN');
          key.querySelector('.ENG').classList.add('HIDDEN');
        }
        
        key.classList.add(`keyboard__key-code-${codeLayout[i][j]}`);

        key.addEventListener('click', function() {

          const extraKeysArr = ['Backspace', 'CapsLock', 'Tab', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'OSLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight', 'ArrowUp', 'Delete'];

          if (keyboard.lang == 'en' && keyboard.shift == false && !extraKeysArr.includes(key.cl)) {
            keyboard.elements.input.value += key.eng;
          } else if (keyboard.lang == 'en' && keyboard.shift == true && !extraKeysArr.includes(key.cl)) {
            keyboard.elements.input.value += key.seng;
          } else if (keyboard.lang == 'rus' && keyboard.shift == false && !extraKeysArr.includes(key.cl)) {
            keyboard.elements.input.value += key.rus;
          } else if (keyboard.lang == 'rus' && keyboard.shift == true && !extraKeysArr.includes(key.cl)) {
            keyboard.elements.input.value += key.srus;
          } else if (key.cl == 'Backspace') {
            keyboard.elements.input.value = keyboard.elements.input.value.slice(0, keyboard.elements.input.value.length - 1);
          } else if (key.cl == 'Space') {
            keyboard.elements.input.value += ' ';
          } else if (key.cl == 'Tab') {
            keyboard.elements.input.value += '\t';
          } else if (key.cl == 'Enter') {
            keyboard.elements.input.value += '\\n';
          } else if (key.cl == 'ArrowUp') {
            keyboard.elements.input.value += '\u2191';
          } else if (key.cl == 'ArrowRight') {
            keyboard.elements.input.value += '\u2192';
          } else if (key.cl == 'ArrowDown') {
            keyboard.elements.input.value += '\u2193';
          } else if (key.cl == 'ArrowLeft') {
            keyboard.elements.input.value += '\u2190';
          }
          
          if (key.cl == 'CapsLock') {
            key.classList.toggle('keyboard__key--active-on');
            keyboard.capsLockFunc();
          }
        });

        key.addEventListener('mousedown', function() {
          if (key.cl == 'ControlLeft') {
            x = true;
            let newEvent = new Event('customEvent');
            window.dispatchEvent(newEvent);
          }
          if (key.cl == 'ShiftLeft') {
            keyboard.capsLockFunc();
            y = true;
            let newEvent = new Event('customEvent');
            window.dispatchEvent(newEvent);
          }
          if(key.cl == 'ShiftRight') {
            keyboard.capsLockFunc();
          }
        });

        key.addEventListener('mouseup', function() {
          if (key.cl == 'ControlLeft') {
            x = false;
          }
          if (key.cl == 'ShiftLeft') {
            y = false;
            keyboard.capsLockFunc();
          }
          if(key.cl == 'ShiftRight') {
            keyboard.capsLockFunc();
          }
        });

        key.addEventListener('focus', function() {
          key.blur();
        });

        this.elements.keysContainer.appendChild(key);
      }
      this.elements.keysContainer.appendChild(document.createElement('br'));
    }

  },

  notesInnerHTML: `<p class="note"><span class="note__important">IMPORTANT NOTE:</span> <span class="note__warning">Virtual Keyboard <span class="note__underline">supports AltGraph</span> button!</span> So:<br>
  - if you have this button on your real keyboard<br>
  (or)<br>
  - if you press RIGHT ALT button when your OS system (!) uses layout other than English<br>
  <span class="note__underline">Then BOTH ControlLeft and AltRight Virtual Keyboard keys will be clicked at the same time!</span><br>
  See "AltGraph" here: <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState</a></p><p class="lang-key-combination">Use LeftCTRL + LeftShift to switch between languages</p>`,

  init() {
    // Create main elements
    this.elements.input = document.createElement('input'); ///////////////////////////////
    let notes = document.createElement('div');
    
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.input.classList.add('input-field');
    notes.innerHTML = this.notesInnerHTML;
    notes.classList.add('notes-container');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');

    // Put elements into DOM
    document.body.appendChild(this.elements.input);
    document.body.appendChild(notes);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    keyboard.createKeys();
  },

  capsLockFunc: function() {
    if (keyboard.shift == false && keyboard.lang == 'en') {
      let spanz = document.querySelectorAll('.keySpan');
      let buttonz = document.querySelectorAll('.SHIFT');
      for (let i = 0; i < spanz.length; i++) {
        spanz[i].classList.add('HIDDEN');
      }
      for (let i = 0; i < buttonz.length; i++) {
        buttonz[i].classList.remove('HIDDEN');
      }
      keyboard.shift = true;
      localStorage.setItem('virtualKeyboardShift', true);
    } else if (keyboard.shift == true && keyboard.lang == 'en') {
      let spanz = document.querySelectorAll('.keySpan');
      let buttonz = document.querySelectorAll('.ENG');
      for (let i = 0; i < spanz.length; i++) {
        spanz[i].classList.add('HIDDEN');
      }
      for (let i = 0; i < buttonz.length; i++) {
        buttonz[i].classList.remove('HIDDEN');
      }
      keyboard.shift = false;
      localStorage.setItem('virtualKeyboardShift', false);
    } else if (keyboard.shift == false && keyboard.lang == 'rus') {
      let spanz = document.querySelectorAll('.keySpan');
      let buttonz = document.querySelectorAll('.RUS_SHIFT');
      for (let i = 0; i < spanz.length; i++) {
        spanz[i].classList.add('HIDDEN');
      }
      for (let i = 0; i < buttonz.length; i++) {
        buttonz[i].classList.remove('HIDDEN');
      }
      keyboard.shift = true;
      localStorage.setItem('virtualKeyboardShift', true);
    } else if (keyboard.shift == true && keyboard.lang == 'rus') {
      let spanz = document.querySelectorAll('.keySpan');
      let buttonz = document.querySelectorAll('.RUS');
      for (let i = 0; i < spanz.length; i++) {
        spanz[i].classList.add('HIDDEN');
      }
      for (let i = 0; i < buttonz.length; i++) {
        buttonz[i].classList.remove('HIDDEN');
      }
      keyboard.shift = false;
      localStorage.setItem('virtualKeyboardShift', false);
    }
  }
}

window.addEventListener('DOMContentLoaded', function() {

  keyboard.lang = localStorage.getItem('virtualKeyboardLang') || 'en';
  if (localStorage.getItem('virtualKeyboardShift') == 'true') {
    keyboard.shift = true;
  } else {
    keyboard.shift = false;
  }

  keyboard.init();

  keyboard.elements.input.addEventListener('focus', function() {
    keyboard.elements.input.blur();
  });

});



// Preventing autorepeat
let lastKeyPressed = null;
// Second way to prevent autorepeat
// let down = false;

// Preventing 'event.shiftkey()' issue
// Sorry for global variables...
let shiftL = false;
let shiftR = false;

window.addEventListener('keydown', function(event) {

  if (event.key == 'AltGraph') {
    document.querySelector('.notes-container').classList.add('pointToNote');
  }

  // Solving ALT problem (blurring the page after pressing the ALT key)
  if (event.code == 'AltLeft' || event.code == 'AltRight') {
    event.preventDefault();
    if (event.code == 'AltLeft') {
      document.querySelector('.keyboard__key-code-AltLeft').classList.add('keyboard__key--active');
    } else if (event.code == 'AltRight') {
      document.querySelector('.keyboard__key-code-AltRight').classList.add('keyboard__key--active');
    }
    return;
  }

  // Preventing autorepeat for LeftCTRL and LeftSHIFT
  if (lastKeyPressed == event.code && (event.code == 'ControlLeft' || event.code == 'ShiftLeft' || event.code == 'ShiftRight')) {
    return;
  };
  lastKeyPressed = event.code;
 
  // Second way to prevent autorepeat
  /*
  if (down) return;
  down = true;
  */  

  // 'b' means 'button'
  let b = document.querySelector(`.keyboard__key-code-${event.code}`);
  if (b) {

    if (b.cl != 'ShiftLeft' && b.cl != 'ControlLeft') {
      b.click();
    } else if (b.cl == 'ShiftLeft') {
      let btn = document.querySelector(".keyboard__key-code-ShiftLeft");
      triggerMouseEvent (btn, "mousedown");
    } else if (b.cl == 'ControlLeft') {
      let btn = document.querySelector(".keyboard__key-code-ControlLeft");
      triggerMouseEvent (btn, "mousedown");
    }

    b.classList.add('keyboard__key--active');
  }

  // Preventing 'event.shiftkey()' issue
  if (event.shiftKey && event.code == 'ShiftLeft') {
    shiftR = true;
  } else if (event.shiftKey && event.code == 'ShiftRight') {
    shiftL = true;
  }

  if (event.code == 'ShiftRight') {
    keyboard.capsLockFunc();
  }
});

window.addEventListener('keyup', function(event) {

  // Preventing autorepeat
  lastKeyPressed = null;
  // Second way to prevent autorepeat
  // down = false;

  let b = document.querySelector(`.keyboard__key-code-${event.code}`);
  if (b) {
    b.classList.remove('keyboard__key--active');

    if (b.cl == 'ShiftLeft') {
      let btn = document.querySelector(".keyboard__key-code-ShiftLeft");
      triggerMouseEvent (btn, "mouseup");
    }
    if (b.cl == 'ControlLeft') {
      let btn = document.querySelector(".keyboard__key-code-ControlLeft");
      triggerMouseEvent (btn, "mouseup");
    }

    if (event.key == 'AltGraph') {
      document.querySelector('.notes-container').classList.remove('pointToNote');
    }

  }

  // Preventing 'event.shiftkey()' issue
  if (shiftL) {
    document.querySelector('.keyboard__key-code-ShiftLeft').classList.remove('keyboard__key--active');
    shiftL = false;
  }
  if (shiftR) {
    document.querySelector('.keyboard__key-code-ShiftRight').classList.remove('keyboard__key--active');
    shiftR = false;
  }

  if (event.code == 'ShiftRight') {
    keyboard.capsLockFunc();
  }
});

function changeLanguage() {

  if (keyboard.lang == 'en' && keyboard.shift == false) {
    let spanz = document.querySelectorAll('.keySpan');
    let buttonz = document.querySelectorAll('.RUS');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'rus';
    localStorage.setItem('virtualKeyboardLang', 'rus');

  } else if (keyboard.lang == 'rus' && keyboard.shift == false) {
    let spanz = document.querySelectorAll('.keySpan');
    let buttonz = document.querySelectorAll('.ENG');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'en';
    localStorage.setItem('virtualKeyboardLang', 'en');
  }
  else if (keyboard.lang == 'en' && keyboard.shift == true) {
    let spanz = document.querySelectorAll('.keySpan');
    let buttonz = document.querySelectorAll('.RUS_SHIFT');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'rus';
    localStorage.setItem('virtualKeyboardLang', 'rus');
  } else if (keyboard.lang == 'rus' && keyboard.shift == true) {
    let spanz = document.querySelectorAll('.keySpan');
    let buttonz = document.querySelectorAll('.SHIFT');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'en';
    localStorage.setItem('virtualKeyboardLang', 'en');
  }
}

// Sorry for global variables with such names...
let x = false;
let y = false;

window.addEventListener('customEvent', function() {
    if (x && y) {
      changeLanguage();
    }
});

// Custom function for simulating mouse events
function triggerMouseEvent (node, eventType) {
  var clickEvent = document.createEvent ('MouseEvents');
  clickEvent.initEvent (eventType, true, true);
  node.dispatchEvent (clickEvent);
}

window.addEventListener('blur', function() {
  let arr = document.querySelectorAll('.keyboard__key');
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('keyboard__key--active');
  }
});
