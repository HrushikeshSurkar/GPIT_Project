import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextService } from 'src/app/shared/api/text.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  tagData: any;
  toppings = new FormControl([]);
  filteredTagData: any;
  selectedValues: string[] = []; // Store selected values here

  constructor(private data: TextService) {
    this.tagData = this.data.getData();
    this.filteredTagData = this.tagData; // Initialize with all data
  }

  // Function to handle selection change in mat-select
  onSelectionChange(event: any) {
    this.selectedValues = event.value;
  }

  // Function to check if a value is selected
  isSelected(value: string): boolean {
    return this.selectedValues.includes(value);
  }

  filterOptions(searchTerm: string) {
    if (!searchTerm) {
      // If the search term is empty, show all options
      this.filteredTagData = this.tagData;
      return;
    }

    // Filter options based on the search term and selected values
    this.filteredTagData = this.tagData.map((group: any[][]) => [
      group[0],
      group[1].filter(item => {
        const isMatch = item.key.toLowerCase().includes(searchTerm.toLowerCase());
        const isSelected = this.selectedValues.includes(item.key);
        return isMatch || isSelected;
      })
    ]);
  }
}
