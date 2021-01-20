import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor() { }

  //@ViewChild('mycanvas') public mycanvas!: ElementRef;

  ngOnInit(): void {
      
  }

  // public ngAfterViewInit(){
  //   console.log("this is my canvas ",this.mycanvas);
    
  //   const canvas: HTMLCanvasElement = this.mycanvas.nativeElement;
  //   const ctx = canvas.getContext('2d');
  //   console.log(canvas,"context=",ctx);

  //   canvas.addEventListener('mousedown',this.click);
    
  // }

  // click():void {
  //   console.log("yes");
  // }

}
