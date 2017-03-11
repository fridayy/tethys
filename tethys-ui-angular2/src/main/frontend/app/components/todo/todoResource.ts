/**
 * TodoResource - defines a TodoResource
 * Created by bnjm on 2/4/17.
 */
export interface TodoResource {
  resourceId: string;
  title: string;
  markedDone: boolean;
  createdAt: Date;
}
