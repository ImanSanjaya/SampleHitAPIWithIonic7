import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {

  form = {
    name : '',
    job : ''
  };

  id = 2;

  constructor(
    private api : ApiServiceService ,
    private alert : AlertController
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

  doPutUpdateUser(){
    this.api.UpdateUser(this.id, this.form)
            .subscribe( data => {
              const jsonResponse = JSON.parse(JSON.stringify(data));
              console.log(jsonResponse.name);
              console.log("Success ==> "+ JSON.stringify(data)); 
              this.presentAlert('Berhasil' , 'Anda Sudah Update Data User Dengan Benar'); 
            },
            err => {
              console.error('Gagal Update user ===> ', err.status);
              this.presentAlert('Gagal Update user', 'Update user gagal. Silahkan cek kembali jaringan internet anda.');
            });
  }

  doSubmitWithValidateFormInput(){

    var doSubmitForm = true;

    if(this.form.name == null || this.form.name == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data Nama Lengkap');
      doSubmitForm = false;
    }

    if(this.form.job == null || this.form.job == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
      doSubmitForm = false;
    }

    if(doSubmitForm){
      this.doPutUpdateUser();
    }

  }

  ngOnInit() {
  }

}
