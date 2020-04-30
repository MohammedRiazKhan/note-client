import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../../model/note/note";
import {NoteService} from "../../../services/note/note.service";
import {NoteListComponent} from "../note-list/note-list.component";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  @Input() note: Note;

  constructor(private noteService: NoteService, private noteList: NoteListComponent) { }

  ngOnInit() {
  }

}
