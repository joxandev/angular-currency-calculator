import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectListComponent implements OnInit {
  @Input() listItems: { value: string; text: string }[] = [];
  @Output() selectItem: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('select') select: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {

    const selectItem$ = fromEvent(this.select.nativeElement, 'change');
    selectItem$.subscribe();
  }
}
