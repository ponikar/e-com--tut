import React from 'react'
import "./directory.style.scss"
import MenuItem  from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';

const Directory = ({ sections }) => (
<div className="directory-menu">
{ sections.map(({ id, ...otherSectionProps }) =>  <MenuItem key={id} {...otherSectionProps} />)} 
</div>);



const mapStateToProps = createStructuredSelector({
  sections:selectSections
});



export default connect(mapStateToProps)(Directory);