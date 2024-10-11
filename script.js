function convertir() {
    const valor = parseFloat(document.getElementById("valor").value);
    const unidadEntrada = document.getElementById("unidadEntrada").value;
    const unidadSalida = document.getElementById("unidadSalida").value;
    let resultado;

    if (isNaN(valor)) {
        resultado = "";
    } else {
        // Conversión a metros
        let valorEnMetros;
        switch (unidadEntrada) {
            case "kilometros":
                valorEnMetros = valor * 1000;
                break;
            case "millas":
                valorEnMetros = valor * 1609.34;
                break;
            default:
                valorEnMetros = valor;
        }

        // Conversión a la unidad de salida
        switch (unidadSalida) {
            case "kilometros":
                resultado = valorEnMetros / 1000;
                break;
            case "millas":
                resultado = valorEnMetros / 1609.34;
                break;
            default:
                resultado = valorEnMetros;
        }
    }

    document.getElementById("resultado").textContent = resultado ? `Resultado: ${resultado.toFixed(4)} ${unidadSalida}` : "";
}
