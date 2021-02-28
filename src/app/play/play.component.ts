import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) { }

  @ViewChild('clear')public clearbtn?:ElementRef;
  height:number=0
  width:number=0
  context?:CanvasRenderingContext2D
  result=''
  imgurl=""
  classes = ['Bird', 'Flower', 'Hand', 'House', 'Pencil', 'Spectacles', 'Spoon', 'Sun', 'Tree', 'Umbrella']

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
    this.result = ''
  }

  getImg(imgUri:string){
    console.log('save in play');
    this.imgurl=imgUri;
    console.log(imgUri);
  }

  save(){
    console.log('yes');
    var snd = new Audio('./assets/juntos607.mp3');
    
    // this.http.get(environment.SERVER_URL+'/api/test' ,{responseType: 'text'})
    //   .subscribe((res:any)=>{
    //     console.log('result=',res);
    //     snd.play(); 
    //     alert(res);
    //   }) 

    console.log('image=', this.imgurl);
    this.http.post(
      environment.SERVER_URL+'/api/result',
      {'url': this.imgurl},
      {responseType: 'text'}
    ).subscribe((res: any)=>{
      console.log('result= ',res);
      this.result ='You have drawn ' + res;
      snd.play();
    })
    
    
  }
  
}
