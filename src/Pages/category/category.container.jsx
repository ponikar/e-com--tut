


import CategoryPage from './category.component';
import { selectIsCollectionLoaded, selectCategory } from '../../redux/shop-data/shop-data.selector';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';








const mapStateToProps = (state, ownProps) => ({
    isCollectionLoaded: !selectIsCollectionLoaded(state),
    collection: selectCategory(ownProps.match.params.categoryId)(state)
});


const CatrgoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CatrgoryPageContainer;