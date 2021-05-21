import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { environment } from "../../environments/environment"
import { Socket } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';


declare var $: any
@Component({
  selector: 'app-cuerpo-video',
  templateUrl: './cuerpo-video.component.html',
  styleUrls: ['./cuerpo-video.component.css']
})
export class CuerpoVideoComponent implements OnInit {
  reproductor: any
  arrayimg = environment.imagenes
  ayuda = 0
  arrayefcent = ['animate__fadeIn', 'animate__fadeInDown', 'animate__fadeInDownBig', 'animate__fadeInLeft']
  arrayefcsal = ['animate__fadeOut', 'animate__fadeOutLeft', 'animate__fadeOutDown', 'animate__fadeOutDownBig']
  animacion: any
  constructor(public dialog: MatDialog, private socket: Socket, private cookieService: CookieService) {

    $(window).on("beforeunload", () => {

      var reproductor: any = document.getElementById("reproductor")
      console.log($('#reproductor').attr('currentTime'))
      this.cookieService.set('Avance', $('#reproductor')[0].currentTime);


    });


    socket.on('datos', (data) => {
      console.log(data)

      $(".caja2").css("display", "block")
      $(".caja").css("display", "none")
      var m: any = document.getElementById("super2")
      m.setAttribute("src", "assets/" + data.video + ".gif")

      setTimeout(() => {

        $(".caja2").css("display", "none")
        $(".caja").css("display", "block")

      }, environment.IntervaloImagen);

    })
  }

  ngOnInit(): void {

    $(".caja2").css("display", "none")
    $(".caja").css("display", "block")

    this.reproductor = document.getElementById("reproductor")
    console.log(this.cookieService.get('Lista'), this.cookieService.get('Video'), this.cookieService.get('Avance'))
    if (this.cookieService.get('Lista') && this.cookieService.get('Video') && this.cookieService.get('Avance')) {

      environment.reproductor.forEach(element => {
        if (this.cookieService.get('Lista') == element.lista) {
          this.playlist(element.list.length - 2, element.list)

          this.reproductor.src = "./" + environment.rutaSrc + this.cookieService.get('Video')
          this.reproductor.currentTime = this.cookieService.get('Avance');

        }
      });
    } else {
      this.cookieService.set('Lista', environment.reproductor[0].lista);
      this.playlist(environment.reproductor[0].list.length - 1, environment.reproductor[0].list)
    }





    this.empezar()
    this.finalizaAnimacion()




    setInterval(() => {
      var x = this.getRandomArbitrary(0, this.arrayefcent.length - 1)
      var y = this.getRandomArbitrary(0, this.arrayefcsal.length - 1)
      this.animacion = this.arrayefcsal[y]
      if (this.ayuda >= this.arrayimg.length - 1) {
        this.ayuda = 0
      } else {


        var p: any = document.querySelector(".ef")

        p.classList.add('animate__animated', this.arrayefcsal[y])

        var m: any = document.getElementById("super")
        m.setAttribute("src", "assets/" + this.arrayimg[this.ayuda] + ".gif")

        this.ayuda = this.ayuda + 1

      }
    }
      , environment.intevalo);
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

  }
  finalizaAnimacion() {
    var x = this.getRandomArbitrary(0, this.arrayefcent.length - 1)
    var y = this.getRandomArbitrary(0, this.arrayefcsal.length - 1)
    var p: any = document.querySelector(".ef")
    p.addEventListener('animationend', () => {
      $("#inferior").removeClass(this.animacion);
      ;
      var z: any = document.querySelector(".ef")
      z.classList.add('animate__animated', this.arrayefcent[x])
      p.removeEventListener('click', this)
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      environment.reproductor.forEach(element => {
        if (result == element.lista) {
          this.playlist(element.list.length - 2, element.list)
          this.empezar()
        }
      });
      console.log(`Dialog result: ${result}`);
      this.cookieService.set('Lista', result);


    });
  }

  empezar() {
    this.reproductor.play()
  }
  detener() {
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
    reproductor.src = "./" + environment.rutaSrc + videos[cont]
    

    reproductor.addEventListener("ended", () => {

      if (cont < videos.length - 1) {
        cont++
        reproductor.src = "./" + environment.rutaSrc + videos[cont]
        this.cookieService.set('Video', videos[cont]);
        reproductor.play()

      } else {
        cont = 0
        reproductor.src = "./" + environment.rutaSrc + videos[cont]
        reproductor.play()
        this.cookieService.set('Video', videos[cont]);
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


}
