import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment"
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  lista =environment.reproductor
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
