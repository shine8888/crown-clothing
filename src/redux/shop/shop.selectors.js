import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectShopSections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParma) =>
  createSelector([selectShopSections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParma]
    )
  )
);
