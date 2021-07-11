import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import WizardModern from './WizardModern'
import WizardVertical from './WizardVertical'
import WizardHorizontal from './WizardHorizontal'
import WizardModernVertical from './WizardModernVertical'
import BreadCrumbs from '@components/breadcrumbs'

const CreateImpact = () => {
  return (
    <Fragment>
      <BreadCrumbs breadCrumbTitle='Create An Impact' breadCrumbParent='Dashboard' breadCrumbActive='Create An Impact' />
      <Row>
        {/* <Col sm='12'>
          <WizardHorizontal />
        </Col> */}
        <Col sm='12'>
          <WizardVertical />
        </Col>
        {/* <Col sm='12'>
          <WizardModern />
        </Col>
        <Col sm='12'>
          <WizardModernVertical />
        </Col> */}
      </Row>
    </Fragment>
  )
}
export default CreateImpact
