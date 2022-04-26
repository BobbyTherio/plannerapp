import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Inote } from '../interfaces/inote';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  notes!:Inote[];

  constructor(private noteService:NoteService, private navCtrl: NavController) {}

  addNote() {
    this.navCtrl.navigateForward(['add-note']);
  }


  ionViewWillEnter(){
    console.log("I am in Tab 3");
    this.noteService.getNotes().subscribe((results) => {
      this.notes = results;
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() : void {}

}
