import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiShakeComponent } from './emoji-shake.component';

describe('EmojiShakeComponent', () => {
  let component: EmojiShakeComponent;
  let fixture: ComponentFixture<EmojiShakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiShakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiShakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
