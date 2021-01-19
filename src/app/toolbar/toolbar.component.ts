import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavButton} from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() navButtons: NavButton[];
  @Input() onNavButtonClick: (index: number) => void;
  @Input() activeNavButton: number | undefined;
  @Output() activeNavButtonChange = new EventEmitter<undefined>();
  @Output() toggleSidenav = new EventEmitter<void>();
  mobileQuery: MediaQueryList;

  private readonly mobileQueryListener: () => void;

  constructor(
    mediaMatcher: MediaMatcher,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = mediaMatcher.matchMedia('(max-width: 1080px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  onCenterButtonMenuClose = () => {
    this.activeNavButtonChange.emit(undefined);
  }
}
