import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDeveloperComponent } from './board-developer.component';

describe('BoardDeveloperComponent', () => {
  let component: BoardDeveloperComponent;
  let fixture: ComponentFixture<BoardDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardDeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
