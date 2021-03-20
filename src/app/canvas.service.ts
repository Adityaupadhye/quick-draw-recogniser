import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  linewidth=5;
  stroke=['black', 'white'];
  rubberOn=false;
  draw=true;


  constructor() { }
}
