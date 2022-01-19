import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collections/collections.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching,
});

const mapPropsToDispatch = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapPropsToDispatch)(ShopPage);

activities.find(
  {
    $and: [
      { formId: ObjectId("61e663aa5b512200259a61e5") },
      {
        $or: [
          {
            activityStatus: {
              $in: [
                "NOT_SCHEDULED",
                "SCHEDULED",
                "MODIFIED",
                "DELETED",
                "NO_AVAILABILITY",
                "VALIDATION_ERROR",
                "FAILED",
                "QUEUED",
              ],
            },
          },
        ],
      },
    ],
  },
  { sort: { "metadata.startTime": 1 }, skip: 0, limit: 10, projection: {} }
);
