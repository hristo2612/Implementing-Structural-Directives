import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfAsComponent } from './if-as.component';

describe('IfAsComponent', () => {
  let component: IfAsComponent;
  let fixture: ComponentFixture<IfAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
