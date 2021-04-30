import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  
      setInterval(this.actualizarHora,1000);
  }
  actualizarHora(){

    var fecha :any= new Date()
    var  horas:any = fecha.getHours()
    var  ampm:any
    var  minutos = fecha.getMinutes()
    var  segundos = fecha.getSeconds()
    var  diaSemana = fecha.getDay()
    var  dia = fecha.getDate()
    var  mes = fecha.getMonth()
    var  year = fecha.getFullYear();


    var pHoras = document.getElementById('horas')
    var  pAMPM = document.getElementById('ampm')
    var  pMinutos = document.getElementById('minutos')
    var  pSegundos = document.getElementById('segundos')
    var   pDiaSemana = document.getElementById('diaSemana')
    var  pDia:any = document.getElementById('dia')
    var  pMes = document.getElementById('mes')
    var   pYear:any = document.getElementById('year')



    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    


    pDia.textContent = dia;


    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    pMes.textContent = meses[mes];
    pYear.textContent = year;



    if (horas >= 12) {
      horas = horas - 12;
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }
  if (horas < 10){ horas = "0" + horas; }
      if (horas == 0 ){
      horas = 12;
    }

    pHoras.textContent = horas;
    pAMPM.textContent = ampm;

    // Minutos y Segundos
    if (minutos < 10){ minutos = "0" + minutos; }
    if (segundos < 10){ segundos = "0" + segundos; }

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;
  };


}
