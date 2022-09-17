import {words1, words2, words3, words4, words5, words6, words7, words8, words9, words10, words11, words12} from './words.js'

const list = document.querySelector('#words');
const letters = document.querySelectorAll('.letter');
const check = document.querySelector('#check');
const napis = document.querySelector('#napis');
const inp = document.querySelectorAll('.inp');
const inputs = document.querySelector('#inputs');
const tablinks = document.querySelectorAll(".tablink")
const body = document.querySelector('BODY');
const resetbtn = document.querySelector('#reset')
const qm = document.querySelector('#qm')
const closebtn = document.querySelector('#closebtn')
const popup = document.querySelector('#popup');
const popupL = document.querySelector('#popupLack');

const mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', () => {
	topFunction()
	mybutton.blur()
})
const big = document.querySelector('#A')
big.addEventListener('click', () => {
	font()
	big.blur()
})
closebtn.addEventListener('click', e => {
	if (!qm.classList.contains('if')) {
		qm.click()
		qm.classList.add('if')
	} else {
		qm.classList.remove('if')
		qm.blur()
	}
	qm.classList.toggle('if')

	document.querySelector('#id01').click()
	letterCheck(e.key)
})
document.querySelector('#id01').addEventListener('mousedown', () => {
	qm.classList.toggle('if')

})
qm.addEventListener('click', () => {
	qm.classList.toggle('if')
	document.querySelector('#div').click()
})
resetbtn.addEventListener('click', e=>{
	reset()
})
check.addEventListener('change', e=>{
	yellow()
})
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		mybutton.style.opacity = "1";
	} else {
		mybutton.style.opacity = "0";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}
window.addEventListener('load', () => {
	var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	var toastList = toastElList.map(function (toastEl) {
		return new bootstrap.Toast(toastEl)
	})
	toastList[1].show()
})

function alertfn() {
	var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	var toastList = toastElList.map(function (toastEl) {
		return new bootstrap.Toast(toastEl)
	})
	toastList[0].show()
}

function isEmpty() {
	let count = 0;
	for (let i = 0; i < Words.length; i++) {
		if (Words[i] == ' ')
			count++
		if (count == Words.length) {
			popupL.style.cssText = `
			display: block;`
			popupL.classList.add('showLack')
			popupL.style.opacity = '1'
			list.style.display = 'none'
		}
	}
}

for (let i = 0; i < letters.length; i++) {
	letters[i].addEventListener('click', e => {
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('lack')) window.lack = true
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('position')) window.position = true
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('thereIs')) window.thereis = true
		let c = 0
		for (let j = 0; j < 5; j++) {
			if (inp[j].value == letters[e.target.id]) c++
		}

		if (!(!letters[i].classList.contains('position') && !letters[i].classList.contains('lack') && !letters[i].classList.contains('thereIs')) && document.activeElement !== inp[4] && document.activeElement !== inp[3] && document.activeElement !== inp[2] && document.activeElement !== inp[1] && document.activeElement !== inp[0]) {

			if (!window.inpfocus && (window.position || window.lack || window.thereis))
				alertfn()

		}
		window.inpfocus = false
	})
}

function font() {
	list.classList.toggle('font')
	e.blur()
}

function yellow() {
	napis.classList.remove('change2')
	napis.classList.add('change')
	setTimeout(() => {
		if (!check.checked) {
			napis.innerHTML = 'Kliknij raz na literę, jeśli hasło jej <u>nie zawiera</u>';
		} else if (check.checked) {
			napis.innerHTML = 'Kliknij raz na literę, jeśli hasło ją <u>zawiera</u>';
		}
		napis.classList.remove('change')
		napis.classList.add('change2')
	}, 200)

	if (!check.checked) {
		check.style.backgroundColor = 'grey'
		check.style.border = 'grey'
	} else if (check.checked) {
		check.style.backgroundColor = 'gold'
		check.style.border = 'gold'
	}
	check.blur()
}

const div = document.querySelector('#div')
document.addEventListener('keydown', e => {
	if (e.key == 'ArrowDown')
		div.scroll({
			top: div.scrollTop + 300,
			behavior: 'smooth'
		});
	if (e.key == 'ArrowUp')
		div.scroll({
			top: div.scrollTop - 300,
			behavior: 'smooth'
		});
})

document.addEventListener("keyup", e => {
	let act = document.activeElement;
	document.querySelector('#qm').blur()

	for (let i = 0; i < 5; i++) {
		if (inp[i] !== act && inp[i].value == '')
			inp[i].classList.remove('full')
	}

	if (e.key == 'CapsLock') {

		if (list.classList.contains('font'))
			list.classList.remove('font')
		else list.classList.add('font')
	}

	if (e.key == '/' || e.key == '?') {
		if (!qm.classList.contains('if')) {
			qm.click()
		} else {
			closebtn.click()
			qm.classList.remove('if')
			qm.blur()
		}
	}

	if (e.key == "Shift" && e.key !== "AltGraph") {
		check.click()
		body.focus()
	}
	if (e.key == '1') {
		inp[0].focus()
	}
	if (e.key == '2') {
		inp[1].focus()
	}
	if (e.key == '3') {
		inp[2].focus()
	}
	if (e.key == '4') {
		inp[3].focus()
	}
	if (e.key == '5') {
		inp[4].focus()
	}
	if (e.key == 'Escape') {
		if (qm.classList.contains('if')) {
			closebtn.click()
			qm.classList.remove('if')
			qm.blur()
		} else
			resetbtn.click()
	}
	if (e.key == '0') {
		for (let i = 0; i < 5; i++) {
			inp[i].blur()
		}
	}

	if ((document.activeElement == body || document.activeElement.classList.contains('full')) && e.key !== 'Escape' && e.key !== 'Shift' && e.key !== '/') {
		letterCheck(e, document.activeElement)
	}
});



let added = 'brzeg, szkło, kurka, tykwa, konto, kusza, piłka'; //tutaj dopisuj brakujące wyrazy
let Words = (words1 + ', ' + words2 + ', ' + words3 + ', ' + words4 + ', ' + words5 + ', ' + words6 + ', ' + words7 + ', ' + words8 + ', ' + words9 + ', ' + words10 + ', ' + words11 + ', ' + words12 + ', ' + added).replaceAll(', ', ',').split(',').sort();

let WordsReset = Words;

function reset() {
	Words = (words1 + ', ' + words2 + ', ' + words3 + ', ' + words4 + ', ' + words5 + ', ' + words6 + ', ' + words7 + ', ' + words8 + ', ' + words9 + ', ' + words10 + ', ' + words11 + ', ' + words12 + ', ' + added).replaceAll(', ', ',').split(',').sort()
	list.innerHTML = Words.join(" ");
	window.inpfocus = false
	window.thereis = false
	window.lack = false
	window.position = false
	popupL.style.opacity = '0'
	list.style.display = 'block'
	resetbtn.blur()
	for (let i = 0; i < 5; i++) {
		inp[i].blur()
	}

	for (let i = 0; i < letters.length; i++) {
		if (letters[i].classList.contains('lack') || letters[i].classList.contains('position') || letters[i].classList.contains('thereIs'))
			letters[i].classList.add('new')
		letters[i].classList.remove('thereIs', 'position', 'lack')
	}

	setTimeout(() => {
		for (let i = 0; i < letters.length; i++) {
			letters[i].classList.remove('new')
		}
	}, 2000)

	for (let i = 0; i < 5; i++) {
		inp[i].value = ''
		inp[i].classList.remove('full')
		inp[i].readOnly = false
	}

	list.style.height = "auto";

}



function clickLetter(aw) {
	for (let i = 0; i < letters.length; i++) {
		letters[i].addEventListener('click', ev => {
			list.style.height = "auto"
			if (!check.checked) {

				if (((letters[i].classList.contains('lack') || letters[i].classList.contains('thereIs') || letters[i].classList.contains('position')) && !document.acftiveElement.classList.contains('full'))) {


				} else {

					if (document.activeElement.classList.contains('full') && (ev.target.classList.contains('thereIs') || ev.target.classList.contains('lack') || ev.target.classList.contains('position'))) {


						//alertfn()
					} else {
						letters[i].classList.add('lack');

						let Id = letters[i].id;


						for (let i = 0; i < Words.length; i++) {


							if (Words[i].indexOf(Id) > -1) {

								Words[i] = ' ';

							}
						}


						list.innerHTML = Words.join(' ');
						isEmpty()
					}
				}

			} else if (check.checked) {



				if (((letters[i].classList.contains('lack') || letters[i].classList.contains('thereIs') || letters[i].classList.contains('position')) && !document.activeElement.classList.contains('full'))) {

					//alertfn()
				} else {

					if (document.activeElement.classList.contains('full') && (ev.target.classList.contains('thereIs') || ev.target.classList.contains('lack') || ev.target.classList.contains('position'))) {


						//alertfn()
					} else {
						letters[i].classList.add('thereIs');
						let Id = letters[i].id;

						for (let i = 0; i < Words.length; i++) {


							if (Words[i].indexOf(Id) == -1) {


								Words[i] = ' ';
							}
						}

						list.innerHTML = Words.join(' ');
						isEmpty()
					}
				}
			}
		});
	}
}
clickLetter()

for (let i = 0; i < inp.length; i++) {

	inp[i].addEventListener("beforeinput", e => {
		e.currentTarget.previousValue = e.currentTarget.value;
	});
	inp[i].addEventListener('input', ev => {
		window.inpfocus = true

		for (let i = 0; i < letters.length; i++) {
			ev.currentTarget.value = ev.currentTarget.value.toLowerCase()
			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('lack')) {
				ev.currentTarget.value = ev.currentTarget.previousValue
				window.lack = true

				alertfn()

			} else window.lack = false
			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('position'))
				window.position = true
			else window.position = false

			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('thereIs'))
				window.thereis = true
			else window.thereis = false

		}
		if (/[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{1}/.test(ev.currentTarget.value)) {

			inp[i].value = ev.currentTarget.value.toLowerCase()

			let j = 0;
			for (var word of Words) {
				
				if (word.charAt(i) !== ev.currentTarget.value.toLowerCase()) {
					word = ' ';
					inp[i].readOnly = true
				}
				
				Words[j] = word;
				j++;
			}
			
			for (let k = 0; k < letters.length; k++) {
				if (letters[k].id == inp[i].value) {
					letters[k].classList.add('position');
					window.position = true
					
				}
			}
			list.innerHTML = Words.join(' ');
			list.style.height = "auto"

			isEmpty()

			let act = document.activeElement;

			if ((act == inp[0] && inp[0].hasAttribute('readOnly')) || (act == inp[1] && inp[1].hasAttribute('readOnly')) || (act == inp[2] && inp[2].hasAttribute('readOnly')) || (act == inp[3] && inp[3].hasAttribute('readOnly')) || (act == inp[4] && inp[4].hasAttribute('readOnly'))) {

				act.classList.add('full')
			}
		} else {
			ev.currentTarget.value = ev.currentTarget.previousValue;
		}
	});
}

function skipF(e) {
	e++
	inputs.children[e].focus()
	for (let i = 0; i < 5; i++) {
		if (inp[e].classList.contains('full') && (inp[e] === document.activeElement)) {
			if (e == 4) {
				e = -1
			}
			inp[e + 1].focus()
			e++
		}
	}
}


function skipB(e) {
	e--
	inputs.children[e].focus()
	const el = document.activeElement

	for (let i = 0; i < 5; i++) {
		if (inp[e].classList.contains('full') && (inp[e] === document.activeElement)) {
			if (e == 0) {
				e = 5
			}
			inp[e - 1].focus()
			e--
		}
	}
}

function letterCheck(e, inpid) {
	if (inpid == undefined) return
	else if (inpid == inp[0] || inpid == inp[1] || inpid == inp[2] || inpid == inp[3] || inpid == inp[4] || inpid == inp[5])
		inpid.blur()

		window.lack = true
		window.position = true
		window.thereis = true
		// window.inpfocus=false
		if (e.key == 'ą' || e.key == 'Ą') letters[0].click()
		if (e.key == 'ć' || e.key == 'Ć') letters[1].click()
		if (e.key == 'ę' || e.key == 'Ę') letters[2].click()
		if (e.key == 'ł' || e.key == 'Ł') letters[3].click()
		if (e.key == 'ó' || e.key == 'Ó') letters[4].click()
		if (e.key == 'ś' || e.key == 'Ś') letters[5].click()
		if (e.key == 'ń' || e.key == 'Ń') letters[6].click()
		if (e.key == 'ż' || e.key == 'Ż') letters[7].click()
		if (e.key == 'ź' || e.key == 'Ź') letters[8].click()
		if (e.key == 'q' || e.key == 'Q') letters[9].click()
		if (e.key == 'w' || e.key == 'W') letters[10].click()
		if (e.key == 'e' || e.key == 'E') letters[11].click()
		if (e.key == 'r' || e.key == 'R') letters[12].click()
		if (e.key == 't' || e.key == 'T') letters[13].click()
		if (e.key == 'y' || e.key == 'Y') letters[14].click()
		if (e.key == 'u' || e.key == 'U') letters[15].click()
		if (e.key == 'i' || e.key == 'I') letters[16].click()
		if (e.key == 'o' || e.key == 'O') letters[17].click()
		if (e.key == 'p' || e.key == 'P') letters[18].click()
		if (e.key == 'a' || e.key == 'A') letters[19].click()
		if (e.key == 's' || e.key == 'S') letters[20].click()
		if (e.key == 'd' || e.key == 'D') letters[21].click()
		if (e.key == 'f' || e.key == 'F') letters[22].click()
		if (e.key == 'g' || e.key == 'G') letters[23].click()
		if (e.key == 'h' || e.key == 'H') letters[24].click()
		if (e.key == 'j' || e.key == 'J') letters[25].click()
		if (e.key == 'k' || e.key == 'K') letters[26].click()
		if (e.key == 'l' || e.key == 'L') letters[27].click()
		if (e.key == 'z' || e.key == "Z") letters[28].click()
		if (e.key == 'x' || e.key == 'X') letters[29].click()
		if (e.key == 'c' || e.key == 'C') letters[30].click()
		if (e.key == 'v' || e.key == 'V') letters[31].click()
		if (e.key == 'b' || e.key == 'B') letters[32].click()
		if (e.key == 'n' || e.key == 'N') letters[33].click()
		if (e.key == 'm' || e.key == 'M') letters[34].click()
	// }

	if (inpid == inp[0] || inpid == inp[1] || inpid == inp[2] || inpid == inp[3] || inpid == inp[4] || inpid == inp[5])
		inpid.focus()
}

function arrows(ev) {
	inp[0].addEventListener('keyup', e => {
		if (e.key == 'ArrowRight') {
			skipF(0)
		} else if (e.key == 'ArrowLeft') {
			skipB(5)
		} else letterCheck(e)
	})
	inp[1].addEventListener('keyup', e => {
		if (e.key == 'ArrowRight') {
			skipF(1)
		} else if (e.key == 'ArrowLeft') {
			skipB(1)
		} else letterCheck(e)
	})
	inp[2].addEventListener('keyup', e => {
		if (e.key == 'ArrowRight') {
			skipF(2)
		} else if (e.key == 'ArrowLeft') {
			skipB(2)
		} else letterCheck(e)
	})
	inp[3].addEventListener('keyup', e => {
		if (e.key == 'ArrowRight') {
			skipF(3)
		} else if (e.key == 'ArrowLeft') {
			skipB(3)
		} else letterCheck(e)
	})
	inp[4].addEventListener('keyup', e => {
		if (e.key == 'ArrowRight') {
			skipF(-1)
		} else if (e.key == 'ArrowLeft') {
			skipB(4)
		} else letterCheck(e)
	})
}
arrows()
list.innerHTML = Words.join(' ');

qm.addEventListener('mouseenter', e => {
	if (Math.max(
			document.body.scrollWidth,
			document.documentElement.scrollWidth,
			document.body.offsetWidth,
			document.documentElement.offsetWidth,
			document.documentElement.clientWidth
		) > 600)
		qm.innerHTML = '<b>pomoc</b>'
})

qm.addEventListener('mouseleave', e => {
	qm.innerHTML = '<b>?</b>'
})

big.addEventListener('mouseenter', e => {
	if (Math.max(
			document.body.scrollWidth,
			document.documentElement.scrollWidth,
			document.body.offsetWidth,
			document.documentElement.offsetWidth,
			document.documentElement.clientWidth
		) > 600)
		big.innerHTML = '<b style="white-space:nowrap">zmień rozmiar</b>'
})
big.addEventListener('mouseleave', e => {
	big.innerHTML = '<b>A</b>'
})

const lettersTab = [...document.querySelectorAll('.letter')]

function myFunction(x) {
	if (x.matches) { // If media query matches
		//   document.body.style.backgroundColor = "yellow";
		document.querySelector('#inject').style.display = 'flex'
		lettersTab.map(el => {
			el.style.fontSize = '100%'
		})
		document.querySelector('#inject').innerHTML = '<button  data-bs-toggle="modal" data-bs-target="#id01" id="qm"  ><b>?</b></button><button id="A" onclick="font()"><b>A</b></button>'
	} else {
		document.querySelector('#inject').style.display = 'none'
		lettersTab.map(el => {
			el.style.fontSize = '1.5rem'
		})
	}
}

var x = window.matchMedia("(max-width: 620px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function theme() {

	// document.querySelector(':root').css('--bg', 'red');
	document.documentElement.style.setProperty('--bg', '#ff0000');
}