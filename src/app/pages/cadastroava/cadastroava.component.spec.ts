import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroavaComponent } from './cadastroava.component';

describe('CadastroavaComponent', () => {
  let component: CadastroavaComponent;
  let fixture: ComponentFixture<CadastroavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroavaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
