import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { BlacklistService } from './_index';

@Component({
  selector: 'ngx-blacklist',
  styleUrls: ['./blacklist.component.scss'],
  templateUrl: `./blacklist.component.html`,
})
export class BlacklistComponent implements OnInit{

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    public service: BlacklistService,
    public toastrService: NbToastrService,
    public router: Router,
    ) {

  }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this.service.save(this.form.value).subscribe(
      () => {
        this.loading = false;
        this.toastrService.success('Concluido','Concluido com Sucesso')
        this.reset();
      },
      () => {
        this.toastrService.danger('Erro','Não foi possivel comunicar com o servidor')
        this.loading = false;
      },
    );

  }


  public reset(){
    this.submitted = false;
    this.form.reset();
  }

  public createForm() {

    this.form = this.fb.group({

      personType: new FormControl(
        null, [
        Validators.required,
      ]),

      ie: new FormControl(
        null, [
      ]),

      cnpj: new FormControl(
        null, [
        Validators.required,
      ]),

      reasonOutOf: new FormControl(
        null, [
      ]),

      reasonCanceled: new FormControl(
        null, [
      ]),

    });
  }

  public getStatus(field: any): string {

    if (!this.submitted ) {
      return 'basic';
     }

     if (field.valid) {
       return 'success';
     }

     return 'danger';

  }

  public get personType() {
    return this.form.get('personType');
  }

  public get ie() {
    return this.form.get('ie');
  }

  public get cnpj() {
    return this.form.get('cnpj');
  }

  public get reasonOutOf() {
    return this.form.get('reasonOutOf');
  }

  public get reasonCanceled() {
    return this.form.get('reasonCanceled');
  }

}
