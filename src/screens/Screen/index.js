import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectScreen from './selectors';
import messages from './messages';
import { Text } from 'react-native';

export function Screen() {
  return (
    <Text>
      <FormattedMessage {...messages.header} />
    </Text>
  );
}

Screen.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Screen: makeSelectScreen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Screen);
