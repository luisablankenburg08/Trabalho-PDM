import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarprodutosPage } from './listarprodutos.page';

describe('ListarprodutosPage', () => {
  let component: ListarprodutosPage;
  let fixture: ComponentFixture<ListarprodutosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
