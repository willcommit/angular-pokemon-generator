import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPokemonComponent } from './random-pokemon.component';

describe('RandomPokemonComponent', () => {
  let component: RandomPokemonComponent;
  let fixture: ComponentFixture<RandomPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
