import SHOP_DATA from "./shop.data";
import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

export const shopReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: actions.payload };
    default:
      return state;
  }
};
