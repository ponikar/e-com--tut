
import CollectionOverview from "./collection-overview.component";
import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop-data/shop-data.selector";







const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
});

const CollectionOverViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);




export default CollectionOverViewContainer;