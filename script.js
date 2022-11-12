function btnInflacion() {
  let numeroX = parseInt(prompt('Introducir precio del producto'));

  checkNumber();
  function checkNumber() {
    if (isNaN(numeroX)) {
      alert('Por favor, introducir un número');
      return;
    } else {
      calcularInflacion();
    }
  }

  function calcularInflacion() {
    let inflacionMensual = parseFloat(prompt('Inflación mensual'));
    let PorcentajeNumX = (inflacionMensual * numeroX) / 100;
    let cantidadMeses = parseInt(prompt('Cantidad de meses'));
    let calculoInflacion = (cantidadMeses * PorcentajeNumX + numeroX).toFixed(2);
    if (isNaN(inflacionMensual) || isNaN(PorcentajeNumX)) {
      alert('Por favor, introducir valores válidos');
      return;
    }
    alert(
      `La inflación mensual es del ${inflacionMensual}%, es decir, lo que hoy vale $${numeroX}, dentro de ${cantidadMeses} meses, va a valer $${calculoInflacion}`
    );
    alert(`A este ritmo, la inflación anual estimada será del ${(inflacionMensual * 12).toFixed(2)}%`);
  }
}

// incremento o decremento
function incremDecrem() {
  let segundoValor = parseInt(prompt('Introducir valor 1'));
  let primerValor = parseInt(prompt('Introducir valor 2'));
  checkNumber();

  function checkNumber() {
    if (isNaN(primerValor) || isNaN(segundoValor)) {
      alert('Por favor, introducir valores válidos');
      return;
    } else {
      calcularIncremDecrem();
    }
  }
  function calcularIncremDecrem() {
    let diferencia = primerValor - segundoValor;
    let resultadoIncremDecrem = ((diferencia / segundoValor) * 100).toFixed(2);
    if (resultadoIncremDecrem > 0) {
      alert(
        `Entre el primer valor de ${segundoValor} y el segundo valor de ${primerValor}, hay un incremento del ${resultadoIncremDecrem}%`
      );
    } else if (resultadoIncremDecrem <= 0) {
      alert(
        `Entre el primer valor de ${segundoValor} y el segundo valor de ${primerValor}, hay un decremento del ${resultadoIncremDecrem}%`
      );
    }
  }
}

// incremento o decremento a lo largo del tiempo
function incremMeses() {
  let segundoValor = parseInt(prompt('Introducir valor más bajo'));
  let primerValor = parseInt(prompt('Introducir valor más alto'));
  let cuantosMeses = parseInt(prompt('¿Cuántos meses pasaron?'));
  checkNumber();

  function checkNumber() {
    if (isNaN(primerValor) || isNaN(segundoValor)) {
      alert('Por favor, introducir valores válidos');
      return;
    } else {
      calcularIncremTiempo();
    }
  }
  function calcularIncremTiempo() {
    let diferencia = primerValor - segundoValor;
    let resultadoIncremDecrem = ((diferencia / segundoValor) * 100).toFixed(2);
    let meses = (resultadoIncremDecrem / cuantosMeses).toFixed(2);
    alert(`En ${cuantosMeses} meses el aumento es del ${resultadoIncremDecrem}%, es decir, un aumento del ${meses}% mensual.`);
  }
}
