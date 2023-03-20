export enum SHOP_ACTION_TYPES {
  FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START',
  FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
  FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE',
  ITEM_UPDATE_START = 'ITEM_UPDATE_START',
  ITEM_UPDATE_SUCCESS = 'ITEM_UPDATE_SUCCESS',
  ITEM_UPDATE_FAILURE = 'ITEM_UPDATE_FAILURE'
};

export type CategoryItem = {
  id: string;
  imageUrl: string[];
  name: string;
  category: string;
  price: number;
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}
