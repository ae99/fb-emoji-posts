import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiWobbleComponent } from './emoji-wobble.component';

describe('EmojiWobbleComponent', () => {
  let component: EmojiWobbleComponent;
  let fixture: ComponentFixture<EmojiWobbleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiWobbleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiWobbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
