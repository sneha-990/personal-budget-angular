import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-chartjs-pie',
  templateUrl: './chartjs-pie.component.html',
  styleUrls: ['./chartjs-pie.component.scss']
})
export class ChartjsPieComponent {
  // public chart: any;

  constructor() {
    
  }

  // async ngOnInit(): Promise<void> {
  //   if (this.dataService.dataSource.datasets[0].data.length == 0 || this.dataService.dataSource.labels.length == 0) {
  //     this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
  //       for (var i = 0; i < res.myBudget.length; i++) {
  //         this.dataService.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
  //         this.dataService.dataSource.labels[i] = res.myBudget[i].title;
  //       }
  //       // this.dataService.fetchData();
  //       this.createChart();
  //     });
  //   }
  // }

  // createChart() {
  //   this.chart = new Chart(<HTMLCanvasElement>document.getElementById('myChart'), {
  //     type: 'pie',
  //     data: this.dataService.dataSource
  //   });
  // }
}
