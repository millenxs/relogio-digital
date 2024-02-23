function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours().toLocaleString().substr(0, 10);
    var minutos = agora.getMinutes().toLocaleString().substr(0, 10);
    var segundos = agora.getSeconds().toLocaleString().substr(0, 10);

    // Formatar horas para o formato de 12 horas
    horas = horas % 24 || 24;

    // Adicionar zero à esquerda para minutos e segundos menores que 10
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horaFormatada = horas;
	var minutoFormatado = minutos;
	var segundosFormatados = segundos;


    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
	var secondsElement = document.getElementById('seconds');

    hoursElement.textContent = horaFormatada;
	minutesElement.textContent = minutoFormatado;
	secondsElement.textContent = segundosFormatados;

  }


  // Atualizar o relógio a cada segundo
  setInterval(atualizarRelogio, 1000);

  // Inicializar o relógio
  atualizarRelogio();