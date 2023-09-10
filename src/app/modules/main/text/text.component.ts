import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextService } from 'src/app/shared/api/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {

  tagData: any
  tagName: any
  tagOption: any
  toppings = new FormControl('');
  constructor(private data: TextService) {
    this.tagData = this.data.getData()
  }
}
