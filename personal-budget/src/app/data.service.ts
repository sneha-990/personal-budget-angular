import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }

  public dataSource = {
  
    datasets: [
        {
            data: [] as any,
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#ff0000',
                '#0000ff',
                '#4d5791',
            ]
        }
    ],
    labels: [] as any
  };
  
  public data: any;

  async fetchData() {
    if (this.dataSource.datasets[0].data.length == 0 || this.dataSource.labels.length == 0) {

      this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
        for (var i = 0; i < res.myBudget.length; i++) {
          this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
          this.dataSource.labels[i] = res.myBudget[i].title;
        }
      })
    }
  }

}
