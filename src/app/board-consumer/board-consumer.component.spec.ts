import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardConsumerComponent } from './board-consumer.component';

describe('BoardConsumerComponent', () => {
  let component: BoardConsumerComponent;
  let fixture: ComponentFixture<BoardConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
