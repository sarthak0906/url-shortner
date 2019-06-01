import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shortener from '../components/Shortener';
import { connect } from 'react-redux';
import Router from 'next/router';
import BodyWrapper from '../components/BodyWrapper';
import Features from '../components/Features';
import Footer from '../components/Footer/Footer';
import { authUser } from '../actions';

class HomePage extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      Router.push('/');
    }
  }

  render() {
    return (
        <BodyWrapper>
          <Shortener />
            <Features />
            <Footer />
        </BodyWrapper>
    );
  }
}

HomePage.getInitialProps = ({ req, reduxStore }) => {
  const token = req && req.cookies && req.cookies.token;
  if (token && reduxStore) reduxStore.dispatch(authUser(token));
  return {};
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated });

export default connect(mapStateToProps)(HomePage);
