import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { LifecycleDemo } from './lifecycle-demo/lifecycle-demo';
import { Parent } from './parent/parent';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App,LifecycleDemo,Parent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, LifecycleHooksDemoDay21');
  });
});
