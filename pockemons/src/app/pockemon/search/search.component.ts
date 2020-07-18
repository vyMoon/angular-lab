import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name = new FormControl('');

  constructor(
    private router: Router,
    private activRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activRoute.queryParams.subscribe( ({ pockemon }) => this.name.setValue(pockemon) );
  }

  onClickSearch(): void {
    this.router.navigate(['/board'], {queryParams: {pockemon: this.name.value}});
  }

}
