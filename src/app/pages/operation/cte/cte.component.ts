import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CteService } from './cte.service';

@Component({
  selector: 'ngx-cte',
  templateUrl: `./cte.component.html`,
})
export class CteComponent implements OnInit {

  public loadead: boolean = false;
  public seaching: boolean = false;
  public path: string = '[alert][goto][dfe]';
  public data: any;
  public form: FormGroup;

  constructor(
    public fb: FormBuilder,
    public service: CteService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    ) {
    this.createForm()
  }

  ngOnInit(): void {
    this.loadForm()
  }

  public loadForm() {

    if (sessionStorage.getItem(this.path) !== null) {
      this.value.setValue(JSON.parse( sessionStorage.getItem(this.path)))
      sessionStorage.removeItem(this.path);
      this.loadead = true;
    }
  }

  public createForm(){
     this.form = this.fb.group({

      value: new FormControl(
        null, [
          Validators.required,
        ]),
    })
  }

  public voltar(){
    this.router.navigate([ '../operation/alert' ], { relativeTo: this.activeRouter.parent });
  }

  public get value() {
    return this.form.get('value');
  }


}
