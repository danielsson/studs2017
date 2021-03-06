/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { selectLocale } from '../LanguageProvider/selectors';
import { changeLocale } from '../LanguageProvider/actions';
import { appLocales } from '../../i18n';
import { createSelector } from 'reselect';
import styles from './styles.css';
import messages from './messages';

export class LocaleToggle extends React.Component { // eslint-disable-line
  render() {
    return (
      <div className={styles.localeToggle}>
        { appLocales.map(locale =>
          <span key={locale} className={styles.localeToggleLink} onClick={this.props.onLocaleSwitch} data-language={locale}>{locale}</span>
        )}
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleSwitch: React.PropTypes.func,
  onLocaleToggle: React.PropTypes.func,
};

const mapStateToProps = createSelector(
  selectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleSwitch: (evt) => dispatch(changeLocale(evt.target.dataset.language)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
