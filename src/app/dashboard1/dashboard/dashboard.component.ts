import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef,  OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { multi } from './data';
import {single, multii} from './single';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  multi: any[];
  view: any[] = [700, 400];
  single: any[];
  multii: any[];
a = 530;
b = 350;
c= 300;
d = 250;
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  below: string = "below";

  ngOnInit(): void {
  }
  mobileQuery: MediaQueryList;
  
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    Object.assign(this, { multi });
    Object.assign(this, {single, multii}) ;
  }
  onnSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


 
  colorScheme = {
    domain: ['#9370DB', '#9932CC']
  };
  colorSchemee = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#9932CC']
  };
 

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}


