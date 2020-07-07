import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pockemon-header',
  templateUrl: './pockemon-header.component.html',
  styleUrls: ['./pockemon-header.component.scss']
})
export class PockemonHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() style: string;

  @Output() styleChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
