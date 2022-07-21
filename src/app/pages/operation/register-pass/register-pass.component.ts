import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbIconConfig, NbTabComponent, NbTabsetComponent, NbToastrService } from '@nebular/theme';
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

  @ViewChild("tabset")
  public tabs: NbTabsetComponent;

  @ViewChild("tabOne")
  public tabOne: NbTabComponent;

  @ViewChild("tabTwo")
  public tabTwo: NbTabComponent;

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
      this.validTab();
      return;
    }
    this.loading = true;
    this.service.save(this.form.value).subscribe(
      () => {
        this.loading = false;
        this.toastrService.success('','Concluido com Sucesso')
        this.limpar();
      },
      () => {
        this.toastrService.danger('Erro','Não foi possivel comunicar com o servidor')
        this.loading = false;
      },
    );

  }

  public validTab(): void {

    if(
      this.uf.valid &&
      this.direction.valid &&
      this.ufDestiny.valid &&
      this.regress.valid
      ){
        this.tabs.selectTab(this.tabTwo);
      }
  }

  public limpar(){
    this.submitted = false;
    this.tabs.selectTab(this.tabOne);
    this.form.reset();
  }

  public createForm() {

    this.form = this.fb.group({

      uf: new FormControl(
        null, [
        Validators.required,
      ]),

      direction: new FormControl(
        null, [
        Validators.required,
      ]),

      ufDestiny: new FormControl(
        null, [
      ]),

      regress: new FormControl(
        null, [
      ]),

      plate: new FormControl(
        null, [
        Validators.required,
      ]),

      ufCar: new FormControl(
        null, [
        Validators.required,
      ]),

      ufCompanion: new FormControl(
        null, [
      ]),

      observation: new FormControl(
        null, [
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

  public get direction() {
    return this.form.get('direction');
  }

  public get ufDestiny() {
    return this.form.get('ufDestiny');
  }

  public get regress() {
    return this.form.get('regress');
  }

  public get plate() {
    return this.form.get('plate');
  }

  public get ufCar() {
    return this.form.get('ufCar');
  }

  public get ufCompanion() {
    return this.form.get('ufCompanion');
  }

  public get observation() {
    return this.form.get('observation');
  }

}
