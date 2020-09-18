const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	check();
});

function check() {
	
	const uValue = username.value.trim();
	const eValue = email.value.trim();
	const pValue = password.value.trim();
	const p2Value = password2.value.trim();
	
	if(uValue === '') {
		seterror(username, 'This section cannot be blank');
	} else {
		setsuccess(username);
	}
	
	if(eValue === '') {
		seterror(email, 'This section cannot be blank');
	} else if (!isEmail(eValue)) {
		seterror(email, 'Not a valid email');
	} else {
		setsuccess(email);
	}
	
	if(pValue === '') {
		seterror(password, 'This section cannot be blank');
	} else {
		setsuccess(password);
	}
	
	if(p2Value === '') {
		seterror(password2, 'This section cannot be blank');
	} else if(pValue !== p2Value) {
		seterror(password2, 'Ooops! Passwords dont match');
	} else{
		setsuccess(password2);
	}
}

function seterror(input, message) {
	const formcontrol = input.parentElement;
	const small = formcontrol.querySelector('small');
	formcontrol.className = 'control error';
	small.innerText = message;
}

function setsuccess(input) {
	const formcontrol = input.parentElement;
	formcontrol.className = 'control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

