import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PokemonService } from './pokemon.service';
import { TestBed } from '@angular/core/testing';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
