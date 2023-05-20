import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListUsersPage } from './list-users.page';

describe('ListUsersPage', () => {
  let component: ListUsersPage;
  let fixture: ComponentFixture<ListUsersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
