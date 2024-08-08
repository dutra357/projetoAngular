import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocComponent } from './listadoc.component';

describe('ListadocComponent', () => {
  let component: ListadocComponent;
  let fixture: ComponentFixture<ListadocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
