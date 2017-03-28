var tiempo1;
window.onload = function tiempo() {
  var audio = document.getElementById('audio');
    tiempo1= audio.duration;
   return tiempo1;
   console.log(tiempo1);
};
 function inicio(){
  document.getElementById('audio').play();

  var inicio=0;
  for(var i=0; i<=tiempo1; i++){
     inicio+=1;
    console.log(inicio);
    var barra = document.getElementById('barra')
    barra.value +=inicio;

  }

};

function pausa(){
  document.getElementById('audio').pause()
};

function alto(){
  document.getElementById('audio').load();
};

function subir(){
  document.getElementById('audio').volume+=0.2;
};

function bajar(){
  document.getElementById('audio').volume-=0.2;
};

 function sliderVol(){
   audio.volume = document.getElementById('points').value/100;
 };

 //
 // function tiempoCarga () {
 // 	if (centesimas < 99) {
 // 		centesimas++;
 // 		if (centesimas < 10) { centesimas = "0"+centesimas }
 // 		Centesimas.innerHTML = ":"+centesimas;
 // 	}
 // 	if (centesimas == 99) {
 // 		centesimas = -1;
 // 	}
 // 	if (centesimas == 0) {
 // 		segundos ++;
 // 		if (segundos < 10) { segundos = "0"+segundos }
 // 		Segundos.innerHTML = ":"+segundos;
 // 	}
 // 	if (segundos == 59) {
 // 		segundos = -1;
 // 	}
 // 	if ( (centesimas == 0)&&(segundos == 0) ) {
 // 		minutos++;
 // 		if (minutos < 10) { minutos = "0"+minutos }
 // 		Minutos.innerHTML = ":"+minutos;
 // 	}
 // 	if (minutos == 59) {
 // 		minutos = -1;
 // 	}
 // 	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
 // 		horas ++;
 // 		if (horas < 10) { horas = "0"+horas }
 // 		Horas.innerHTML = horas;
 // 	}
 // }
