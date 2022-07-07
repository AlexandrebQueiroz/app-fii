import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { OccurrenceService } from './occurrence.service';

@Component({
  selector: 'ngx-occurrence',
  templateUrl: `./occurrence.component.html`,
})
export class OccurrenceComponent implements OnInit{

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    public service: OccurrenceService,
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
        this.toastrService.success('Exemplo','Exemplo de mensagem')
        this.router.navigate([ './pages/operation/alert' ]);
      },
      () => {
        this.toastrService.danger('Exemplo','Exemplo de mensagem')
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
        Validators.required,
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

}
