import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  names =["Sun", "Flower", "Moon", "Ball", "Laptop", "Pencil"];
  constructor() { }

  ngOnInit(): void {
  }

}
