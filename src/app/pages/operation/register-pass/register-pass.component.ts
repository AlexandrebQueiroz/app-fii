import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbIconConfig, NbToastrService } from '@nebular/theme';
import { State } from '../../../@core/data/state';
import { RegisterPassService } from './register-pass.service';

@Component({
  selector: 'ngx-registerpass',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./register-pass.component.html`,
  styles: [`
  :host nb-tab {
    padding: 1.25rem;
  }`],
})
export class RegisterpassComponent implements OnInit{

  public form: FormGroup;
  public submitted: boolean = false;
  public loading: boolean = false;
  public states: State[] = [];

  public bookIcon: NbIconConfig = { icon: 'book-outline', pack: 'eva' };
  public carIcon: NbIconConfig = { icon: 'car-outline', pack: 'eva' };

  constructor(
    public fb: FormBuilder,
    public service: RegisterPassService,
    public toastrService: NbToastrService,
    public router: Router,
    ) {

  }

  ngOnInit(): void {
    this.createForm()
    this.initStates()
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

      uf: new FormControl(
        null, [
        Validators.required,
      ]),

      regress: new FormControl(
        null, [
        Validators.required,
      ]),

      plate: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  public initStates(){
    this.service.getStates().subscribe((states)=>{
      this.states = states;
    })
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

  public get uf() {
    return this.form.get('uf');
  }

  public get regress() {
    return this.form.get('regress');
  }

  public get plate() {
    return this.form.get('plate');
  }

}
