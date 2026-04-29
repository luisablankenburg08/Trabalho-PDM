import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltrarTarefasPage } from './filtrar-tarefas.page';

describe('FiltrarTarefasPage', () => {
  let component: FiltrarTarefasPage;
  let fixture: ComponentFixture<FiltrarTarefasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarTarefasPage]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltrarTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
