/**
 * Created by bnjm on 2/4/17.
 */
export interface PageMetadata {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export class PageMetadataImpl implements PageMetadata {
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
