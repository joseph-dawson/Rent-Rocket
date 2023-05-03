import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAPIComponent } from './map-api.component';

describe('MapAPIComponent', () => {
  let component: MapAPIComponent;
  let fixture: ComponentFixture<MapAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
