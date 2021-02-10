import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('clear')public clearbtn?:ElementRef;
  height:number=0
  width:number=0
  class_name: string = ""
  image = ""

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

  getClass(Class_name:string){
    this.class_name = Class_name;
    console.log(Class_name);
  }

  

  cls(){
    console.log("cls clicked");
    
    this.context?.clearRect(0,0,this.width, this.height);
  }

  getImg(imgUri:string){
    this.image = imgUri;
    console.log('image in create '+imgUri+' ');
    
  }

  saveImage(){
    if(this.class_name.length == 0){
      console.log("Not Updated!");
      alert("No class selected\nPlease select an image type");
      return;
    }
    var date = Date.now();
    var filename = this.class_name +'_' + date + '.png';
    this.http.post(
      environment.SERVER_URL + '/upload_canvas',
      {filename, image: this.image, class_name: this.class_name},
      {responseType:'text'}).subscribe((res:any)=>{
        console.log(res, this.class_name)
        this.cls();
      })  
  }

}
