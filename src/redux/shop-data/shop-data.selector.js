const { createSelector } = require("reselect");


const selectShop = state => state.shop;


export const selectCollection = createSelector([selectShop],
        shop => shop.collections);


export const selectCollectionForPreview = createSelector([selectCollection],
                collections => collections ? Object.keys(collections).map(key => collections[key]): [])

export const selectCategory = colllectionURLparams => createSelector(
        [selectCollection],
        collections => collections !== null ? collections[colllectionURLparams]: null);

export const selectIsCollectionFetching = createSelector([selectShop], 
                shop => shop.isFetching);       


export const selectIsCollectionLoaded = createSelector([selectShop],
                shop => !!shop.collections)