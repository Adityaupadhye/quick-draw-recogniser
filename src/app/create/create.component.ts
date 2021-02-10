import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('clear')public clearbtn?:ElementRef;
  height:number=0
  width:number=0
  context?:CanvasRenderingContext2D

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const btncls = this.clearbtn?.nativeElement;
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
    console.log('image in create '+imgUri+' ');
    
  }

  save(){
    console.log('yes');
    
  }

}
