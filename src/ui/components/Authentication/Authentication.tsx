import React from 'react';

import {
  isAuthenticated as getIsAuthenticated,
  loadAuthentication,
  onAuthenticationChanged,
} from '$core/domain/session';
import { Loading } from '../Loading';

export { Authentication };

interface Props {
  children: React.ReactNode;
}

interface State {
  loading: boolean;
  isAuthenticated: boolean;
}

class Authentication extends React.Component<Props, State> {
  state: State = {
    loading: true,
    isAuthenticated: false,
  };

  private offAuthenticationChanged?: () => void;

  componentDidMount() {
    this.offAuthenticationChanged = onAuthenticationChanged(
      this.handleAuthenticationChanged,
    );
    loadAuthentication();
  }

  componentWillUnmount() {
    if (this.offAuthenticationChanged) {
      this.offAuthenticationChanged();
    }
  }

  render() {
    const { children } = this.props;
    const { loading, isAuthenticated } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <React.Fragment key={`${isAuthenticated}`}>{children}</React.Fragment>
    );
  }

  private handleAuthenticationChanged = () => {
    this.setState({ loading: false, isAuthenticated: getIsAuthenticated() });
  };
}
