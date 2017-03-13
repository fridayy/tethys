/**
 * Created by bnjm on 3/11/17.
 */
export interface LinkItem {
  first: string;
  prev: string;
  self: string;
  next: string;
  last: string;
}

export class LinkItemImpl implements LinkItem {
  first: string = "";
  prev: string = "";
  self: string = "";
  next: string = "";
  last: string = "";


  constructor() {
  }
}
