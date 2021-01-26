import { Component, OnInit } from '@angular/core';
import { CakeService } from '../../services/cake.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-create',
  templateUrl: './view-create.component.html',
  styleUrls: ['./view-create.component.css']
})
export class ViewCreateComponent implements OnInit {

  public cakeCr;

  constructor(private cakeService: CakeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCakeCr(this.route.snapshot.params.id);
  }

  getCakeCr(id:number) {
    this.cakeService.getCake(id).subscribe(
      data => {
        this.cakeCr = data;
      },
      err => console.error(err),
      () => console.log('cakes loaded')
    );
  }

}
