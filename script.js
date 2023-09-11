document.addEventListener("DOMContentLoaded", function () {
    const monedaSelect = document.getElementById("monedaSelect");
    const valorPesos = document.getElementById("valorPesos");
    const boton = document.getElementById("boton");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", function () {
        const monedaDestino = monedaSelect.value;
        const valorPesosFloat = parseFloat(valorPesos.value);


        const tasasDeCambio = {
            USD: 349.97,
            USDD: 700,
            EUR: 376.16,
            BRL: 71.03,
        };

        if (!tasasDeCambio.hasOwnProperty(monedaDestino) || isNaN(valorPesosFloat)) {
            resultado.value = "Ingrese un valor válido";
        } else {
            const cantidadConvertida = valorPesosFloat / tasasDeCambio[monedaDestino];
            resultado.value = cantidadConvertida.toFixed(2);
        }
    });
});

/* console.log("Moneda seleccionada:", monedaDestino);
        console.log("Valor en Pesos (como cadena):", valorPesos.value);
        console.log("Valor en Pesos (como número):", valorPesosFloat); */