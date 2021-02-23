import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('clear')public clearbtn?:ElementRef;
  height:number=0
  width:number=0
  context?:CanvasRenderingContext2D

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    const btncls = this.clearbtn?.nativeElement;
    //btncls.addEventListener('click',clear)
  }

  view(context: CanvasRenderingContext2D){
    console.log("in play= ",context);
    this.context=context;
    //console.log("h=",height,"w=",width);
    
    //context.clearRect(0,0,0,0);
  }

  getW(wdth:number){
    console.log("width in play=",wdth);
    this.width=wdth;
  }

  getH(ht:number){
    console.log("height in play=",ht);
    this.height=ht;
  }

  cls(){
    console.log("cls clicked");
    
    this.context?.clearRect(0,0,this.width, this.height);
  }

  getImg(imgUri:string){
    console.log('save in play');
    console.log(imgUri);
  }

  save(){
    console.log('yes');
    var snd = new Audio('/assets/juntos607.mp3');
    snd.play(); 
  }
  
}
