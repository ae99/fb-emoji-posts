import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiTumbleComponent } from './emoji-tumble.component';

describe('EmojiTumbleComponent', () => {
  let component: EmojiTumbleComponent;
  let fixture: ComponentFixture<EmojiTumbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiTumbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiTumbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
