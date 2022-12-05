import { TestBed } from '@angular/core/testing';

import { ServicioVolunteersService } from './servicio-volunteers.service';

describe('ServicioVolunteersService', () => {
  let service: ServicioVolunteersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVolunteersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
