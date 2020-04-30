import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoteListComponent} from "./components/note/note-list/note-list.component";
import {CreateNoteComponent} from "./components/note/create-note/create-note.component";
import { EditNoteComponent } from './components/note/edit-note/edit-note.component';
import { ArchivedNotesComponent } from './components/note/archived-notes/archived-notes.component';
import {ArchivedNoteListComponent} from "./components/note/archivednote-list/archivednote-list.component";

const routes: Routes = [

  {path: '', redirectTo: 'notes', pathMatch: 'full'},
  {path: 'notes', component: NoteListComponent},
  {path: 'add', component: CreateNoteComponent},
  {path: 'edit', component : EditNoteComponent},
  {path: 'archived', component: ArchivedNotesComponent},
  {path: 'archivedlist', component: ArchivedNoteListComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
