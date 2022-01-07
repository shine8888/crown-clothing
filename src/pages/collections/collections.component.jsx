import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collections.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection, " check collection");
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE </h2>
    </div>
  );
};

const mapStateToProps = (state, ownState) => ({
  collection: selectCollection(ownState.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
