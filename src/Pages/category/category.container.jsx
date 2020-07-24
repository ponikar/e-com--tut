


import CategoryPage from './category.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop-data/shop-data.selector';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';







const mapStateToProps = createStructuredSelector({
    isCollectionLoaded: state => !selectIsCollectionLoaded(state)
});


const CatrgoryPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryPage);

export default CatrgoryPageContainer;