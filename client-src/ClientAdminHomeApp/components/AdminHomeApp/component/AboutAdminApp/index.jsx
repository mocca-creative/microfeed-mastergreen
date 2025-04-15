import React from 'react';
import { OUR_BRAND } from '../../../../../../common-src/Constants';

export default class AboutAdminApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (<div className="lh-page-card">
      <div className="lh-page-title">
        About Admin Panel
      </div>
      <div className="flex flex-row justify-left items-center gap-8 mt-8">
        <div className="max-w-32">
          <a href={OUR_BRAND.mastergreenUrl} target="_blank" className="hover:opacity-50">
            <img src="/assets/brands/mocca/mg-1.svg" />
          </a>
        </div>
        <div>Powered By</div>
        <div className="max-w-32">
        <a href={OUR_BRAND.whatsnewWebsite} target="_blank" className="hover:opacity-50">
          <img src="/assets/brands/microfeed/horizontal-logo.png" />
          </a>
        </div>
      </div>

    </div>);
  }
}
