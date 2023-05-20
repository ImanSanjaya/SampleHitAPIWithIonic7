import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {

  DataUser : any;

  constructor(
    private api : ApiServiceService
  ) { }

  GetAllUsers(){
    this.api.GetListUser().subscribe( (res:any) =>{
      this.DataUser = res['data'];
      console.log('Data User ===>'+JSON.stringify( res['data']) );
    });
  }

  ngOnInit() {
    this.GetAllUsers();
  }

}
