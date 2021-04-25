import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.css']
})
export class CoachesComponent implements OnInit {

  coaches = [];

  constructor(private signUpService: SignupService) { }

  ngOnInit(): void {
    this.fetchCoaches();
  }

  async fetchCoaches(): Promise<void> {
    const data = await this.signUpService.getCoaches().toPromise();
    // tslint:disable-next-line: forin
    for (const key in data) {
      const coach = {
          id: key,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          description: data[key].description,
          hourlyRate: data[key].hourlyRate,
          areas: data[key].areas
      };
      console.log(coach);
      this.coaches.push(coach);
  }
    // console.log(this.coaches);
  }

}
