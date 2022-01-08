import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopSections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopSections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParmam) =>
  createSelector(
    [selectShopSections],
    (collections) => collections[collectionUrlParmam]
  )
);
