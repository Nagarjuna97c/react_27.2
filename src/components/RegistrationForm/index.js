import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    emptyFirstName: false,
    emptyLastName: false,
    formSubmitted: false,
  }

  changeFirstName = event => {
    this.setState({firstName: event.target.value, emptyFirstName: false})
  }

  changeLastName = event => {
    this.setState({lastName: event.target.value, emptyLastName: false})
  }

  blurFirstName = event =>
    event.target.value === ''
      ? this.setState({emptyFirstName: true})
      : this.setState({emptyFirstName: false})

  blurLastName = event =>
    event.target.value === ''
      ? this.setState({emptyLastName: true})
      : this.setState({emptyLastName: false})

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    console.log(firstName)

    if (firstName !== '' && lastName !== '') {
      this.setState({formSubmitted: true})
    } else if (firstName === '' && lastName === '') {
      this.setState({emptyFirstName: true, emptyLastName: true})
    } else if (firstName === '') {
      this.setState({emptyFirstName: true})
    } else {
      this.setState({emptyLastName: true})
    }
  }

  displayUsername = () => {
    const {firstName, lastName, emptyFirstName, emptyLastName} = this.state
    const selectedFirstClass = emptyFirstName ? 'empty-input' : ''
    const selectedSecondClass = emptyLastName ? 'empty-input' : ''
    return (
      <form className="form" onSubmit={this.submitForm}>
        <label htmlFor="first-name" className="label">
          FIRST NAME
        </label>
        <div className={`input-container ${selectedFirstClass}`}>
          <input
            type="text"
            id="first-name"
            value={firstName}
            placeholder="First name"
            onChange={this.changeFirstName}
            onBlur={this.blurFirstName}
          />
        </div>
        {emptyFirstName ? <p className="para">Required</p> : null}
        <label htmlFor="last-name" className="label">
          LAST NAME
        </label>
        <div className={`input-container ${selectedSecondClass}`}>
          <input
            type="text"
            id="last-name"
            value={lastName}
            placeholder="Last name"
            onChange={this.changeLastName}
            onBlur={this.blurLastName}
          />
        </div>
        {emptyLastName ? <p className="para">Required</p> : null}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  openNewForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      emptyFirstName: false,
      emptyLastName: false,
      formSubmitted: false,
    })
  }

  displayReplyForm = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="para1">Submitted Successfully</p>
      <button type="button" className="button" onClick={this.openNewForm}>
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {formSubmitted} = this.state
    const newClass = formSubmitted ? 'center' : ''
    return (
      <div className="main-container">
        <div className="display-container">
          <h1 className="heading">Registration</h1>
          <div className={`form-container ${newClass}`}>
            {formSubmitted ? this.displayReplyForm() : this.displayUsername()}
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
