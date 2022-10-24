import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-toast',
  templateUrl: './general-toast.component.html',
  styleUrls: ['./general-toast.component.css']
})
export class GeneralToastComponent implements OnInit {

  @Input() mensaje: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
