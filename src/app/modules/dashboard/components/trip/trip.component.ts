import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  tripForm = this.fb.group({
    startDate: [],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
