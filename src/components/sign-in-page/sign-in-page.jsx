import React from 'react';
import PropTypes from 'prop-types';
import {Formik, Form, Field} from 'formik';
import {string, object} from 'yup';

import Header from '../header/header.jsx';
import {ValidationMessages} from '../../const';

const ValidationSchema = object().shape({
  email: string()
    .email(ValidationMessages.WRONG_EMAIL).
    required(ValidationMessages.REQUIRED),
  password: string()
    .required(ValidationMessages.REQUIRED),
});

const SignInPage = ({setErrorMessage, errorMessage, onSubmit}) => {
  return (
    <div className="user-page">
      <Header additionalClass={`user-page__head`}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <Formik
          initialValues={{email: ``, password: ``}}
          validationSchema={ValidationSchema}
          onSubmit={(values, {setSubmitting}) => {
            onSubmit()
              .then(() => setSubmitting(false))
              .catch((e) => {
                setErrorMessage(e);
                setSubmitting(false);
              });
          }}
        >
          {({
            errors,
            touched,
            isSubmitting,
          }) =>(
            <Form className="sign-in__form" noValidate>
              {Object.keys(errors).length !== 0 &&
                <div className="sign-in__message">
                  {errors.email && touched.email && <p>{errors.email}</p>}
                  {errors.password && touched.password && <p>{errors.password}</p>}
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
              }

              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <Field
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="user-email"
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>

                <div className="sign-in__field">
                  <Field
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="user-password"
                    autoComplete="off"
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit" disabled={isSubmitting}>Sign in</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default SignInPage;
