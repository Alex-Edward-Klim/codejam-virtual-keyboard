const keyboard = {

  lang: 'en',
  shift: false,

  elements: {
    input: null,
    main: null,
    keysContainer: null,
    keys: []
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
        }

        key.innerHTML = `<span class="ENG">${engLayout[i][j]}</span><span class="RUS">${rusLayout[i][j]}</span><span class="SHIFT">${ENGshiftLayout[i][j]}</span><span class="RUS_SHIFT">${RUSshiftLayout[i][j]}</span>`;
        
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
            keyboard.elements.input.value += '\n';
          }
          

          
          if (key.cl == 'CapsLock') {

            if (keyboard.shift == false && keyboard.lang == 'en') {
              let spanz = document.querySelectorAll('span');
              let buttonz = document.querySelectorAll('.SHIFT');
              for (let i = 0; i < spanz.length; i++) {
                spanz[i].classList.add('HIDDEN');
              }
              for (let i = 0; i < buttonz.length; i++) {
                buttonz[i].classList.remove('HIDDEN');
              }
              keyboard.shift = true;

            } else if (keyboard.shift == true && keyboard.lang == 'en') {
              let spanz = document.querySelectorAll('span');
              let buttonz = document.querySelectorAll('.ENG');
              for (let i = 0; i < spanz.length; i++) {
                spanz[i].classList.add('HIDDEN');
              }
              for (let i = 0; i < buttonz.length; i++) {
                buttonz[i].classList.remove('HIDDEN');
              }
              keyboard.shift = false;

            } else if (keyboard.shift == false && keyboard.lang == 'rus') {
              let spanz = document.querySelectorAll('span');
              let buttonz = document.querySelectorAll('.RUS_SHIFT');
              for (let i = 0; i < spanz.length; i++) {
                spanz[i].classList.add('HIDDEN');
              }
              for (let i = 0; i < buttonz.length; i++) {
                buttonz[i].classList.remove('HIDDEN');
              }
              keyboard.shift = true;

            } else if (keyboard.shift == true && keyboard.lang == 'rus') {
              let spanz = document.querySelectorAll('span');
              let buttonz = document.querySelectorAll('.RUS');
              for (let i = 0; i < spanz.length; i++) {
                spanz[i].classList.add('HIDDEN');
              }
              for (let i = 0; i < buttonz.length; i++) {
                buttonz[i].classList.remove('HIDDEN');
              }
              keyboard.shift = false;
            }
          }

          if (key.cl == 'ControlLeft') {
            let newEvent = new Event('customEvent');
            newEvent.key = 'ControlLeft';
            window.dispatchEvent(newEvent);
          }
          
          if (key.cl == 'ShiftLeft') {
            let newEvent = new Event('customEvent');
            newEvent.key = 'ShiftLeft';
            window.dispatchEvent(newEvent);
          }
          
          });

        key.addEventListener('focus', function() {
          key.blur();
        })

        this.elements.keysContainer.appendChild(key);
      }
      this.elements.keysContainer.appendChild(document.createElement('br'));
    }

  },

  init() {
    // Create main elements
    this.elements.input = document.createElement('input');
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.input.classList.add('input-field');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');

    //

    // Put elements into DOM
    document.body.appendChild(this.elements.input);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    keyboard.createKeys();
  }
}

window.addEventListener('DOMContentLoaded', function() {
  keyboard.init();

  keyboard.elements.input.addEventListener('focus', function() {
    keyboard.elements.input.blur();
  });

});

window.addEventListener('keydown', function(event) {

  let b = document.querySelector(`.keyboard__key-code-${event.code}`);
  if (b) {
    b.click();
    b.classList.add('keyboard__key--active');
  }

});

window.addEventListener('keyup', function(event) {
  let b = document.querySelector(`.keyboard__key-code-${event.code}`);
  if (b) {
    b.classList.remove('keyboard__key--active');
  }
});



//



function changeLanguage() {
  let ENGbuttonz = document.querySelectorAll('span.ENG');
  let RUSbuttonz = document.querySelectorAll('span.RUS');
  if (keyboard.lang == 'en' && keyboard.shift == false) {
    for (let i = 0; i < ENGbuttonz.length; i++) {
      ENGbuttonz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < RUSbuttonz.length; i++) {
      RUSbuttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'rus';
  } else if (keyboard.lang == 'rus' && keyboard.shift == false) {
    for (let i = 0; i < ENGbuttonz.length; i++) {
      ENGbuttonz[i].classList.remove('HIDDEN');
    }
    for (let i = 0; i < RUSbuttonz.length; i++) {
      RUSbuttonz[i].classList.add('HIDDEN');
    }
    keyboard.lang = 'en';
  }

  else if (keyboard.lang == 'en' && keyboard.shift == true) {
    let spanz = document.querySelectorAll('span');
    let buttonz = document.querySelectorAll('.RUS_SHIFT');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'rus';
  } else if (keyboard.lang == 'rus' && keyboard.shift == true) {
    let spanz = document.querySelectorAll('span');
    let buttonz = document.querySelectorAll('.SHIFT');
    for (let i = 0; i < spanz.length; i++) {
      spanz[i].classList.add('HIDDEN');
    }
    for (let i = 0; i < buttonz.length; i++) {
      buttonz[i].classList.remove('HIDDEN');
    }
    keyboard.lang = 'en';
  }
  
}

window.addEventListener('customEvent', function(event) {
  if (event.key == 'ControlLeft' && event.key == 'ShiftLeft') {
    changeLanguage();
  }
  
});
