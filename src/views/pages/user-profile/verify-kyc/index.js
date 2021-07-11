import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import HorizontalFormIcons from './HorizontalFormIcons'

import Breadcrumbs from '@components/breadcrumbs'

const Kyc = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Verify Account' breadCrumbParent='User' breadCrumbActive='Verify Account' />
      <Row>
      <Col md='12' sm='12'>
          <HorizontalFormIcons />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Kyc