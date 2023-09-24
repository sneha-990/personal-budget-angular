import { Component } from '@angular/core';

// type Budget = {
//   title: string;
//   budget: number;
// }

@Component({
  selector: 'pb-d3js-pie',
  templateUrl: './d3js-pie.component.html',
  styleUrls: ['./d3js-pie.component.scss']
})
export class D3jsPieComponent {

  // private svg: any;
  // private margin = 50;
  // private width = 750;
  // private height = 600;
  // // The radius of the pie chart is half the smallest side
  // private radius = Math.min(this.width, this.height) / 2 - this.margin;
  // private colors: any;

  // constructor(private dataService: DataService, private http: HttpClient) {
    
  // }

  // ngOnInit(): void {
  //   if (this.dataService.dataSource.datasets[0].data.length == 0 || this.dataService.dataSource.labels.length == 0) {
  //     this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
  //       let data: any[] = [];
  //       for (const i of res.myBudget) {
  //         data.push({label: i.title, value: i.budget})
  //       }
  //       this.dataService.data = data;
  //       console.log(this.dataService.data);
        
  //       this.createSvg();
  //       this.createColors();
  //       this.drawChart();
  //     }); 
  //   }
  // }

  // private createSvg(): void {
  //   this.svg = d3.select("figure#pie")
  //   .append("svg")
  //   .attr("width", this.width)
  //   .attr("height", this.height)
  //   .append("g")
  //   .attr(
  //     "transform",
  //     "translate(" + this.width / 2 + "," + this.height / 2 + ")"
  //   );
  // }

  // private createColors(): void {
  //   this.colors = d3.scaleOrdinal()
  //   .domain(this.dataService.data)
  //   .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  // }

  // private drawChart(): void {
  //   // Compute the position of each group on the pie:
  //   const pie = d3.pie<any>().value((d: any) => Number(d.Stars));
  
  //   // Build the pie chart
  //   this.svg
  //   .selectAll('pieces')
  //   .data(pie(this.dataService.data))
  //   .enter()
  //   .append('path')
  //   .attr('d', d3.arc()
  //     .innerRadius(0)
  //     .outerRadius(this.radius)
  //   )
  //   .attr('fill', (d: any, i: any) => (this.colors(i)))
  //   .attr("stroke", "#121926")
  //   .style("stroke-width", "1px");
  
  //   // Add labels
  //   const labelLocation = d3.arc()
  //   .innerRadius(100)
  //   .outerRadius(this.radius);
  
  //   this.svg
  //   .selectAll('pieces')
  //   .data(pie(this.dataService.dataSource.labels))
  //   .enter()
  //   .append('text')
  //   .text((d: any)=> d.data.Framework)
  //   .attr("transform", (d: any) => "translate(" + labelLocation.centroid(d) + ")")
  //   .style("text-anchor", "middle")
  //   .style("font-size", 15);
  // }
}
