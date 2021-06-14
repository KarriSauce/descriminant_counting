// сматри есть уравнене ано выгледит так ax² + bx + c

// штучки-менялки
a = 3
b = 18
c = 27

d = b * b - 4 * a * c

if (d < 0) {
    console.log('нету дескременанта блинб')
}
else {

    kok = Math.sqrt(d)

    if (Number.isInteger(kok)) {
        console.log('D is ' + d + ' or ' + kok + '²')
    }
    else {
        console.log(d + ' or ' + '~' + Math.round(kok) + '²')
    }

    x1 = ((-b + kok) / 2 * a)
    x2 = ((-b - kok) / 2 * a)

    if (!Number.isInteger(x1)) {
        x1 = '~(' + Math.round(x1) + ')'
    }

    if (!Number.isInteger(x2)) {
        x2 = '~(' + Math.round(x2) + ')'
    }

    console.log('x1=' + (x1) + ' x2=' + (x2))

}

// пишем в терменальчек "node reshalka.js" и гатова! все решилось!!