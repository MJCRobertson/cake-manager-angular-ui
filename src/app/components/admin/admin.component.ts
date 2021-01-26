import { Component, OnInit } from '@angular/core';
import { CakeService } from '../../services/cake.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public cakes;

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.getCakes();
  }

  getCakes() {
    this.cakeService.getCakes().subscribe(
      data => {this.cakes = data},
      err => console.error(err),
      () => console.log('Cakes loaded')
    );
  }

}
