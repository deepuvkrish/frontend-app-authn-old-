import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';
import backg from '../base-component/images/backg.png';

const LargeLayout = ({ intl }) => (
  <div className="w-50 d-flex">
      
      <div className="min-vh-100 align-items-center" >
        <img className="logos " src={backg} alt="background imaage" style={{height:"350px"}}/>   
      </div>
  </div>
);

LargeLayout.propTypes = {
  intl: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectIntl(LargeLayout);
