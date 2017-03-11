/**
 * Created by bnjm on 2/4/17.
 */
export interface NavigationItem {
  label: string;
  link: string;
  isActive: boolean;

  setActive() :void;
  getClass() :string;
}

export class NavigationItem implements NavigationItem {
  constructor(public label: string, public link: string, public isActive:boolean) { }

  setActive() { this.isActive = !this.isActive }

  getClass() :string {
    if(this.isActive) {
      return "active";
    }
    return "";
  }
}
