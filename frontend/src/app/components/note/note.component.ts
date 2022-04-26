import { Component, Input, OnInit } from '@angular/core';
import { Inote } from 'src/app/interfaces/inote';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  @Input() note!: Inote;
  
  constructor() { }

  ngOnInit() {}

}
