import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    this.service.save(this.form.value).subscribe(
      () => {
        this.toastrService.success('A','B')
      },

      () => {
        this.toastrService.danger('C','D')
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
