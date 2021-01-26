import { Component, OnInit } from '@angular/core';
import { CakeService } from '../../services/cake.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cakes: string[] = [
    'Carrot Cake',
    "Madera Cake",
    "Upside-down cake"
  ];
  cakeForm: FormGroup;
  validMessage: string = ""

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.cakeForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    });
  }

  submitCake() {

    if(this.cakeForm.valid) {
    this.validMessage = "Your cake has been added.";
    this.cakeService.createCake(this.cakeForm.value).subscribe(
      data => {
        this.cakeForm.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
    )
  } else {
    this.validMessage = "Please complete the form before submitting.";
  }
}

}
