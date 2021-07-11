import { Fragment, useState, useContext } from 'react'
import classnames from 'classnames'
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'
import { useDispatch } from 'react-redux'
import { handleLogin } from '@store/actions/auth'
import { Link, useHistory } from 'react-router-dom'
import { AbilityContext } from '@src/utility/context/Can'
import InputPasswordToggle from '@components/input-password-toggle'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import { AvForm, AvInput, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation-safe'
import { Row, Col, CardTitle, CardText, FormGroup, Label, Button } from 'reactstrap'

import '@styles/base/pages/page-auth.scss'

const Register = () => {
  const ability = useContext(AbilityContext)

  const [skin, setSkin] = useSkin()

  const history = useHistory()

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [terms, setTerms] = useState(false)

  const illustration = skin === 'dark' ? 'topme2.png' : 'topme1.png',
    source = require(`@src/assets/images/pages/${illustration}`).default
  const sourceBanner = require(`@src/assets/images/pages/topme/banner-main1.jpg`).default

  const Terms = () => {
    return (
      <Fragment>
        I agree to
        <a className='ml-25' href='/' onClick={e => e.preventDefault()}>
          privacy policy & terms
        </a>
      </Fragment>
    )
  }

  const handleSubmit = (event, errors) => {
    if (errors && !errors.length) {
      useJwt
        .register({ username, email, password })
        .then(res => {
          if (res.data.error) {
            const arr = {}
            for (const property in res.data.error) {
              if (res.data.error[property] !== null) arr[property] = res.data.error[property]
            }
            setErrors(arr)
            if (res.data.error.email !== null) console.error(res.data.error.email)
            if (res.data.error.username !== null) console.error(res.data.error.username)
          } else {
            setErrors({})
            const data = { ...res.data.user, accessToken: res.data.accessToken }
            ability.update(res.data.user.ability)
            dispatch(handleLogin(data))
            history.push('/')
          }
        })
        .catch(err => console.log(err))
    }
  }

  const handleUsernameChange = e => {
    const errs = errors
    if (errs.username) delete errs.username
    setUsername(e.target.value)
    setErrors(errs)
  }

  const handleEmailChange = e => {
    const errs = errors
    if (errs.email) delete errs.email
    setEmail(e.target.value)
    setErrors(errs)
  }

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0' style={{backgroundImage:`url(${sourceBanner})`}}>
      <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
          <img className='img-fluid' height={100} width={100} src={source} alt='Login V2' />
          {/* <h2 className='brand-text text-primary ml-1'>TopMe</h2> */}
        </Link>
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            {/* <img className='img-fluid' src={sourceBanner} alt='Login V2' /> */}
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
            <CardTitle tag='h2' className='font-weight-bold mb-1'>
              Create An Account
            </CardTitle>
            <CardText className='mb-2'>And tell the world your story</CardText>

            <AvForm action='/' className='auth-register-form mt-2' onSubmit={handleSubmit}>
              <FormGroup>
                <Label className='form-label' for='register-username'>
                  Username
                </Label>
                <AvInput
                  required
                  autoFocus
                  type='text'
                  placeholder='johndoe'
                  id='register-username'
                  name='register-username'
                  value={username}
                  onChange={handleUsernameChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.username })}
                />
                {Object.keys(errors).length && errors.username ? (
                  <small className='text-danger'>{errors.username}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-email'>
                  Email
                </Label>
                <AvInput
                  required
                  type='email'
                  id='register-email'
                  name='register-email'
                  value={email}
                  placeholder='john@example.com'
                  onChange={handleEmailChange}
                  className={classnames({ 'border-danger': Object.keys(errors).length && errors.email })}
                />
                {Object.keys(errors).length && errors.email ? (
                  <small className='text-danger'>{errors.email}</small>
                ) : null}
              </FormGroup>
              <FormGroup>
                <Label className='form-label' for='register-password'>
                  Password
                </Label>
                <InputPasswordToggle
                  required
                  tag={AvInput}
                  id='register-password'
                  name='register-password'
                  value={password}
                  className='input-group-merge'
                  onChange={e => setPassword(e.target.value)}
                />
              </FormGroup>
              <AvCheckboxGroup name='Remember Me' checked={terms} required>
                <AvCheckbox
                  customInput
                  type='checkbox'
                  id='remember-me'
                  value='Remember Me'
                  label={<Terms />}
                  className='custom-control-Primary'
                  onChange={e => setTerms(e.target.checked)}
                />
              </AvCheckboxGroup>
              <Button.Ripple
                block
                color='primary'
                disabled={!email.length || !password.length || !username.length || !terms}
              >
                Sign up
              </Button.Ripple>
            </AvForm>
            <p className='text-center mt-2'>
              <span className='mr-25'>Already have an account?</span>
              <Link to='/login'>
                <span>Sign in instead</span>
              </Link>
            </p>
            <div className='divider my-2'>
              <div className='divider-text'>or</div>
            </div>
            <div className='auth-footer-btn d-flex justify-content-center'>
              <Button.Ripple color='facebook'>
                <Facebook size={14} />
              </Button.Ripple>
              <Button.Ripple color='twitter'>
                <Twitter size={14} />
              </Button.Ripple>
              <Button.Ripple color='google'>
                <Mail size={14} />
              </Button.Ripple>
              <Button.Ripple className='mr-0' color='github'>
                <GitHub size={14} />
              </Button.Ripple>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Register
