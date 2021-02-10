import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  
  classes=['Sun', 'Flower', 'Umbrella', 'Pencil', 'Spoon', 'Tree', 'Spectacles', 'House', 'Bird', 'Hand'];
  constructor() { }
  
  ngOnInit(): void {
  } 

  @Output() classname = new EventEmitter<string>();

  sendClassname(name:string){
    var class1 = name;
    this.classname.emit(class1);
    
  }

  

}
