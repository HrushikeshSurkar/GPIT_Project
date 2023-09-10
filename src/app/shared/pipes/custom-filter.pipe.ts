import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class CustomFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items || !searchText) {
            return items;
        }

        return items.filter(item => item.key.toLowerCase().includes(searchText.toLowerCase()));
    }
}
