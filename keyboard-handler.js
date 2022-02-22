var textbox;
var isCaps = false;
var lowercase = document.getElementsByClassName('lowercase-row');
var uppercase = document.getElementsByClassName('uppercase-row');
var event = new Event('change');

function typeVirtualKeyboardKey(key) {

	if (textbox != null && key != 'Caps' && key != 'Shift') {
		if (key == 'Backspace') {
			textbox.value = textbox.value.substring(0, textbox.value.length - 1);
		} else if (key == 'Clear') {
			textbox.value = '';
		} else if (key == 'Tab') {
			textbox.value += '    ';
		} else if (key == 'Enter') {
		 var input = document.getElementsByClassName('webchat__send-box-text-box__input')[0];
		 
		 console.log('input is ',input.value);

			textbox.value += '\r';
		} else {
			if (key == '&lt;') {
				textbox.value += '<';
			} else if (key == '&gt;') {
				textbox.value += '>';
			} else if (key == '&amp;') {
				textbox.value += '&';
			} else {
				textbox.value += key;
			}
		}
	}

	
		for (row of uppercase) {
			row.style.display = 'block';
		}

	if (textbox != null) {
		window.setTimeout(function ()
        {   
            textbox.dispatchEvent(event);
            textbox.focus();
		}, 0);
	}
	
}


function selectTextbox(newTextbox) {
	textbox = newTextbox;
}