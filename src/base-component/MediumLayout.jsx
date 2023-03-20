import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { injectIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import messages from './messages';

const MediumLayout = ({ intl }) => (
  <>
    
    <div className="w-100 p-0 mb-3 d-flex">
      <div className="col-md-10">
        <div className="d-flex align-items-center justify-content-center mb-4 ">
          <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
          <div>
            
          </div>
        </div>
      </div>
     
    </div>
  </>
);

MediumLayout.propTypes = {
  intl: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default injectIntl(MediumLayout);
