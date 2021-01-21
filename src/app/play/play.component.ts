import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild('clear')public clearbtn?:ElementRef;

  ngOnInit(): void {
      
  }

  ngAfterViewInit(){
    const btncls = this.clearbtn?.nativeElement;
    //btncls.addEventListener('click',clear)
  }

  
}
