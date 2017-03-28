import {Component, OnInit} from "@angular/core";
import {NavigationItem} from "./navigationItem";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private _navigationItems: NavigationItem[] = [];


  private initNavigationList(): void {
    this._navigationItems.push(new NavigationItem("Home", "/", true));
    this._navigationItems.push(new NavigationItem("Todos", "/todos", false));
    this._navigationItems.push(new NavigationItem("Benchmark", "/benchmark", false));
    this._navigationItems.push(new NavigationItem("Metrics", "/metrics", false));
  }

  ngOnInit() {
    this.initNavigationList();
  }


  /**
   * Finds the currently active navigation item and sets it to inactive while setting the argument item
   * as active. (Bootstrap)
   * @param item NavigationItem
   */
  changeActive(item: NavigationItem): void {
    let activeItem: NavigationItem = this._navigationItems.find((item) => {
      return item.isActive;
    });
    activeItem.setActive();
    item.setActive();
  }


  get navigationItems(): NavigationItem[] {
    return this._navigationItems;
  }

  set navigationItems(value: NavigationItem[]) {
    this._navigationItems = value;
  }
}
