import { TestBed } from '@angular/core/testing';

import { ArchivednoteService } from './archivednote.service';

describe('ArchivednoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivednoteService = TestBed.get(ArchivednoteService);
    expect(service).toBeTruthy();
  });
});
