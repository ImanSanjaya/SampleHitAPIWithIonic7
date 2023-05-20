import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/api/api-service.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  form = {
    name : '',
    job : ''
  }

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

  doPostCreateUser(){
    this.api.CreateUser(this.form)
            .subscribe( data => {
              const jsonResponse = JSON.parse(JSON.stringify(data));
              console.log(jsonResponse.id);
              console.log("Success ==> "+ JSON.stringify(data)); 
              this.presentAlert('Berhasil' , 'Anda Sudah Input Data User Dengan Benar'); 
            },
            err => {
              console.error('Gagal Create user ===> ', err.status);
              this.presentAlert('Gagal Create user', 'Create user gagal. Silahkan cek kembali jaringan internet anda.');
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
      this.doPostCreateUser();
    }

  }

  ngOnInit() {
  }

}
