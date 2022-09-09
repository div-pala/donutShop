import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/interfaces/donut';
import { Result } from 'src/app/interfaces/donuts';
import { DonutService } from 'src/app/services/donut-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  donutsList : Result[] | undefined;
  
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
    this.getDonutServiceListResponse();
  }

  getDonutServiceListResponse() {
    this.donutService.getAllDonutsList().subscribe((data) => {
        console.log(data),
        console.log(data.results),
        this.donutsList = data.results
      });
  }

}
