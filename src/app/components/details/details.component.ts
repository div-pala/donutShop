import { Component, OnInit } from '@angular/core';
import { Donut } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut-service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details:Donut | undefined;
  
  constructor(private donutService:DonutService) { }

  ngOnInit(): void {
      this.getDonutDetailsResponseApi();
  }

  getDonutDetailsResponseApi(){
      this.donutService.getDonutDetails().subscribe((data) => {
      this.details=data,
      console.log(data)
    });
  }

}


