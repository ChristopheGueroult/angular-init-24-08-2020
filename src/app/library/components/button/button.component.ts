import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() link: string;
  @Input() route: string;
  @Input() label: string;
  @Input() action: boolean;
  constructor() {
  }
  ngOnInit(): void {
  }

  public doAction() {
    console.log('btn clicked');
  }

}
