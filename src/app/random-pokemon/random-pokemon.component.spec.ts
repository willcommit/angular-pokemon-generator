import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { PokemonService } from '../pokemon/pokemon.service';
import { RandomPokemonComponent } from './random-pokemon.component';

describe('RandomPokemonComponent', () => {
  let component: RandomPokemonComponent;
  let fixture: ComponentFixture<RandomPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ RandomPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
