import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit, AfterViewInit {

  constructor() { }

   @ViewChild("myCanvas") public canvas: ElementRef;
   @ViewChild("canvasDiv") public divc: ElementRef;

  // myCanvas!:HTMLCanvasElement;
  // canvasDiv!:HTMLElement;
   ctx!: CanvasRenderingContext2D;

  // coord = {x:0 , y:0};  
  // paint = false;


  div = document.getElementById("canvas-div");

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log("div=",this.div);
     const c = this.canvas.nativeElement;
     this.ctx = c.getContext('2d');

     console.log("context=",this.ctx);
     
  }

  // ngAfterViewInit(){
  //   console.log(this.canvas);
  //   this.myCanvas = this.canvas.nativeElement;
  //   this.canvasDiv= this.div.nativeElement;
  //   const ctx= this.myCanvas.getContext('2d');
  //   console.log("context=",ctx);
    
  //   this.myCanvas.getContext('2d');
    
  //   window.addEventListener('resize',this.resize)
  //   this.resize();


  // }

  // resize(){
  //   this.myCanvas.width = this.canvasDiv.clientWidth; 
  //   this.myCanvas.height = this.canvasDiv.clientHeight;
  //   console.log("div= "+ this.canvasDiv.clientHeight, this.canvasDiv.clientWidth); 
  // }

  // getPosition(event:MouseEvent){ 
  //   var rect= this.myCanvas.getBoundingClientRect();
  //   //rect.x, rect.y gives position of canvas wrt browser size
  //   this.coord.x = event.clientX-rect.x; 
  //   this.coord.y = event.clientY-rect.y; 
  // }

  // startPainting(event: MouseEvent){ 
  //   this.paint = true; 
  //   this.getPosition(event);
  //   console.log("start="+ this.coord.x, this.coord.y);
  //   //console.log(event.x,event.y);
  // }

  // stopPainting(){ 
  //   this.paint = false;
  //   console.log("stop");
  //   console.log("end= "+ this.coord.x, this.coord.y);
  //   this.ctx.beginPath(); 
  // }

}
