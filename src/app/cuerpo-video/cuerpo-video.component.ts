import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cuerpo-video',
  templateUrl: './cuerpo-video.component.html',
  styleUrls: ['./cuerpo-video.component.css']
})
export class CuerpoVideoComponent implements OnInit {
  reproductor :any
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pido(3);
    this.reproductor = document.getElementById("reproductor")
   // this.reproductor.src = "./assets/video/" + this.list[0] ;
    this.empezar()
   /* document.getElementById("hola2"). css("display", "none")
    $("#hola1").css("display", "block")*/

    
    var ayuda = 0
    var ayuda1 = 0
    var arrayimg = ['c', 'b', 'a', 'c']
    var arrayefcent = ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft']
    var arrayefcsal = ['fadeOut', 'fadeOutLeft', 'fadeOutDown', 'fadeOutDownBig']

    /* setInterval(function () {
       var x = this.getRandomArbitrary(0, arrayefcent.length - 1)
       var y = this.getRandomArbitrary(0, arrayefcsal.length - 1)
       if (ayuda >= arrayimg.length - 1) {
         ayuda = 0
       } else {
         $('.ef').addClass(arrayefcsal[y]).one(animationEnd, function () {
           $(".super").attr('src', arrayimg[ayuda] + ".gif")
           $('.ef').removeClass(arrayefcsal[y])
           $('.ef').addClass(arrayefcent[x]).one(animationEnd, function () {
             $('.ef').removeClass(arrayefcent[x]);
           });
         });
 
 
 
 
         ayuda = ayuda + 1
 
       }
     }
       , 15000);
     var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';*/

  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.playlist(result.length-2, result)
      this.empezar()
    });
  }
  empezar(){
    this.reproductor.play()
  }
  detener(){
    this.reproductor.pause()
  }
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  playlist(conta, videos) {
    var cont: any = conta;

    console.log(cont, videos)

    var reproductor: any = document.getElementById("reproductor"), videos,
      info = document.getElementById("info");

    //info.innerHTML = "Vídeo: " + videos[cont];
    reproductor.src = "./assets/video/" + videos[cont] 


    reproductor.addEventListener("ended", function () {

      if (cont < videos.length - 1) {
        cont++
        this.src = "./assets/video/" + videos[cont]

        this.play()
       
      } else {
        cont = 0
        this.src = "./assets/video/" + videos[cont] 
        this.play()
        
      }
      /* var nombreActual = info.innerHTML.split(": ")[1];
       var actual = videos.indexOf(nombreActual);
       this.src = (actual == videos.length - 1 ? videos[0] : videos[actual + 1]) + ".mp4";
       info.innerHTML = "Vídeo: " + videos[actual + 1];
       this.play();*/
    }, false);
  }

  addMessage(e) {
    var mensaje = document.getElementById('texto')
    var mensaje2 = document.getElementById("username")
    var x = {
      valor: mensaje2,
      numero: mensaje,
      edad: "decaer"
    }

    //socket.emit('new-message', x);
    return false;
  }
  pro(count) {
    var prg = count;
    console.log(count)
    //socket.emit('programacion', prg);

    return false;

  }
  pido(cast) {

    var valux = cast;
    //socket.emit('pido', valux);
  }

}
