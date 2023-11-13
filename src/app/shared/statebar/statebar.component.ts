import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-statebar',
  templateUrl: './statebar.component.html',
  styles: [
  ]
})
export class StatebarComponent implements OnInit {

  public showSaldo = false;

  constructor(
    public authService: AuthService,
    public dataService: DataService
  ) { }

  ngOnInit(): void {}

}
