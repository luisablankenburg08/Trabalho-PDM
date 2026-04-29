import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarProdutosPage } from './cadastrar-produtos.page';

describe('CadastrarProdutosPage', () => {
  let component: CadastrarProdutosPage;
  let fixture: ComponentFixture<CadastrarProdutosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarProdutosPage]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastrarProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
