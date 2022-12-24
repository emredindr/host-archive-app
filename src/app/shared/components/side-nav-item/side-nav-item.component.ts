import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '../../models/navigation.model';

@Component({
    selector: 'app-side-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['./side-nav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;

    expanded = false;
    routeData!: SBRouteData;

    constructor() {}
    ngOnInit() {}
}