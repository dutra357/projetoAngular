import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroturmaComponent } from './cadastroturma.component';

describe('CadastroturmaComponent', () => {
  let component: CadastroturmaComponent;
  let fixture: ComponentFixture<CadastroturmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroturmaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroturmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
