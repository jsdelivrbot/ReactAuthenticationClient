import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signup extends Component {
  handleFormSubmit(formProps){
    this.props.signUpUser(formProps);
  };
  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render(){
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
          {email.touched && email.error && <div className="error">{email.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password} />
          {password.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <input className="form-control" type="password" {...passwordConfirm} />
          {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  };
}
// function mapStateToProps(state) {
//   return {errorMessage: state.auth.error};
// }
//
function validate(formProps) {
  const errors = {};

  if(!formProps.email){
    errors.email = 'Please enter email';
  }
  if(!formProps.password){
    errors.password = 'Please enter a password';
  }
  if(!formProps.passwordConfirm){
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match!';
  }

  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password','passwordConfirm'],
  validate
},mapStateToProps, actions)(Signup);



































