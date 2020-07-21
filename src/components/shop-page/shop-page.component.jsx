import React from 'react'

import { Route } from 'react-router-dom'
import CollectionsOverView from '../collection-overview/collection-overview.component';
import CategoryPage from '../../Pages/category/category.component';
import { connect } from 'react-redux';
import { fetchCollectionStartAsycn } from '../../redux/shop-data/shop.action';
import WithSpinner from '../with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop-data/shop-data.selector';


const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component {
   
    componentDidMount() {
        const { fetchCollectionStartAsycn } = this.props;
        fetchCollectionStartAsycn();    
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return(
            <div className="shop-page">
               <Route exact path={`${match.path}`} render={props => <CollectionsOverViewWithSpinner isLoading={isCollectionFetching} {...props} />} />
               <Route path={`${match.path}/:categoryId`} render={props => <CategoryPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsycn: () => dispatch(fetchCollectionStartAsycn())
});

const mapStateToProps = createStructuredSelector({
    isCollectionFetching:selectIsCollectionFetching,

})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);