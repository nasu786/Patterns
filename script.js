function star() {
    console.clear();
    const space = ' ';
    console.log('Star');
    let astrics = '*'
    for (let i = 0; i < 5; i++) {
        console.log(astrics.repeat(5 - i));
    }
    console.log('');

    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + (astrics.repeat(5 - i)));
    }
    console.log('');

    for (let i = 1; i < 6; i++) {
        console.log(space.repeat(5 - i) + (astrics));
        astrics += '**'
    }
    console.log('');

    astrics = '*'
    for (let i = 1; i < 6; i++) {
        console.log((astrics.repeat(i)));
    }
    console.log('');

    for (let i = 1; i < 6; i++) {
        console.log(space.repeat(5 - i) + (astrics.repeat(i)));
    }
    console.log('----------------------------------');


}

function number() {
    console.clear();
    const space = ' '
    console.log('Numbers');
    a = '12345';
    for (let i = 1; i < 6; i++) {
        console.log(a.substr(0, i));
    }
    console.log('');

    b = '54321'
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + b.substr(4 - i, 5));
    }
    console.log('');

    for (let i = 0; i < 5; i++) {
        console.log(a.substr(0, 5 - i));
    }
    console.log('');

    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + a.substr(i, 5));
    }
    console.log('');

    c = '123456789'
    d = 1
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + c.substr(0, i + d));
        d++;
    }
    console.log('----------------------------------');

}

function reversenumber() {
    console.clear();
    const space = ' '
    console.log('Reverse Numbers')
    a = '54321';
    for (let i = 1; i < 6; i++) {
        console.log(a.substr(0, i));
    }
    console.log('');

    b = '12345'
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + b.substr(4 - i, 5));
    }
    console.log('');

    for (let i = 0; i < 5; i++) {
        console.log(a.substr(0, 5 - i));
    }
    console.log('');

    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(i) + a.substr(i, 5));
    }
    console.log('');

    c = '987654321'
    d = 1
    for (let i = 0; i < 5; i++) {
        console.log(space.repeat(4 - i) + c.substr(0, i + d));
        d++;
    }
}

function runningnumber() {
    console.clear();
    console.log('Running Numbers');
    let a = '';
    let b = 6;
    let count = 0;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(a);
            if (i <= 9) {
                a = '0' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b -= 1;
        } else {
            if (i <= 9) {
                a += '0' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
    console.log('');

    a = '';
    b = 1;
    count = 0;
    for (let i = 1; i < 25; i++) {
        if (count == b) {
            console.log(a);
            if (i <= 9) {
                a = '0' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 1;
        } else {
            if (i <= 9) {
                a += '0' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
    console.log('');

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
                a = space.repeat(space_count) + '0' + String(i) + ' ';
            } else {
                a = space.repeat(space_count) + String(i) + ' ';
            }
            count = 1;
            b -= 1;
        } else {
            if (i <= 9) {
                a += '0' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
    console.log('');


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
                a = '0' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 1;
        } else {
            if (i <= 9) {
                a += '0' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }
    console.log('');


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
                a = '0' + String(i) + ' ';
            } else {
                a = String(i) + ' ';
            }
            count = 1;
            b += 2;
        } else {
            if (i <= 9) {
                a += '0' + String(i) + ' ';
            } else {
                a += String(i) + ' '
            }
            count += 1
        }
    }

}

