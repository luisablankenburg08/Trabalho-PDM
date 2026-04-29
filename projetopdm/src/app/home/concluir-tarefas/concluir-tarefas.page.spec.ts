import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConcluirTarefasPage } from './concluir-tarefas.page';

describe('ConcluirTarefasPage', () => {
  let component: ConcluirTarefasPage;
  let fixture: ComponentFixture<ConcluirTarefasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcluirTarefasPage]
    }).compileComponents();

    fixture = TestBed.createComponent(ConcluirTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
