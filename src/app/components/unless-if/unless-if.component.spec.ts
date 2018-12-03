import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlessIfComponent } from './unless-if.component';

describe('UnlessIfComponent', () => {
  let component: UnlessIfComponent;
  let fixture: ComponentFixture<UnlessIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlessIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlessIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
