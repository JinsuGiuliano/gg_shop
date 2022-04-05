import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { selectIsCollectionFetching } from '../../../redux/shop/shop.selectors';
import WithSpinner from '../../utils/with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
  currentUser: selectCurrentUser,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
