import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValorEstoquePage } from './valor-estoque.page';

describe('ValorEstoquePage', () => {
  let component: ValorEstoquePage;
  let fixture: ComponentFixture<ValorEstoquePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorEstoquePage]
    }).compileComponents();

    fixture = TestBed.createComponent(ValorEstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
