import React from 'react'
import PreviewCollection from '../preview-collection/preview-collection.component';




const CollectionsOverview = ({ collections }) => (
<div className="collection-overview">
{
    collections.map(({id, ...otherPropsCollection}) => <PreviewCollection key={id} {...otherPropsCollection} />)
}
</div>
);


// const mapStateToProps = createStructuredSelector({
//     collections:selectCollectionForPreview
// })

export default CollectionsOverview;