import { TestBed } from '@angular/core/testing';

import { IcecreamService } from './icecream.service';

describe('IcecreamService', () => {
  let service: IcecreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcecreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
