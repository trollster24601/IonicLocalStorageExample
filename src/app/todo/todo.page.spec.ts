import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TodoPage } from './todo.page';

describe('TodoPage', () => {
  let component: TodoPage;
  let fixture: ComponentFixture<TodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoPage],
    })
    .compileComponents(); // This is asynchronous, so use the async function
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
