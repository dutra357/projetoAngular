import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrodocComponent } from './cadastrodoc.component';

describe('CadastrodocComponent', () => {
  let component: CadastrodocComponent;
  let fixture: ComponentFixture<CadastrodocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrodocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
