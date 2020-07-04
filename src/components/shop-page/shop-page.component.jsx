import React from 'react'
import COLLECTION_DATA from './collection.data'
import PreviewCollection from '../preview-collection/preview-collection.component';

class ShopPage extends React.Component {
    state = {
        collections:COLLECTION_DATA
    }
    render() {
        return(<div className="shop-page">
           {
               this.state.collections.map(({id, ...otherPropsCollection}) => <PreviewCollection key={id} {...otherPropsCollection} />)
           }
        </div>)
    }
}


export default ShopPage;