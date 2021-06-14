// сматри есть уравнене ано выгледит так ax² + bx + c

function reshalka(a, b, c) {
  d = b * b - 4 * a * c;
  if (d < 0) {
    console.log("нету дескременанта блинб");
    alert('"нету дескременанта блинб"')
  } else {
    kok = Math.sqrt(d);

    if (Number.isInteger(kok)) {
      console.log("D is " + d + " or " + kok + "²");
    } else {
      console.log(d + " or " + "~" + Math.round(kok) + "²");
    }

    x1 = ((-b + kok) / 2) * a;
    x2 = ((-b - kok) / 2) * a;

    if (!Number.isInteger(x1)) {
      x1 = "~(" + Math.round(x1) + ")";
    }

    if (!Number.isInteger(x2)) {
      x2 = "~(" + Math.round(x2) + ")";
    }

    console.log("x1=" + x1 + " x2=" + x2);
    return "x1=" + x1 + " x2=" + x2
  }
}

let submit_button = document.getElementById('d_form')

submit_button.addEventListener("submit", async function (event) {
    event.preventDefault()
    let a = submit_button.elements[0].value
    let b = submit_button.elements[1].value
    let c = submit_button.elements[2].value
    if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert('вводи цифры, блин!')
        return;
    }
    result = document.getElementById('result_d')
    result.innerHTML = '<h3>' + reshalka(a, b, c) + '</h3>'
})