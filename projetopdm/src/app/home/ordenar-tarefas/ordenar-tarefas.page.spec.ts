import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdenarTarefasPage } from './ordenar-tarefas.page';

describe('OrdenarTarefasPage', () => {
  let component: OrdenarTarefasPage;
  let fixture: ComponentFixture<OrdenarTarefasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenarTarefasPage]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdenarTarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
