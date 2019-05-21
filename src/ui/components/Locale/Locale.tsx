import React from 'react';

import { currentLocale } from '$core/infraestructure/locale/currentLocale';
import { localeChanged } from '$core/infraestructure/locale/localeChanged';
import { Locale as LocaleValue } from '$locale/locales';
import { Loading } from '$ui/components/Loading';

export { Locale };

interface Props {
  children: React.ReactNode;
}

interface State {
  locale: LocaleValue | null;
}

class Locale extends React.Component<Props, State> {
  state: State = {
    locale: currentLocale(),
  };

  componentDidMount() {
    localeChanged.register(this.localeChanged);
  }

  componentWillUnmount() {
    localeChanged.unregister(this.localeChanged);
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;
    if (!locale) {
      return <Loading />;
    }
    return <React.Fragment key={locale}>{children}</React.Fragment>;
  }

  private localeChanged = () => {
    const locale = currentLocale();
    if (locale !== this.state.locale) {
      this.setState({ locale });
    }
  };
}
