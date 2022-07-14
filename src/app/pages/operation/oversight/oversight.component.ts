import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { OversightService } from './oversight.service';

@Component({
  selector: 'ngx-oversight',
  templateUrl: `./oversight.component.html`,
})
export class OversightComponent implements OnInit{

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    public service: OversightService,
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
        this.router.navigate([ './pages/operation/alert' ]);
      },
      () => {
        this.toastrService.danger('Erro','Não foi possivel comunicar com o servidor')
        this.loading = false;
      },
    );

  }

  public createForm() {

    this.form = this.fb.group({

      plate: new FormControl(
        null, [
        Validators.required,
      ]),

      direction: new FormControl(
        null, [
        Validators.required,//'/[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/'
      ]),

      vehicle: new FormControl(
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

  public get plate() {
    return this.form.get('plate');
  }

  public get direction() {
    return this.form.get('direction');
  }

  public get vehicle() {
    return this.form.get('vehicle');
  }

}
