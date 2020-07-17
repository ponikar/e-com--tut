import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionForPreview } from '../../redux/shop-data/shop-data.selector';
import PreviewCollection from '../preview-collection/preview-collection.component';




const CollectionsOverview = ({ collections }) => (
<div className="collection-overview">
{
    collections.map(({id, ...otherPropsCollection}) => <PreviewCollection key={id} {...otherPropsCollection} />)
}
</div>
);


const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);