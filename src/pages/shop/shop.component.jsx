import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collections/collections.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { UpdateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  unsubcribeFromSnaphot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapPropsToDispatch = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(UpdateCollections(collectionsMap)),
});

export default connect(null, mapPropsToDispatch)(ShopPage);
