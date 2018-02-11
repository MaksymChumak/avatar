'use strict';
/*---------------- Functions to change avatar ----------------*/
let avatar1Button = document.getElementById('avatar1-button');
let avatar = document.getElementById('avatar');

avatar1Button.addEventListener('click', function() {
	avatar.src = 'ava1.png';
});

let avatar2Button = document.getElementById('avatar2-button');
avatar2Button.addEventListener('click', function() {
	avatar.src = 'ava2.jpg';
});


/*------------- Functions to move the avatar -------------------*/

let centerDiv = document.getElementById('center');
let numPositionRight = centerDiv.style.right;
let numPositionBottom = centerDiv.style.bottom;

document.getElementById('up-button').addEventListener('click', function() {
	numPositionBottom = numPositionBottom - 7;
	centerDiv.style.top = numPositionBottom + 'px';
});

document.getElementById('down-button').addEventListener('click', function() {
	numPositionBottom = Number(numPositionBottom) + 7;
	centerDiv.style.top = numPositionBottom + 'px';
});

document.getElementById('right-button').addEventListener('click', function() {
	
	numPositionRight = Number(numPositionRight) + 7;
	centerDiv.style.left = numPositionRight + 'px';
});

document.getElementById('left-button').addEventListener('click', function() {
	numPositionRight = numPositionRight - 7;
	centerDiv.style.left = numPositionRight + 'px';
});

/*------- Level 3 Functions to change the size of the avatar --------*/
let numHeight = 30;

document.getElementById('increase-button').addEventListener('click', function() {
	numHeight = numHeight + 1;
	centerDiv.style.height = numHeight + '%';
});

document.getElementById('decrease-button').addEventListener('click', function() {
	numHeight = numHeight - 1;
	centerDiv.style.height = numHeight + '%';
});

/*------------- Functions to hide controls  -------------*/

document.getElementById('avatar').addEventListener('click', function() {
	document.getElementById('controls').style.display = 'none';
});

document.getElementById('header').addEventListener('click', function() {
	document.getElementById('controls').style.display = '';
});



