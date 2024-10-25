import { Component, OnInit } from '@angular/core';
import { InitWcService } from './services/init-wc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showWC: boolean = false;

  constructor(private initWcService: InitWcService) {}
  ngOnInit(): void {
    this.initWcService.showWC$.subscribe((show) => {
      this.showWC = show;
    });
  }
}
