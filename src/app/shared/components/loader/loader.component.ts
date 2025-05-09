import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  imports:[MatProgressBarModule,CommonModule]
})
export class LoaderComponent {
  constructor(public loaderService: LoaderService) {
  }

  loading:boolean = false;
  ngOnInit(){
    this.loaderService.loading$.subscribe(data=>this.loading = data)
  }
}
