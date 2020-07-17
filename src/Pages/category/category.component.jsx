import React from 'react'
import "./category.style.scss"
import { selectCategory } from '../../redux/shop-data/shop-data.selector';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CategoryPage = ({ collection }) => {
    console.log(collection);
    const { title, items } = collection;
    return(
        <div className="collection-page">
            <h2 className="title"> { title } </h2>
            <div className="items">
            {
                items.map(item => 
                    <CollectionItem key={item.id} item={item} /> )
            }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);