import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coach-a',
  templateUrl: './coach-a.component.html',
  styleUrls: ['./coach-a.component.css'],
})
export class CoachAComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  paramsId = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.paramsId = id;
  }

  goToCoachB() {
    console.log('working on it');
    this.router.navigate(['../', { id: this.paramsId }], {
      relativeTo: this.route,
    });
  }
}
