import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions'

class Signup extends Component {
  // handleFormSubmit({email, password}){
  //   console.log(email,password);
  //   this.props.signInUser({email, password});
  // };
  // renderAlert(){
  //   if (this.props.errorMessage) {
  //     return (
  //       <div className="alert alert-danger">
  //         <strong>Ooops!</strong> {this.props.errorMessage}
  //       </div>
  //     );
  //   }
  // }
  render(){
    const {handleSubmit, fields: {email, password, passwordConfirm}} = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label>Email:</label>
          <input className="form-control" {...email} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input className="form-control" type="password" {...password} />
          {password.touched && passwordConfirm.touched && password.error && <div className="error">{password.error}</div>}
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm password:</label>
          <input className="form-control" type="password" {...passwordConfirm} />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
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

  
  if (formProps.password !== formProps.passwordConfirm){
    errors.password = 'Passwords must match!';
  }



  return errors;
}
export default reduxForm({
  form: 'signup',
  fields: ['email', 'password','passwordConfirm'],
  validate
})(Signup);



































