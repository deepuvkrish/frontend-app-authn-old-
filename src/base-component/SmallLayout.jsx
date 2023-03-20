import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

const SmallLayout = ({ intl }) => (
  <span className="w-100">
    <div className="col-md-12 small-screen-top-stripe" />
    <div>
    
    </div>
  </span>
);

SmallLayout.propTypes = {
  intl: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectIntl(SmallLayout);
