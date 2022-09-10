//może wyrazy pobuerać z firebase
//dodać więcej info w modalu,
//poprwić rozmiar czcionki na mobilnych
//dodać tryb ciemny
//rozdzielić na 2 pliki
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

//Get the button:
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', () => {
	mybutton.blur()
})
const big = document.querySelector('#A')
big.addEventListener('click', () => {
	big.blur()
})
closebtn.addEventListener('click', e => {
	if (!qm.classList.contains('if')) {
		qm.click()
		qm.classList.add('if')
	} else {
		// closebtn.click()
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
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {



		mybutton.style.opacity = "1";

	} else {


		// setTimeout(()=>{
		// 	mybutton.style.display = "none";
		// }, 1000)
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
	console.log('toastElList: ', toastElList[1]);

	var toastList = toastElList.map(function (toastEl) {


		return new bootstrap.Toast(toastEl)
	})
	console.log('toastList: ', toastList);
	toastList[1].show()


})

function alertfn() {

	var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	console.log('toastElList: ', toastElList[1]);

	var toastList = toastElList.map(function (toastEl) {


		return new bootstrap.Toast(toastEl)
	})
	console.log('toastList: ', toastList);
	toastList[0].show()

}

function isEmpty() {
	let count = 0;
	for (let i = 0; i < Words.length; i++) {
		if (Words[i] == ' ')
			count++
		if (count == Words.length) {


			popupL.style.cssText = `
			display: block;
			
			`
			popupL.classList.add('showLack')
			popupL.style.opacity = '1'
			list.style.display = 'none'

		}
	}
}
// window.inpfocus=false
////alertt
for (let i = 0; i < letters.length; i++) {
	letters[i].addEventListener('click', e => {
		//debugger;
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('lack')) window.lack = true
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('position')) window.position = true
		if (letters[i].id == e.currentTarget.id && letters[i].classList.contains('thereIs')) window.thereis = true

		// alert(e.currentTarget.id)
		let c = 0
		for (let j = 0; j < 5; j++) {
			if (inp[j].value == letters[e.target.id]) c++
		}

		if (!(!letters[i].classList.contains('position') && !letters[i].classList.contains('lack') && !letters[i].classList.contains('thereIs')) && document.activeElement !== inp[4] && document.activeElement !== inp[3] && document.activeElement !== inp[2] && document.activeElement !== inp[1] && document.activeElement !== inp[0]) {
			console.log('pierwszy ALERT');
			// alert(window.inpfocus)

			// if(window.inpfocus && window.lack)
			// alert(window.lack)

			// 			alertfn()

			if (!window.inpfocus && (window.position || window.lack || window.thereis))
				alertfn()



		} else if (((document.activeElement == inp[4] && e.target.classList.contains('lack')) || (document.activeElement == inp[3] && e.target.classList.contains('lack')) || (document.activeElement == inp[2] && e.target.classList.contains('lack')) || (document.activeElement == inp[1] && e.target.classList.contains('lack')) || (document.activeElement == inp[0] && e.target.classList.contains('lack')))) {
			console.log('drugi Alert', e.target.classList);

			//alertfn()

		} else if (((document.activeElement == inp[4] && e.target.classList.contains('thereIs')) || (document.activeElement == inp[3] && e.target.classList.contains('thereIs')) || (document.activeElement == inp[2] && e.target.classList.contains('thereIs')) || (document.activeElement == inp[1] && e.target.classList.contains('thereIs')) || (document.activeElement == inp[0] && e.target.classList.contains('thereIs')))) {
			//alertfn()


		} else if (((document.activeElement == inp[4] && e.target.classList.contains('position')) || (document.activeElement == inp[3] && e.target.classList.contains('position')) || (document.activeElement == inp[2] && e.target.classList.contains('position')) || (document.activeElement == inp[1] && e.target.classList.contains('position')) || (document.activeElement == inp[0] && e.target.classList.contains('position')))) {


			//alertfn()
		}
		window.inpfocus = false

	})
}
// for(let i=0; i<letters.length; i++){
// letters[i].addEventListener('click', e=>{
// 	if
// })
// }
function font() {
	console.log('FONT', e.id);

	list.classList.toggle('font')

	e.blur()
}

// function modalfn() {
// 	document.getElementById('id01').style.display = 'block';
// 	qm.classList.add('if')
// }
// const modal = document.querySelector('#id01')
// const modalC = document.querySelector('.modal-content')
// const closebtn = document.querySelector('.close')
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
// 	if (event.target == modal || event.target == closebtn) {
// 		modal.style.backgroundColor = "rgb(0,0,0,0)";
// 		closebtn.style.display = 'none'
// 		modalC.classList.add('closeanim')
// 		setTimeout(() => {
// 			modal.style.display = "none"
// 			modal.style.backgroundColor = "rgb(0,0,0,0.4)"
// 			modalC.classList.remove('closeanim')
// 			closebtn.style.display = 'block'
// 		}, 400)
// 	}
// }
//qwqwqw
// function openTab(tab, elmnt, color) {
// 	// Hide all elements with class="tabcontent" by default */
// 	var i, tabcontent, tablinks;
// 	tabcontent = document.getElementsByClassName("tabcontent");
// 	for (i = 0; i < tabcontent.length; i++) {
// 		tabcontent[i].style.display = "none";
// 	}

// 	// Remove the background color of all tablinks/buttons
// 	tablinks = document.getElementsByClassName("tablink");
// 	for (i = 0; i < tablinks.length; i++) {
// 		tablinks[i].style.backgroundColor = "";
// 	}

// 	// Show the specific tab content
// 	document.getElementById(tab).style.display = "block";

// 	// Add the specific color to the button used to open the tab content
// 	elmnt.style.backgroundColor = color;
// }

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


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
//inputy	

for (let i = 0; i < letters.length; i++) {

	letters[i].addEventListener('mouseenter', () => {
		if ((!letters[i].classList.contains('position') && !letters[i].classList.contains('lack') && !letters[i].classList.contains('thereIs'))) {

			if (check.checked) {
				console.log('aa')
				letters[i].setAttribute('title', 'kliknij, jeśli hasło zawiera tę literę')
			} else letters[i].setAttribute('title', 'kliknij, jeśli hasło nie zawiera tej litery')
		} else {

			letters[i].removeAttribute('title')
		}
	})



}
const div = document.querySelector('#div')
document.addEventListener('keydown', e => {
	console.log('dd', div.scrollTop);

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
	// alert('elo')
})

document.addEventListener("keyup", e => {
	// 	if(e.key=='ArrowDown')
	// div.scroll({
	// 	top: div.scrollTop + 180,

	// 	behavior: 'smooth'
	//   });

	//   if(e.key=='ArrowUp')
	//   div.scroll({
	// 	  top: div.scrollTop - 180,

	// 	  behavior: 'smooth'
	// 	});
	// if(e.key=='a'){
	// 	document.querySelector('#a').click()
	// }

	let act = document.activeElement;

	document.querySelector('#qm').blur()

	console.log('aktywny: ', act);




	// if(act==inp[0] || act==inp[1] || act==inp[2] || act==inp[3] || act==inp[4]){
	// 	act.classList.add('full')
	// }	


	for (let i = 0; i < 5; i++) {
		if (inp[i] !== act && inp[i].value == '')
			inp[i].classList.remove('full')
	}

	if (e.key == 'CapsLock') {

		// let style = getComputedStyle(list)

		// if (style.fontSize == '22px') {
		// 	list.style.fontSize = '16px'
		// } else if (style.fontSize == '16px') {
		// 	list.style.fontSize = '22px'
		// }

		if (list.classList.contains('font'))
			list.classList.remove('font')
		else list.classList.add('font')
	}
	//qwqwqw
	if (e.key == '/' || e.key == '?') {
		//debugger
		if (!qm.classList.contains('if')) {
			qm.click()
			// qm.classList.add('if')
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
	// else{
	// 	const el = document.activeElement
	// //const ee = e
	//, el);

	// 	for(let i=0; i<5; i++){

	// 			if(inp[i]==document.activeElement && inp[i].classList.contains('full') && (e.key !=='ArrowRight' && e.key!=='ArrowLeft' ))
	// 			{
	// 				inp[i].blur()
	// 		
	// 			}
	// 	}
	// }


});















let words1 = "abace, abaci, abaka, abaką, abakę, abaki, abako, abaku, abata, abaty, abbie, abbom, abbów, abcug, abdul, abobr, abort, abrys, absta, abstą, abstę, absto, absty, absyd, abwer, acana, acani, acanu, acany, achać, achaj, achał, acham, achań, achom, achów, acida, acpan, acpań, actio, acyle, acyli, acylu, adasi, adatu, adaty, addio, adept, adieu, admin, adres, adria, adrią, adrie, adrię, adrii, adrio, adryj, adżyk, aeccy, aecka, aecką, aecki, aecku, aeral, aerob, afcie, afekt, afera, aferą, aferę, afero, afery, afgan, afiks, afisz, afryk, afryt, aftom, agach, agada, agadą, agadę, agado, agady, agama, agamą, agamę, agami, agamo, agamy, agany, agapa, agapą, agape, agapę, agapo, agapy, agaru, agary, agatu, agaty, agawa, agawą, agawę, agawo, agawy, agema, agemą, agemę, agemo, agemy, agend, agens, agent, agfie, agfom, aggia, aggio, aggiu, agiem, agile, agiom, agiów, aglet, agnat, agnus, agona, agoną, agonę, agono, agonu, agony, agora, agorą, agorę, agoro, agory, agraf, aguti, ahims, ahins, aidsa, aidsu, aidsy, aioli, aisis, ajaks, ajent, ajeru, ajery, ajkuj, ajmak, ajran, ajwar, akant, akara, akarą, akarę, akaro, akary, akces, akcie, akcik, akcja, akcją, akcje, akcję, akcji, akcjo, akcyj, akcyz, akiom, aklin, akond, akont, akord, akrem, akrom, akron, akrów, akryl, akrze, aksel, aksis, aksla, aksle, aksli, akslu, akson, aktem, aktom, aktor, aktów, aktyn, aktyw, akutu, akuty, akwen, akyna, akyny, alach, alaks, alami, alarm, alasz, alaxu, alaxy, albem, albie, albit, albom, alboż, albów, album, alcie, aldem, aldis, aldol, aldom, aldoz, aldów, aldyn, aldze, aleby, alefa, alefu, alefy, aleja, aleją, aleje, aleję, alejo, alert, alfce, alfek, alfer, alfie, alfka, alfką, alfkę, alfki, alfko, alfom, algin, algol, algom, alias, aliaż, alibi, alija, aliją, alije, aliję, alijo, alima, alimy, alitu, ality, alkad, alkan, alken, alkil, alkin, alkom, alków, almei, almej, almik, alnik, aloes, aloha, alona, aloną, alonę, alono, alony, alonż, aloza, alozą, alozę, alozo, alozy, alpag, alpak, alpem, alpie, alpom, alpów, altan, altem, altom, altów, alumn, alund, alwar, ałunu, ałuny, ałycz, amant, ambem, ambie, ambit, ambom, ambon, ambra, ambrą, ambrę, ambro, ambry, ameba, amebą, amebę, amebo, ameby, amfid, amfie, amfom, amfor, amica, amicą, amice, amicę, amico, amida, amidą, amidę, amido, amidu, amidy, amiga, amigą, amigę, amigi, amigo, amiki, amina, aminą, aminę, amino, aminy, amiom, amisz, amoki, amoku, amole, amoli, amolu, amonu, amony, amora, amorf, amory, amper, ampla, amplą, ample, amplę, ampli, amplo, ampul, ampuł, amrit, amryt, amura, amury, amyle, amyli, amylu, anand, anatt, ancie, ancug, aneks, angaż, angin, angob, angol, angor, angst, aniby, anima, animą, anime, animę, animo, animy, anioł, anion, ankra, ankrą, ankrę, ankro, ankry, annat, anoda, anodą, anodę, anodo, anody, anons, ansie, ansom, antab, antał, antek, anten, antka, antki, antku, antom, antyk, anusa, anusy, anyże, anyżu, aoida, aoidą, aoidę, aoido, aoidy, aojda, aojdą, aojdę, aojdo, aojdy, aorta, aortą, aortę, aorto, aorty, aowca, aowce, aowcu, aowcy, apage, apasz, apate, apeks, apele, apeli, apell, apelu, apiać, apiol, apisu, apisy, aplet, aplik, aplit, aplom, aport, apret, apryl, apsar, apsel, apsik, apsla, apsle, apsli, apslu, apsyd, aptek, araba, araby, arach, araci, araki, araku, arame, arami, aranż, arata, araty, arbek, arbie, arbom, arbuz, arche, archi, arden, areał, arece, areka, areką, arekę, areki, areko, arena, areną, arend, arenę, areng, areno, arenu, areny, arete, arfie, arfom, arfuj, argon, argot, argus, arhat, arian, ariel, ariet, ariom, arion, arios, arkad, arkan, arkom, arkoz, armad, armat, armia, armią, armie, armię, armii, armij, armil, armio, arnik, arnot, aromu, aromy, aronu, arony, arowi, arras, arsan, arsen, arsie, arsom, arsyn, artel, aryki, aryku, aryle, aryli, arylu, asach, asami, asana, asaną, asanę, asani, asano, asanu, asany, asauł, ascez, ascon, asdic, asert, askar, asowi, aspan, assai, astat, aster, astik, astma, astmą, astmę, astmo, astmy, astra, astrą, astrę, astro, astry, asura, asurą, asurę, asuro, asury, asyst, aszet, aszyk, aśram, atach, ataki, ataku, atami, atari, ataru, atary, atest, atlas, atłas, atman, atole, atoli, atolu, atomu, atomy, atowi, atrap, atria, attyd, attyk, atutu, atuty, aucie, audio, audyt, augit, augur, aukub, aulom, aulos, aułem, aułom, aułów, aurom, auror, aurze, autek, autem, autka, autko, autku, autom, autor, autów, autyk, awale, awalu, awans, awena, aweną, awenę, aweno, awenu, aweny, awers, awiza, awizo, awizu, awizy, awosz, azali, azbuk, azdyk, azoik, azotu, azoty, azowa, azową, azowe, azowi, azowy, azyle, azylu, azyma, azymą, azymę, azymo, azymy, azyna, azyną, azynę, azyno, azyny, ażbym, ażbyś, ażeby, ażiem, ażiom, ażiów, ażuru, ażury, babce, babci, babek, babia, babią, babie, babim, babin, babka, babką, babkę, babki, babko, babom, babon, babów, babra, babrz, babsk, babul, babuń, babus, babuś, bacie, bacik, bacom, baców, bacuj, baczą, baczę, baczy, badać, badaj, badał, badam, badan, badań, badem, badom, badów, badyl, bagaż, bagna, bagno, bagnu, bagra, bagru, bagry, bahta, bahty, bajać, bajaj, bajał, bajam, bajan, bajań, bając, bajca, bajcą, bajce, bajcę, bajco, bajcy, bajcz, bajda, bajdą, bajdę, bajdo, bajdy, bajek, bajem, bajer, bajęd, bajka, bajką, bajkę, bajki, bajko, bajmy, bajom, bajor, bajów, bajta, bajtu, bajty, bajże, bakan, baken, bakom, baków, baksa, baksy, bakun, balas, balat, balem, balet, balia, balią, balie, balię, balii, balij, balik, balio, balom, balon, balot, balów, balsa, balsą, balsę, balso, balsy, baluj, bałak, bałam, bałaś, bałby, bałem, bałeś, bałtu, bałty, bałyk, bamba, bambo, bambu, banał, banan, banat, bance, banda, bandą, bandę, bando, bandu, bandy, banek, banem, baner, bania, banią, banie, banię, banio, baniu, banjo, banka, banką, bankę, banki, banko, banku, banom, banów, banta, bantu, banty, banuj, bańce, bańka, bańką, bańkę, bańki, bańko, baonu, baony, baora, baory, barak, baran, barat, baraż, barce, barci, barda, bardo, bardu, bardy, barek, barem, bareż, baria, barią, barie, barię, barii, bario, barka, barką, barkę, barki, barko, barku, barnu, barny, barok, barom, baron, barów, barta, bartą, bartę, barto, barty, barwa, barwą, barwę, barwi, barwo, barwy, baryj, barył, baryt, barze, basek, basem, basen, baset, basfa, basfy, basic, basie, baski, basku, basma, basmą, basmę, basmo, basmy, basom, basów, bassa, bassy, basta, basuj, basza, baszą, basze, baszę, baszo, baszt, baszy, baśce, baśka, baśką, baśkę, baśki, baśko, baśni, batat, batem, batik, batog, batom, baton, batoż, batów, batut, baudu, baudy, bauer, bawar, bawet, bawią, bawić, bawię, bawił, bawmy, bawół, bawże, bazar, bazia, bazią, bazie, bazię, bazio, baziu, bazom, bazuj, bazun, bazyt, baźce, baźka, baźką, baźkę, baźki, baźko, bażyn, bąbel, bąbla, bąble, bąbli, bąblu, bąkać, bąkaj, bąkał, bąkam, bąkań, bąkną, bąknę, bąkom, bąków, beana, beani, beany, beatu, beaty, bebop, becie, becik, beczą, beczę, beczy, bedel, bedla, bedle, bedli, bedlu, begam, begin, begom, begów, bejca, bejcą, bejce, bejcę, bejco, bejcu, bejcy, bejem, bejma, bejmy, bejom, bejów, bejtu, bejty, bekać, bekaj, bekał, bekam, bekań, bekas, bekną, beknę, bekom, bekon, beków, beksa, beksą, beksę, bekso, beksy, belce, belek, belem, belga, belgą, belgę, belgi, belgo, belgu, belka, belką, belkę, belki, belko, bella, belle, bellu, belom, belon, belów, beluj, bełcą, bełce, bełcę, bełcz, bełta, bełtu, bełty, bemar, bemit, bemol, bencz, berda, berdą, berdę, berdo, berdy, berek, bereł, berem, beret, berka, berki, berku, berle, berła, berło, berłu, berom, berów, bersa, berso, bersu, berta, bertą, bertę, berto, berty, beryl, berze, bessa, bessą, bessę, besso, bessy, betce, betek, betel, betem, betka, betką, betkę, betki, betko, betom, beton, betów, bezan, bezie, bezik, bezom, beżem, beżom, beżów, bęben, bębna, bębni, bębny, bęcną, bęcnę, będąc, biada, biaks, biali, biała, białą, białe, biało, biały, biasu, biasy, bibce, bibek, bibie, bibka, bibką, bibkę, bibki, bibko, bibom, bibop, bibów, bibuł, bicia, bicie, biciu, bicza, bicze, biczu, biczy, bidak, bideł, bidet, bidle, bidła, bidło, bidłu, bidna, bidną, bidne, bidni, bidny, bidom, bidon, bidul, biduś, bidze, bieda, biedą, biedę, biedo, biedy, biedź, biega, biegi, biegł, biegu, bielą, biele, bielę, bieli, bielm, bielu, bierz, biesa, biesi, biesy, bieżą, bieżę, bieży, biffa, biffą, biffę, biffo, biffy, bigla, bigle, bigli, biglu, bigom, bigos, bigot, biguj, bijać, bijaj, bijak, bijał, bijam, bijań, bijąc, bijmy, bijże, biker, bilem, bilet, bille, billi, billu, bilom, bilon, bilów, biłam, biłaś, biłby, biłem, biłeś, bimba, bimie, bimom, bimsu, bimsy, binda, bindą, bindę, bindo, bindy, binga, bingo, bingu, biomu, biomy, biont, biorą, biorę, biosu, biosy, biota, biotą, biotę, bioto, bioty, bioza, biozą, biozę, biozo, biozy, biper, birem, biret, birra, birry, bisem, bisie, bisom, bisów, bistr, bisuj, bitce, bitej, bitek, bitem, bitew, bitka, bitką, bitkę, bitki, bitko, bitna, bitną, bitne, bitni, bitny, bitom, bitów, bitum, bitwa, bitwą, bitwę, bitwo, bitwy, bitym, biura, biuro, biuru, biurw, biust, biwak, bizie, bizom, bizon, bizun, blach, blada, bladą, blade, bladł, blado, blady, bladź, blaga, blagą, blagę, blagi, blago, blakł, blank, blant, blask, blatu, blaty, blaza, blazą, blazę, blazo, blazy, bleau, blech, bleed, blefu, blefy, blend, blich, bliki, bliku, blina, bliną, blind, blinę, blino, bliny, blizn, bliża, bliżą, bliże, bliżę, bliżo, bliży, bloga, blogi, blogu, bloki, bloku, blond, blues, bluff, bluza, bluzą, bluzę, bluzg, bluzo, bluzy, bluźń, błaga, błaha, błahą, błahe, błahy, błamu, błamy, bława, bławą, bławe, bławi, bławy, błazi, błądź, błąka, błędu, błędy, błocą, błocę, błoci, błock, błoga, błogą, błogi, błogo, błona, błoną, błonę, błoni, błono, błony, błota, błoto, błotu, błysk, bniec, bobak, bobas, bobby, bobek, bobem, bober, bobie, bobik, bobin, bobka, bobki, bobku, bobom, bobów, bobra, bobru, bobry, bobuj, bobym, bobyś, bocce, bocie, boczą, boczę, boczy, boćka, boćki, boćku, bodaj, bodąc, bodeg, bodem, bodli, bodła, bodło, bodły, bodną, bodnę, bodni, bodom, bodot, bodów, bogać, bogiń, bogom, bogów, bohem, bohru, bohry, boich, boimy, boisk, boisz, bojar, bojąc, bojce, bojek, bojem, bojer, bojka, bojką, bojkę, bojki, bojko, bojom, bojów, bojuj, bokom, boków, boksu, boksy, bolał, bolas, boląc, bolca, bolce, bolcu, boldu, boldy, bolec, boleć, bolej, bolek, bolem, boleń, boler, bolid, bolka, bolki, bolku, bolom, bolów, bolus, bomba, bombą, bombę, bombo, bomby, bomem, bomie, bomom, bomów, bonce, bonda, bondy, bonek, bonem, bonet, bonga, bongi, bongo, bongu, bonia, bonią, bonie, bonię, bonio, bonit, bonka, bonką, bonkę, bonki, bonko, bonom, bonów, bontu, bonty, bonuj, bonus, bonza, bonzą, bonzę, bonzo, bonzy, boomu, boomy, bootu, booty, boral, boran, bordo, borek, borem, borgi, borgu, borki, borku, borna, borną, borne, borni, borny, borom, borów, borta, bortą, bortę, borto, bortu, borty, boruj, borut, boryl, borze, bosak, bosch, boscy, bosej, boska, boską, boski, bosko, bosku, bossa, bossy, bosym, botek, botem, botka, botki, botku, botom, botox, botów, boyem, boyom, boyów, bozia, bozią, bozie, bozię, bozio, boziu, bozon, bożąc, bożąt, bożej, bożek, bożeń, bożka, bożki, bożku, bożyć, bożył, bożym, bójce, bójek, bójka, bójką, bójkę, bójki, bójko, bójmy, bójże, bólem, bólmy, bólom, bólów, bólże, bóstw, bóżmy, bóżże, brach, braci, braha, brahą, brahę, braho, brahy, brajl, braka, braki, braku, brali, brała, brało, brały, brama, bramą, bramę, brami, bramo, bramu, bramy, brana, braną, brand, brane, brani, brano, brany, branż, brasu, brasy, brata, bratu, bratw, braty, braun, brawa, brawo, brawu, braże, brązu, brązy, break, brech";
let words2 = 'bredź, breja, breją, breje, breję, brejo, breki, breku, bresz, brewe, bridż, brief, bydlę, cabas, cabem, cabie, cabom, cabów, cacci, cacek, cache, cacka, cacko, cacku, cacuś, cadet, cadyk, cafem, cafie, cafom, cafów, cajgi, cajgu, cakla, cakle, cakli, caklu, calat, calca, calce, calcu, calec, calem, calom, calsi, całce, całej, całek, całka, całką, całkę, całki, całko, całuj, całun, całus, całym, camel, camer, campu, campy, canca, cancą, cance, cancę, canco, candi, canki, canoe, canon, canta, canto, cantu, capem, capia, capią, capić, capie, capię, capił, capim, capin, capmy, capną, capnę, capom, capów, capże, carat, carem, cargo, carin, carol, carom, carów, caryc, carze, casco, casia, casio, casiu, castr, casus, catch, cauda, caudą, caudę, caudo, caudy, causa, causą, causę, causo, causy, cążek, cążki, ceber, cebra, cebry, cebul, cecha, cechą, cechę, cecho, cechu, cechy, cecka, cedet, cedru, cedry, ceduj, ceduł, cedzą, cedzę, cedzi, cefal, cegle, cegła, cegłą, cegłę, cegło, cegły, ceika, ceiki, ceiku, cekin, cekom, ceków, celce, celek, celem, celic, celit, celka, celką, celkę, celki, celko, cella, cellą, celle, cellę, celli, cello, celna, celną, celne, celni, celny, celom, celon, celów, celta, celtą, celtę, celto, celty, celuj, cenar, cenią, cenić, cenie, cenię, cenił, cenna, cenną, cenne, cenni, cenny, cenom, cenoz, centa, cento, centr, centu, centy, cenur, ceńmy, ceńże, ceorl, cepak, cepem, ceper, cepie, cepom, cepów, cepra, cepry, cerat, cerce, cerek, cerem, ceres, cerka, cerką, cerkę, cerki, cerko, cerom, cerów, certa, certą, certę, certo, certy, ceruj, cerze, ceses, cesja, cesją, cesje, cesję, cesji, cesjo, cesyj, cesze, cetan, cetel, cetla, cetle, cetli, cetlu, cetna, cetno, cetnu, cetyn, cewce, cewek, cewią, cewić, cewie, cewię, cewił, cewka, cewką, cewkę, cewki, cewko, cewmy, cewom, cewże, cezal, cezar, cezem, cezie, cezom, cezów, cezur, cęgom, cęgów, cętce, cętek, cętka, cętką, cętkę, cętki, cętko, chach, chaco, chale, chała, chałą, chałę, chało, chałw, chały, chama, chams, chamy, chana, chant, chanu, chany, chaos, chaps, chara, charą, charę, charo, chart, chary, chata, chatą, chatę, chato, chatu, chaty, chcąc, chceń, chcic, chebd, checz, chełp, chera, cherą, cherę, chero, chery, chewr, chęci, chich, chief, chile, chili, china, chiną, chinę, chino, chiny, chipa, chips, chipu, chipy, chlać, chlaj, chlał, chlam, chlań, chlap, chleb, chlej, chlew, chlip, chlor, chlub, chlup, chłam, chłap, chłoń, chłop, chłód, chmar, chmur, chmyz, chnie, chnom, chodu, chody, chodź, choin, choja, choją, choje, choję, chojo, chona, chony, chora, chorą, chord, chore, choro, choru, chory, chowa, chowu, chowy, chóru, chóry, chram, chrap, chrei, chrej, chrom, chroń, chrup, chryi, chryj, chryp, chuch, chuci, chucp, chuda, chudą, chude, chudł, chudo, chudy, chudź, chuja, chuje, chuju, chupa, chupą, chupę, chupo, chupy, chust, chwać, chwal, chwał, chwat, chwil, chwyć, chwyt, chyba, chybi, chylą, chylę, chyli, chyra, chyrą, chyrę, chyro, chyry, chyża, chyżą, chyże, chyżę, chyżo, chyży, ciach, ciała, ciało, ciału, ciamć, ciapa, ciapą, ciapć, ciapę, ciapo, ciapy, ciast, ciąga, ciągi, ciągu, ciąża, ciążą, ciąże, ciążę, ciążo, ciąży, cibor, cicha, cichą, ciche, cichł, cicho, cichu, cichy, cieci, ciecz, cieka, cieką, ciekę, cieki, ciekł, cieku, cielą, ciele, cielę, cieli, ciemn, ciemń, cieni, ciepa, cierń, cierp, ciesz, cieśń, cięci, cięgi, cięli, cięła, cięło, cięły, cięta, ciętą, cięte, cięto, cięty, ciężą, ciężę, cięży, cifem, cifie, cifom, cifów, cinch, cioci, ciosa, ciosą, ciosę, cioso, ciosu, ciosy, ciosz, ciota, ciotą, ciotę, cioto, cioty, cipce, cipci, cipek, cipie, cipka, cipką, cipkę, cipki, cipko, cipom, cipsk, circa, cisak, cisem, cisie, cisis, ciska, cisną, cisnę, cisom, cisów, cista, cistą, cistę, cisto, cisty, cisza, ciszą, cisze, ciszę, ciszo, ciszy, ciuch, ciućm, ciuka, ciula, ciule, ciuli, ciulu, ciuła, ciuma, ciumą, ciumę, ciumo, ciumy, ciupa, ciupą, ciupę, ciupo, ciupy, ciura, ciurą, ciurę, ciuro, ciury, ciwun, cizia, cizią, cizie, cizię, ciziu, ciżba, ciżbą, ciżbę, ciżbo, ciżby, ciżem, ciżma, ciżmą, ciżmę, ciżmo, ciżmy, cknić, cląca, clącą, clące, clący, cleni, clerk, clili, cliła, cliło, cliły, climy, clipu, clipy, clisz, clona, cloną, clone, clono, clony, clown, cłach, cłami, cmoka, cnego, cnemu, cnień, cniło, cnota, cnotą, cnotę, cnoto, cnoty, cnych, cnymi, coach, cobem, cobie, cobla, coblą, coble, coblę, cobli, coblo, cobol, cobom, cobów, cobym, cobyś, cocha, coden, codom, cofać, cofaj, cofak, cofał, cofam, cofań, cofce, cofek, cofka, cofką, cofkę, cofki, cofko, cofną, cofnę, cokać, cokaj, cokał, cokam, cokań, cokor, cokół, colom, colon, colta, colty, combi, combo, comes, comte, conga, congą, congę, congi, congo, contr, coraz, corsa, corsą, corsę, corso, corsu, corsy, coryz, cośmy, count, córce, córci, córek, córka, córką, córkę, córki, córko, córom, córuń, córuś, córze, cóżże, crack, crawl, creda, credo, credu, crepa, crepą, crepę, crepo, crepy, cross, crown, crust, cucąc, cuceń, cucha, cuchą, cuchę, cucho, cuchu, cuchy, cucić, cucił, cućmy, cućże, cudak, cudem, cudna, cudną, cudne, cudni, cudny, cudom, cudów, cuduj, cudza, cudzą, cudze, cudzo, cudzy, cugla, cugle, cugli, cuglu, cugom, cugów, cukru, cukry, cukrz, cumie, cumom, cumuj, cupal, cupną, cupnę, curia, curią, curie, curię, curii, curio, curry, curyj, cusze, cwale, cwału, cwały, cwana, cwaną, cwane, cwani, cwany, cwela, cwelą, cwele, cwelę, cweli, cwelo, cwelu, cybeb, cybet, cycce, cycek, cycem, cyces, cycka, cycką, cyckę, cycki, cycko, cycku, cycom, cyców, cycuś, cydru, cydry, cydze, cyfra, cyfrą, cyfrę, cyfro, cyfry, cygai, cygaj, cygan, cygań, cygar, cygom, cyjan, cyjom, cykać, cykad, cykaj, cykał, cykam, cykań, cykas, cykat, cykle, cykli, cyklu, cykną, cyknę, cykor, cykot, cykut, cymen, cymes, cymie, cymom, cynar, cynce, cynek, cynia, cynią, cynie, cynię, cynii, cynij, cynik, cynio, cynka, cynką, cynkę, cynki, cynko, cynku, cynom, cynuj, cypel, cypla, cyple, cypli, cyplu, cyrki, cyrku, cyrla, cyrlą, cyrle, cyrlę, cyrli, cyrlo, cyrym, cysta, cystą, cystę, cysto, cysty, cytar, cytat, cytaz, cytra, cytrą, cytrę, cytro, cytry, cytuj, cywet, cywil, cywun, czach, czacz, czadr, czadu, czady, czadź, czaić, czaił, czają, czaje, czaję, czaju, czaka, czako, czakr, czaku, czapa, czapą, czapę, czapo, czapy, czara, czarą, czarę, czaro, czart, czaru, czary, czasu, czasy, czasz, czata, czatą, czatę, czato, czatu, czaty, czcią, czcić, czcij, czcił, czcza, czczą, czcze, czczę, czczo, czczy, czego, czeka, czeki, czeku, czela, czelą, czele, czelę, czeli, czelo, czemu, czepi, czepu, czepy, czerń, czerp, czert, czerw, czesz, cześć, czeta, czetą, czetę, czeto, czety, część, czipa, czips, czipy, cziru, czkać, czkaj, czkał, czkam, czkań, czkną, czknę, człap, człek, człon, cznia, czoka, czoki, czoku, czole, czoła, czołg, czoło, czołu, czopa, czopu, czopy, czort, czuba, czubi, czuby, czuch, czuci, czuha, czuhą, czuhę, czuho, czuhy, czuja, czują, czuje, czuję, czuju, czulą, czule, czulę, czuli, czuła, czułą, czułe, czuło, czuły, czumu, czumy, czuta, czutą, czute, czuto, czuty, czuwa, czuże, czwór, czyby, czyha, czyim, czyiś, ćakra, ćakrą, ćakrę, ćakro, ćakry, ćatni, ćelom, ćelów, ćmach, ćmami, ćmawa, ćmawą, ćmawe, ćmawi, ćmawy, ćmiąc, ćmień, ćmika, ćmiki, ćmiku, ćmili, ćmiła, ćmiło, ćmiły, ćmimy, ćmisz, ćmoka, ćmoki, ćmoku, ćpacz, ćpają, ćpali, ćpała, ćpało, ćpały, ćpamy, ćpana, ćpaną, ćpane, ćpani, ćpano, ćpany, ćpasz, ćpnąć, ćpnął, ćpnie, ćpnij, ćpuna, ćpuni, ćpuny, ćwiar, ćwicz, ćwiek, ćwika, ćwiki, ćwiku, ćwoka, ćwoki, ćwoku, daboi, dachu, dachy, dacia, dacią, dacie, dacię, dacii, dacij, dacio, dacyt, dacza, daczą, dacze, daczę, daczo, daczy, dadzą, dadze, dafne, dafni, dagob, dagom, daina, dainą, dainę, daino, dainy, dairy, dając, dajce, dajek, dajka, dajką, dajkę, dajki, dajko, dajmy, dajna, dajną, dajnę, dajno, dajny, dajże, dakce, dakka, dakką, dakkę, dakki, dakko, dakot, dalba, dalbą, dalbę, dalbo, dalby, dalej, dalia, dalią, dalie, dalię, dalii, dalij, dalio, dalom, dalsi, dałam, dałaś, dałby, dałem, dałeś, damar, damce, damek, dames, damie, damka, damką, damkę, damki, damko, damna, damno, damnu, damom, damul, damuś, dance, dandy, danej, danek, danem, dania, danią, danie, danin, daniu, danka, danko, danku, danom, danów, dansa, dansą, dansę, danso, dansy, danym, dańmi, darci, darda, dardą, dardę, dardo, dardy, darem, darli, darła, darło, darły, darmo, darni, darom, darów, darta, dartą, darte, darto, darty, daruj, darum, darzą, darze, darzę, darzy, datek, datki, datku, datom, datuj, datur, dawać, dawaj, dawał, dawań, dawca, dawcą, dawce, dawcę, dawco, dawcy, dawek, dawka, dawką, dawkę, dawki, dawko, dawna, dawną, dawne, dawni, dawno, dawny, dąbek, dąbka, dąbki, dąbku, dąłby, dąłem, dąłeś, dąsać, dąsaj, dąsał, dąsam, dąsań, dąsem, dąsie, dąsom, dąsów, dążąc, dążeń, dążmy, dążyć, dążył, dążże, dbają, dbale, dbali, dbała, dbałą, dbałe, dbało, dbały, dbamy, dbano, dbasz, debaj, debat, debel, debet, debil, debit, debla, deble, debli, deblu, debra, debrą, debrę, debro, debry, decha, dechą, dechę, decho, dechy, decka, decki, decku, decyl, decym, dedra, dedrą, dedrę, dedro, dedry, deizm, dejem, dejom, dejów, dekad, dekal, dekla, dekle, dekli, deklu, dekom, dekor, deków, dekuj, delft, delia, delią, delie, delię, delii, delij, delio, della, delle, delli, dellu, delta, deltą, deltę, delto, delty, demem, demie, demom, demon, demos, demów, denar, denat, denek, denga, dengą, dengę, dengi, dengo, denim, denka, denko, denku, denna, denną, denne, denni, denny, depcą, depce, depcę, depcz, depną, depnę, depot, derby, derce, derek, dereń, derik, derka, derką, derkę, derki, derko, derma, dermą, dermę, dermo, dermy, derom, derut, derze, desce, desek, deseń, deser, deses, desie, deska, deską, deskę, deski, desko, desom, destr, desze, detal, detto, dewie, dewiz, dewom, dewon, dewot, dewów, dezel, dezet, dębem, dębią, dębić, dębie, dębię, dębik, dębił, dębin, dębmy, dębom, dębów, dębże, dęcia, dęcie, dęciu, dęder, dędze, dęgom, dęłam, dęłaś, dętce, dętej, dętek, dętka, dętką, dętkę, dętki, dętko, dętym, dharm, dhoti, diacy, diada, diadą, diadę, diado, diady, diaka, diaki, diaku, diale, diali, dialu, dianu, diany, dicie, dicta, dienu, dieny, diera, dierą, dierę, diero, diery, dieta, dietą, dietę, dieto, diety, dikce, dikka, dikką, dikkę, dikki, dikko, diler, dimem, dimer, dimie, dimom, dimów, dinar, diner, dingi, dingo, dinka, dinks, dioda, diodą, diodę, diodo, diody, diora, diorą, diorę, dioro, diory, dipem, dipie, dipis, dipol, dipom, dipów, dirae, dirce, direk, dirge, dirka, dirką, dirkę, dirki, dirko, dirku, dirty, diruj, disco, disie, disis, disko, disom, disów, ditem, ditom, ditox, ditów, ditto, diucy, diuka, diuki, diuku, diuna, diuną, diunę, diuno, diuny, divie, divom, diwem, diwie, diwom, diwów, dizez, dławi, dłoni, długa, długą, długi, długo, długu, dłuta, dłuto, dłutu, dłużą, dłużę, dłuży, dmąca, dmącą, dmące, dmący, dmuch, dnach, dnami, dnawa, dnawą, dnawe, dnawi, dnawy, dnieć, dniem, dnień, dniom, dniuj, dobić, dobie, dobij, dobił, dobni, dobok, dobom, dobór, dobra, dobrą, dobre, dobro, dobru, dobry, dobyć, dobył, doceń, docuć, dodać, dodaj, dodał, dodam, dodań, dodrą, dodrę, doduś, dogaś, dogna, dogną, dognę, dogol, dogom, dogoń, dogól, dogów, dogra, doili, doiła, doiło, doiły, doimy, doina, doiną, doinę, doino, doiny, doisz, doiwa, doiwo, doiwu, dojąc, dojąć, dojął, dojdą, dojdę, dojdź, dojeb, dojem, dojeń, dojęć, dojmą, dojmę, dojna, dojną, dojne, dojni, dojny, dojom, dojów, dojść, dokaż, dokąd, doker, dokom, dokop, dokoś, doków, dokuć, dokuj, dokuł, dokup, dolać, dolał, dolań, dolar, dolby, dolca, dolce, dolcu, dolec, doleć, dolej, dolep, doleź, doleż, dolin, dolly, dolna, dolną, dolne, dolni, dolny, dolom';
let words3 = 'dolot, dolus, dołaź, dołek, dołem, dołka, dołki, dołku, dołom, dołów, dołóż, dołuj, domek, domem, domen, domie, domin, domki, domku, domom, domów, domra, domrą, domrę, domro, domry, domyć, domyj, domył, donem, donga, dongi, dongu, donic, donie, donna, donną, donnę, donno, donny, donom, donor, donos, donoś, donów, doors, doorz, dopal, dopaś, dopić, dopij, dopił, dopną, dopnę, dorad, dornu, dorny, dorób, dorsz, dorwą, dorwę, doryć, doryj, dorył, dosól, dosra, dosuń, dosuw, dosyć, dosyp, dosyt, doślą, dośle, doślę, dośni, dośpi, dotąd, dotlą, dotlę, dotli, dotną, dotnę, dotop, dotrą, dotrę, dotuj, dotyk, doucz, dowag, dowal, doważ, dowie, downa, downy, dowoź, dowód, dowóz, dowóź, doxie, doxom, doyen, dozie, dozna, dozom, dozór, dozuj, dożąć, dożął, dożęć, dożną, dożnę, dożom, dożów, dożrą, dożre, dożrę, dożuć, dożuj, dożuł, dożyc, dożyć, dożyj, dożył, dożyw, dójce, dójek, dójka, dójką, dójkę, dójki, dójko, dójmy, dójże, draba, drabi, draby, drace, draft, draga, dragą, dragę, dragi, dragm, drago, dragu, drajw, draka, draką, drakę, draki, drako, drała, drama, dramą, dramę, dramo, dramy, drani, dratw, draża, drażą, draże, drażę, drażń, drażo, draży, drąca, drącą, drące, drący, drąga, drągi, drągu, drążą, drążę, drąży, dread, dreda, dredy, drenu, dreny, dresu, dresy, dręcz, drętw, drgać, drgaj, drgał, drgam, drgań, drgną, drgnę, driad, drink, drive, drobi, drocz, droga, drogą, drogę, drogi, drogo, dront, dropi, drops, dropy, drozd, drożą, drożę, droży, druga, drugą, drugi, drugu, druha, druhu, druhy, druid, druki, druku, druta, drutu, druty, druza, druzą, druzę, druzo, druzy, drużb, drwal, drwią, drwić, drwię, drwij, drwił, drwin, drwom, dryft, dryfu, dryfy, dryga, drygą, drygę, drygi, drygo, drygu, dryla, dryle, dryli, drylu, drynd, drzeć, drzem, drzew, drzon, drzwi, drzyj, drzym, drżał, drżąc, drżeć, drżeń, drżyj, duale, duali, dualu, duant, dubas, dubel, dubia, dubla, dublą, duble, dublę, dubli, dublo, dublu, dubnu, dubny, dubom, dubów, ducem, ducha, duchn, duchu, duchy, ducia, ducie, duciu, ducom, duców, dudce, dudek, dudka, dudką, dudkę, dudki, dudko, dudku, dudlą, dudlę, dudli, dudni, dudom, dudów, duduś, dudze, duetu, duety, dufać, dufaj, dufał, dufam, dufań, dufna, dufną, dufne, dufni, dufny, dugom, duhom, dując, dujmy, dujże, dukać, dukaj, dukał, dukam, dukań, dukat, dukla, duklą, dukle, duklę, dukli, duklo, duksa, duksy, duktu, dukty, dulce, dulcz, dulek, dulka, dulką, dulkę, dulki, dulko, dułam, dułaś, dułby, dułem, dułeś, dumać, dumaj, dumał, dumam, dumań, dumce, dumek, dumie, dumka, dumką, dumkę, dumki, dumko, dummy, dumna, dumną, dumne, dumni, dumny, dumom, dunit, dunst, duola, duolą, duole, duolę, duoli, duolo, dupce, dupci, dupcz, dupek, dupie, dupin, dupka, dupką, dupkę, dupki, dupko, dupku, dupla, duplą, duple, duplę, dupli, duplo, dupna, dupną, dupne, dupnę, dupni, dupny, dupol, earla, earle, earli, earlu, eblis, ebola, ebolą, ebole, ebolę, eboli, ebolo, echem, echin, echom, edcie, edena, edenu, edeny, edtom, edykt, edyla, edyle, edylu, efach, efami, efeba, efeby, efedr, efekt, efira, efirą, efirę, efiro, efiry, efodu, efody, efora, efory, efowi, efryt, egida, egidą, egidę, egido, egidy, egret, egzem, egzon, egzot, egzul, egzyn, eidos, eisis, ekipa, ekipą, ekipę, ekipo, ekipy, ekler, eklog, ekran, ekson, ektaz, elana, elaną, eland, elanę, elano, elany, elear, elekt, elemi, elewa, elewi, elewy, elfce, elfek, elfem, elfia, elfią, elfie, elfik, elfim, elfka, elfką, elfkę, elfki, elfko, elfom, elfów, eling, elips, elita, elitą, elitę, elito, elity, elkom, elków, eluat, eluuj, ełccy, ełcka, ełcką, ełcki, ełcku, emanu, emany, emaus, emfaz, emira, emiry, emkom, empik, empor, emscy, emska, emską, emski, emsku, enaci, enata, enaty, endek, endem, endom, endon, endów, enema, enemą, enemę, enemo, enemy, enigm, enola, enole, enoli, enolu, entaz, entej, enter, entym, enzym, eocen, eolit, eonem, eonie, eonom, eonów, eozyn, epice, epicy, epika, epiką, epikę, epiki, epiko, epiku, epoce, epoda, epodą, epodę, epodo, epody, epoka, epoką, epokę, epoki, epoko, eposu, eposy, epson, erach, erami, erbem, erbie, erbom, erbów, eremu, eremy, ergom, ergów, erkom, erlan, erosa, erosy, erota, eroty, errat, eruwu, eruwy, erzac, esach, esami, esauł, esbek, esbol, esdek, eseje, eseju, esera, esery, esica, esicą, esice, esicę, esico, esicy, esika, esiki, esiku, esker, eskom, eskra, eskry, esman, esowa, esową, esowe, esowi, esowy, ester, estru, estry, estym, etach, etami, etanu, etany, etapu, etapy, etatu, etaty, etaże, etażu, etaży, etenu, eteny, eteru, etery, ethos, etiud, etnos, etola, etolą, etole, etolę, etoli, etolo, etosu, etosy, etrog, etyce, etycy, etyka, etyką, etykę, etyki, etyko, etyku, etyle, etyli, etylu, etynu, etyny, euler, eurek, europ, ewach, ewami, ezach, ezami, fabia, fabią, fabie, fabię, fabii, fabij, fabio, fabuł, facet, fachu, fachy, facia, facie, facio, faciu, facja, facją, facje, fację, facji, facjo, facyj, facyt, faena, faeną, faenę, faeno, faeny, fafle, fafli, fafuł, fagas, fagin, fagom, fagot, fagów, fajce, fajcz, fajda, fajek, fajer, fajfu, fajfy, fajka, fajką, fajkę, fajki, fajko, fajna, fajną, fajne, fajni, fajno, fajny, fajom, fajta, fakel, fakir, fakla, faklą, fakle, faklę, fakli, faklo, faklu, fakon, faksu, faksy, faktu, fakty, falce, falcu, falda, faldą, faldę, faldo, faldy, falek, faleń, falez, falka, falką, falkę, falki, falko, falom, falsa, falsu, falsy, faluj, fałat, fałda, fałdą, fałdę, fałdo, fałdu, fałdy, fałem, fałom, fałów, fałsz, famie, famom, famuł, fance, fanek, fanem, fanga, fangą, fangę, fangi, fango, fangu, fanie, fanka, fanką, fankę, fanki, fanko, fanom, fanon, fanów, fanta, fantu, fanty, fanza, fanzą, fanzę, fanzo, fanzy, farad, farba, farbą, farbę, farbo, farby, farci, farma, farmą, farmę, farmo, farmy, farna, farną, farne, farni, farny, farom, farsa, farsą, farsę, farsi, farso, farsy, farsz, farta, fartu, farty, farys, farze, fasad, fasce, fasek, fasem, faset, fasie, faska, faską, faskę, faski, fasko, fasom, fason, fasów, fasti, fasuj, fatom, fatów, fatum, fatwa, fatwą, fatwę, fatwo, fatwy, fatyg, faula, faule, fauli, faulu, fauna, fauną, faunę, fauni, fauno, fauny, fawor, faxem, faxie, faxom, faxów, fazie, fazom, fazuj, fąfel, fąfla, fąfle, fąfli, fąflu, fąfry, febra, febrą, febrę, febro, febry, fecie, fecit, felce, felcu, felem, feler, felga, felgą, felgę, felgi, felgo, felug, feluk, fenek, fenem, fenie, fenig, fenka, fenki, fenku, fenol, fenom, fenów, fenyl, feret, ferie, ferii, ferma, fermą, fermę, fermi, fermo, fermu, fermy, ferra, feruj, feruł, fescy, feses, feska, feską, feski, fesku, festu, festy, fetom, fetor, fetta, fettą, fettę, fetto, fetty, fetuj, fetwa, fetwą, fetwę, fetwo, fetwy, feuda, fezce, fezek, fezem, fezie, fezka, fezką, fezkę, fezki, fezko, fezom, fezów, fiala, fialą, fiale, fialę, fiali, fialo, fiask, fiata, fiaty, fiber, fibra, fibrą, fibrę, fibro, fibru, fibry, fibul, ficie, ficyn, fidel, fider, fides, fidla, fidle, fidli, fidlu, fidze, fidżi, field, fiero, fiest, fifce, fifek, fifka, fifką, fifkę, fifki, fifko, fifol, figar, figla, figle, figli, figlu, figom, figur, figus, fikać, fikaj, fikał, fikam, fikań, fikną, fiknę, fiksa, fiksy, fikus, filar, filce, filcu, filer, files, filet, filia, filią, filie, filię, filii, filij, filio, filip, filit, filmu, filmy, filom, filsa, filsy, filtr, filuj, filur, filut, fimfa, fimfą, fimfę, fimfo, fimfy, fimoz, finał, fince, finek, finem, finfa, finfą, finfę, finfo, finfy, finie, finis, finka, finką, finkę, finki, finko, finom, finów, finta, fintą, fintę, finto, finty, fioka, fioki, fioku, fiola, fiolą, fiole, fiolę, fioli, fiolo, fioła, fioły, fiord, firan, firce, firek, firet, firka, firką, firkę, firki, firko, firma, firmą, firmę, firmo, firmy, firnu, firny, fisia, fisie, fisis, fisiu, fiska, fiski, fisku, fisza, fiszą, fisze, fiszę, fiszo, fiszy, fitem, fitol, fitom, fitów, fityn, fiucz, fiuka, fiume, fiuta, fiuty, fizis, fizol, fizyk, fizys, fizza, fizzu, fizzy, fiżon, flach, fladr, flaga, flagą, flagę, flagi, flago, flaka, flaki, flaku, flama, flamą, flamę, flamo, flamy, flanc, flank, flanu, flany, flara, flarą, flarę, flaro, flary, flash, flasz, flaut, flegm, fleja, fleją, fleje, fleję, flejo, fleka, fleki, fleku, flepu, flepy, flesz, fleta, fletu, flety, fleut, flica, flika, fliki, fliku, flint, flipa, flipu, flipy, flirt, flisa, flisu, flisy, flisz, flitu, flity, fliza, flizą, flizę, flizo, flizu, flizy, floem, floks, flopa, flopy, flora, florą, florę, floro, floru, flory, flota, flotą, flotę, floto, floty, fluat, fluid, fluor, flusu, flusy, fobem, fobia, fobią, fobie, fobię, fobii, fobij, fobio, fobom, fobów, fochy, focie, focus, focza, foczą, focze, foczę, foczy, fogar, fokom, foków, foksa, foksy, fokus, folga, folgą, folgę, folgi, folgo, folia, folią, folie, folię, folii, folij, folio, folka, folki, folku, folom, foluj, fomoz, fonem, fonia, fonią, fonie, fonię, fonii, fonij, fonio, fonit, fonom, fonon, fonów, fonta, fontu, fonty, footy, forda, fordy, forem, forga, forgą, forgę, forgi, forgo, forma, formą, formę, formo, formy, forom, forów, forsa, forsą, forsę, forso, forsy, forta, fortą, forte, fortę, forto, fortu, forty, foruj, forum, foryś, forze, fosie, fosom, fossa, fossą, fossę, fosso, fossy, fotce, fotek, fotel, fotem, fotka, fotką, fotkę, fotki, fotko, fotom, foton, fotos, fotów, foula, foule, fouli, foulu, foyer, frajd, fraka, fraki, fraku, franc, frani, frank, frans, frant, fraza, frazą, frazę, frazo, frazy, freak, freon, fresk, frezu, frezy, friko, frond, front, frota, frotą, frote, frotę, froto, froty, frugo, frukt, fruną, frunę, fruwa, fryca, fryce, frycu, fryga, frygą, frygę, frygi, frygo, frysu, frysy, fryta, frytą, frytę, fryto, fryty, fryza, fryzą, fryzę, fryzo, fryzu, fryzy, fucha, fuchą, fuchę, fucho, fuchy, fudze, fugar, fugas, fugat, fugom, fuguj, fujar, fukać, fukaj, fukał, fukam, fukań, fukną, fuknę, fukoz, fuksa, fuksy, fukus, fular, fulem, fulla, fulle, fulli, fullu, fulom, fulów, fumem, fumie, fumom, fumów, funda, fundą, fundę, fundo, fundy, funka, funki, funku, funky, funta, funty, furan, furaż, furce, furcz, furda, furek, furia, furią, furie, furię, furii, furio, furka, furką, furkę, furki, furko, furol, furom, furor, furta, furtą, furtę, furto, furty, furyj, furze, fusem, fusie, fusom, fusów, fusze, futer, futon, futor, futra, futro, futru, futur, fuzel, fuzja, fuzją, fuzje, fuzję, fuzji, fuzjo, fuzla, fuzle, fuzli, fuzlu, fuzyj, fuzyt, fygon, fylit, fylom, fyrać, fyraj, fyrał, fyram, fyrań, fyrną, fyrnę, gable, gabli, gabra, gabro, gabru, gacąc, gaccy, gacek, gaceń, gacha, gachu, gachy, gacią, gacić, gacie, gacił, gacka, gacką, gacki, gacku, gacza, gacze, gaczu, gaćmy, gaćże, gadać, gadaj, gadał, gadam, gadań, gadce, gadek, gadem, gadka, gadką, gadkę, gadki, gadko, gadom, gadów, gaduł, gadzi, gafel, gafem, gafie, gafla, gafle, gafli, gaflu, gafom, gafów, gagat, gagom, gagów, gaiki, gaiku, gaili, gaiła, gaiło, gaiły, gaimy, gaisz, gajal, gając, gajda, gajdą, gajdę, gajdo, gajdy, gajem, gajeń, gajer, gajmy, gajom, gajów, gajże, galan, galar, galas, galem, galen, galer, galom, galon, galop, galów, galut, gałąź, gałce, gałek, gałka, gałką, gałkę, gałki, gałko, gałom, gamba, gambą, gambę, gambo, gamby, gamet, gamie, gamma, gammą, gammę, gammo, gammy, gamom, gamon, gamoń, gandź, gandż, ganek, ganem, gangi, gangu, gania, ganią, ganić, ganie, ganię, ganił, ganki, ganku, ganom, ganów, gańdź, gańmy, gańże, gaona, gaoni, gaony, gapci, gapia, gapią, gapić, gapie, gapię, gapił, gapiu, gapmy, gapom, gapów, gapże, garaż, garba, garbi, garbu, garby, garda, gardą, gardę, gardo, gardu, gardy, gardź, garem, garig, garna, garną, garnę, garno, garny, garom, garot, garów, garri, garść, garug, garuj, garum, garze';
let words4 = 'gasić, gasik, gasił, gasiw, gasła, gasło, gasły, gasną, gasnę, gastr, gaszą, gaszę, gaśli, gaśmy, gaśże, gatek, gater, gatha, gathą, gathę, gatho, gathy, gatki, gatra, gatry, gaura, gaury, gausa, gausy, gawęd, gawia, gawią, gawie, gawię, gawii, gawij, gawio, gawor, gawot, gawra, gawrą, gawrę, gawro, gawry, gayem, gayom, gayów, gazal, gazda, gazdą, gazdę, gazdo, gazdy, gazel, gazem, gazer, gazet, gazie, gazik, gazol, gazom, gazon, gazów, gazuj, gażom, gąbce, gąbek, gąbka, gąbką, gąbkę, gąbki, gąbko, gągoł, gąsce, gąsek, gąsię, gąska, gąską, gąskę, gąski, gąsko, gązew, gązwa, gązwą, gązwę, gązwi, gązwo, gązwy, gbura, gbury, gdacz, gdaka, gdera, gderą, gderę, gdero, gdery, gderz, gdula, gdulą, gdule, gdulę, gduli, gdulo, gduła, gdułą, gdułę, gduło, gduły, gdyba, gdyby, gdzie, geecy, geeka, geeki, geeku, geesu, geesy, geezu, geezy, gejem, gejom, gejów, gejsz, gekon, gemem, gemie, gemma, gemmą, gemmę, gemmo, gemmy, gemom, gemów, gemul, genem, genez, genie, genin, genom, genów, genre, genua, genuą, genuę, genui, genuo, genuy, geoda, geodą, geodę, geodo, geody, geoid, gerez, geses, gestu, gesty, geter, getra, getry, getta, getto, gettu, getyt, gezie, gezom, gezów, gębce, gębek, gębie, gębka, gębką, gębkę, gębki, gębko, gębom, gębuj, gębul, gębuś, gędźb, gęgać, gęgaj, gęgał, gęgam, gęgań, gęgaw, gęgną, gęgnę, gęgom, gęgot, gęgów, gęsia, gęsią, gęsie, gęsię, gęsim, gęsin, gęsta, gęstą, gęste, gęstł, gęsto, gęstw, gęsty, gęści, gęślą, gęśle, gęśli, gęśmi, ghatu, ghaty, ghazi, giaur, gibać, gibaj, gibał, gibam, gibań, gibcy, gibią, gibie, gibię, gibka, gibką, gibki, gibko, gibmy, gibną, gibnę, gibon, gibże, gicie, giczą, gicze, giczy, gidem, gidia, gidią, gidie, gidię, gidii, gidio, gidom, gidów, gidyj, gidze, giełd, giemz, giezł, gięci, gięli, gięła, gięło, gięły, gięta, giętą, gięte, gięto, gięty, gifem, gifie, gifom, gifów, gigla, gigom, gigów, gigue, gikom, gików, gilda, gildą, gildę, gildo, gildy, gilem, gilga, gilom, gilów, gilty, gilza, gilzą, gilzę, gilzo, gilzy, gimpa, gimpą, gimpę, gimpo, gimpy, ginąc, ginąć, ginął, ginem, ginie, ginom, ginów, gińmy, gińże, gipsu, gipsy, girls, girom, giros, girze, giser, gisis, gitan, gitar, gitem, gites, gitom, gitów, giwer, glaca, glacą, glace, glacę, glaco, glacy, glajd, glana, glanc, glans, glany, glapa, glapą, glapę, glapo, glapy, gleba, glebą, glebę, glebo, gleby, gleje, glejt, gleju, ględa, ględą, ględę, ględo, ględy, ględź, glifu, glify, gliki, gliku, glina, gliną, glinę, glino, glinu, gliny, gliom, glist, glitu, glity, glizd, globu, globy, glock, glona, glonu, glony, glosa, glosą, glosę, gloso, gloss, glosy, gluon, gluta, gluty, gładź, głask, głazu, głazy, głąba, głąby, głębi, głodu, głody, głodź, głogi, głogu, głosi, głosu, głosy, głowa, głową, głowę, głowi, głowo, głowy, głódź, głupa, głupi, głupy, głusi, głusz, głużą, głużę, głuży, gmach, gmera, gmerk, gmerz, gmina, gminą, gminę, gmino, gminu, gminy, gnają, gnali, gnała, gnało, gnały, gnamy, gnana, gnaną, gnane, gnani, gnano, gnany, gnasz, gnata, gnaty, gnąca, gnącą, gnące, gnący, gnejs, gnetu, gnety, gnębi, gnida, gnidą, gnidę, gnido, gnidy, gnieć, gniew, gniją, gnije, gniję, gnili, gniła, gniło, gniły, gniot, gnito, gnoić, gnoił, gnoja, gnoją, gnoje, gnoję, gnoju, gnoma, gnomą, gnomę, gnomo, gnomu, gnomy, gnoza, gnozą, gnozę, gnozo, gnozy, gnyka, gnyki, gnyku, gnypa, gnypy, goccy, gocka, gocką, gocki, gocku, godeł, godet, godle, godła, godło, godłu, godna, godną, godne, godni, godny, godom, godów, godzą, godzę, godzi, gofra, gofry, gogle, gogli, goguś, goili, goiła, goiło, goiły, goima, goimi, goimy, goisz, gojąc, gojce, gojek, gojem, gojeń, gojka, gojką, gojkę, gojki, gojko, gojom, gojów, golas, goląc, golca, golce, golcu, golcy, golec, golem, goleń, golfa, golfu, golfy, golić, golił, golmy, golną, golnę, golom, golów, golże, gołąb, gołce, gołda, gołdą, gołdę, gołdo, gołdy, gołej, gołek, gołka, gołką, gołkę, gołki, gołko, gołku, gołot, gołym, gomon, gomor, gomół, gonad, gonem, gongi, gongu, gonią, gonić, gonie, gonię, gonił, gonit, gonna, gonną, gonne, gonni, gonny, gonom, gonów, gonta, gontu, gonty, gońca, gońce, gońcu, gońcy, gońmy, gońże, gopik, gopur, gorał, gorąc, goreć, gorej, goreń, gorgi, gorgu, gorsi, gorsu, gorsy, gorsz, goryl, gorzą, gorze, gorzę, gości, gotów, gotuj, gotyk, gouda, goudą, goudę, goudo, goudy, gójmy, gójże, gólmy, gólże, gółce, gółek, gółka, gółką, gółkę, gółki, gółko, góral, górce, górek, górka, górką, górkę, górki, górko, górna, górną, górne, górni, górny, górom, góruj, górze, gówna, gówno, gównu, graba, grabą, grabę, grabi, grabo, grabu, graby, graca, gracą, grace, gracę, grach, graco, gracy, gracz, grada, gradu, grady, grafa, grafu, grafy, graja, grają, graje, graję, grajo, grali, grała, grało, grały, grama, grami, gramy, grana, graną, grand, grane, granę, grani, grano, grant, grany, grapa, grapą, grapę, grapo, grapp, grapy, grasz, grata, graty, grądu, grądy, grążą, grążę, grąży, grdyk, grece, grecy, grege, greja, greje, greju, greka, greką, grekę, greki, greko, greku, grena, greną, grenę, greno, greny, greps, gresu, gresy, greża, greżą, greże, greżę, greżo, greżu, greży, gręzu, gręzy, grila, grile, grili, grill, grilu, grobu, groby, groch, grodu, grody, grodź, grogi, grogu, groma, gromi, gromu, gromy, grona, groni, grono, gronu, groom, grosa, grosy, grosz, grota, grotą, grotę, groto, grotu, groty, groza, grozą, grozę, grozi, grozo, grozy, grożą, grożę, gródz, gródź, gróźb, gruba, grubą, grube, grubi, grubo, gruby, gruch, gruda, grudą, grudę, grudo, grudy, grula, grulą, grule, grulę, gruli, grulo, gruma, grumy, grunt, grupa, grupą, grupę, grupo, grupy, grusz, gruzu, gruzy, gryce, gryfa, gryfu, gryfy, gryka, gryką, grykę, gryki, gryko, grypa, grypą, grypę, grypo, gryps, grypy, grysu, grysy, grywa, gryza, gryzą, gryzę, gryzł, gryzu, gryzy, gryźć, habas, habit, hacel, haczą, haczę, haczy, haden, hades, hadis, hadże, hadżi, hadżu, hafem, hafie, hafis, hafiz, hafnu, hafny, hafom, hafów, haftu, hafty, hagad, haida, haiki, haiku, hajce, hajcu, hajda, hajem, hajom, hajów, hajta, hajże, hakat, haker, hakom, haków, hakuj, halal, halaw, halba, halbą, halbę, halbo, halby, halce, halek, halfa, halfą, halfę, halfo, halfy, halit, halka, halką, halkę, halki, halko, halma, halmą, halmę, halmo, halmy, halna, halną, halne, halni, halny, halom, halon, halsu, halsy, hałas, hałda, hałdą, hałdę, hałdo, hałdy, hamad, hamak, haman, hamer, hamra, hamry, hamuj, hanem, hanga, hangą, hangę, hangi, hango, hanie, hanif, hanom, hanów, hanys, hanza, hanzą, hanzę, hanzo, hanzy, hańba, hańbą, hańbę, hańbi, hańbo, hańby, haoma, haomą, haomę, haomo, haomy, haori, harab, haram, harap, haras, harce, harcu, harda, hardą, harde, hardo, hardy, harem, harfa, harfą, harfę, harfo, harfy, harów, hartu, harty, haruj, hasać, hasaj, hasał, hasam, hasań, hascy, haseł, hasem, hasie, haska, haską, haski, hasku, hasła, hasło, hasłu, hasom, hasów, hasta, hastą, hastę, hasto, hasty, hasze, haszu, haszy, haśle, hauki, hauku, hausa, haust, hawaj, hawan, hazen, hazuk, hażan, heban, hebdu, hebdy, hebel, hebes, hebla, heble, hebli, heblu, hecna, hecną, hecne, hecni, hecny, hecom, hecuj, heder, hedżr, hegir, hejta, hejże, heksa, heksą, heksę, hekso, heksy, helan, helem, helia, helis, hello, helom, helów, helpa, helpu, helpy, hełmu, hełmy, hembr, hemem, hemie, hemin, hemom, hemów, henna, henną, hennę, henno, henny, henra, henry, hepać, hepał, hepań, hepią, hepie, hepię, hepmy, hepną, hepnę, hepże, herbu, herby, herca, herce, hercu, herma, hermą, hermę, hermo, hermy, herod, herom, heros, herze, hescy, heses, heska, heską, heski, hesku, hetce, hetek, heter, hetka, hetką, hetkę, hetki, hetko, hetta, hewea, heweą, hewee, heweę, hewei, heweo, hewra, hewrą, hewrę, hewro, hewry, hiatu, hiaty, hicie, hidżr, hiena, hieną, hienę, hieni, hieno, hieny, hifem, hifie, hifom, hifów, hikor, hilal, hilea, hileą, hilee, hileę, hilei, hileo, hilom, hilów, hilum, hindi, hipek, hipem, hiper, hipie, hipik, hipis, hipka, hipki, hipku, hipom, hipów, hisis, hisuj, hitem, hitom, hitów, hiwem, hiwie, hiwom, hiwów, hizop, hobby, hoduj, hodża, hodżą, hodże, hodżę, hodżo, hodży, hogan, hojer, hojna, hojną, hojne, hojni, hojny, hojom, hokei, hokej, hokku, holem, holik, holki, holku, holmu, holmy, holom, holów, holuj, hołdu, hołdy, hołot, hołub, homal, homar, homek, homer, homka, homki, homku, homoś, honda, hondą, hondę, hondo, hondy, honor, honuj, hopak, hopel, hopki, hopla, hople, hopli, hoplu, hopsa, hopsy, horda, hordą, hordę, hordo, hordy, horom, horst, horze, hossa, hossą, hossę, hosso, hossy, hosta, hostą, hostę, hosto, hostu, hosty, hotel, house, howea, howeą, howee, howeę, howei, howeo, hoyom, hożej, hożym, hrabi, huana, huany, huari, hubar, hubce, hubek, hubem, hubie, hubka, hubką, hubkę, hubki, hubko, hubom, hubów, hucie, hucpa, hucpą, hucpę, hucpo, hucpy, hucuł, huczą, huczę, huczy, huert, hufca, hufce, hufcu, hufem, hufie, hufom, hufów, hujem, hujom, hujów, hukać, hukaj, hukał, hukam, hukań, hukną, huknę, hukom, huków, hulać, hulaj, hulał, hulam, hulań, hulet, hulki, hulku, hulok, humin, humit, humor, humus, hunie, hunom, hurma, hurmą, hurmę, hurmo, hurmy, huron, hurra, hurtu, hurty, hurys, husar, husky, huśta, hutom, huzar, huzia, hycać, hycaj, hycał, hycam, hycań, hycel, hycla, hycle, hycli, hyclu, hycną, hycnę, hydra, hydrą, hydrę, hydro, hydry, hymen, hymnu, hymny, hyrem, hyrna, hyrną, hyrne, hyrni, hyrny, hyrom, hyrów, hyrze, hysia, hysie, hysiu, hysuj, hyzem, hyzia, hyzie, hyziu, hyzom, hyzop, hyzów, ibisa, ibisy, iblis, ichni, ichor, ickom, icków, ictus, idach, idami, idąca, idącą, idące, idący, ideał, ideat, idein, ideom, idiom, idisa, idisą, idisę, idiso, idisy, idola, idole, idoli, idolu, idowi, idyll, idzie, idźmy, idźże, ifryt, igieł, iglak, iglic, igloo, igław, igłom, igłuj, ignam, igrać, igraj, igrał, igram, igrań, igrce, igrcy, igrek, igrom, igrze, iguan, ihram, ikcie, ikona, ikoną, ikonę, ikono, ikonu, ikony, ikosu, ikosy, ikrom, ikrzą, ikrze, ikrzę, ikrzy, iksem, iksie, iksom, iksor, iksów, iksta, ikstą, ikste, iksty, ikści, iktem, iktom, iktów, iktus, ileus, illit, iloci, iloma, ilość, ilota, ilotą, ilotę, iloto, iloty, iłach, iłami, iłowa, iłową, iłowe, iłowi, iłowy, iłują, iłuje, iłuję, iłżan, imacz, imaga, image, imago, imagu, imają, imaka, imaki, imaku, imali, imała, imało, imały, imama, imamy, imana, imaną, imane, imani, imano, imany, imasz, imaże, imażu, imaży, imbir, imbus, iment, imhof, imidu, imidy, imina, iminą, iminę, imino, iminy, imion, impal, impas, impet, inbus, indem, inden, indol, indom, indor, indos, indów, induj, indyg, indyk, indyt, inert, infim, infuł, ingot, iniom, inkas, inker, inkom, inków, inkub, inlet, inmet, innej, innym, inrem, inrom, inrze, inset, insza, inszą, insze, inszy, intel, intro, intyn, inula, inulą, inule, inulę, inuli, inulo, inwar, inwit, ińscy, ińska, ińską, iński, ińsku, ippon, irbis, ircha, irchą, irchę, ircho, irchy, ircuj, irdze, irgom, ironu, irony, irsze, irydu, irydy, irysa, irysy, iskać, iskaj, iskał, iskam, iskań, iskom, isków, iskra, iskrą, iskrę, iskro, iskry, iskrz, islam, ismen, istmu, istmy, istna, istną, istne, istni, istny, istot, iszcz, iścić, iście, iścił, iśćmy, iśćże, iterb, itrem, itrom, itrów, itrze, iwach, iwami, iwana, iwanu, iwany, iwasi, iwina, iwiną, iwinę, iwino, iwiny, izali, izanu, izany, izbic, izbie, izbin, izbom, izmem, izmie, izmom, izmów, iżbym, iżbyś, jabca, jabco, jabcu, jabol, jacht, jacie, jacka, jacki, jacku, jacyś, jacyż, jadać, jadaj, jadał, jadam, jadań, jadąc, jadeł, jadem, jader, jadle, jadła, jadło, jadłu, jadły, jadom, jadów, jadra, jadro, jadru, jadzą, jadze, jadzę, jadzi, jagle, jagła, jagłą, jagłę, jagło, jagły, jagni, jagom, jagód, jajca, jajco';
let words5 = 'jajcu, jajec, jajek, jajem, jajka, jajko, jajku, jajom, jakaś, jakaż, jakąś, jakąż, jakby, jakie, jakim, jakiś, jakiż, jakla, jaklą, jakle, jaklę, jakli, jaklo, jakom, jakoś, jakoż, jaków, jakuz, jakże, jalap, jałop, jambu, jamby, jamce, jamek, jamem, jamie, jamka, jamką, jamkę, jamki, jamko, jamom, jamów, jamsu, jamsy, japie, japok, japom, japsa, japsi, japsy, jarać, jaraj, jarał, jaram, jarań, jarca, jarce, jarcu, jarda, jardu, jardy, jarej, jarek, jarem, jarka, jarką, jarkę, jarki, jarko, jarla, jarle, jarlu, jarom, jarów, jarug, jaruj, jarym, jarzą, jarze, jarzę, jarzm, jarzy, jasak, jascy, jaseł, jasia, jasie, jasiu, jaska, jaską, jaski, jaskr, jasku, jasła, jasło, jasłu, jasna, jasną, jasne, jasno, jasny, jassu, jassy, jasyr, jaśka, jaśki, jaśku, jaśle, jaśni, jatce, jatek, jatka, jatką, jatkę, jatki, jatko, jatom, jawem, jawią, jawić, jawie, jawię, jawił, jawmy, jawna, jawną, jawne, jawni, jawny, jawom, jawor, jawór, jawów, jawże, jazda, jazdą, jazdę, jazdo, jazdy, jazem, jazia, jazie, jaziu, jazom, jazów, jazzu, jazzy, jaźni, jażdż, jąder, jądra, jądro, jądru, jąkać, jąkaj, jąkał, jąkam, jąkań, jąłby, jąłem, jąłeś, jątrz, jeans, jebać, jebak, jebał, jebań, jebią, jebie, jebię, jebmy, jebną, jebnę, jebut, jebże, jecie, jeden, jedli, jedna, jedną, jedne, jedni, jedno, jedzą, jeepa, jeepy, jegoż, jegóż, jegra, jegry, jejku, jejże, jelca, jelce, jelcu, jelcz, jelec, jeleń, jelit, jełcy, jełka, jełką, jełki, jełop, jemuż, jenem, jenie, jenom, jenot, jenów, jeńca, jeńce, jeńcu, jeńcy, jeona, jeony, jerem, jerez, jerom, jerów, jerze, jeśli, jetem, jetom, jetów, jeźdź, jeżak, jeżąc, jeżem, jeżeń, jeżmy, jeżom, jeżów, jeżuj, jeżyć, jeżyk, jeżył, jeżyn, jeżże, jęcia, jęcie, jęciu, jęczą, jęczę, jęczy, jędza, jędzą, jędze, jędzę, jędzo, jędzy, jękną, jęknę, jękom, jęków, jęłam, jęłaś, jętce, jętej, jętek, jętka, jętką, jętkę, jętki, jętko, jętom, jętym, jęzor, język, jigom, jigów, jinja, jivie, jiwie, jocie, jodan, jodek, jodeł, jodem, jodki, jodku, jodle, jodła, jodłą, jodłę, jodło, jodły, jodom, jodów, joduj, jodyn, jodze, jogin, jogiń, jogom, jogów, joint, jojcz, jojem, jojka, jojob, jojom, joker, jolce, jolek, jolem, jolka, jolką, jolkę, jolki, jolko, jolom, jolów, jołop, jonem, jonie, jonik, jonit, jonom, jonon, jonów, jorem, jorom, jorów, jorub, jorze, jotom, joule, juana, juany, jubce, jubea, jubeą, jubee, jubeę, jubei, jubek, jubel, jubeo, jubka, jubką, jubkę, jubki, jubko, jubla, juble, jubli, jublu, jucha, juchą, juchę, jucho, jucht, juchy, jucie, juczą, juczę, juczy, judog, judok, judzą, judze, judzę, judzi, jufer, juger, jugol, jugom, jugra, jugry, juhas, juhaś, jujub, jukce, jukka, jukką, jukkę, jukki, jukko, jukom, juków, jumie, jumom, junak, junat, junem, junga, jungą, jungę, jungi, jungo, jungu, junie, junom, junot, junów, junta, juntą, juntę, junto, junty, jupce, jupek, jupka, jupką, jupkę, jupki, jupko, jurna, jurną, jurne, jurni, jurny, jurom, juror, jurta, jurtą, jurtę, jurto, jurty, jurze, jusem, jusie, jusom, jusów, jusze, juści, jutem, juter, jutom, jutów, jutra, jutro, jutru, juzem, juzie, juzom, juzów, jużci, jużyn, jużże, kabab, kabał, kaban, kabas, kabat, kabek, kabel, kabie, kabim, kabin, kabla, kable, kabli, kablu, kabob, kabul, kabur, kabza, kabzą, kabzę, kabzo, kabzy, kacap, kacem, kacet, kacia, kacią, kacie, kacim, kacom, kaców, kacyk, kacza, kaczą, kacze, kaczę, kaczy, kadet, kadie, kadim, kadmu, kadmy, kadra, kadrą, kadrę, kadro, kadru, kadry, kaduk, kadzą, kadzę, kadzi, kaemu, kaemy, kaesu, kaesy, kafar, kafei, kafej, kafel, kafir, kafla, kaflą, kafle, kaflę, kafli, kaflo, kaflu, kagan, kagur, kahał, kahin, kaida, kaidy, kaika, kaiki, kaiku, kajać, kajaj, kajak, kajał, kajam, kajan, kajań, kajet, kajut, kakaa, kakao, kakau, kalab, kalać, kalaj, kalał, kalam, kalan, kalań, kalce, kalek, kalem, kalet, kalia, kalią, kalie, kalię, kalif, kalii, kalij, kalin, kalio, kalit, kalka, kalką, kalkę, kalki, kalko, kalom, kalot, kaloz, kalpa, kalpą, kalpę, kalpo, kalpy, kalus, kałan, kałem, kałom, kałów, kaług, kałuż, kałym, kamaz, kambr, kamea, kameą, kamee, kameę, kamei, kamel, kamen, kameo, kamer, kamic, kamie, kamom, kamor, kamyk, kanad, kanak, kanał, kanap, kanar, kance, kandu, kandy, kanek, kania, kanią, kanie, kanię, kanim, kanio, kanji, kanka, kanką, kankę, kanki, kanko, kanna, kanną, kannę, kanno, kanny, kanoe, kanom, kanon, kanop, kantu, kanty, kanwa, kanwą, kanwę, kanwo, kanwy, kaonu, kaony, kapać, kapał, kapań, kapar, kapca, kapce, kapci, kapcu, kapec, kapeć, kapek, kapel, kapem, kaper, kapią, kapic, kapie, kapię, kapka, kapką, kapkę, kapki, kapko, kapmy, kapną, kapnę, kapoc, kapok, kapom, kapot, kapów, kappa, kappą, kappę, kappo, kappy, kapra, kapry, kapsa, kapsą, kapsę, kapso, kapsy, kapuc, kapuć, kapuj, kapuś, kaput, kapuz, kapże, karać, karaf, karaj, karak, karał, karań, karar, karaś, karat, karbu, karby, karcą, karce, karcę, karci, karcu, karcz, karda, kardą, kardę, kardo, kardy, karej, kareł, karem, kares, karet, kargo, karit, karki, karku, karla, karlą, karle, karli, karła, karło, karłu, karły, karma, karmą, karmę, karmi, karmo, karmu, karmy, karna, karną, karne, karni, karny, karoc, karom, karot, karów, karpa, karpą, karpę, karpi, karpo, karpy, karta, kartą, kartę, karto, kartu, karty, karuk, karwi, karym, karzą, karze, karzę, karzy, kasak, kasar, kasat, kasba, kasbą, kasbę, kasbo, kasby, kaset, kasha, kashą, kashe, kashę, kasho, kashy, kasie, kasja, kasją, kasje, kasję, kasji, kasjo, kaski, kasko, kasku, kasła, kasom, kasta, kastą, kastę, kasto, kastr, kasty, kasuj, kasyd, kasyj, kasyn, kasza, kaszą, kasze, kaszę, kaszl, kaszo, kaszt, kaszy, kasże, katan, katar, katem, katen, kater, katod, katom, katon, katów, katta, kattą, kattę, katto, katty, katuj, katun, kauri, kausz, kawai, kawal, kawał, kawas, kawce, kawci, kawek, kawie, kawka, kawką, kawkę, kawki, kawko, kawom, kawon, kawsk, kawuń, kawuś, kazać, kazał, kazań, kazba, kazbą, kazbę, kazbo, kazby, kazić, kaził, kazus, kaźmy, kaźni, kaźże, każąc, każda, każdą, każde, każdy, każeń, każmy, każże, kąccy, kącie, kącik, kącin, kącka, kącką, kącki, kącku, kąkol, kąpać, kąpał, kąpań, kąpią, kąpie, kąpię, kąpmy, kąpże, kąsać, kąsaj, kąsał, kąsam, kąsań, kąsek, kąska, kąski, kąsku, kątek, kątem, kątka, kątki, kątku, kątom, kątów, kciuk, kebab, kebob, kecal, kecie, kecza, kecze, keczu, keczy, kedyw, kedze, kefia, kefią, kefie, kefię, kefii, kefij, kefio, kefir, kegel, kegla, kegle, kegli, keglu, kegom, kegów, kejom, kekom, keków, keksa, keksu, keksy, kelem, kelin, kelom, kelów, kelpu, kelpy, kelta, kelty, kemem, kemie, kemom, kemów, kenaf, kendo, kenel, kenes, kenoz, kenta, kenty, kerem, kerom, kerów, kerze, keson, ketem, keten, ketom, keton, ketoz, ketów, kewir, kęccy, kęcka, kęcką, kęcki, kęcku, kędyś, kędyż, kępce, kępek, kępie, kępin, kępka, kępką, kępkę, kępki, kępko, kępom, kęsek, kęsem, kęsie, kęsim, kęska, kęski, kęsku, kęsom, kęsów, khaki, khatu, khaty, kiach, kiami, kiang, kiata, kiaty, kibel, kibic, kibić, kibla, kiblą, kible, kiblę, kibli, kiblo, kiblu, kibol, kibuc, kicać, kicaj, kicał, kicam, kicań, kicem, kicha, kichą, kichę, kicho, kichy, kicia, kicią, kicie, kicię, kiciu, kicną, kicnę, kicom, kiców, kicze, kiczu, kićka, kidać, kidaj, kidał, kidam, kidań, kiedr, kiedy, kiego, kiełb, kiełż, kiepa, kiepy, kiera, kiery, kierz, kiesa, kiesą, kiesę, kieso, kiesy, kifoz, kijaf, kijek, kijem, kijka, kijki, kijku, kijom, kijów, kiksa, kiksy, kikuj, kikut, kilak, kilce, kilek, kilem, kiler, kilim, kilka, kilką, kilkę, kilki, kilko, kilku, kilof, kilom, kilos, kilów, kiltu, kilty, kiłom, kimać, kimaj, kimał, kimam, kimań, kimie, kimną, kimnę, kimom, kimon, kimże, kinaz, kinem, kinez, kingi, kingu, kinie, kinin, kinol, kinom, kinów, kiosk, kipem, kiper, kipią, kipie, kipię, kipmy, kipną, kipnę, kipom, kipów, kipra, kipry, kipże, kirce, kirch, kirek, kirem, kirin, kirka, kirką, kirke, kirkę, kirki, kirko, kirom, kirów, kirsz, kirus, kirys, kirze, kisić, kisił, kisła, kisło, kisły, kisną, kisnę, kissa, kissą, kissę, kisso, kissy, kisza, kiszą, kisze, kiszę, kiszu, kiści, kiśli, kiśmy, kiśże, kitar, kitce, kitek, kitel, kitem, kitka, kitką, kitkę, kitki, kitko, kitla, kitlą, kitle, kitlę, kitli, kitlo, kitlu, kitni, kitom, kitów, kitri, kituj, kituś, kiura, kiuru, kiury, kiwać, kiwaj, kiwał, kiwam, kiwań, kiwce, kiwek, kiwka, kiwką, kiwkę, kiwki, kiwko, kiwną, kiwnę, kizia, kizią, kizie, kizię, kiziu, klace, klacz, klagi, klagu, klaka, klaką, klakę, klaki, klako, klamp, klang, klanu, klany, klapa, klapą, klapę, klapo, klaps, klapy, klark, klaru, klary, klasa, klasą, klasę, klask, klaso, klasy, klata, klatą, klatę, klato, klaty, klaun, klauz, klawa, klawą, klawe, klawi, klawo, klawy, kląkł, kląsł, klątw, kląża, klążą, kląże, klążę, klążo, kląży, klecą, klecę, klech, kleci, kleft, kleić, kleik, kleił, kleją, kleje, kleję, kleju, kleks, klema, klemą, klemę, klemo, klemy, kleni, klepu, klepy, klerk, kleru, klery, klesi, klęcz, klęka, klęki, klęku, klęli, klęła, klęło, klęły, klępa, klępą, klępę, klępo, klępy, klęsk, klęsł, klęto, klice, klifu, klify, klika, kliką, klikę, kliki, kliko, kliku, klima, klimą, klimę, klimo, klimy, klina, kline, kling, kliny, klipa, klipą, klipę, klipo, klips, klipu, klipy, klisz, klita, klitą, klitę, klito, klity, klizm, klnąc, klnie, klnij, kloak, kloca, kloce, klocu, klomb, klona, klonu, klony, klopa, klops, klopy, klosz, klotu, kloty, klown, kluba, klubą, klubę, klubo, klubu, kluby, kluce, kluch, klucz, klują, kluje, kluję, kluka, kluką, klukę, kluki, kluko, kluku, klukw, kluli, kluła, kluło, kluły, klupa, klupą, klupę, klupo, klupy, kluto, kluza, kluzą, kluzę, kluzo, kluzy, kłach, kłacz, kładą, kładę, kładł, kładu, kłady, kładź, kłaka, kłaki, kłaku, kłami, kłamu, kłamy, kłaść, kłębi, kłębu, kłęby, kłęka, kłęki, kłęku, kłoci, kłoda, kłodą, kłodę, kłodo, kłody, kłomi, kłoni, kłosa, kłosi, kłosy, kłowa, kłową, kłowe, kłowi, kłowy, kłócą, kłócę, kłóci, kłuci, kłują, kłuje, kłuję, kłuli, kłuła, kłuło, kłuły, kłuni, kłusa, kłusy, kłuta, kłutą, kłute, kłuto, kłuty, kmieć, kmina, kminą, kminę, kmino, kminu, kminy, kmiot, kmotr, knaga, knagą, knagę, knagi, knago, laari, laber, labet, labie, labom, labru, labry, labuj, labuś, laccy, lacet, lacha, lachą, lachę, lacho, lachy, lacka, lacką, lacki, lacku, lacun, ladom, ladra, ladro, ladry, ladze, lafie, lafom, lagen, lager, lagom, lagru, lagry, lagun, laicy, laika, laiki, laiku, laisu, laisy, lajce, lajek, lajka, lajką, lajkę, lajki, lajko, lajna, lajną, lajnę, lajno, lajny, lakom, laków, lakuj, lakun, lalce, lalek, lalka, lalką, lalkę, lalki, lalko, lalom, laluń, laluś, lałam, lałaś, lałby, lałem, lałeś, lambd, lamel, lamer, lamet, lamia, lamią, lamie, lamię, lamii, lamij, lamin, lamio, lamna, lamną, lamnę, lamno, lamny, lamom, lamów, lampa, lampą, lampę, lampi, lampo, lampy, lamuj, lamus, lanca, lancą, lance, lancę, lanco, lancy, lancz, landa, lando, landu, landy, lanej, lanek, lania, lanie, laniu, lanka, lanką, lankę, lanki, lanko, lanos, lansu, lansy, lantr, lanug, lanym, lańsk, lapis, lapną, lapnę, lapsi, lapuj, larem, larga, large, largo, largu, larom, larów, larum, larwa, larwą, larwę, larwo, larwy, larze, lasce, lascy, lasek, lasem, laser, lasie, laska, laską, laskę, laski, lasko, lasku, lasom, lasów, lassa, lasso, lassu, lasuj, lasza, laszą, lasze, laszt, laszy, latać, lataj, latał, latam, latań, latek, latem, latka, latko, latku, latom, latoś, latry, latyt, lauda, laudą, laudę, laudo, laudy, lauru, laury, lawet, lawie, lawin, lawom, lawuj, lazła, lazło, lazły, lazur, lazzi, lazzo, lażuj, lądem, lądom, lądów, ląduj, leadu, leady, lecąc, leceń, lecie, lecza, leczą, leczę, leczo, leczu, leczy, lećmy, lećże, ledwo, ledze, legar, legat';
let words6 = 'leges, legia, legią, legie, legię, legii, legij, legio, legli, legła, legło, legły, legną, legnę, legom, leguj, legun, leica, leicą, leice, leicę, leico, leiki, leiwa, leiwo, leiwu, leizn, lejąc, lejba, lejbą, lejbę, lejbo, lejby, lejca, lejce, lejcu, lejcy, lejek, lejem, lejka, lejką, lejkę, lejki, lejko, lejku, lejmy, lejna, lejną, lejne, lejni, lejny, lejom, lejów, lejże, lekaż, lekce, lekcy, lekka, lekką, lekki, lekko, lekom, leków, lekyt, lelek, lelia, lelią, lelie, lelię, lelii, lelij, lelio, lelka, lelki, lelku, lelui, leluj, lelum, leman, lemat, lemma, lemmą, lemmę, lemmo, lemmy, lemur, lenek, lenia, lenią, lenić, lenie, lenię, lenił, leniu, lenka, lenki, lenku, lenna, lenną, lenne, lenni, lenno, lennu, lenny, lenta, lento, lentu, leńca, leńce, leńcu, leńmy, leńże, lepca, lepce, lepcu, lepcy, lepem, lepią, lepić, lepie, lepię, lepik, lepił, lepka, lepką, lepki, lepko, lepmy, lepom, lepów, lepra, leprą, leprę, lepro, lepry, lepsi, lepta, leptą, leptę, lepto, lepty, lepuj, lepże, lerce, lerek, lerka, lerką, lerkę, lerki, lerko, lesba, lesbą, lesbę, lesbo, lesby, lescy, leser, lesie, leska, leską, leski, lesku, lessu, lessy, lesze, leszu, leszy, leśna, leśną, leśne, leśni, leśny, letni, lewad, lewak, lewar, lewej, lewek, lewem, lewic, lewie, lewka, lewki, lewku, lewom, lewów, lewus, lewym, leząc, lezie, leziw, lezja, lezją, lezje, lezję, lezji, lezjo, lezyj, leźli, leźmy, leźże, leżak, leżał, leżąc, leżeć, leżem, leżeń, leżmy, leżni, leżom, leżże, lęgli, lęgła, lęgło, lęgły, lęgną, lęgnę, lęgni, lęgom, lęgów, lękać, lękaj, lękał, lękam, lękań, lękom, lęków, lgnąc, lgnąć, lgnął, lgnie, lgnij, liana, lianą, lianę, liang, liano, liany, liasu, liasy, liaza, liazą, liazę, liazo, liazy, libid, libra, librą, librę, libro, libry, licea, licem, licet, licha, lichą, liche, lichę, licho, lichu, lichw, lichy, licie, licom, liców, licuj, liczą, liczb, liczę, liczi, liczy, lidar, lidem, lider, lidom, lidów, lidyt, lidze, lieto, liftu, lifty, ligać, ligaj, ligał, ligam, ligań, ligaw, ligaz, light, ligol, ligom, ligul, likom, lików, likuj, lilak, lilia, lilią, lilie, lilię, lilii, lilij, lilio, limak, liman, limba, limbą, limbę, limbo, limbu, limby, limem, limes, limet, limfa, limfą, limfę, limfo, limfy, limie, limit, limom, limon, lince, lincz, linek, linem, linga, lingą, lingę, lingi, lingo, linia, linią, linie, linię, linii, linij, linio, linka, linką, linkę, linki, linko, linku, linom, linon, linów, lipaz, lipca, lipce, lipcu, lipek, lipia, lipią, lipid, lipie, lipię, lipii, lipij, lipin, lipio, lipka, lipką, lipkę, lipki, lipko, lipna, lipną, lipne, lipni, lipny, lipom, lirce, lirek, lirem, lirka, lirką, lirkę, lirki, lirko, lirom, lirów, liryd, liryk, lirze, lisek, lisem, lisia, lisią, lisic, lisie, lisię, lisim, lisio, liska, liski, lisku, lisom, lisów, lispu, lispy, lista, listą, listę, listo, listu, listw, listy, lisze, liści, litej, litem, liter, litom, litot, litów, litra, litrą, litrę, litro, litry, lituj, litym, liwan, liwie, liwom, liwra, liwry, lizać, lizak, lizał, lizań, lizel, lizen, lizie, lizną, liznę, lizol, lizom, lizus, lizyn, lizys, liżąc, liżmy, liżże, llano, lnach, lnami, lnica, lnicą, lnice, lnicę, lnico, lnicy, lnisk, lnowi, lobby, lobem, lobia, lobią, lobie, lobię, lobii, lobij, lobio, lobom, lobów, lobuj, locha, lochą, lochę, locho, lochu, lochy, locie, locja, locją, locje, locję, locji, locjo, locom, loców, locum, locus, locyj, lodek, lodem, loden, lodka, lodki, lodku, lodom, lodów, loduj, lodzą, lodzę, lodzi, loess, loftu, lofty, logia, logik, login, logom, logon, logos, logów, loguj, lokai, lokaj, lokal, lokat, lokom, loków, lokuj, lokum, lolig, lolit, lolom, lombr, longa, longi, longu, lontu, lonty, lonża, lonżą, lonże, lonżę, lonżo, lonży, loopa, loopy, loran, lorce, lorda, lordy, lorek, lorka, lorką, lorkę, lorki, lorko, lorom, lorze, losem, losie, losom, losów, losuj, losze, lotce, lotek, lotem, lotka, lotką, lotkę, lotki, lotko, lotku, lotna, lotną, lotne, lotni, lotny, lotom, lotos, lotów, lotto, lotus, lożom, lśnią, lśnić, lśnię, lśnij, lśnił, lubej, lubią, lubić, lubię, lubił, lubmy, lubuj, lubym, lubże, lucie, ludek, ludem, ludia, ludka, ludki, ludku, ludna, ludną, ludne, ludni, ludno, ludny, ludom, ludów, ludzi, luesu, luesy, lufce, lufek, luffa, luffą, luffę, luffo, luffy, lufie, lufka, lufką, lufkę, lufki, lufko, lufom, luftu, lufty, luger, lugra, lugry, lujem, lujom, lujów, lukać, lukaj, lukał, lukam, lukań, lukną, luknę, lukom, luków, lukru, lukry, luksa, luksu, luksy, lulać, lulaj, lulał, lulam, lulań, lulce, lulek, lulka, lulką, lulkę, lulki, lulko, lulku, lumem, lumen, lumie, lumin, lumom, lumów, lumpa, lumpy, lunąć, lunął, lunch, lunet, lunie, lunit, lunom, lunul, luńmy, luńże, lupce, lupek, lupie, lupka, lupką, lupkę, lupki, lupko, lupom, lupus, lurce, lurek, lurem, lurex, lurka, lurką, lurkę, lurki, lurko, lurom, lurów, lurze, lustr, luśni, lutej, lutem, luteń, luter, lutet, lutni, lutom, lutów, lutra, lutry, lutuj, lutym, lutza, lutze, lutzu, luxem, luxie, luxom, luxów, luzak, luzem, luzie, luzom, luzów, luzuj, luźna, luźną, luźne, luźni, luźno, luźny, lwach, lwami, lwiąt, lwica, lwicą, lwice, lwicę, lwich, lwico, lwicy, lwiej, lwimi, lwisk, lycra, lycrą, lycrę, lycro, lycry, lynch, lysis, lżąca, lżącą, lżące, lżący, lżeni, lżona, lżoną, lżone, lżono, lżony, lżyli, lżyła, lżyło, lżyły, lżymy, lżysz, łabie, łabom, łacha, łachą, łachę, łacho, łachu, łachy, łacie, łacin, łacna, łacną, łacne, łacni, łacno, łacny, ładem, ładna, ładną, ładne, ładni, ładny, ładom, ładów, ładug, ładuj, ładzą, ładzę, ładzi, łagra, łagru, łagry, łagun, łagwi, łajać, łajał, łajań, łając, łajba, łajbą, łajbę, łajbo, łajby, łajce, łajek, łajen, łajka, łajką, łajkę, łajki, łajko, łajmy, łajna, łajno, łajnu, łajza, łajzą, łajzę, łajzo, łajzy, łajże, łakną, łaknę, łakom, łamać, łamag, łamał, łamań, łamem, łamią, łamie, łamię, łammy, łamom, łamów, łamże, łanem, łania, łanią, łanie, łanię, łanim, łanio, łanom, łanów, łapać, łapak, łapał, łapań, łapce, łapci, łapeć, łapek, łapią, łapie, łapię, łapin, łapka, łapką, łapkę, łapki, łapko, łapmy, łapom, łapów, łapsa, łapsk, łapsy, łapsz, łapże, łasce, łascy, łasej, łasek, łasic, łasić, łasił, łaska, łaską, łaskę, łaski, łasko, łasku, łasuj, łasym, łasza, łaszą, łasze, łaszę, łaszo, łaszt, łaszy, łaśmy, łaśże, łatać, łataj, łatał, łatam, łatań, łatce, łatek, łatem, łatka, łatką, łatkę, łatki, łatko, łatku, łatom, łatów, łatwa, łatwą, łatwe, łatwi, łatwo, łatwy, ławce, ławek, ławic, ławie, ławka, ławką, ławkę, ławki, ławko, ławom, ławra, ławrą, ławrę, ławro, ławry, łazęg, łazić, łazik, łaził, łaziw, łaźca, łaźce, łaźcu, łaźmy, łaźni, łaźże, łażąc, łażeń, łąccy, łącka, łącką, łącki, łącku, łącza, łączą, łącze, łączę, łączu, łączy, łąkom, łątce, łątek, łątka, łątką, łątkę, łątki, łątko, łbach, łbami, łebek, łebka, łebki, łebku, łepak, łepek, łepet, łepka, łepki, łepku, łezce, łezek, łezka, łezką, łezkę, łezki, łezko, łęccy, łęcie, łęcin, łęcka, łęcką, łęcki, łęcku, łęgom, łęgów, łękom, łęków, łętem, łętom, łętów, łgali, łgała, łgało, łgały, łgana, łganą, łgane, łgani, łgano, łgany, łgarz, łkają, łkali, łkała, łkało, łkały, łkamy, łkano, łkasz, łobód, łobuz, łochw, łodyg, łodzi, łogów, łoili, łoiła, łoiło, łoiły, łoimy, łoisz, łojak, łojąc, łojek, łojem, łojeń, łojka, łojki, łojku, łojom, łojów, łokaś, łokci, łomem, łomie, łomom, łomot, łomów, łonem, łonie, łonom, łopat, łopot, łosia, łosią, łosic, łosie, łosię, łosim, łosin, łosiu, łosoś, łosuń, łosza, łoszą, łosze, łoszę, łoszo, łoszy, łotok, łotra, łotry, łowca, łowcą, łowce, łowcę, łowco, łowcu, łowcy, łowem, łowią, łowić, łowie, łowię, łowik, łowił, łowna, łowną, łowne, łowni, łowny, łowom, łowów, łozie, łozin, łozom, łożąc, łożem, łożeń, łożom, łożyć, łożył, łódce, łódek, łódka, łódką, łódkę, łódki, łódko, łójmy, łójże, łówmy, łówże, łózce, łózek, łózka, łózką, łózkę, łózki, łózko, łóżek, łóżka, łóżko, łóżku, łóżmy, łóżże, łubce, łubek, łubem, łubie, łubin, łubka, łubką, łubkę, łubki, łubko, łubku, łubni, łubom, łubów, łuccy, łucie, łucka, łucką, łucki, łucku, łudzą, łudzę, łudzi, ługom, ługów, ługuj, łukom, łuków, łukuj, łukum, łunie, łunom, łupać, łupał, łupań, łupce, łupek, łupem, łupią, łupić, łupie, łupię, łupił, łupin, łupka, łupką, łupkę, łupki, łupko, łupku, łupmy, łupna, łupną, łupne, łupnę, łupni, łupny, łupom, łupów, łupże, łusce, łusek, łuska, łuską, łuskę, łuski, łusko, łutem, łutom, łutów, łuzie, łuzom, łycha, łychą, łychę, łycho, łychy, łydce, łydek, łydka, łydką, łydkę, łydki, łydko, łydom, łykać, łykaj, łykał, łykam, łykań, łykną, łyknę, łykom, łyków, łypać, łypał, łypań, łypią, łypie, łypię, łypmy, łypną, łypnę, łypże, łysce, łyscy, łysej, łysek, łysic, łysin, łyska, łyską, łyskę, łyski, łysko, łysku, łysła, łysło, łysły, łysną, łysnę, łysol, łysoń, łysym, łysze, łyżce, łyżek, łyżew, łyżka, łyżką, łyżkę, łyżki, łyżko, łyżom, łyżwa, łyżwą, łyżwę, łyżwo, łyżwy, łzach, łzami, łzawa, łzawą, łzawe, łzawi, łzawo, łzawy, łzowa, łzową, łzowe, łzowi, łzowy, łżąca, łżącą, łżące, łżący, łżemy, łżesz, maaru, maary, macać, macaj, macał, macam, macań, macao, macce, maceb, macek, macew, macha, machą, machę, macho, machu, machy, macią, macic, macie, macis, macka, macką, mackę, macki, macko, macku, macną, macnę, macom, maców, macza, maćka, maćki, maćku, mader, madom, maest, mafia, mafią, mafie, mafię, mafii, mafij, mafio, maggi, magia, magią, magie, magię, magii, magij, magik, magio, magla, maglą, magle, magli, maglu, magma, magmą, magmę, magmo, magmy, magna, magom, magot, magów, mahał, mahdi, mahoń, mahru, mahry, maiki, maiku, maila, maile, maili, mailu, maiła, maiło, maiły, maimy, maisz, majak, mając, majce, majda, majek, majem, majeń, majka, majką, majkę, majki, majko, majmy, majom, major, majów, majta, majty, majże, makak, makam, makao, makat, makia, makią, makie, makię, makii, makij, makio, makom, maków, makra, makro, makru, maksa, maksi, maksy, makub, malag, malał, malca, malce, malcu, malcy, malec, maleć, malej, maleń, malin, malmu, malmy, maluj, malwa, malwą, malwę, malwo, malwy, małej, małoż, małpa, małpą, małpę, małpi, małpo, małpy, małym, małża, małże, małżu, małży, mamba, mambą, mambę, mambo, mambu, mamby, mamce, mamci, mamea, mameą, mamee, mameę, mamei, mamek, mameo, mamer, mamią, mamić, mamie, mamię, mamił, mamin, mamka, mamką, mamkę, mamki, mamko, mamlą, mamle, mamlę, mammy, mamom, mamon, mamra, mamry, mamuń, mamuś, mamut, mamże, manat, manca, mancą, mance, mancę, manco, mancy, manel, manem, maneż, manga, mangą, mangę, mangi, mango, mania, manią, manić, manie, manię, manii, manij, manił, manio, manka, manko, manku, manna, manną, mannę, manno, manny, manom, manów, manta, mantą, mantę, manto, mantr, mantu, manty, mańce, mańka, mańką, mańkę, mańki, mańko, mańmy, mańże, maori, mapce, mapek, mapet, mapie, mapka, mapką, mapkę, mapki, mapko, mapom, mapuj, marak, maral, maran, marca, marce, marcu, marea, mareą, maree, mareę, marei, marek, maren, mareo, marga, marin, marka, marką, markę, marki, marko, marku, marla, marlą, marle, marlę, marli, marlo, marła, marło, marły, marna, marną, marne, marni, marny, marom, maron, maror, marsa, marsu, marsy, marsz, marto, martw, marud, marun, marzą, marze, marzę, marzł, marzy, marża, marżą, marże, marżę, marżo, marży, masaż, masce, masek, maseł, maser, maset, masie, maska, maską, maskę, maski, masko, masła, masło, masłu, masom, mason, masor, masuj, masyw, masze, maszt, maści, maśle, matce, matek, matem, matiz, matka, matką, matkę, matki, matko, matma, matmą, matmę, matmo, matmy, matni, matoł, matom, matów, matuj, matul, matuń, matur, matuś, maula, maule, mauli, maulu, mawia, mayom, mazać, mazai, mazaj, mazak, mazał, mazań, mazar, mazda, mazdą, mazdę, mazdo';
let words7 = 'mazdy, mazep, mazer, mazia, mazią, mazie, mazną, maznę, mazun, mazur, mazut, mażąc, mażmy, mażże, mącąc, mąceń, mącić, mącie, mącił, mączą, mączę, mączy, mąćmy, mąćże, mądra, mądrą, mądre, mądry, mądrz, mąkla, mąklą, mąkle, mąklę, mąkli, mąklo, mąkom, mątem, mątew, mątom, mątów, mątwa, mątwą, mątwę, mątwi, mątwo, mątwy, mbira, mbirą, mbirę, mbiro, mbiry, mchem, mchom, mchów, mdlał, mdląc, mdleć, mdlej, mdleń, mdlić, mdlij, mdlił, mdłej, mdłym, mebel, mebla, meble, mebli, meblu, mecie, mecyi, meczą, mecze, meczę, meczu, meczy, medal, media, medin, medok, meduz, medyk, medyn, megil, megom, mejla, mejle, mejli, mejlu, mejoz, mekce, mekka, mekką, mekkę, mekki, mekko, melas, melba, melbą, melbę, melbo, melby, melem, melex, melik, melin, melis, melit, melom, melon, melos, mełci, mełli, mełła, mełło, mełły, mełta, mełtą, mełte, mełto, mełty, memei, memej, memem, memie, memla, memlą, memle, memlę, memli, memlo, memła, memom, memów, menad, menat, menaż, menda, mendą, mendę, mendo, mendy, mendź, menel, menem, mener, menie, menom, menor, menos, menów, mensa, mensą, mensę, menso, mensy, mente, merca, merce, mercu, merda, merem, merga, mergą, mergę, mergi, mergo, merka, merki, merku, merla, merlą, merle, merlę, merli, merlo, merom, meron, merów, merul, merze, mesel, meset, mesie, mesla, mesle, mesli, meslu, mesod, mesom, messa, messą, messę, messo, messy, mesto, mesze, meszt, meszu, meszy, metal, metan, metax, metce, metek, meteo, metka, metką, metkę, metki, metko, metod, metol, metom, metop, metra, metro, metru, metry, metyl, metys, mewce, mewek, mewia, mewią, mewie, mewim, mewka, mewką, mewkę, mewki, mewko, mewom, mewsu, mewsy, mezon, mezuz, mezzo, męcie, męczą, męczę, męczy, mękom, męscy, męska, męską, męski, męsko, męsku, męstw, mętem, mętna, mętną, mętne, mętni, mętny, mętom, mętów, mężem, mężna, mężną, mężne, mężni, mężny, mężom, mężów, mężuś, mgieł, mgląc, mgleń, mglić, mglij, mglił, mgłom, miale, miała, miało, miału, miały, miana, mianą, miane, miani, miano, mianu, miany, miara, miarą, miarę, miaro, miary, miast, miauk, miazg, miągw, micel, micha, michą, michę, micho, michu, michy, micie, micra, micrą, micrę, micro, micry, micwa, micwą, micwę, micwo, micwy, miech, miecz, miedz, miedź, mielą, miele, mielę, mieli, mieni, mierz, mierź, miesi, mieść, miewa, mięch, mięci, międl, miękł, mięli, mięła, mięło, mięły, mięsa, mięso, mięsu, mięta, miętą, mięte, miętę, mięto, mięty, migać, migaj, migał, migam, migań, migla, migle, migli, miglu, migma, migmą, migmę, migmo, migmy, migną, mignę, migom, migot, migów, mijać, mijaj, mijał, mijam, mijań, mikiż, mikom, mikot, mikoz, mikra, mikrą, mikre, mikro, mikru, mikry, mikst, miksu, miksy, mikwa, mikwą, mikwę, mikwo, mikwy, miląc, milcz, milej, milem, milen, mileń, miler, milić, milił, milim, milin, milkł, milmy, milom, milsi, milże, miłce, miłej, miłek, miłka, miłką, miłkę, miłki, miłko, miłku, miłuj, miłym, mimem, mimie, mimik, mimom, mimoz, mimów, minąć, minął, mince, minek, miner, minet, minia, minią, minie, minię, minii, minij, minim, minio, minka, minką, minkę, minki, minko, minom, minor, minóg, minuj, minus, minut, mińmy, mińże, miodu, miody, mionu, miony, miota, miotą, miotę, miotu, mioty, miótł, mipor, miraż, mirem, mirom, mirów, mirra, mirrą, mirrę, mirro, mirry, mirta, mirtą, mirtę, mirto, mirtu, mirty, mirun, mirza, mirzą, mirze, mirzę, mirzo, mirzy, misce, misek, misia, misią, misie, misim, misio, misiu, misja, misją, misje, misję, misji, misjo, miska, miską, miskę, miski, misko, misom, misyj, misze, miśka, miśki, miśku, mitel, mitem, mitle, mitli, mitlu, mitom, mitoz, mitów, mitra, mitrą, mitrę, mitro, mitry, mizar, mizdr, mklik, mknąc, mknąć, mknął, mknie, mknij, mlask, mlecz, mleka, mleko, mleku, mlewa, mlewo, mlewu, mlika, mliki, mliku, młace, młaka, młaką, młakę, młaki, młako, młoda, młodą, młode, młodo, młodu, młody, młota, młoty, młócą, młócę, młóci, młódź, młóta, młóto, młótu, młyna, młynu, młyny, mnąca, mnącą, mnące, mnący, mneme, mniam, mnich, mniej, mnisi, mnoga, mnogą, mnogi, mnogo, mnożą, mnożę, mnoży, mobil, mobul, mocen, mocja, mocją, mocje, mocję, mocji, mocjo, mocna, mocną, mocne, mocni, mocno, mocny, mocom, mocuj, mocyj, moczą, mocze, moczę, moczu, moczy, model, modeł, modem, moden, modlą, modle, modlę, modli, modła, modłą, modłę, modło, modły, modna, modną, modne, modni, modny, modom, nabab, nabaj, nabak, nabaw, nabić, nabij, nabił, nabla, nablą, nable, nablę, nabli, nablo, naboi, nabój, nabór, nabyć, nabył, nacho, nacią, nacie, nacja, nacją, nacje, nację, nacji, nacjo, nacyj, naćka, naćpa, nadać, nadaj, nadal, nadał, nadam, nadań, nadaw, nadąć, nadął, nadąż, nadda, nadeń, nader, nadęć, nadir, nadje, nadmą, nadmę, nadoi, nadój, nadrą, nadrę, nadto, naduś, nadym, nadze, nadzy, nafta, naftą, naftę, nafto, nafty, nagan, nagap, nagar, nagie, nagim, naglą, nagle, naglę, nagli, nagła, nagłą, nagłe, nagły, nagna, nagną, nagnę, nagom, nagoń, nagów, nagra, nagub, nagus, nahaj, nahua, naira, nairą, nairę, nairo, nairy, najad, nająć, najął, najdą, najdę, najdź, najeb, najem, najeż, najęć, najmą, najmę, najmu, najmy, najść, nakap, nakaz, nakaż, nakfa, nakfą, nakfę, nakfo, nakfy, nakol, nakop, nakoś, nakup, nalać, nalał, nalań, naleć, nalej, nalep, nalew, naleź, należ, nalot, nałaj, nałam, nałap, nałaź, nałóg, nałów, nałóż, nałup, nałżą, nałże, nałżę, namaz, namaż, namąć, namów, namul, namuł, namur, namyć, namyj, namył, namyw, nandu, naniż, nanob, nanos, nanoś, naosu, naosy, napad, napal, napar, napaś, napęd, napić, napie, napij, napił, napis, napną, napnę, napoć, napoi, napom, napój, napór, nappa, nappą, nappę, nappo, nappy, naprą, naprę, napyl, narad, narai, naraj, naraz, naraź, narąb, nardu, nardy, narom, narób, naród, narów, narta, nartą, nartę, narto, narty, narwą, narwę, narys, nasad, nasap, nasęp, nashi, nasil, nasól, naspa, naspą, naspę, naspo, naspy, nasra, nassą, nassę, nasta, nastą, naste, nastu, nasty, nasuń, nasyć, nasyp, nasza, naszą, nasze, naści, naślą, naśle, naślę, naśpi, natak, natce, natek, natem, natęż, natia, natią, natie, natię, natii, natio, natka, natką, natkę, natki, natko, natną, natnę, natom, natop, natów, natrą, natrę, natur, natyj, nauce, naucz, nauka, nauką, naukę, nauki, nauko, nauru, nawag, nawal, nawał, nawar, naważ, nawet, nawęd, nawie, nawiń, nawis, nawoi, nawom, nawoź, nawój, nawóz, nawóź, nawyk, nazad, nazir, nazwa, nazwą, nazwę, nazwo, nazwy, nażąć, nażął, nażęć, nażną, nażnę, nażrą, nażre, nażrę, nażyć, nażyj, nażył, necie, nefem, nefie, nefom, nefów, negra, negry, neguj, negus, nelma, nelmą, nelmę, nelmo, nelmy, nemem, nemie, nemom, nemów, nenia, nenią, nenie, nenię, nenii, nenij, nenio, neona, neonu, neony, nepem, neper, nepie, nepom, nepot, nepów, nerce, nerda, nerdy, nerek, nerka, nerką, nerkę, nerki, nerko, nerol, nerom, nerpa, nerpą, nerpę, nerpo, nerpy, nerwu, nerwy, nerze, nesca, nescą, nesce, nescę, nesco, nesec, nesek, neska, neską, neskę, neski, nesko, netem, netom, netów, netta, netto, nettu, neuma, neumą, neumę, neumo, neumy, newsa, newsu, newsy, nęcąc, nęceń, nęcić, nęcił, nęćmy, nęćże, nędza, nędzą, nędze, nędzę, nędzo, nędzy, nękać, nękaj, nękał, nękam, nękań, ngana, nganą, nganę, ngano, ngany, niala, nialą, niale, nialę, niali, nialo, niani, nibym, nibyś, nicią, nicie, nicka, nicki, nicku, nicom, nicuj, nićmi, nieba, niebo, niebu, niecą, niecę, niech, nieci, nieco, niego, niell, niema, niemą, nieme, niemi, niemo, niemr, niemu, niemy, nieść, nieuk, nigdy, nijak, nikim, nikki, nikle, nikli, niklu, nikła, nikłą, nikłe, nikło, nikły, nikną, niknę, nikol, nikon, nilem, nilom, nilów, nimbu, nimby, nimfa, nimfą, nimfę, nimfo, nimfy, nimże, ninja, niobu, nioby, niosą, niosę, niósł, nipie, nipom, nisan, niscy, nisei, niska, niską, niski, nisko, nisku, nisza, niszą, nisze, niszę, niszo, niszy, nitce, nitek, nitem, niter, nitka, nitką, nitkę, nitki, nitko, nitom, niton, nitów, nitro, nituj, niuch, niuni, niusa, niusu, niusy, nivie, nivom, niwie, niwom, nizać, nizał, nizam, nizań, nizin, niźli, niżan, niżąc, niżby, niżej, niżem, niżmy, niżom, niżów, niżsi, niżże, njaja, njają, njaje, njaję, njajo, nobel, nobil, nobla, noble, nobli, noblu, nocce, nocek, nocie, nocja, nocją, nocje, nocję, nocji, nocjo, nocka, nocką, nockę, nocki, nocko, nocku, nocna, nocną, nocne, nocni, nocny, nocom, nocuj, nocyj, nodul, nodus, nodze, noeza, noezą, noezę, noezo, noezy, nogal, nogam, nogom, noguj, noise, nokia, nokią, nokie, nokię, nokii, nokij, nokio, nokom, noków, noksa, noksy, nomem, nomie, nomom, nomos, nomów, nonet, nonie, nonom, nopal, norce, norda, nordą, nordę, nordo, nordy, norek, noria, norią, norie, norię, norii, norio, norka, norką, norkę, norki, norko, norma, normą, normę, normo, normy, norna, norną, nornę, norno, norny, norom, noruj, noryj, noryt, norze, nosal, nosek, nosem, nosić, nosie, nosił, nosiw, noska, noski, nosku, nosom, nosów, noszą, nosze, noszę, noszy, nośca, noścą, nośce, noścę, nośco, noścy, nośmy, nośna, nośną, nośne, nośni, nośny, nośże, notce, notek, notes, notis, notka, notką, notkę, notki, notko, notom, notuj, nowej, nowel, nowie, nowik, nowin, nowiu, nowsi, nowym, noysa, noysy, nożąt, nożem, nożna, nożną, nożne, nożni, nożny, nożom, nożów, nożyc, nożyk, nożyn, nówce, nówek, nówka, nówką, nówkę, nówki, nówko, nózia, nózią, nózie, nózię, nózio, nóziu, nóżąt, nóżce, nóżek, nóżka, nóżką, nóżkę, nóżki, nóżko, nóżyn, nubuk, nucąc, nuceń, nucić, nucie, nucił, nucza, nuczą, nucze, nuczę, nuczo, nuczy, nućmy, nućże, nudna, nudną, nudne, nudni, nudno, nudny, nudom, nudów, nudzą, nudzę, nudzi, nugat, nulce, nulek, nulem, nulka, nulką, nulkę, nulki, nulko, nulom, numen, numer, nurca, nurce, nurcu, nurek, nurem, nurka, nurką, nurkę, nurki, nurko, nurku, nurom, nurów, nurse, nurtu, nurty, nurza, nurze, nutce, nutek, nutem, nutka, nutką, nutkę, nutki, nutko, nutom, nutów, nużąc, nużby, nużeń, nużmy, nużyc, nużyć, nużył, nużże, nydze, nygom, nygus, nylon, nysce, nyscy, nysek, nysie, nyska, nyską, nyskę, nyski, nysko, nysku, nysom, nyssa, nyssą, nyssę, nysso, nyssy, nywce, nywek, nywka, nywką, nywkę, nywki, nywko, nyżom, oazie, oazom, obabi, obacz, obada, obala, obalą, obalę, obali, obawa, obawą, obawę, obawo, obawy, obądź, obcas, obcej, obces, obcuj, obcym, obejm, obelg, oberż, obędą, obędę, obiad, obiat, obici, obiec, obieg, obiel, obiit, obija, obiją, obije, obiję, obili, obiła, obiło, obiły, obiór, obita, obitą, obite, obito, obity, objaw, objąć, objął, objem, objęć, obkop, obkoś, obkuć, obkuj, obkuł, obkup, oblać, oblał, oblań, oblat, oblec, obleć, oblej, oblep, obleź, oblig, oblin, obliż, oblot, obłam, obłap, obław, obłaź, obłąk, obłej, obłem, obłęd, obłęk, obłoć, obłok, obłom, obłóg, obłów, obłóż, obłud, obłup, obłym, obmaż, obmów, obmyć, obmyj, obmył, obnaż, obniż, obnoś, oboje, oboju, obola, obole, oboli, obolu, oboma, obonu, obony, obora, oborą, oborę, oboro, obory, oborz, obozu, obozy, obrać, obrad, obrał, obram, obrań, obraz, obraź, obrąb, obręb, obrok, obron, obroń, obrób, obróć, obrót, obrus, obryć, obryj, obrył, obryp, obrys, obryw, obsad, obscy, obska, obską, obski, obsku, obsra, obsuń, obsuw, obsyf, obsyp, obtop, obtul, obtup, obuch, obuci, obucz, obudź, obują, obuje, obuję, obuli, obuła, obuło, obuły, oburz, obuta, obutą, obute, obuto, obuty, obuwa, obuwi, obwal, obwał, obwić, obwij, obwił, obwiń, obwoź, obwód, obwój, obwóź, obyci, obyli, obyła, obyło, obyły, obyta, obytą, obyte, obyto, obyty, obywa, obżąć, obżął, obżęć, ocala, ocalą, ocalę, ocali, occie, ocean, ocela, ocele, oceli, ocelu, ocena, oceną, ocenę, oceni, oceno, oceny, ocher, ochla, ochom, ochot, ochów, ochra, ochrą, ochrę, ochro, ochry, ociec, ociel, ociem, ocień, ocięć, ocios, ockną, ocknę, ocleń, oclić, oclij, oclił, octan, octem, octom, octów, ocuca, ocucą';
let words8 = 'ocucę, ocuci, ocyka, ocynk, oczar, ocząt, oczek, oczep, oczka, oczki, oczko, oczku, oczna, oczną, oczne, oczni, oczny, oczom, oczów, oćcem, oćcom, oćców, oćcze, oćmie, oćmom, odach, odami, odarć, odarł, odbić, odbij, odbił, odbój, odbyć, odbył, odbyt, oddać, oddaj, oddal, oddał, oddam, oddań, oddym, odeon, odezw, odęci, odęli, odęła, odęło, odęły, odęta, odętą, odęte, odęto, odęty, odgoń, odiom, odiów, odium, odjąć, odjął, odjeb, odjem, odjęć, odkaź, odkąd, odkop, odkoś, odkuć, odkuj, odkuł, odkup, odlać, odlał, odlań, odleć, odlej, odlep, odlew, odleź, odleż, odlot, odłam, odłaź, odłóg, odłów, odłóż, odłup, odmęt, odmie, odmij, odmom, odmów, odmul, odmyć, odmyj, odmył, odnoś, odnóg, odnów, odnóż, odoru, odory, odpad, odpal, odpas, odpaś, odpęd, odpić, odpij, odpił, odpis, odpór, odpyl, odrap, odraz, odraź, odrąb, odrom, odrób, odrwi, odryb, odryn, odrys, odrze, odsad, odsól, odsuń, odsuw, odsyp, odtaj, odtąd, oducz, odurz, odwag, odwal, odwał, odwar, odważ, odwet, odwiń, odwoń, odwoź, odwód, odwóź, odwyk, odyma, odymi, odzew, odzie, odżąć, odżął, odżęć, odżyć, odżyj, odżył, odżyw, oecus, oferm, ofert, offem, offie, offom, offów, ofiar, ofici, ofita, ofitą, ofitę, ofito, ofity, oflag, oflis, ofuka, ogaca, ogacą, ogacę, ogaci, ogamu, ogamy, ogara, ogary, ogień, ogier, ogląd, ogład, ogłoś, ogłów, ogłup, ognać, ognaj, ognał, ognam, ognań, ognia, ognią, ognić, ognie, ognię, ognij, ognik, ognił, ogniu, ogniw, ogolą, ogolę, ogoli, ogona, ogoni, ogony, ogóle, ogółu, ogóły, ograb, ograć, ograj, ograł, ogram, ograń, ogrem, ogrom, ogród, ogrów, ogryź, ogrze, ogumi, ohara, ohary, ohele, oheli, ohelu, ohmem, ohmie, ohmom, ohmów, ohyda, ohydą, ohydę, ohydo, ohydy, oidia, oiomu, oiomy, ojcem, ojcom, ojców, ojcuj, ojcze, ojeju, ojkom, ojków, okach, okadź, okala, okami, okapi, okapu, okapy, okara, okarą, okarę, okarm, okaro, okary, okazu, okazy, okażą, okaże, okażę, okiem, okien, okiść, okiwa, oklei, oklej, oklep, okład, okłam, okłot, oknem, oknie, oknom, okocą, okocę, okoci, okola, okolą, okole, okolę, okoli, okolu, około, okołu, okoły, okoni, okopć, okopu, okopy, okosi, okowa, okową, okowę, okowo, okowy, okpią, okpić, okpię, okpij, okpił, okrai, okraj, okras, okraś, okrąg, okrąż, okres, okręć, okręg, okręt, okroi, okrom, okrój, okryć, okryj, okrył, okryw, okrze, okser, okson, oksym, oksza, okszą, oksze, okszę, okszo, okszy, oktan, oktaw, oktet, oktod, oktoz, okuci, okują, okuje, okuję, okuli, okuła, okuło, okuły, okupi, okupu, okupy, okurz, okuta, okutą, okute, okuto, okuty, okuwa, okwef, olali, olała, olało, olały, olana, olaną, olane, olani, olano, olany, olbor, olcha, olchą, olchę, olcho, olchy, oleat, oleic, oleić, oleił, olein, oleją, oleje, oleję, oleju, oleli, oleom, oleów, olepi, oleum, olewa, oligo, olimp, oliwa, oliwą, oliwę, oliwi, oliwo, oliwy, olsem, olsie, olsom, olsów, olsza, olszą, olsze, olszę, olszo, olszy, olśni, ołgać, ołgaj, ołgał, ołgam, ołgań, ołowi, ołżyj, omaca, omach, omami, omamu, omamy, omanu, omany, omaru, omary, omast, omaść, omącz, omega, omegą, omegę, omegi, omego, omenu, omeny, omert, omglą, omglę, omgli, omieć, omieg, omija, ominą, ominę, omlet, omłot, omłóć, omoki, omoku, omota, omowi, omówi, omscy, omska, omską, omski, omsku, omszą, omszę, omszy, omula, omule, omuli, omulu, omyci, omyją, omyje, omyję, omyka, omyki, omyku, omylą, omylę, omyli, omyła, omyło, omyły, omyta, omytą, omyte, omyto, omyty, omywa, omżyn, ondyn, onego, onemu, ongiś, ongon, onkos, onuca, onucą, onuce, onucę, onuco, onucy, onych, onyks, onymi, oocyt, ooidu, ooidy, oolit, ootek, opach, opaci, opada, opadł, opadu, opady, opala, opalą, opale, opalę, opali, opalu, opału, opały, opami, oparć, oparł, opart, oparu, opary, oparz, opasa, opasą, opasę, opasł, opasu, opasy, opasz, opaść, opata, opaty, opcha, opcja, opcją, opcje, opcję, opcji, opcjo, opcyj, opeer, opełł, opera, operą, operę, operl, opero, opery, opędź, opęta, opiat, opiąć, opiął, opici, opiec, opiek, opiel, opięć, opija, opiją, opije, opiję, opili, opiła, opiłą, opiłe, opiło, opiły, opina, opiom, opiów, opisu, opisy, opisz, opita, opitą, opite, opito, opity, opium, opląt, opleć, oplem, oplew, oplom, oplot, oplów, opluć, opluj, opluł, oplwa, opłać, opłat, opłuż, opłyń, opływ, opnie, opnij, opoce, opoja, opoje, opoju, opoka, opoką, opokę, opoki, opoko, opola, opole, opoli, opolu, opoła, opoły, opona, oponą, oponę, opono, opony, opora, oporą, oporę, oporo, oporu, opory, oposa, oposy, opowi, oprać, oprał, oprań, opraw, oproś, oprze, opsną, opsnę, opsyn, optuj, optyk, opuka, opust, opusu, opusy, opuść, opyla, opylą, opylę, opyli, orach, oracz, orali, orała, orało, orały, orami, orana, oraną, orane, orani, orano, orant, orany, oranż, orbit, orcie, orcyn, order, ordom, oread, orend, oręża, oręże, orężu, oręży, orfie, orfik, orfom, organ, orgia, orgią, orgie, orgię, orgii, orgij, orgio, orija, orisz, orkan, orkom, orków, orkus, orląt, orlej, orleń, orlic, orlik, orlim, orlog, orlon, orłem, orłom, orłów, ornat, ornej, ornym, orosi, orscy, orska, orską, orski, orsku, ortem, ortez, ortęć, ortom, ortów, ortyl, ortyt, oryks, oryla, oryle, oryli, orylu, orząc, orzec, orzeł, orzmy, orzną, orznę, orzże, orżną, orżnę, osach, osacz, osada, osadą, osadę, osado, osadu, osady, osadź, osami, osącz, osądu, osądy, osądź, osein, osepu, osepy, osęce, osęka, osęką, osękę, osęki, osęko, osęku, osiać, osiał, osiań, osiąg, osice, ósmak, ósmej, ósmym, pacać, pacaj, pacał, pacam, pacan, pacań, pacce, pacek, pacem, pacha, pachą, pachę, pacho, pacht, pachy, pacia, pacią, pacie, pacię, pacio, packa, packą, packę, packi, packo, pacną, pacnę, pacom, paców, pacta, pacyf, pacyn, paczą, paczę, paczy, paćce, paćka, paćką, paćkę, paćki, paćko, padać, padaj, padał, padam, padań, padeł, padem, padle, padli, padła, padłą, padłe, padło, padłu, padły, padma, padmą, padmę, padmo, padmy, padną, padnę, padok, padom, padół, padów, padre, paduk, padun, paell, pagai, pagaj, pager, pagin, pagon, pagód, pagór, paiża, paiżą, paiże, paiżę, paiżo, paiży, pajac, pająk, pajda, pajdą, pajdę, pajdo, pajdy, pajet, pajok, pajom, pajsa, pajsą, pajsę, pajso, pajsy, pajuk, pajza, pajzą, pajzę, pajzo, pajzy, paker, pakom, pakor, paków, pakta, paktu, pakty, pakuj, pakuł, paląc, palba, palbą, palbę, palbo, palby, palca, palce, palcu, palec, palek, palem, paleń, palet, palia, palią, palić, palie, palię, palii, palij, palik, palił, palio, paliw, palka, palką, palkę, palki, palko, palma, palmą, palmę, palmo, palmy, palna, palną, palne, palnę, palni, palny, palol, palom, palów, palta, palto, paltu, paluj, palże, pałac, pałać, pałaj, pałał, pałam, pałań, pałąk, pałce, pałek, pałka, pałką, pałkę, pałki, pałko, pałom, pałub, pałuj, pampa, pampą, pampę, pampo, pampy, panam, panda, pandą, pandę, pando, pandy, panek, panel, panem, panew, panga, pangą, pangę, pangi, pango, panią, panie, panię, panik, panin, panka, panki, panku, panna, panną, pannę, panno, panny, panom, panor, panów, panty, panuj, panwi, pańci, papai, papce, papci, papeć, papek, papie, papka, papką, papkę, papki, papko, papla, paplą, paple, paplę, papli, paplo, papom, papów, papra, paprz, papuć, papug, parać, parad, paraf, paraj, parał, param, parań, parce, parch, parci, parda, pardą, pardę, pardo, pardw, pardy, parek, parem, pareo, parez, parka, parką, parkę, parki, parko, parku, parli, parła, parło, parły, parna, parną, parne, parni, parno, parny, parob, parol, parom, parów, parru, parry, parsa, parsy, parta, partą, parte, parto, partu, party, paruj, parzą, parze, parzę, parzy, pasać, pasaj, pasał, pasam, pasań, pasat, pasaż, pasąc, pasch, pasek, pasem, paseo, paser, pasie, pasik, pasja, pasją, pasje, pasję, pasji, pasjo, paska, paski, pasku, pasła, pasło, pasły, pasma, pasmo, pasmu, pasom, pasów, passa, passą, passę, passo, passy, pasta, pastą, pastę, pasto, pastw, pasty, pasuj, pasyj, pasza, paszą, pasze, paszę, paszo, paszy, paści, paśli, paśmy, paśże, patat, patce, patch, patek, patem, paten, pater, patia, patio, patiu, patka, patką, patkę, patki, patko, patok, patol, patom, patos, patów, patra, patry, patrz, patyk, patyn, pauza, pauzą, pauzę, pauzo, pauzy, pawan, pawąz, pawąż, pawęz, pawęż, pawia, pawią, pawic, pawie, pawik, pawim, pawiu, pazia, pazie, pazik, paziu, pazur, pądem, pądom, pądów, pąkla, pąklą, pąkle, pąklę, pąkli, pąklo, pąkom, pąków, pąkwi, pąsem, pąsie, pąsom, pąsów, pchać, pchaj, pchał, pcham, pchań, pcheł, pchla, pchlą, pchle, pchli, pchła, pchłą, pchłę, pchło, pchły, pchną, pchnę, peaki, peaku, peanu, peany, pecet, pecha, pechu, pechy, pecie, pecja, pecją, pecje, pecję, pecji, pecjo, pecyj, pecyn, pedał, pedel, pedet, pedig, pedla, pedle, pedli, pedlu, pedon, peemu, peemy, pegaz, pejcz, pejsa, pejsu, pejsy, pekan, pekao, pekin, peled, pelis, pelit, pelom, pelot, pelta, peltą, peltę, pelto, pelty, pelug, pelur, pełci, pełen, pełga, pełli, pełła, pełło, pełły, pełna, pełną, pełne, pełni, pełno, pełny, pełta, pełtą, pełte, pełto, pełty, pełza, pełzł, penem, pener, penia, penie, penis, penne, penni, penny, penom, penów, pensa, pensy, pentr, peona, peoni, peonu, peony, pepeg, pepik, pepin, pepit, pepla, pepsi, perce, perch, perci, perek, pereł, perka, perką, perkę, perki, perko, perlą, perle, perlę, perli, perlu, perła, perłą, perłę, perło, perły, permu, permy, perom, peron, peror, persa, persy, persz, perta, pertą, pertę, perto, perty, peruk, perzą, perze, perzę, perzu, perzy, pesel, peset, pesew, pesos, pesto, peszą, peszę, peszy, petar, petem, petit, petom, petów, petuj, pewex, pewna, pewną, pewne, pewni, pewno, pewny, pęcak, pęcie, pęcin, pędem, pędna, pędną, pędne, pędni, pędny, pędom, pędów, pędza, pędzą, pędzę, pędzi, pękać, pękaj, pękał, pękam, pękań, pękli, pękła, pękło, pękły, pękną, pęknę, pękom, pęków, pępaw, pępek, pępka, pępki, pępku, pęset, pętać, pętaj, pętak, pętał, pętam, pętań, pętek, pętel, pętem, pętka, pętko, pętku, pętla, pętlą, pętle, pętlę, pętli, pętlo, pętlu, pętom, piach, piali, piała, piało, piały, piana, pianą, piane, pianę, piani, piano, pianu, piany, piarg, piast, piata, piaty, piąch, piąci, piąta, piątą, piąte, piąty, picem, picer, pichć, picia, picie, piciu, picom, piców, picuj, picuś, picza, piczą, picze, piczę, piczo, piczy, pieca, piece, piecu, piecz, piega, piegi, piegu, piegż, pieją, pieje, pieję, pieką, piekę, piekl, piekł, pielą, piele, pielę, pieli, pieni, pierd, pierś, pierw, pierz, piesi, pieść, pieśń, pieta, pietą, pietę, pieto, piety, pieza, piezą, piezę, piezo, piezy, piędź, pięli, pięła, pięło, pięły, pięść, pięta, piętą, piętę, piętn, pięto, piętr, pięty, piguł, pigwa, pigwą, pigwę, pigwo, pigwy, pijać, pijaj, pijak, pijał, pijam, pijań, pijar, pijąc, pijmy, pijus, pijże, pikać, pikad, pikaj, pikał, pikam, pikań, pikap, pikas, pikla, pikle, pikli, piklu, pikną, piknę, pikom, pikot, pików, pikuj, pikut, pilak, pilan, pilaw, piląc, pilch, pileń, pilić, pilik, pilił, pilmy, pilna, pilną, pilne, pilni, pilno, pilny, pilom, pilon, pilot, pilów, pilśń, pilum, pilże, piłam, piłaś, piłby, piłce, piłek, piłem, piłeś, piłka, piłką, piłkę, piłki, piłko, piłom, piłuj, pinas, pince, pinda, pindą, pindę, pindo, pindy, pindź, pinek, pinem, pinen, pinia, pinią, pinie, pinię, pinii, pinij, pinio, pinka, pinką, pinkę, pinki, pinko, pinku, pinol, pinom, pinot, pinów, pinta, pintą, pintę, pinto, pintu, pinty, piona, pioną, pionę, piono, pionu, piony, piorą, piorę, pióra, pióro, pióru, pipce, pipci, pipek, pipem, pipet, pipie, pipka, pipką, pipkę, pipki, pipko, pipku, pipom, pipów, pirai, piran, pirat, pirog, pirol, pirop, piróg, pirsu, pirsy, piryt, pisać, pisak, pisał, pisań, pisco, piscy, pisia, pisią, pisie, pisię, pisio, pisiu, piska, piską, piski, pisku, pisma, pismo, pismu, pisną, pisnę, pisuj, piszą';
let words9 = 'pisze, piszę, pitch, pitej, piter, pitia, pitią, pitie, pitię, pitii, pitio, pitna, pitną, pitne, pitni, pitny, pitol, pitom, pitos, pitra, pitry, pitta, pittą, pittę, pitto, pitty, pityj, pitym, piure, piwek, piwem, piwie, piwka, piwko, piwku, piwna, piwną, piwne, piwni, piwny, piwom, piwot, piwsk, pizda, pizdą, pizdę, pizdo, pizdy, pizza, pizzą, pizze, pizzę, pizzo, pizzy, piźdź, piżam, piżma, piżmo, piżmu, piżon, place, placu, plaga, plagą, plagę, plagi, plago, plaja, plają, plaje, plaję, plajo, plajt, plama, plamą, plamę, plami, plamo, plamy, plano, plant, planu, plany, plask, plasu, plasy, plaza, plazm, plaża, plażą, plaże, plażę, plażo, plaży, plącz, pląsa, pląsu, pląsy, pląta, plebs, plech, plecy, rabab, raban, rabat, rabbi, rabej, rabem, rabie, rabin, rabom, rabów, rabuj, rabuś, rabym, racic, racie, racja, racją, racje, rację, racji, racjo, racom, racyj, racza, raczą, racze, raczę, raczy, radar, radca, radcą, radce, radcę, radco, radcy, radej, radeł, radem, radia, radio, radiu, radlą, radle, radlę, radli, radła, radło, radłu, radna, radną, radne, radni, radny, radom, radon, radów, raduj, radym, radzą, radze, radzę, radzi, radża, radżą, radże, radżę, radżo, radży, rafce, rafek, rafia, rafią, rafid, rafie, rafię, rafii, rafij, rafio, rafka, rafką, rafkę, rafki, rafko, rafla, raflą, rafle, raflę, rafli, raflo, rafom, rafuj, ragom, rahla, rahlą, rahle, rahlę, rahli, rahlo, raidu, raidy, raili, raiła, raiło, raiły, raimy, raisz, rając, rajca, rajcą, rajce, rajcę, rajch, rajco, rajcy, rajdu, rajdy, rajek, rajem, rajeń, rajer, rajka, rajką, rajkę, rajki, rajko, rajmy, rajom, rajów, rajza, rajzą, rajzę, rajzo, rajzy, rajże, rakii, rakij, rakla, rakle, rakli, raklu, rakom, raków, raksa, raksą, raksę, rakso, raksu, raksy, rambo, ramce, ramek, ramia, ramią, ramie, ramię, ramii, ramij, ramio, ramka, ramką, ramkę, ramki, ramko, ramol, ramom, ramot, rampa, rampą, rampę, rampo, rampy, ramsz, rance, ranch, rancz, randa, randy, ranek, ranem, ranga, rangą, rangę, rangi, rango, ranią, ranić, ranie, ranię, ranił, ranka, ranką, rankę, ranki, ranko, ranku, ranna, ranną, ranne, ranni, ranny, ranom, rantu, ranty, rańmy, rańsi, rańże, rapci, rapeć, rapem, raper, rapie, rapom, rapów, rappa, rappy, raptu, rapty, rapuj, raróg, rasem, rasie, rasom, rasów, rasta, rastr, rasuj, ratai, rataj, ratan, ratce, ratek, ratel, ratha, rathą, rathę, ratho, rathy, ratka, ratką, ratkę, ratki, ratko, ratla, ratle, ratlu, ratom, ratuj, ratyn, rauda, raudą, raudę, raudo, raudy, rausz, rauta, rautu, rauty, razem, razić, razie, raził, razom, razów, razur, raźmy, raźna, raźną, raźne, raźni, raźno, raźny, raźże, rażąc, rażeń, rąbać, rąbał, rąbań, rąbek, rąbem, rąbią, rąbie, rąbię, rąbka, rąbki, rąbku, rąbmy, rąbną, rąbnę, rąbom, rąbów, rąbże, rącza, rączą, rącze, rączo, rączy, rąsia, rąsią, rąsie, rąsię, rąsio, rąsiu, rdest, rdzaw, rdzeń, rdzom, reala, reale, reali, realu, rebab, rebek, rebem, rebid, rebus, reccy, reces, recie, recka, recką, recki, recku, recte, recto, redan, redeł, redia, redią, redie, redię, redii, redio, redlą, redle, redlę, redli, redła, redło, redłu, redom, redow, redów, redut, redyj, redyk, refem, refie, refom, refów, refuj, regal, regał, regat, regla, regle, regli, reglu, regon, reguł, reiki, reizm, rejce, rejek, rejem, rejka, rejką, rejkę, rejki, rejko, rejom, rejon, rejów, rejsa, rejsu, rejsy, rejza, rejzą, rejzę, rejzo, rejzy, reket, rekin, rekom, rekon, reków, reksa, reksy, rekuz, relay, relsu, relsy, remat, remem, remie, remik, remis, remiz, remom, remor, remów, renem, rener, renet, renga, rengą, rengę, rengi, rengo, renie, renin, renju, renom, renów, renta, rentą, rentę, rento, renty, repem, reper, repet, repie, repom, repów, rescy, reset, reska, reską, reski, resku, resor, reszt, retem, retom, retor, retów, retro, retyk, rewia, rewią, rewie, rewię, rewii, rewij, rewio, rewir, rewom, rexem, rexie, rexom, rexów, rezed, rezol, rezon, rezun, rezuń, rezus, reżim, reżym, rębak, rębem, rębie, rębna, rębną, rębne, rębni, rębny, rębom, rębów, ręczą, ręczę, ręczy, rękaw, rękom, riala, riale, riali, rialu, riasa, riasą, riasę, riaso, riasu, riasy, ribat, riela, riele, rieli, rielu, riffu, riffy, riksz, ringa, ringi, ringo, ringu, riszt, riusz, robak, robal, rober, robią, robić, robie, robię, robił, robol, robom, robot, robót, robra, robry, rocie, rocka, rocki, rocku, rococ, rodak, rodał, rodea, rodeł, rodem, rodeo, rodeu, rodle, rodła, rodło, rodłu, rodna, rodną, rodne, rodni, rodny, rodom, rodów, roduj, rodzą, rodzę, rodzi, rogal, rogom, rogów, rogóż, roiki, roiku, roili, roiła, roiło, roiły, roimy, roisz, rojąc, rojek, rojem, rojeń, rojka, rojki, rojku, rojna, rojną, rojne, rojni, rojno, rojny, rojom, rojów, rojst, rokad, rokit, rokok, rokom, roków, rokuj, rolad, rolce, rolek, rolet, rolka, rolką, rolkę, rolki, rolko, rolna, rolną, rolne, rolni, rolny, rolom, roluj, rombu, romby, romea, romeo, ronda, rondo, rondu, ronią, ronić, ronię, ronił, ronin, rontu, ronty, rońmy, rońże, roota, rooty, ropie, ropna, ropną, ropne, ropni, ropny, ropom, rorat, rosić, rosie, rosił, rosim, rosła, rosłą, rosłe, rosło, rosły, rosną, rosnę, rosom, rosół, rostr, roszą, roszę, rości, rośli, rośmy, rośna, rośną, rośne, rośni, rośny, rośże, rotel, rotom, rotor, rotuj, rotuł, rough, rowek, rowem, rower, rowie, rowka, rowki, rowku, rowom, rowów, rozda, rozet, rozje, rozum, rożca, rożce, rożcu, rożec, rożek, rożen, rożka, rożki, rożku, rożna, rożną, rożne, rożni, rożny, róbmy, róbże, rójce, rójek, rójka, rójką, rójkę, rójki, rójko, rójmy, rójże, rólce, rólek, rólka, rólką, rólkę, rólki, rólko, równa, równą, równe, równi, równo, równy, rózeg, rózga, rózgą, rózgę, rózgi, rózgo, różan, różek, różem, różka, różki, różku, różna, różną, różne, różni, różny, różom, różów, różuj, różyc, rtęci, ruada, ruadą, ruadę, ruado, ruady, rubai, rubaj, rubat, rubeb, rubel, rubid, rubin, rubla, ruble, rubli, rublu, rubra, rucha, ruchu, ruchy, rucie, rucka, rucki, rucku, rudej, rudel, ruder, rudla, rudle, rudli, rudlu, rudna, rudną, rudne, rudni, rudny, rudom, rudym, rudze, rudzi, rufie, rufom, rugać, rugaj, rugał, rugam, rugań, rugby, rugną, rugnę, rugom, rugów, ruguj, ruina, ruiną, ruinę, ruino, ruiny, rujce, rujek, rujka, rujką, rujkę, rujki, rujko, rujna, rujną, rujne, rujni, rujny, rujom, rukwi, rulad, rulet, rulik, rulon, ruluj, rumak, rumba, rumbą, rumbę, rumbo, rumbu, rumby, rumel, rumem, rumie, rumla, rumle, rumli, rumlu, rumom, rumor, rumów, rumun, runąć, runął, runda, rundą, rundę, rundi, rundo, rundy, runek, runem, runią, runie, runka, runko, runku, runna, runną, runne, runni, runny, runom, runów, ruńmy, ruńże, rupia, rupią, rupie, rupię, rupii, rupij, rupio, rurce, rurek, rurka, rurką, rurkę, rurki, rurko, rurom, ruruj, rurze, rusce, ruscy, rusej, rusek, rusem, rusie, ruska, ruską, ruskę, ruski, rusko, rusku, rusom, rusów, rusym, rusza, ruszą, ruszę, ruszt, ruszy, rutce, rutek, ruten, ruter, rutka, rutką, rutkę, rutki, rutko, rutom, rutyl, rutyn, rwach, rwacz, rwali, rwała, rwało, rwały, rwami, rwana, rwaną, rwane, rwani, rwano, rwany, rwąca, rwącą, rwące, rwący, rybak, rybce, rybek, rybia, rybią, rybie, rybik, rybim, rybio, rybka, rybką, rybkę, rybki, rybko, rybna, rybną, rybne, rybni, rybny, rybom, ryboz, ryccy, rycia, rycie, rycin, ryciu, rycka, rycką, rycki, rycku, rycyk, rycyn, ryczą, ryczę, ryczy, rydel, rydla, rydle, rydli, rydlu, rydza, rydze, rydzu, ryfej, ryfla, ryflą, ryfle, ryflę, ryfli, ryflo, ryftu, ryfty, rygla, rygle, rygli, ryglu, rygom, rygor, rygów, ryjąc, ryjca, ryjce, ryjcu, ryjec, ryjek, ryjem, ryjka, ryjki, ryjku, ryjmy, ryjom, ryjów, ryjże, rykną, ryknę, rykom, ryków, ryksz, rylca, rylce, rylcu, rylec, ryłam, ryłaś, ryłby, ryłek, ryłem, ryłeś, ryłka, ryłko, ryłku, ryłom, rymem, rymes, rymie, saaba, saaby, sabal, sabat, sabil, sabin, sabir, sabot, sabra, sabrą, sabrę, sabro, sabry, sacra, sacrą, sacrę, sacro, sacry, sadek, sadeł, sadem, sadhu, sadki, sadku, sadle, sadła, sadło, sadłu, sadom, sadów, sadyb, sadza, sadzą, sadze, sadzę, sadzi, sadzo, sadzu, sadzy, sadżi, safes, sagaj, sagan, sagom, sagów, sagum, sahel, sahib, saida, saidy, sajan, sajce, sajek, sajka, sajką, sajkę, sajki, sajko, sajra, sajrą, sajrę, sajro, sajry, sakla, saklą, sakle, saklę, sakli, saklo, sakom, saków, sakra, sakrą, sakrę, sakro, sakry, saksu, saksy, sakur, sakwa, sakwą, sakwę, sakwo, sakwy, salam, salat, salce, salda, saldo, saldu, salek, salem, salep, salin, salka, salką, salkę, salki, salko, salol, salom, salon, salop, salpa, salpą, salpę, salpo, salpy, salsa, salsą, salsę, salso, salsu, salsy, salta, salto, saltu, salut, salwa, salwą, salwę, salwo, salwy, sałak, sałat, samar, samaż, samąż, samba, sambą, sambę, sambo, samby, samca, samce, samcu, samcy, samej, samem, sameż, samic, samie, samiż, samom, samos, samoś, samoż, samów, samum, samur, samym, samże, sandr, sanek, sanem, sangh, sanie, sanki, sanna, sanną, sannę, sanno, sanny, sanom, sanów, sanuj, sańmi, sapać, sapał, sapań, sapce, sapek, sapem, saper, sapią, sapie, sapię, sapka, sapką, sapkę, sapki, sapko, sapmy, sapną, sapnę, sapom, sapot, sapów, sapże, saraj, saran, sarda, sardą, sardę, sardo, sardu, sardy, saren, sarin, saris, sarka, sarna, sarną, sarnę, sarni, sarno, sarny, saros, sascy, saska, saską, saski, sasku, satem, satyn, satyr, saumu, saumy, sauna, sauną, saunę, sauno, sauny, sazan, sazir, sączą, sączę, sączy, sądek, sądem, sądka, sądki, sądku, sądna, sądną, sądne, sądni, sądny, sądom, sądów, sądzą, sądzę, sądzi, sągom, sągów, sążeń, sążni, sążyc, scaba, scaby, scala, scalą, scalę, scali, scatu, scaty, scedź, scena, sceną, scenę, sceno, sceny, schab, sched, scher, schla, schli, schła, schło, schły, schną, schnę, schol, schód, schyl, scjen, scoop, scrub, scull, scynk, sczep, seans, seata, seaty, sebom, sebów, sebum, secam, secco, sechł, secie, sedan, seder, sedes, sedna, sedno, sednu, sefir, seida, seidy, sejfu, sejfy, sejmu, sejmy, seksi, sekst, seksu, seksy, sekta, sektą, sektę, sekto, sektu, sekty, sekuj, selen, seler, selwa, selwą, selwę, selwo, selwy, semem, semen, semie, semom, semów, senat, senem, senes, senie, senna, senną, senne, senni, senny, senom, senon, senów, sensu, sensy, sepem, sepet, sepia, sepią, sepie, sepię, sepii, sepij, sepio, sepom, sepów, sepsa, sepsą, sepsę, sepso, sepsy, seraj, serak, serca, serce, sercu, serek, serem, seria, serią, serie, serię, serii, serio, serir, serka, serki, serku, sermo, serom, serów, sersa, serso, sersu, serum, serwa, serwo, serwu, serwy, seryj, seryn, serze, serża, serżą, serże, serżę, serżo, serży, sesin, sesja, sesją, sesje, sesję, sesji, sesjo, sesyj, setce, setek, setem, seter, setka, setką, setkę, setki, setko, setna, setną, setne, setni, setny, setom, seton, setów, setup, sexem, sexie, sexom, sexów, sezam, sezon, sędzi, sękom, sęków, sępem, sępia, sępią, sępić, sępie, sępię, sępił, sępim, sępmy, sępom, sępot, sępów, sępże, sfenu, sfeny, sfera, sferą, sferę, sfero, sfery, sfora, sforą, sforę, sforo, sfory, sfruń, sfuka, shake, shaki, shift, shire, shoah, shoji, shopu, shopy, shoyu, siacy, siada, siadł, siadu, siady, siaka, siaką, siaki, siako, siale, siali, sialm, sialu, siała, siało, siały, siana, sianą, siane, siani, siano, sianu, siany, siara, siarą, siarę, siaro, siary, siata, siatą, siatę, siato, siaty, siądą, siądę, siądź, siągi, siągu, siąka, siąkł, siąpa, siąpi, siąść, sibui, sicie, siczą, sicze, siczy, sideł, sidhi, sidle, sidła, sidło, sidłu, sidol, sidur, sieci, siecz, siedź, siego, sieja, sieją, siejb, sieje, sieję, siejo, sieka, sieką, siekę, siekł, sieli, siema, siemu, sieni, sierp, sierr, siewu, siewy, siędę, sięga, sigma, sigmą, sigmę, sigmo, sigmy, sikać, sikaj, sikał, sikam, sikań, sikha, sikhu, sikhy, sikną, siknę, sikom, sikor, sików';
let words10 = 'siksa, siksą, siksę, sikso, siksy, silan, siląc, silem, sileń, silić, silił, silit, sille, silli, sillu, silmy, silna, silną, silne, silni, silny, silom, silos, silów, silże, siłom, siłuj, simca, simcą, simce, simcę, simco, simec, simek, simie, simir, simka, simką, simkę, simki, simko, simom, sinej, sinic, sinik, sinto, sinus, sinym, sińca, sińce, sińcu, siogi, siole, sioła, sioło, siołu, siorb, siorp, sipaj, sirat, sirot, sisal, sitak, sitar, sitek, sitem, sitka, sitki, sitko, sitku, sitom, sitów, situl, sitwa, sitwą, sitwę, sitwo, sitwy, siupu, siupy, siura, siwak, siwca, siwce, siwcu, siwej, siwek, siwią, siwić, siwię, siwił, siwka, siwką, siwkę, siwki, siwko, siwku, siwmy, siwym, siwże, sizal, sjena, sjeną, sjenę, sjeno, sjeny, sjest, skaci, skacz, skaje, skaju, skala, skalą, skald, skale, skalę, skali, skalo, skalp, skała, skałą, skałę, skało, skały, skaml, skand, skanu, skany, skarb, skarć, skarg, skarm, skarn, skarp, skarz, skarż, skata, skate, skaty, skaut, skaye, skayu, skaza, skazą, skazę, skazi, skazo, skazu, skazy, skaża, skażą, skaże, skażę, skądś, skąpa, skąpą, skąpe, skąpi, skąpo, skąpy, skecz, skeet, skejt, skiba, skibą, skibę, skibo, skiby, skier, skiff, skifu, skify, skina, skiną, skinę, skini, skinu, skiny, skipi, skipu, skipy, skira, skiry, skisł, skitu, skity, skiza, skizu, skizy, skjer, skjor, skląć, sklął, skleć, sklei, sklej, sklep, sklęć, sklną, sklnę, skład, skłam, skłąb, skłęb, skłon, skłoń, skłot, skłóć, skłuć, skłuj, skłuł, skner, sknoć, skocz, skoda, skodą, skodę, skodo, skody, skoki, skoku, skolą, skole, skolę, skoml, skona, skont, skonu, skony, skopa, skopć, skopi, skopy, skora, skorą, skorć, skore, skoro, skory, skosa, skosi, skosu, skosy, skota, skotu, skoty, skowa, skową, skowę, skowo, skowy, skóra, skórą, skórę, skóro, skóry, skraj, skraw, skrew, skręć, skręp, skręt, skrob, skroi, skrom, skroń, skrop, skroś, skróć, skrój, skróś, skrót, skrub, skrup, skryć, skryj, skrył, skrzą, skrze, skrzę, skrzy, skuch, skuci, skuda, skudl, skudy, skują, skuje, skuję, skula, skulą, skule, skulę, skuli, skull, skulu, skuła, skułą, skułę, skuło, skuły, skuma, skuna, skuny, skuom, skupi, skupu, skupy, skurw, skurz, skusi, skuta, skutą, skute, skuto, skuty, skuwa, skwar, skwaś, skwer, skwir, slabu, slaby, slajd, slams, slang, slash, sleep, slega, slegą, slegę, slegi, slego, slide, sling, slipu, slipy, slojd, slota, slotu, sloty, slump, slums, slupu, slupy, słaba, słabą, słabe, słabi, słabł, słabo, słaby, słali, słała, słało, słały, słana, słaną, słane, słani, słano, słany, sława, sławą, sławę, sławi, sławo, sławy, słępu, słępy, słocz, słodu, słody, słodź, słoik, słoja, słoje, słoju, słoma, słomą, słomę, słomo, słomy, słona, słoną, słone, słoni, słono, słony, słońc, słota, słotą, słotę, słoto, słoty, słowa, słowo, słowu, słowy, słódź, słuch, sługa, sługą, sługę, sługi, sługo, słupa, słupy, służą, służb, służę, służy, słych, słyną, słynę, słysz, smaga, smaki, smaku, smalą, smalę, smali, smalt, smard, smark, smaru, smary, smażą, smażę, smaży, smecz, smerd, smerf, smęcą, smęcę, smęci, smogi, śakti, ścian, ściąć, ściąg, ściął, ścibi, ściec, ścieg, ściek, ściel, ściem, ścień, ściep, ścier, ścież, ścięć, ściga, ścigą, ścigę, ścigi, ścigo, ścina, ścisk, ścisz, ściub, śladu, ślady, ślazu, ślazy, śląca, ślącą, ślące, ślący, śledź, ślemy, ślepa, ślepą, ślepe, ślepi, ślepł, ślepo, ślepy, ślesz, ślęcz, śliga, śligą, śligę, śligi, śligo, ślina, śliną, ślinę, ślini, ślino, śliny, ślipi, śliwa, śliwą, śliwę, śliwo, śliwy, śliza, ślizg, ślizu, ślizy, śliża, śliże, śliżu, śliży, ślubu, śluby, śluza, śluzą, śluzę, śluzo, śluzu, śluzy, śmego, śmemu, śmiać, śmiał, śmiań, śmiąc, śmich, śmieć, śmiej, śmiem, śmień, śmiga, śmigą, śmigę, śmigi, śmigo, śmych, śmymi, śniąc, śnica, śnicą, śnice, śnicę, śnico, śnicy, śnieć, śnieg, śnień, śnież, śnięć, śnili, śniła, śniło, śniły, śnimy, śniot, śnisz, śpiąc, śpiew, śpiki, śpiku, śpimy, śpisz, środa, środą, środę, środo, środy, śruba, śrubą, śrubę, śrubo, śruby, śruta, śrutą, śrutę, śruto, śrutu, śruty, śryzu, śryzy, śryże, śryżu, śryży, śudra, śudrą, śudrę, śudro, śudry, świat, świąd, świąt, świdw, świec, świeć, śwież, święć, świni, świra, świru, świry, świst, świta, świtą, świtę, świto, świtu, świty, tabak, tabel, tabes, tabla, tablą, table, tablę, tabli, tablo, tabor, tabul, tabun, tacce, tacek, tacet, tacha, tacht, tacie, tacka, tacką, tackę, tacki, tacko, tacom, tacos, tacyż, tacza, taela, taele, taeli, taelu, tafel, tafia, tafią, tafie, tafię, tafii, tafij, tafio, tafla, taflą, tafle, taflę, tafli, taflo, tafom, tafta, taftą, taftę, tafto, tafty, tagin, tagom, tagów, taguj, taiji, taili, taiła, taiło, taiły, taimy, taino, taisz, tajać, tajał, tajań, tając, tajeń, tajęż, tajga, tajgą, tajgę, tajgi, tajgo, tajmy, tajna, tajną, tajne, tajni, tajno, tajny, tajże, takaż, takąż, takce, takie, takim, takin, takir, takiż, takka, takką, takkę, takki, takko, takla, taklą, takle, taklę, takli, taklo, taklu, takom, takoż, taksa, taksą, taksę, taksi, takso, taksy, taktu, takty, takyr, także, talak, talar, talce, talek, talem, talia, talią, talib, talie, talię, talii, talij, talio, talka, talką, talkę, talki, talko, talku, te, ti, tu, talmi, talom, talon, talów, tałes, tamci, tamga, tamgą, tamgę, tamgi, tamgo, tamie, tamil, tamom, tamta, tamtą, tamte, tamto, tamuj, tamże, tance, tanek, tanem, tanga, tangą, tangę, tangi, tango, tangu, tania, tanią, tanie, tanim, tanin, tanio, tanit, tanka, tanką, tankę, tanki, tanko, tanku, tanom, tanów, tanto, tantr, tańca, tańce, tańcu, tańcz, tańsi, taonu, taony, tapas, taper, tapet, tapir, tapla, taran, taras, taraś, tarce, tarci, tarcz, tardo, tarek, tareł, tarem, targa, targi, targu, tarka, tarką, tarkę, tarki, tarko, tarle, tarli, tarła, tarło, tarłu, tarły, tarni, tarok, tarom, tarot, tarów, tarta, tartą, tarte, tartę, tarto, tarty, taruj, taryf, tarza, tarze, tasak, taser, taska, tasto, tasuj, tasza, taszą, tasze, taszę, taszo, taszy, taśma, taśmą, taśmę, taśmo, taśmy, tatar, tatce, tateł, tatem, tatka, tatką, tatkę, tatki, tatko, tatku, tatle, tatła, tatłą, tatłę, tatło, tatły, tatom, tatów, tatra, tatrą, tatrę, tatro, tatry, tatul, tatuń, tatuś, tawuł, tayuc, tąpać, tąpał, tąpań, tąpią, tąpie, tąpię, tąpmy, tąpną, tąpnę, tąpże, tchem, tchną, tchnę, tchom, tchów, teaki, teaku, teamu, teamy, teatr, tefem, teffu, teffy, tefie, tefom, tefów, teges, tegoż, teida, teidą, teidę, teido, teidy, teina, teiną, teinę, teino, teiny, teizm, tejże, tekke, tekom, teków, tekst, teksu, teksy, telep, telet, telex, telle, telli, tellu, telom, telos, temat, tembr, temid, tempa, tempo, tempu, temuż, tenis, tenit, tenna, tenno, tenny, tenor, tenri, tentu, tenty, tenut, tenże, teowa, teową, teowe, teowi, teowy, tepuj, terać, teraj, terał, teram, terań, teras, teraz, terbu, terby, terem, teren, terma, termą, termę, termo, termu, termy, terna, terno, ternu, terom, terów, teruj, teryn, terze, tesla, teslą, tesle, teslę, tesli, teslo, testa, testo, testu, testy, teter, tetra, tetrą, tetrę, tetro, tetry, teurg, texem, texie, texom, texów, tezie, tezom, tęchł, tęcza, tęczą, tęcze, tęczę, tęczo, tęczy, tędzy, tęgie, tęgim, tępak, tępej, tępią, tępić, tępię, tępił, tępmy, tępol, tępot, tępsi, tępym, tępże, tętna, tętni, tętno, tętnu, tężał, tężąc, tężca, tężce, tężcu, tężec, tężeć, tężej, tężeń, tężmy, tężni, tężsi, tężyć, tężył, tężże, thema, themą, themę, themo, themy, theta, thetą, thetę, theto, thety, tiara, tiarą, tiarę, tiaro, tiary, tibia, tibią, tibie, tibię, tibii, tibij, tibio, tigra, tigrą, tigrę, tigro, tigry, tikom, tików, tilak, tilda, tildą, tildę, tildo, tildy, tilit, timag, timbr, timer, tinol, tinta, tintą, tintę, tinto, tinty, tiole, tioli, tiolu, tipsa, tipsy, tirem, tiret, tirli, tirom, tirów, tirze, titit, titru, titry, tiule, tiuli, tiulu, tiurm, tkacz, tkają, tkali, tkalń, tkała, tkało, tkały, tkamy, tkana, tkaną, tkane, tkani, tkano, tkany, tkasz, tknąć, tknął, tknie, tknij, tkwią, tkwić, tkwię, tkwij, tkwił, tlała, tlało, tlały, tlano, tląca, tlącą, tlące, tlący, tleją, tleje, tleję, tleli, tleni, tlenu, tleny, tlili, tliła, tliło, tliły, tlimy, tlisz, tlono, tłach, tłami, tłamś, tłoce, tłocz, tłoka, tłoką, tłokę, tłoki, tłoko, tłoku, tłucz, tłuka, tłuką, tłukę, tłuki, tłukł, tłuku, tłumi, tłumu, tłumy, tłuść, tmeza, tmezą, tmezę, tmezo, tmezy, tnąca, tnącą, tnące, tnący, tniak, toast, tobie, tobok, tobol, tobół, tobym, tobyś, toczą, toczę, toczy, toćby, todze, tofan, toffi, togom, toina, toiną, toinę, toino, toiny, tojad, tojom, tokaj, token, tokom, toków, tokuj, tolar, toled, tolos, tołpi, tołub, tomat, tomce, tomek, tomem, tomie, tomik, tomka, tomką, tomkę, tomki, tomko, tomom, tomów, tonaż, tonąc, tonąć, tonął, tonce, tonda, tondo, tondu, tonek, tonem, toner, tonfa, tonfą, tonfę, tonfo, tonfy, tonga, tongą, tongę, tongi, tongo, tonią, tonie, tonik, tonka, tonką, tonkę, tonki, tonko, tonom, tonów, tonuj, tonus, tońmi, tońmy, tońże, topaz, topce, topek, topem, topią, topić, topie, topię, topik, topił, topka, topką, topkę, topki, topko, tople, topli, toplu, topmy, topni, topom, topos, topól, topór, topów, topże, toran, torba, torbą, torbę, torbo, torby, toreb, torem, torfu, torfy, torii, torom, toron, toros, torów, torsu, torsy, tortu, torty, toruj, torus, torys, toryt, torze, tosta, tosto, tostu, tosty, totek, totem, toteż, totka, totki, totku, totus, touru, toury, towar, tower, towos, towot, toyot, tożby, tracą, tracę, trach, traci, track, tracz, trafi, trafo, trafu, trafy, traga, tragi, traka, traki, trakt, traku, trale, trału, trały, trama, tramą, tramę, tramo, tramp, tramu, tramy, trans, tranu, trany, trapa, trapą, trapę, trapi, trapo, trapu, trapy, trasa, trasą, trasę, trash, traso, trasu, trasy, trata, tratą, tratę, trato, tratw, traty, traum, trawa, trawą, trawę, trawi, trawl, trawo, trawy, trąba, trąbą, trąbę, trąbi, trąbo, trąby, trąca, trącą, trące, trącę, trąci, trący, trądu, trądy, trefi, trefl, trefu, trefy, treki, treku, trele, treli, trelu, trema, tremą, tremę, tremo, tremu, tremy, trend, trent, trenu, treny, trepa, trepy, tresa, tresą, tresę, treso, tresy, treść, tretu, trety, triad, triak, trial, trias, trick, triem, trier, triki, triku, triod, triol, triom, trioz, triów, tripu, tripy, troch, troci, trocz, troić, troił, troją, troje, troję, troka, troki, troku, troll, tromp, tronu, trony, tropi, tropu, tropy, trosk, trója, tróją, trójc, tróje, tróję, trójo, truci, truck, trudu, trudy, trudź, trują, truje, truję, trukw, truli, truła, truło, truły, trumf, trupa, trupą, trupę, trupi, trupo, trupy, trusi, trust, truta, trutą, trute, truto, truty, trwać, trwaj, trwał, trwam, trwań, trwoń, trwóg, trwóż, tryba, trybą, trybę, trybo, trybu, tryby, tryka, tryki, tryku, tryle, tryli, trylu, trymu, trymy, trypa, trypą, trypę, trypo, trypy, trysk, trytu, tryty, tryzn, trząś, trzeb, trzeć, trzej, trzem, trzep, trzew, trzęś, trzon, trzos, trzód, trzyj, tsuba, tsubą, tsubę, tsubo, tsuby, tsuga, tsugą, tsugę, tsugi, tsugo, tubce, tubek, tubem, tubie, tubka, tubką, tubkę, tubki, tubko, tubom, tubów, tubus, tucie, tuczą, tucze, tuczę, tuczu, tuczy, tufem, tufie, tufit, tufom, tufów, tugaj, tugra, tugrą, tugrę, tugro, tugry, tugun, tujom, tukan, tukom, tuków, tukum, tuląc, tulei, tulem, tuleń, tulić, tulił, tulmy, tulom, tulów, ubarw, ubawi, ubawu, ubawy, ubądź, ubecy, ubeka, ubeki, ubeku, ubędą, ubędę, ubici, ubiec, ubiel, ubija, ubiją, ubije, ubiję, ubili, ubiła, ubiło, ubiły, ubiór, ubita, ubitą, ubite, ubito, ubity, ubkom, ubków, ubliż, ubłoć, ubocz, ubodą, ubodę, ubodź, uboga, ubogą, ubogi, ubogo, uboje, uboju, ubola, ubole, uboli, ubolu, ubożą, ubożę, uboży, ubódł, ubódź, ubóść, ubrać, ubrał, ubrań, ubrda, ubrus, ubyli, ubyła, ubyło, ubyły, ubyto, ubywa';
let words11 = 'ucapi, uchem, uchla, uchom, uchyb, uchyl, uciap, uciąć, uciąg, uciął, uciec, ucięć, ucina, ucios, ucisk, ucisz, ucząc, uczci, uczeń, uczep, uczmy, uczni, uczta, ucztą, ucztę, uczto, uczty, uczuć, uczuj, uczul, uczuł, uczyć, uczył, uczyń, uczże, udach, udają, udaje, udaję, udali, udała, udałą, udałe, udało, udały, udami, udamy, udana, udaną, udane, udani, udano, udany, udarć, udarł, udaru, udary, udasz, udecy, udeka, udeki, udeku, uderz, udkom, udław, udnic, udoić, udoił, udoją, udoje, udoję, udoju, udowa, udową, udowe, udowi, udowy, udrap, udręk, udrom, udrów, udrze, udupi, udusi, udzie, udźca, udźce, udźcu, uedom, ufają, ufali, ufała, ufało, ufały, ufamy, ufano, ufasz, ufici, ufita, ufitą, ufitę, ufito, ufity, ufnal, ufnej, ufnie, ufnym, ugada, ugasi, ugiąć, ugiął, ugier, ugięć, ugina, ugnie, ugnij, ugnoi, ugnój, ugoda, ugodą, ugodę, ugodo, ugody, ugoru, ugory, ugość, ugódź, ugrab, ugrać, ugraj, ugrał, ugram, ugrań, ugrem, ugrom, ugrów, ugryź, ugrze, uhlom, uhuru, uiści, ujada, ujadą, ujadę, ujadł, ujaić, ujaił, ujają, ujaję, ujedz, ujedź, ujemy, ujesz, ujeść, ujęci, ujęli, ujęła, ujęło, ujęły, ujęta, ujętą, ujęte, ujęto, ujęty, ujmie, ujmij, ujmom, ujmuj, ujrzą, ujrzę, ujrzy, ujscy, ujska, ujską, ujski, ujsku, ukarz, ukazu, ukazy, ukażą, ukaże, ukażę, ukąsi, ukisi, ukisł, uklei, uklej, uklep, uklęk, układ, ukłon, ukłoń, ukłuć, ukłuj, ukłuł, uknuć, uknuj, uknuł, ukoić, ukoił, ukoją, ukoję, ukolą, ukole, ukolę, ukopu, ukopy, ukorz, ukosa, ukosi, ukosu, ukosy, ukórz, ukraj, ukraś, ukres, ukręć, ukroi, ukrop, ukróć, ukrój, ukryć, ukryj, ukrył, ukuci, ukują, ukuje, ukuję, ukuli, ukuła, ukuło, ukuły, ukuta, ukutą, ukute, ukuto, ukuty, ukuwa, ukwap, ukwas, ukwaś, ulach, ulali, ulała, ulało, ulały, ulama, ulamą, ulamę, ulami, ulamo, ulamy, ulana, ulaną, ulane, ulani, ulano, ulany, ulata, ulazł, ulaże, ulażu, ulaży, ulągł, uląkł, uldze, ulecą, ulecę, uleci, ulecz, ulega, uległ, uleją, uleje, uleję, uleli, ulema, ulemą, ulemę, ulemi, ulemo, ulemy, ulena, uleną, ulenę, uleno, uleny, ulepi, ulepu, ulepy, ulewa, ulewą, ulewę, ulewo, ulewy, ulezą, ulezę, uleźć, uleżą, uleżę, uleży, ulęga, ulęgł, ulgom, ulica, ulicą, ulice, ulicę, ulico, ulicy, ulika, uliki, uliku, uliżą, uliże, uliżę, ulmin, ulotu, uloty, ulowa, ulową, ulowe, ulowi, ulowy, ultim, ulubi, ulula, ulwie, ulwom, ulżeń, ulżyć, ulżyj, ulżył, uładź, ułana, ułani, ułany, ułapi, ułatw, ułowi, ułożą, ułożę, ułoży, ułuda, ułudą, ułudę, ułudo, ułudy, ułusu, ułusy, umaić, umaił, umaja, umają, umaję, umarć, umarł, umażą, umaże, umażę, umącz, umbem, umbie, umbom, umbra, umbrą, umbrę, umbro, umbry, umęcz, umiak, umiał, umiar, umieć, umiej, umiem, umień, umila, umilą, umilę, umili, umizg, umkną, umknę, umłóć, ummie, ummom, umocz, umoru, umory, umość, umowa, umową, umowę, umowo, umowy, umórz, umówi, umrze, umyci, umyją, umyje, umyję, umyka, umyli, umyła, umyło, umyły, umysł, umyśl, umyta, umytą, umyte, umyto, umyty, umywa, uncja, uncją, uncje, uncję, uncji, uncjo, uncyj, unden, undyn, unerw, unica, unici, unieś, unika, uniki, uniku, uniom, unita, unitą, unitę, unito, unitu, unity, unizm, uniża, unosi, unosu, unosy, uosób, uowej, uowym, upada, upadł, upadu, upady, upaja, upala, upalą, upale, upalę, upali, upału, upały, uparć, uparł, upasa, upasą, upasę, upasł, upasu, upasy, upaść, upcha, upędu, upędy, upiąć, upiął, upici, upiec, upiek, upięć, upija, upiją, upije, upiję, upili, upiła, upiło, upiły, upina, upiór, upita, upitą, upite, upito, upity, upleć, upłaz, upłyń, upływ, upnie, upnij, upoić, upoił, upoją, upoje, upoję, upoju, upora, uporu, upory, uprać, uprał, uprań, upraw, upraż, uproś, uprze, upupi, upust, upuść, uracz, uradź, urala, urale, urali, uralu, uranu, urany, uraza, urazą, urazę, urazi, urazo, urazu, urazy, uraża, urażą, urażę, urąga, urągi, urągu, urdem, urdom, urdów, ureaz, ureid, urena, ureną, urenę, ureno, ureny, ureus, urguj, urial, urlop, urnie, urnom, urobi, urocz, uroda, urodą, urodę, urodo, urody, urodź, uroić, uroił, uroją, uroję, uroki, uroku, uroni, uródź, urósł, uróść, ursol, urson, ursus, urtyt, urupa, urutu, urwać, urwał, urwań, urwie, urwij, urwis, uryna, uryną, urynę, uryno, uryny, urywa, urząd, urzec, urzet, urzną, urznę, urzyn, urżną, urżnę, usadź, usiać, usiał, usiań, usiej, uskok, uskub, usłać, usłał, usłań, usług, usłuż, usmaż, usmol, usmoł, usmól, usnąć, usnął, usnuć, usnuj, usnuł, usrać, usraj, usrał, usram, usrań, ustać, ustak, ustal, ustał, ustań, ustaw, ustąp, ustęp, ustna, ustną, ustne, ustni, ustny, ustoi, ustom, ustój, usuną, usunę, ususu, ususy, ususz, usuwa, usuwu, usuwy, usypu, usypy, uszak, uszek, uszka, uszki, uszko, uszku, uszli, uszła, uszło, uszły, uszna, uszną, uszne, uszni, uszny, uszom, uszów, uszyć, uszyj, uszył, uśliń, uśnie, uśnij, uśpią, uśpić, uśpię, uśpij, uśpił, uświń, utach, utaić, utaił, utaja, utają, utaję, utami, utarć, utarg, utarł, utkać, utkaj, utkał, utkam, utkań, utkną, utknę, utkwi, utleń, utłuc, utnie, utnij, utocz, utoną, utonę, utopi, utrać, utraf, utrat, utrąć, utref, utrup, utrze, utucz, utula, utulą, utulę, utuli, utwór, utyci, utyją, utyje, utyję, utyka, utyki, utyku, utyli, utyła, utyło, utyły, utyra, utyta, utytą, utyte, utyto, utyty, uwaga, uwagą, uwagę, uwagi, uwago, uwala, uwalą, uwale, uwalę, uwali, uwału, uwały, uwarz, uważa, uwędź, uwiąd, uwiąż, uwici, uwieś, uwieź, uwięź, uwija, uwiją, uwije, uwiję, uwili, uwiła, uwiło, uwiły, uwiną, uwinę, uwita, uwitą, uwite, uwito, uwity, uwodź, uwola, uwole, uwoli, uwolu, uwozi, uwożą, uwożę, uwódź, uwroć, uzans, uzdom, uziem, uziom, uznać, uznaj, uznał, uznam, uznań, uznoi, uznój, uzusu, uzusy, uzwoi, uzwój, uzysk, użala, użalą, użalę, użali, użarć, użarł, użera, użęci, użęli, użęła, użęło, użęły, użęta, użętą, użęte, użęto, użęty, użnie, użnij, użreć, użryj, użyci, użycz, użyją, użyje, użyję, użyli, użyła, użyło, użyły, użyna, użyta, użytą, użyte, użyto, użyty, używa, wabia, wabią, wabić, wabie, wabię, wabik, wabił, wabiu, wabmy, wabże, wacha, wachą, wachę, wacho, wacht, wachy, wacie, wacik, wadem, wader, wadia, wadis, wadom, wadów, wadzą, wadze, wadzę, wadzi, wafel, wafla, wafle, wafli, waflu, wagin, wagom, wagon, wahać, wahaj, wahał, waham, wahań, wahną, wahnę, wajch, wakan, wakat, wakua, wakuj, walać, walaj, walał, walam, walań, waląc, walca, walce, walcu, walcz, walec, walem, waleń, walet, walić, walid, walił, walim, walin, waliz, walka, walką, walkę, walki, walko, walmy, walna, walną, walne, walnę, walni, walny, walom, walor, walów, walut, walże, wałcz, wałek, wałem, wałka, wałki, wałku, wałom, wałów, wałuj, wampa, wampy, wamsu, wamsy, wanad, wanda, wandą, wandę, wando, wandy, wanem, wanga, wangą, wangę, wangi, wango, wania, wanią, wanie, wanię, waniu, wanna, wanną, wannę, wanno, wanny, wanom, wanów, wanta, wantą, wantę, wanto, wanty, wańce, wańka, wańką, wańkę, wańki, wańko, wapna, wapni, wapno, wapnu, wapor, waran, warci, warcz, warem, warga, wargą, wargę, wargi, wargo, warna, warną, warnę, warno, warny, warom, warów, warsu, warsy, warta, wartą, warte, wartę, warto, warty, warug, waruj, warwa, warwą, warwę, warwo, warwy, warzą, warze, warzę, warzy, wasal, wasąg, wasza, waszą, wasze, waści, waśni, watah, watce, watek, watem, watka, watką, watkę, watki, watko, watom, watów, watra, watrą, watrę, watro, watry, watta, watty, watuj, wawel, wazce, wazek, wazie, wazka, wazką, wazkę, wazki, wazko, wazom, wazon, ważąc, ważce, ważcy, ważek, ważeń, ważka, ważką, ważkę, ważki, ważko, ważmy, ważna, ważną, ważne, ważni, ważny, ważyć, ważył, ważże, wącha, wądół, wągra, wągry, wąsal, wąscy, wąsem, wąsie, wąsik, wąska, wąską, wąski, wąsko, wąsom, wąsów, wątek, wątki, wątku, wątle, wątli, wątła, wątłą, wątłe, wątło, wątły, wątor, wątpi, wąwóz, wbici, wbiec, wbija, wbiją, wbije, wbiję, wbili, wbiła, wbiło, wbiły, wbita, wbitą, wbite, wbito, wbity, wbrew, wcale, wchód, wciąć, wciąg, wciął, wciąż, wciec, wciel, wcięć, wcina, wcios, wciry, wcisk, wczas, wczep, wczuć, wczuj, wczuł, wdają, wdaje, wdaję, wdali, wdała, wdało, wdały, wdamy, wdana, wdaną, wdane, wdani, wdano, wdany, wdarć, wdarł, wdasz, wdech, wdowa, wdową, wdowę, wdowi, wdowo, wdowy, wdrap, wdrąż, wdroż, wdrób, wdróż, wdusi, webeł, webem, weber, webie, weble, webła, webło, webłu, webom, webów, wecie, wecka, wecki, wecku, wecuj, wedet, wedle, wedrą, wedrę, wedut, wegan, wegna, wegną, wegnę, wejdą, wejdę, wejdź, wejść, wekom, weków, wekuj, welin, welon, welur, wełen, wełna, wełną, wełnę, wełno, wełny, wenie, wenom, wenta, wentą, wentę, wento, wenty, wenus, wepną, wepnę, weprą, weprę, werki, werku, werpu, werpy, wersu, wersy, werwa, werwą, werwę, werwo, werwy, wesel, wesół, wessą, wessę, wessi, wetem, wetka, wetną, wetnę, wetom, wetów, wetrą, wetrę, wetuj, wetul, wewte, wezmą, wezmę, wezwą, wezwę, wezyr, weźmy, weźże, weżną, weżnę, weżrą, weżre, weżrę, węchu, węchy, wędce, wędek, wędka, wędką, wędkę, wędki, wędko, wędom, wędzą, wędzę, wędzi, węgar, węgla, węglą, węgle, węglę, węgli, węglu, węgła, węgły, węszą, węszę, węszy, węzeł, węzie, węzin, węzła, węzły, węzom, węźle, wężem, wężom, wężów, wężsi, wężyk, wgapi, wgiąć, wgiął, wgięć, wgina, wgląd, wgłąb, wgłęb, wgoni, wgrać, wgraj, wgrał, wgram, wgrań, wgryź, wiali, wiała, wiało, wiały, wiana, wianą, wiane, wiani, wiano, wianu, wiany, wiara, wiarą, wiarę, wiaro, wiary, wiata, wiatą, wiatę, wiato, wiatr, wiaty, wiąch, wiądł, wiądu, wiądy, wiązł, wiązu, wiązy, wiążą, wiąże, wiążę, wiccy, wicek, wicem, wichr, wicia, wicią, wicie, wicin, wiciu, wicka, wicką, wicki, wicku, wicom, wiców, widać, widea, wideł, widem, wideo, widet, wideu, widia, widią, widie, widię, widii, widio, widły, widma, widmo, widmu, widna, widną, widne, widni, widno, widny, widok, widom, widów, widuj, widyj, widza, widzą, widze, widzę, widzi, widzu, wiece, wiech, wiecu, wiedz, wiedź, wieja, wieją, wieje, wieję, wiejo, wieka, wieki, wieko, wieku, wielb, wiele, wieli, wielu, wiemy, wierć, wierz, wiesz, wieść, wiewa, wiewu, wiewy, wieźć, wieża, wieżą, wieże, wieżę, wieżo, wieży, więzi, więzy, więźb, więżą, więżę, wigna, wigną, wignę, wigno, wigny, wigom, wigoń, wigor, wigów, wihar, wijąc, wijem, wijmy, wijom, wijów, wijże, wikła, wiktu, wikty, wilca, wilce, wilcu, wilcy, wilec, wilga, wilgą, wilgę, wilgi, wilgł, wilgo, wilia, wilią, wilie, wilię, wilii, wilij, wilio, wilka, wilki, wilku, willa, willą, wille, willę, willi, willo, wilżą, wilżę, wilży, wiłam, wiłaś, wiłby, wiłem, wiłeś, wiłom, wiłów, winda, windą, windę, windo, windy, winek, winem, winią, winić, winie, winię, winił, winka, winko, winku, winna, winną, winne, winni, winno, winny, winom, winta, winty, winyl, wińca, wińce, wińcu, wińmy, wińsk, wińże, wioch, wiodą, wiodę, wiola, wiolą, wiole, wiolę, wioli, wiolo, wioną, wionę, wiozą, wiozę, wiódł, wióra, wióry, wiózł, wiraż, wirek, wirem, wirka, wirki, wirku, wirom, wiroz, wirów, wiruj, wirus, wirze, wisem, wisie, wisom, wisów, wista, wistr, wistu, wisty, wisus, wiszą, wiszę, wiśmy, wiśni, wiśta, wiśże, witać, witaj, witał, witam, witań, witce, witej, witek, witeź, witka, witką, witkę, witki, witko, witwa, witwą, witwę, witwo, witwy, witym, witza, witze, witzu, wiwat, wiwer, wizaż, wizgi, wizgu, wizie, wizja, wizją, wizje, wizję, wizji, wizjo, wizom, wizon, wizuj, wizur, wizyj, wizyr, wizyt, wjadą, wjadę, wjazd, wjedź, wklei, wklej, wklep, wkład, wkłuć, wkłuj, wkłuł, wkolą, wkole, wkolę, wkoło, wkopu, wkopy, wkraj, wkręć, wkręt, wkroi, wkrop, wkrój, wkuci, wkują, wkuje, wkuję, wkula, wkulą, wkulę, wkuli, wkuła, wkuło, wkuły, wkupi, wkupu, wkupy, wkurw, wkurz, wkuta, wkutą, wkute, wkuto, wkuty, wkuwa, wlali, wlała, wlało, wlały, wlana, wlaną, wlane, wlani, wlano, wlany, wlazę, wlazł, wlecą, wlecę, wleci, wlecz, wleją, wleje, wleję, wleką, wlekę, wlekł, wleli, wlepi, wlewa, wlewu, wlewy, wlezą, wlezę, wleźć';
let words12 = 'wlicz, wloką, wlokę, wlotu, wloty, wlókł, włada, władz, włamu, włamy, włazi, włazu, włazy, włażą, włażę, włącz, włoce, włoka, włoką, włokę, włoki, włoko, włoku, włomu, włomy, włosa, włosi, włosy, włość, włożą, włożę, włoży, włóce, włócz, włóka, włóką, włókę, włóki, włóko, włóku, włósi, włupi, wmieć, wmieś, wmota, wmówi, wmusi, wmyci, wmyją, wmyje, wmyję, wmyka, wmyli, wmyła, wmyło, wmyły, wmyśl, wmyta, wmytą, wmyte, wmyto, wmyty, wnerw, wnęca, wnęcą, wnęce, wnęcę, wnęci, wnęka, wnęką, wnękę, wnęki, wnęko, wnieś, wnika, wnosi, wnuce, wnuka, wnuką, wnukę, wnuki, wnuko, wnuku, wnurz, wnusi, wnyka, wnyki, wnyku, woale, woali, woalu, wobec, wobeł, woble, wobła, wobłą, wobłę, wobło, wobły, wodna, wodną, wodne, wodni, wodny, wodom, wodór, woduj, wodza, wodzą, wodze, wodzę, wodzi, wodzo, wodzu, wodzy, wojak, wojaż, wojem, wojen, wojna, wojną, wojnę, wojno, wojny, wojom, wojów, wojsk, wojuj, wokal, wokom, wokół, woków, wolak, wolał, woląc, wolca, wolce, wolcu, wolec, woleć, wolej, wolem, woleń, wolim, wolin, wolna, wolną, wolne, wolni, wolno, wolny, wolom, wolta, woltą, woltę, wolto, wolty, wolut, wołać, wołaj, wołał, wołam, wołań, wołek, wołem, wołga, wołgą, wołgę, wołgi, zabaw, zabić, zabij, zabił, zabój, zaból, zabór, zabul, zaceń, zacna, zacną, zacne, zacni, zacny, zaćma, zaćmą, zaćmę, zaćmi, zaćmo, zaćmy, zaćpa, zadać, zadaj, zadał, zadam, zadań, zadąć, zadął, zadba, zadek, zadem, zader, zadęć, zadka, zadki, zadku, zadmą, zadmę, zadni, zadom, zadów, zadra, zadrą, zadrę, zadro, zadry, zadum, zaduś, zadym, zafra, zafrą, zafrę, zafro, zafry, zagai, zagaj, zagap, zagaś, zagiń, zagna, zagną, zagnę, zagoi, zagon, zagoń, zagój, zagra, zagub, zaira, zairy, zajad, zając, zająć, zajął, zajda, zajdą, zajdę, zajdo, zajdy, zajdź, zajeb, zajem, zajęć, zajmą, zajmę, zajmu, zajmy, zajob, zajść, zakał, zakat, zakaz, zakaź, zakaż, zakąś, zakip, zakiś, zakol, zakon, zakop, zakos, zakoś, zakpi, zakuć, zakuj, zakuł, zakup, zalać, zalał, zalań, zaląc, zalec, zaleć, zalej, zalep, zaleś, zalet, zalew, zaleź, zależ, zaliż, załam, załap, załaź, załga, załka, załom, załóg, załóż, załup, załżą, załże, załżę, zamaż, zamąć, zamek, zamęt, zamia, zamią, zamie, zamię, zamii, zamij, zamio, zamka, zamki, zamku, zamów, zamrą, zamrę, zamsz, zamul, zanan, zandr, zanęć, zanęt, zanik, zanim, zaniż, zanni, zanoś, zanuć, zaorz, zapad, zapal, zapał, zapas, zapaś, zapęd, zapić, zapij, zapił, zapis, zapną, zapnę, zapoć, zapon, zapól, zapór, zaprą, zaprę, zapyl, zarań, zaraz, zaraź, zarąb, zareb, zarib, zaroi, zaroś, zarób, zaród, zarój, zarwą, zarwę, zaryb, zaryć, zaryj, zarył, zaryp, zarys, zarżą, zarżę, zarży, zasad, zasap, zasęp, zasie, zasię, zasil, zasną, zasnę, zasób, zasól, zaspa, zaspą, zaspę, zaspo, zaspy, zasra, zassą, zassę, zasuń, zasuw, zasyć, zasyf, zasyp, zaśby, zaślą, zaśle, zaślę, zaśpi, zatai, zataj, zatem, zatęż, zatka, zatlą, zatlę, zatli, zatną, zatnę, zatok, zatoń, zatop, zator, zatrą, zatrę, zatul, zatup, zaufa, zaumu, zaumy, zawad, zawal, zawał, zaważ, zawdy, zawęź, zawii, zawij, zawiń, zawis, zawoź, zawód, zawój, zawór, zawóź, zawrą, zawre, zawrę, zawyć, zawyj, zawył, zawyż, zazen, zazęb, zazna, zazul, zaźga, zażec, zażeż, zażga, zażgą, zażgę, zażrą, zażre, zażrę, zażyć, zażyj, zażył, zażże, ząbek, ząbka, ząbki, ząbku, zbada, zbawi, zbądź, zbecz, zbędą, zbędę, zbici, zbiec, zbieg, zbieś, zbija, zbiją, zbije, zbiję, zbili, zbiła, zbiło, zbiły, zbiór, zbira, zbiry, zbita, zbitą, zbite, zbito, zbity, zbliż, zbocz, zboin, zboru, zbory, zboża, zboże, zbożu, zbója, zbóje, zbóju, zbroi, zbrój, zbryl, zbudź, zbuja, zbuka, zbuki, zbuku, zburz, zbyci, zbyli, zbyła, zbyło, zbyły, zbyta, zbytą, zbyte, zbyto, zbytu, zbyty, zbywa, zdają, zdaje, zdaję, zdali, zdała, zdało, zdały, zdamy, zdana, zdaną, zdane, zdani, zdano, zdany, zdarć, zdarł, zdarz, zdasz, zdąża, zdążą, zdążę, zdąży, zdeba, zdebi, zdeby, zdejm, zderz, zdjąć, zdjął, zdjęć, zdław, zdobi, zdoić, zdoił, zdoją, zdoję, zdoła, zdrad, zdrap, zdrój, zdrów, zduna, zduni, zduny, zdusi, zdwoi, zdwój, zdysz, zdzir, zdziw, zdżar, zebra, zebrą, zebrę, zebro, zebry, zecer, zecie, zedrą, zedrę, zefir, zegar, zegna, zegną, zegnę, zejdą, zejdę, zejdź, zejść, zekom, zeków, zelom, zelów, zeluj, zelżą, zelżę, zelży, zełga, zełżą, zełże, zełżę, zemną, zemnę, zemrą, zemrę, zemst, zenan, zendr, zenem, zenie, zenit, zenom, zenów, zenza, zenzą, zenzę, zenzo, zenzy, zepną, zepnę, zereb, zerem, zerib, zerka, zerom, zeruj, zerwa, zerwą, zerwę, zerwo, zerwy, zerze, zesra, zesuń, zesyp, ześlą, ześle, ześlę, zetem, zetlą, zetlę, zetli, zetną, zetnę, zetom, zetor, zetów, zetrą, zetrę, zeusa, zeusy, zewem, zewie, zewom, zewów, zewrą, zewrę, zezem, zezie, zezik, zezna, zezom, zezów, zezuć, zezuj, zezuł, zeźlą, zeźlę, zeźli, zeżną, zeżnę, zeżrą, zeżre, zeżrę, zębak, zębca, zębce, zębcu, zębem, zębie, zębin, zębna, zębną, zębne, zębni, zębny, zębom, zębów, zęzie, zęzom, zgada, zgadł, zgaga, zgagą, zgagę, zgagi, zgago, zgala, zgani, zgapi, zgarb, zgaru, zgary, zgasi, zgasł, zgęść, zgiąć, zgiął, zgięć, zgina, zginą, zginę, zgleb, zgład, zgłąb, zgłęb, zgłoś, zgnać, zgnaj, zgnał, zgnam, zgnań, zgnęb, zgnić, zgnij, zgnił, zgnoi, zgnój, zgoda, zgodą, zgodę, zgodo, zgody, zgoić, zgoił, zgoją, zgoję, zgolą, zgolę, zgoli, zgoła, zgoni, zgonu, zgony, zgódź, zgrab, zgrać, zgrai, zgraj, zgrał, zgram, zgrań, zgred, zgręz, zgrom, zgróz, zgrub, zgryw, zgryz, zgryź, zguba, zgubą, zgubę, zgubi, zgubo, zguby, zgurb, zhańb, zhasa, zhula, ziają, ziaje, ziaję, ziali, ziała, ziało, ziały, ziano, ziarn, ziąbł, ziąbu, ziąby, zieją, zieje, zieję, ziela, ziele, zieli, zielu, ziemi, ziewa, ziewu, ziewy, zięba, ziębą, ziębę, ziębi, ziębl, ziębł, ziębo, zięby, zijad, zikra, zikry, ziłem, ziłom, ziłów, zimie, zimna, zimną, zimne, zimni, zimno, zimnu, zimny, zimom, zimuj, zineb, zinem, zinie, zinom, zinów, ziole, zioła, zioło, ziołu, zioną, zionę, zipać, zipał, zipań, zipem, zipią, zipie, zipię, zipmy, zipną, zipnę, zipom, zipów, zipże, ziram, zisem, zisie, zisom, zisów, ziści, zjada, zjadą, zjadę, zjadł, zjara, zjawa, zjawą, zjawę, zjawi, zjawo, zjawy, zjazd, zjedz, zjedź, zjemy, zjesz, zjeść, zjeża, zjeżą, zjeżę, zjeży, zlali, zlała, zlało, zlały, zlana, zlaną, zlane, zlani, zlano, zlany, zlata, zlazę, zlazł, zląkł, zleca, zlecą, zlecę, zleci, zległ, zleją, zleje, zleję, zleli, zlepi, zlepu, zlepy, zlewa, zlewą, zlewę, zlewo, zlewu, zlewy, zlezą, zlezę, zleźć, zleżą, zleżę, zleży, zlicz, zlisi, zliżą, zliże, zliżę, zlotu, zloty, złach, zładu, złady, złaja, złają, złaje, złaję, złajo, złami, złasi, złazi, złazu, złazy, złażą, złażę, złącz, złego, złemu, złocą, złocę, złoci, złogi, złogu, złoić, złoił, złoją, złoję, złomu, złomy, złość, złota, złotą, złote, złoto, złotu, złoty, złowi, złoża, złożą, złoże, złożę, złożu, złoży, złuda, złudą, złudę, złudo, złudy, złudź, złupi, złych, złymi, zmaca, zmaga, zmami, zmarć, zmarł, zmaza, zmazą, zmazę, zmazo, zmazy, zmażą, zmaże, zmażę, zmąca, zmącą, zmącę, zmąci, zmełł, zmęcz, zmian, zmiąć, zmiął, zmieć, zmiel, zmień, zmięć, zmięk, zmłóć, zmocz, zmogą, zmogę, zmora, zmorą, zmorę, zmoro, zmory, zmota, zmowa, zmową, zmowę, zmowo, zmowy, zmoże, zmógł, zmókł, zmórz, zmówi, zmrok, zmroź, zmróź, zmruż, zmusi, zmyci, zmydl, zmyją, zmyje, zmyję, zmyka, zmyla, zmylą, zmylę, zmyli, zmyła, zmyło, zmyły, zmysł, zmyśl, zmyta, zmytą, zmyte, zmyto, zmyty, zmywa, zmywu, zmywy, znacz, znade, znają, znajd, znaki, znaku, znale, znali, znalu, znała, znało, znały, znamy, znana, znaną, znane, znani, znano, znany, znasz, znęca, znęcą, znęcę, znęci, znęka, znicz, znieś, znika, znikł, zniża, zniżą, zniżę, zniży, znoić, znoił, znoją, znoje, znoję, znoju, znosi, znosu, znosy, znowu, znudź, znużą, znużę, znuży, zoczą, zoczę, zoczy, zofii, zoila, zoile, zoili, zoilu, zoizm, zolem, zolom, zolów, zołza, zołzą, zołzę, zołzo, zołzy, zombi, zonda, zondą, zondę, zondo, zondy, zonie, zonom, zooid, zooma, zoomu, zoomy, zorać, zorał, zorań, zorba, zorbą, zorbę, zorbo, zorby, zoruj, zorza, zorzą, zorze, zorzę, zorzo, zorzy, zośce, zośka, zośką, zośkę, zośki, zośko, zowąd, zowią, zowie, zowię, zozul, zradl, zrani, zraza, zrazi, zrazu, zrazy, zraża, zrażą, zrażę, zredl, zrębu, zręby, zrobi, zroby, zrodź, zrosi, zrost, zródź, zrósł, zróść, zruca, zrucą, zrucę, zruci, ździr, źgają, źgali, źgała, źgało, źgały, źgamy, źgana, źganą, źgane, źgani, źgano, źgany, źgasz, źgnąć, źgnął, źgnie, źgnij, źrebi, źrebu, źreby, żabce, żabci, żabek, żabia, żabią, żabie, żabim, żabka, żabką, żabkę, żabki, żabko, żabom, żabot, żabsk, żabuń, żabuś, żacha, żachw, żadem, żaden, żadna, żadną, żadne, żadni, żadom, żadów, żagar, żagla, żagle, żagli, żaglu, żagwi, żakom, żaków, żaląc, żalem, żaleń, żalić, żalił, żalmy, żalna, żalną, żalne, żalni, żalny, żalom, żalów, żalże, żałób, żałuj, żanru, żanry, żarci, żareł, żarem, żaren, żarle, żarli, żarła, żarło, żarłu, żarły, żarna, żarną, żarne, żarni, żarny, żarom, żarów, żarta, żartą, żarte, żarto, żartu, żarty, żarzą, żarze, żarzę, żarzy, żądać, żądaj, żądał, żądam, żądań, żądeł, żądlą, żądle, żądlę, żądli, żądła, żądło, żądłu, żądna, żądną, żądne, żądni, żądny, żądza, żądzą, żądze, żądzę, żądzo, żądzy, żąłby, żąłem, żąłeś, żąpia, żąpie, żąpiu, żbika, żbiki, żbiku, żeber, żebra, żebro, żebru, żebry, żebrz, żebym, żebyś, żebyż, żegna, żegot, żelaz, żelce, żelek, żelem, żeliw, żelka, żelką, żelkę, żelki, żelko, żelku, żelom, żelów, żeluj, żenad, żenet, żenią, żenić, żenię, żenił, żenuj, żeńca, żeńce, żeńcu, żeńcy, żeńmy, żeńże, żerdź, żerem, żerna, żerną, żerne, żerni, żerny, żerom, żerów, żertw, żeruj, żerze, żeton, żęcia, żęcie, żęciu, żęłam, żęłaś, żętej, żętyc, żętym, żgają, żgali, żgała, żgało, żgały, żgamy, żgana, żganą, żgane, żgani, żgano, żgany, żgasz, żgnąć, żgnął, żgnie, żgnij, żlebu, żleby, żłoba, żłobi, żłobu, żłoby, żmąca, żmącą, żmące, żmący, żmija, żmiją, żmije, żmiję, żmijo, żmind, żmuda, żmudą, żmudę, żmudo, żmudy, żnąca, żnącą, żnące, żnący, żniwa, żniwo, żniwu, żołdu, żołdy, żołna, żołną, żołnę, żołno, żołny, żompi, żonce, żonek, żonie, żonin, żonka, żonką, żonkę, żonki, żonko, żonom, żonuń, żonuś, żożob, żółcą, żółcę, żółci, żółkł, żółta, żółtą, żółte, żółto, żółty, żółwi, żrąca, żrącą, żrące, żrąco, żrący, żremy, żresz, żuawa, żuawi, żuawy, żubra, żubry, żuchw, żucia, żucie, żuciu, żując, żujmy, żujże, żukom, żuków, żulem, żulia, żulią, żulie, żulię, żulii, żulij, żulik, żulio, żulom, żulów, żułam, żułaś, żuław, żułby, żułem, żułeś, żupan, żupie, żupna, żupną, żupne, żupni, żupny, żupom, żuraw, żurek, żurem, żurki, żurku, żurom, żurów, żurze, żutej, żutym, żuwce, żuwek, żuwka, żuwką, żuwkę, żuwki, żuwko, żuwna, żuwną, żuwne, żuwnę, żuwni, żuwno, żuwny, żużel, żużla, żużle, żużli, żużlu, żwacz, żwawa, żwawą, żwawe, żwawi, żwawo, żwawy, żwiru, żwiry, życia, życic, życie, życiu, życzą, życzę, życzy, żydek, żydem, żydka, żydki, żydku, żydom, żydów, żydzi, żyjąc, żyjmy, żyjże, żylak, żylet, żylna, żylną, żylne, żylni, żylny, żyłam, żyłaś, żyłby, żyłce, żyłek, żyłem, żyłeś, żyłka, żyłką, żyłkę, żyłki, żyłko, żyłom, żyłuj, żyraf, żyrat, żyrau, żyrem, żyrom, żyruj, żyrze, żytek, żytem, żytka, żytko, żytku, żytna, żytną, żytne, żytni, żytny, żytom, żywca, żywce, żywcu, żywej, żywią, żywic, żywić, żywię, żywik, żywił, żywmy, żywna, żywną, żywne, żywni, żywny, żywot, żywsi, żywym, żywże, żyzna, żyzną, żyzne, żyzny, żyźni';

let added = 'brzeg, szkło, kurka, tykwa, konto, kusza, piłka'; //tutaj dopisuj brakujące wyrazy
let Words = (words1 + ', ' + words2 + ', ' + words3 + ', ' + words4 + ', ' + words5 + ', ' + words6 + ', ' + words7 + ', ' + words8 + ', ' + words9 + ', ' + words10 + ', ' + words11 + ', ' + words12 + ', ' + added).replaceAll(', ', ',').split(',').sort();

//words=words.replace('\n', ',').replace(',,',',').split(',');
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
	//list.classList.remove('empty')

}



function clickLetter(aw) {



	for (let i = 0; i < letters.length; i++) {
		letters[i].addEventListener('click', ev => {
			list.style.height = "auto"
			if (!check.checked) {


				if (((letters[i].classList.contains('lack') || letters[i].classList.contains('thereIs') || letters[i].classList.contains('position')) && !document.acftiveElement.classList.contains('full'))) {


					//alertfn()
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






// document.addEventListener('focusin',()=>{
// 	let c=1;
// 	for(let i=0; i<5; i++){

// 



// 	if(document.activeElement!== inp[i]) c++
// 	}
// 
// 	if(c==6) 
// 	body.focus()
// 	
// }

// }, true)






// inp[0].addEventListener('keyup', e => {fn()
// 	if (e.key == 'ArrowRight') {
// 		childs[0].nextElementSibling.focus()
// 	}
// 	if (e.key == 'ArrowLeft') {
// 		childs[0].previousElementSibling.focus()
// 	}
// })
// inp[1].addEventListener('keyup', e => {fn()
// 	if (e.key == 'ArrowRight') {
// 		childs[1].nextElementSibling.focus()
// 	}
// 	if (e.key == 'ArrowLeft') {
// 		childs[1].previousElementSibling.focus()
// 	}
// })
// inp[2].addEventListener('keyup', e => {fn()
// 	if (e.key == 'ArrowRight') {
// 		childs[2].nextElementSibling.focus()
// 	}
// 	if (e.key == 'ArrowLeft') {
// 		childs[2].previousElementSibling.focus()
// 	}
// })
// inp[3].addEventListener('keyup', e => {fn()
// 	if (e.key == 'ArrowRight') {
// 		childs[3].nextElementSibling.focus()
// 	}
// 	if (e.key == 'ArrowLeft') {
// 		childs[3].previousElementSibling.focus()
// 	}
// })
// inp[4].addEventListener('keyup', e => {fn()
// 	if (e.key == 'ArrowRight') {
// 		childs[4].nextElementSibling.focus()
// 	}
// 	if (e.key == 'ArrowLeft') {
// 		childs[4].previousElementSibling.focus()
// 	}
// })



//nie działa, nwm czemu, wyżej lepsza wersja
// function focusfn(e) {
// 	

// 	let ev = e.slice(3)

// 	inp[ev].addEventListener('keyup', event => {
// 		if (event.key == 'ArrowRight') {
// 			inputs.children[ev + 1].focus()
// 		}
// 		

// 		if (event.key == 'ArrowLeft') {
// 			inputs.children[ev - 1].focus()
// 		}


// 	})



//inputy

for (let i = 0; i < inp.length; i++) {


	inp[i].addEventListener("beforeinput", e => {

		e.currentTarget.previousValue = e.currentTarget.value;

		// console.log('target', e.target.id);


	});

	inp[i].addEventListener('input', ev => {

		console.log('aktywny czy zawiera full: ', document.activeElement.classList.contains('full'));
		window.inpfocus = true


		for (let i = 0; i < letters.length; i++) {

			ev.currentTarget.value = ev.currentTarget.value.toLowerCase()



			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('lack')) {
				ev.currentTarget.value = ev.currentTarget.previousValue
				window.lack = true

				//if (letters[i].classList.contains('lack')) {
				//to wyświetla alert jeśli jest kreska i klikniejsz na szare

				alertfn()
				//}

			} else window.lack = false
			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('position'))
				window.position = true
			else window.position = false

			if (letters[i].id == ev.currentTarget.value && letters[i].classList.contains('thereIs'))
				window.thereis = true
			else window.thereis = false
			// console.log('posioterver',window.position)

		}
		if (/[a-zA-Z-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{1}/.test(ev.currentTarget.value)) {

			inp[i].value = ev.currentTarget.value.toLowerCase()


			let j = 0;
			for (word of Words) {
				if (word.charAt(i) !== ev.currentTarget.value.toLowerCase()) {
					word = ' ';

					//inp[i].classList.add('full')
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

			//poniższa część kodu była wcześniej w zdarzeniu keyup.
			let act = document.activeElement;

			if ((act == inp[0] && inp[0].hasAttribute('readOnly')) || (act == inp[1] && inp[1].hasAttribute('readOnly')) || (act == inp[2] && inp[2].hasAttribute('readOnly')) || (act == inp[3] && inp[3].hasAttribute('readOnly')) || (act == inp[4] && inp[4].hasAttribute('readOnly'))) {

				act.classList.add('full')
			}
			//powyższa część kodu -||-
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
//xxx

// if(inp[0].classList.contains('full')){
// inp[0].addEventListener('keyup', e=>{


// 	 if (e.key!=='ArrowRight' || e.key!=='ArrowLeft') {
// 		inp[0]
// 		

// 	}
// })
// }
//jeszcze pododawać wielkie litery
function letterCheck(e, inpid) {



	if (inpid == undefined) return
	else if (inpid == inp[0] || inpid == inp[1] || inpid == inp[2] || inpid == inp[3] || inpid == inp[4] || inpid == inp[5])
		inpid.blur()


	// if (!qm.classList.contains('if')) {
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