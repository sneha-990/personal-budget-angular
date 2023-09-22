import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Chart }  from 'chart.js/auto';
import { elementAt } from 'rxjs';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit{
   
  public dataSource={
  
      datasets: [
          {
              data: [] as any,
              backgroundColor: [
                  '#ffcd56',
                  '#ff6384',
                  '#36a2eb',
                  '#fd6b19',
              ]
          }
      ],
      labels: [] as any
  };

  public chart: any;

  
  constructor (private http: HttpClient) {  
    
  }

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart();
    });

    console.log(this.dataSource);
  }

  createChart() {
    this.chart = new Chart(<HTMLCanvasElement>document.getElementById('myChart'), {
      type: 'pie',
      data: this.dataSource
    });
  }

}
