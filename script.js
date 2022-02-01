const textbox1 = document.querySelector('.textBox1');
const textbox2 = document.querySelector('.textBox2');
const options1 = document.querySelector('.option1');
const options2 = document.querySelector('.option2');
const button = document.querySelector('.button');
const dropdown = document.querySelector('.dropdown2');

//To display the value in First Text Box
function show1(anything) {
    textbox1.value = anything
    options1.classList.toggle('active');
    dropdown.setAttribute('style', 'visibility: visible;');

}

//To display the first Dropdown Box
textbox1.onclick = function () {
    options1.classList.toggle('active');
}

//To display the value in second Text Box
function show2(anything) {
    textbox2.value = anything;
    options2.classList.toggle('active');
    button.setAttribute('style', 'display: block');
}

//To display the second Dropdown Box
textbox2.onclick = function () {
    options2.classList.toggle('active');
}

//button click function to execute the seleted Pattern
button.addEventListener('click', function () {
    let value = textbox1.value + textbox2.value;
    switch (value) {
        case 'StarFrom left':
            console.clear();
            console.log('Star From Left');
            StarFromLeft();
            break;

        case 'StarFrom right':
            console.clear();
            console.log('Star From Right');
            StarFromRight();
            break;

        case 'StarFrom left top-bottom':
            console.clear();
            console.log('Star From Left Top-Bottom');
            StarFromLeftTopBottom();
            break;

        case 'StarFrom right top-bottom':
            console.clear();
            console.log('Star From Right Top-Bottom');
            StarFromRightTopBottom();
            break;

        case 'StarPyramid':
            console.clear();
            console.log('Star Pyramid')
            StarPyramid();
            break;

        case 'NumberFrom left':
            console.clear();
            console.log('Number From Left');
            NumberFromLeft();
            break;

        case 'NumberFrom right':
            console.clear();
            console.log('Number From Right');
            NumberFromRight();
            break;

        case 'NumberFrom left top-bottom':
            console.clear();
            console.log('Number From Left Top-Bottom');
            NumberFromLeftTopBottom();
            break;

        case 'NumberFrom right top-bottom':
            console.clear();
            console.log('Number From Right Top-Bottom');
            NumberFromRightTopBottom();
            break;

        case 'NumberPyramid':
            console.clear();
            console.log('Number Pyramid')
            NumberPyramid();
            break;

        case 'Reverse NumberFrom left':
            console.clear();
            console.log('Reverse Number From Left');
            ReverseNumberFromLeft();
            break;

        case 'Reverse NumberFrom right':
            console.clear();
            console.log('Reverse Number From Right');
            ReverseNumberFromRight();
            break;

        case 'Reverse NumberFrom left top-bottom':
            console.clear();
            console.log('Reverse Number From Left Top-Bottom');
            ReverseNumberFromLeftTopBottom();
            break;

        case 'Reverse NumberFrom right top-bottom':
            console.clear();
            console.log('Reverse Number From Right Top-Bottom');
            ReverseNumberFromRightTopBottom();
            break;

        case 'Reverse NumberPyramid':
            console.clear();
            console.log('Reverse Number Pyramid')
            ReverseNumberPyramid();
            break;

        case 'Running NumberFrom left':
            console.clear();
            console.log('Running Number From Left');
            RunningNumberFromLeft();
            break;

        case 'Running NumberFrom right':
            console.clear();
            console.log('Running Number From Right');
            RunningNumberFromRight();
            break;

        case 'Running NumberFrom left top-bottom':
            console.clear();
            console.log('Running Number From Left Top-Bottom');
            RunningNumberFromLeftTopBottom();
            break;

        case 'Running NumberFrom right top-bottom':
            console.clear();
            console.log('Running Number From Right Top-Bottom');
            RunningNumberFromRightTopBottom();
            break;

        case 'Running NumberPyramid':
            console.clear();
            console.log('Running Number Pyramid')
            RunningNumberPyramid();
            break;

        default:
            alert('Please Select the valid Option!!!');
    }
})


//Star Functions
let space;
let astrics;

function StarFromLeft() {
    astrics = '*';
    for (let i = 0; i < 5; i++) {
        console.log(astrics.repeat(5 - i));
    }
}

function StarFromRight() {
    space = ' ';
    astrics = '*';
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + (astrics.repeat(5 - i)));
    }
}

function StarFromLeftTopBottom() {
    astrics = '*';
    for (let i = 1; i < 6; i++) {
        console.log((astrics.repeat(i)));
    }
}

function StarFromRightTopBottom() {
    space = ' ';
    astrics = '*';
    for (let i = 1; i < 6; i++) {
        console.log(space.repeat(5 - i) + (astrics.repeat(i)));
    }
}

function StarPyramid() {
    space = ' ';
    astrics = '*'
    for (let i = 1; i < 6; i++) {
        console.log(space.repeat(5 - i) + (astrics));
        astrics += '**'
    }
}

//---------------------------------------------------

//Number Functions
let a;
let b;

function NumberFromLeft() {
    a = '12345';
    for (let i = 0; i < 5; i++) {
        console.log(a.substr(0, 5 - i));
    }
}

function NumberFromRight() {
    space = ' ';
    a = '12345';
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + a.substr(i, 5));
    }
}

function NumberFromLeftTopBottom() {
    a = '12345';
    for (let i = 1; i < 6; i++) {
        console.log(a.substr(0, i));
    }
}

function NumberFromRightTopBottom() {
    space = ' ';
    b = '54321';
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + b.substr(4 - i, 5));
    }
}

function NumberPyramid() {
    space = ' ';
    let c = '123456789'
    d = 1
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + c.substr(0, i + d));
        d++;
    }
}

//Reverse Number pattern Functions

function ReverseNumberFromLeft() {
    a = '54321';
    for (let i = 0; i < 5; i++) {
        console.log(a.substr(0, 5 - i));
    }
}

function ReverseNumberFromRight() {
    space = ' ';
    a = '54321';
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + a.substr(i, 5));
    }
}

function ReverseNumberFromLeftTopBottom() {
    a = '54321';
    for (let i = 1; i < 6; i++) {
        console.log(a.substr(0, i));
    }
}

function ReverseNumberFromRightTopBottom() {
    space = ' ';
    b = '12345';
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + b.substr(4 - i, 5));
    }
}

function ReverseNumberPyramid() {
    c = '987654321'
    d = 1
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + c.substr(0, i + d));
        d++;
    }
}



//Running Number pattern Functions

function RunningNumberFromLeft() {
    a = '';
    b = 6;
    let count = 0;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(a);
            if (i <= 9) {
                a = String(i) + '  ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b -= 1;
        } else {
            if (i <= 9) {
                a += String(i) + '  ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
}

function RunningNumberFromRight() {
    a = '';
    b = 6;
    count = 0;
    space = '   ';
    let space_count = 0;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(a);
            space_count += 1;
            if (i <= 9) {
                a = space.repeat(space_count) + ' ' + String(i) + ' ';
            } else {
                a = space.repeat(space_count) + String(i) + ' ';
            }
            count = 1;
            b -= 1;
        } else {
            if (i <= 9) {
                a += ' ' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
}

function RunningNumberFromLeftTopBottom() {
    a = '';
    b = 1;
    count = 0;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(a);
            if (i <= 9) {
                a = String(i) + '  ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 1;
        } else {
            if (i <= 9) {
                a += String(i) + '  ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
}

function RunningNumberFromRightTopBottom() {
    a = '';
    b = 1;
    count = 0;
    space = '   ';
    space_count = 5;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(space.repeat(space_count) + a);
            space_count -= 1;
            if (i <= 9) {
                a = ' ' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 1;
        } else {
            if (i <= 9) {
                a += ' ' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
}

function RunningNumberPyramid() {
    a = '';
    b = 1;
    count = 0;
    space = '   ';
    space_count = 4;
    for (let i = 1; i < 27; i++) {
        if (count == b) {
            console.log(space.repeat(space_count) + a);
            space_count -= 1;
            if (i <= 9) {
                a = ' ' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 2;
        } else {
            if (i <= 9) {
                a += ' ' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
}
