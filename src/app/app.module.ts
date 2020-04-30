import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from "@angular/common/http";
import { NoteListComponent } from './components/note/note-list/note-list.component';
import { CreateNoteComponent } from './components/note/create-note/create-note.component';
import { NoteDetailsComponent } from './components/note/note-details/note-details.component';
import {FormsModule} from "@angular/forms";
import { NavComponent } from './components/site-sections/nav/nav.component';
import { FooterComponent } from './components/site-sections/footer/footer.component';
import { EditNoteComponent } from './components/note/edit-note/edit-note.component';
import { ArchivedNotesComponent } from './components/note/archived-notes/archived-notes.component';
import { ArchivedNoteListComponent } from './components/note/archivednote-list/archivednote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    CreateNoteComponent,
    NoteDetailsComponent,
    NavComponent,
    FooterComponent,
    EditNoteComponent,
    ArchivedNotesComponent,
    ArchivedNoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
