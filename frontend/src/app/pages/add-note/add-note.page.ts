import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  addNote : FormGroup = new FormGroup({
    name : new FormControl(''),
    header : new FormControl(''),
    details : new FormControl('', [Validators.required]),
    importance : new FormControl('low', [Validators.required])
  });

  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private noteService: NoteService) { }

  ngOnInit() {
  }

  async add_note() {
    this.noteService.createNote(this.addNote.value).subscribe(() => {
      this.addNote.reset();
    });
    const toast = await this.toastCtrl.create({
      message: 'New note added successfully',
      duration: 3000, 
      position: 'bottom'
    });
    await toast.present();
    await this.navCtrl.navigateBack('/tabs/tab3');
  }

  return() {
    this.navCtrl.navigateBack('/tabs/tab3')
  }
}