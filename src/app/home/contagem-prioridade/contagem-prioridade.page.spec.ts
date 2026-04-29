import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContagemPrioridadePage } from './contagem-prioridade.page';

describe('ContagemPrioridadePage', () => {
  let component: ContagemPrioridadePage;
  let fixture: ComponentFixture<ContagemPrioridadePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContagemPrioridadePage]
    }).compileComponents();

    fixture = TestBed.createComponent(ContagemPrioridadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
