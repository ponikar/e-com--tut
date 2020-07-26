import React from 'react'

import { Route } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { fetchCollectionStart } from '../../redux/shop-data/shop.action';
import CollectionOverViewContainer from '../collection-overview/collection-overview.container';
import CatrgoryPageContainer from '../../Pages/category/category.container';
// import { useEffect } from 'react';


const ShopPage = ({ match }) => {
      
        return(
            <div className="shop-page">
               <Route exact path={`${match.path}`} component={CollectionOverViewContainer}  />
               <Route path={`${match.path}/:categoryId`} component={CatrgoryPageContainer}  />
            </div>
        );
}



export default ShopPage;