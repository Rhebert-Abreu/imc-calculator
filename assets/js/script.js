function mysight() {

    const form = document.querySelector(".form");

    const resultado = document.querySelector(".result");

    const error2 = document.querySelector(".error")

    function eventReceive(event) {

        event.preventDefault();

        const peso = form.querySelector("#peso");

        const altura = form.querySelector("#altura");

        const imc = peso.value / (altura.value * altura.value);

        let imcFixed = imc * 10000

        const pesoValue = Number(peso.value)

        const alturaValue = Number(altura.value)

        if (peso.value >= 400) {
            const error = `<p> Digite um peso válido!</p>`

            resultado.innerHTML = '';
            resultado.innerHTML = error;
            return
        }

        if (altura.value >= 250) {
            const error = `<p>Digite uma altura válida!</p>`

            resultado.innerHTML = '';
            resultado.innerHTML = error;
            return
        }

        if (pesoValue != Number(pesoValue)) {
            const error = `<p>Informe valores válidos!</p>`

            resultado.innerHTML = '';
            resultado.innerHTML = error;
            return
        }

        if (alturaValue != Number(alturaValue)) {
            const error = `<p>Informe valores válidos!</p>`

            resultado.innerHTML = '';
            resultado.innerHTML = error;
            return
        }

        if (imcFixed <= 18.5) {
            const words = `<p> Seu IMC é de: ${imcFixed.toFixed(2)} você está abaixo do peso.`

            resultado.innerHTML = '';
            resultado.innerHTML = words;

            console.log(words)

        } else if (imcFixed > 18.5 && imcFixed <= 24.9) {
            const words = `<p> Seu IMC é de ${imcFixed.toFixed(2)}, seu peso está normal.</p>`

            resultado.innerHTML = words;

        } else if (imcFixed >= 25 && imcFixed <= 29.9) {
            const words = `<p> Seu IMC é de ${imcFixed.toFixed(2)}, você está com Sobrepeso.</p>`

            resultado.innerHTML = words;

        } else if (imcFixed >= 30 && imcFixed <= 34.9) {
            const words = `<p> Seu IMC é de ${imcFixed.toFixed(2)}, você está com Obseidade grau 1</p>`

            resultado.innerHTML = words;
        } else if (imcFixed >= 35 && imcFixed <= 39.9) {
            const words = `<p> Seu IMC é de ${imcFixed.toFixed(2)}, você está com Obseidade grau 2</p>`

            resultado.innerHTML = words;
        } else if (imcFixed >= 40) {
            const words = `<p> Seu IMC é de ${imcFixed.toFixed(2)}, você está com Obseidade grau 3</p>`
            resultado.innerHTML = words;
        }

    }

    form.addEventListener('submit', eventReceive);

}

mysight();