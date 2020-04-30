import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivednoteListComponent } from './archivednote-list.component';

describe('ArchivednoteListComponent', () => {
  let component: ArchivednoteListComponent;
  let fixture: ComponentFixture<ArchivednoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivednoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivednoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
