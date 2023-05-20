import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
})
export class DeleteUserPage implements OnInit {

  id : any;

  constructor(
    private api : ApiServiceService,
    private alert: AlertController
  ) { }

  private async presentAlert(title : any, message : any) {
    const alert = await this.alert.create({
      header: 'Sample Form',
      subHeader: title,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  doDeleteUser(){
    this.api.DeleteUser(this.id)
            .subscribe( data => {
              this.presentAlert('Berhasil' , 'Anda Sudah Delete Data User Dengan ID : '+ this.id);  
            },
            err => {
              console.error('Gagal Delete user ===> ', err.status);
              this.presentAlert('Gagal Delete user', 'Delete user gagal. Silahkan cek kembali jaringan internet anda.');
            });
  }

  submitWithValidateFormInput(){

    var doSubmitForm = true;

    if(this.id == null || this.id == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data ID');
      doSubmitForm = false;
    }

    if(doSubmitForm){
      this.doDeleteUser();
    }

  }

  ngOnInit() {
  }

}
