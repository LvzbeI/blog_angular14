import { TestBed } from '@angular/core/testing';

import { BlogrestService } from './blogrest.service';

describe('BlogrestService', () => {
  let service: BlogrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
