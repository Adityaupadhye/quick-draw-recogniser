
import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-canvas',
  templateUrl: './my-canvas.component.html',
  styleUrls: ['./my-canvas.component.css']
})
export class MyCanvasComponent implements OnInit, AfterViewInit {

  constructor(  ) { }

   @ViewChild("myCanvas") public canvasE?: ElementRef;
   @ViewChild("canvasDiv") public div?: ElementRef;

   w=384;
   h=384;

   ctx?: CanvasRenderingContext2D;
   event?:MouseEvent

  coord = {x:0 , y:0};  
  paint = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log("div=",this.div);
    const canvas = this.canvasE?.nativeElement;
    console.log("in init ",canvas);
    
    const cdiv = this.div?.nativeElement;
    this.ctx = canvas.getContext('2d');

    console.log("context=",this.ctx);

    //resize canvas
    window.addEventListener('resize',()=>{
      this.resize(canvas,cdiv)
    })
    this.resize(canvas,cdiv);

    //mouse events
     
  }

  resize(c: HTMLCanvasElement, div : HTMLElement){
    //const c:HTMLCanvasElement = this.canvasE?.nativeElement;
    //console.log("in resize ",c);
    // c.width = this.div?.nativeElement.clientWidth-50;
    // c.height = this.div?.nativeElement.clientHeight-50;
    c.width=this.w;
    c.height=this.h;
    console.log("div= "+ this.div?.nativeElement.clientHeight, this.div?.nativeElement.clientWidth); 
  }

  getPosition(event:MouseEvent){ 
    var rect= this.canvasE?.nativeElement.getBoundingClientRect();
    //console.log(rect);
    
    //rect.x, rect.y gives position of canvas wrt browser size
    this.coord.x = event.clientX-rect.x; 
    this.coord.y = event.clientY-rect.y; 
  }

  startPainting(event: MouseEvent){ 
    this.paint = true; 
    this.getPosition(event);
    console.log("start="+ this.coord.x, this.coord.y);
    console.log("start= ",this.ctx);
    
    //console.log(event.x,event.y);
  }

  stopPainting(){ 
    this.paint = false;
    console.log("stop");
    console.log("end= "+ this.coord.x, this.coord.y);
    this.ctx?.beginPath(); 

    this.sendData();
    this.save();
  }

  sketch(event: MouseEvent){ 
    //if (!paint) return; 
    if(event.buttons != 1) return;
  
    this.ctx!.lineWidth = 5; 
    this.ctx!.lineCap = 'round'; 
    this.ctx!.strokeStyle = 'black'; 
        
    // The position of the cursor 
    // gets updated as we move the 
    // mouse around. 
    this.getPosition(event); 
     
    // A line is traced from start 
    // coordinate to this coordinate 
    this.ctx?.lineTo(this.coord.x , this.coord.y);
      
    // Draws the line.
    this.ctx?.stroke(); 
  }

  @Output() send = new EventEmitter<CanvasRenderingContext2D>();
  @Output() sendw = new EventEmitter<number>();
  @Output() sendh = new EventEmitter<number>();
  @Output() sendImg = new EventEmitter<string>();


  sendData(){
    this.send.emit(this.ctx);
    this.sendw.emit(this.canvasE?.nativeElement.width);
    this.sendh.emit(this.canvasE?.nativeElement.height);
    //this.clear();
  }

  public save(){
    console.log('save clicked');
    
    var canvas = this.canvasE?.nativeElement;
    var image = canvas.toDataURL("image/png");
    console.log(image);
    this.sendImg.emit(image);
    // this.http.post("https://quickdraw.autonise.com/api/test",{image}); 
  }

  public clear(){
    console.log("clear called");
    this.ctx?.clearRect(0,0,this.canvasE?.nativeElement.width, this.canvasE?.nativeElement.height)
  }

}
