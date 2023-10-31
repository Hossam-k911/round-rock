import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import { testymonials, users } from '../../../models/testy-monials.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-testy-monials',
  templateUrl: './testy-monials.component.html',
  styleUrls: ['./testy-monials.component.scss'],
})
export class TestyMonialsComponent implements OnInit {
  pageNo: number = 1;
  users: users[] = [];
  constructor(private service: SharedServiceService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    //  need to ask nadia what type i should give to this res bcs i dont wanna use res:any
    this.service.getUsersData(this.pageNo).subscribe((res: any) => {
      this.users = res.data;
    });
  }
}
