import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroalComponent } from './cadastroal.component';

describe('CadastroalComponent', () => {
  let component: CadastroalComponent;
  let fixture: ComponentFixture<CadastroalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
