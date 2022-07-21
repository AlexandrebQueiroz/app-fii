import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geo } from '../../../@core/data/alerts';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  templateUrl: './gmaps.component.html',
})
export class GmapsComponent implements OnInit{

  private path = '[alert][goto][maps]';
  public loaded = false;
  public geo: Geo;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
  ){

  }

  ngOnInit(): void {
    this.loadForm()
  }

  public loadForm() {
    if (sessionStorage.getItem(this.path) === null) {
      this.voltar();
    }

    this.geo = JSON.parse( sessionStorage.getItem(this.path));
    sessionStorage.removeItem(this.path);
    this.loaded = true;
  }

  public voltar(){
    this.router.navigate([ '../operation/alert' ], { relativeTo: this.activeRouter.parent });
  }
}
