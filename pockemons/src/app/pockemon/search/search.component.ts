import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  name = new FormControl('');

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClickSearch() {
    // console.log(this.name.value);
    this.router.navigate(['/board'], {queryParams: {pockemon: this.name.value}})
  }

}
