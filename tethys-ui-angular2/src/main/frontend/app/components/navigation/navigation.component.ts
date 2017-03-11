import {Component, OnInit} from "@angular/core";
import {NavigationItem} from "./navigationItem";

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private navigationItems: NavigationItem[] = [];

  constructor() {
  }

  private initNavigationList(): void {
    this.navigationItems.push(new NavigationItem("Home", "/", true));
    this.navigationItems.push(new NavigationItem("Todos", "/todos", false));
    this.navigationItems.push(new NavigationItem("Benchmark", "/benchmark", false));
    this.navigationItems.push(new NavigationItem("Metrics", "/metrics", false));
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
    let activeItem: NavigationItem = this.navigationItems.find((item) => {
      return item.isActive;
    });
    activeItem.setActive();
    item.setActive();
  }

}
