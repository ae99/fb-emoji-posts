import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiRainComponent } from './emoji-rain.component';

describe('EmojiRainComponent', () => {
  let component: EmojiRainComponent;
  let fixture: ComponentFixture<EmojiRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
