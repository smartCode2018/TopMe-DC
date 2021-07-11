import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import {Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/pages/page-profile.scss' 
import CardCongratulations from '../../ui-elements/cards/advance/CardCongratulations'

import img1 from '@src/assets/images/topme/gallery1.jpg'
import img2 from '@src/assets/images/topme/donation1.jpg'
import img3 from '@src/assets/images/topme/gallery5.jpg'
import JusticeTable from '../../tables/data-tables/basic/JusticeTable'
import JusticeProfileHead from '../../pages/profile/JusticeProfileHead'

const EcommerceDashboard = () => {
  const [data, setData] = useState(null)

  const getD = async() => {
    await axios.get('/profile/data').then(response => {
      setData(response.data)
      console.log(data)
    })
  }

  const { colors } = useContext(ThemeColors),
    trackBgColor = '#e9ecef'
  

  useEffect(() => {
    getD()
  }, [])

  return (
    <>
    {data !== null ? ( 
        <div id='dashboard-ecommerce'>
          <div id='user-profile'>
          <Row>
              <Col sm='12'>
                <JusticeProfileHead data={data.header} />
              </Col>
            </Row>
          </div>
        
        <Row className='match-height'>
          <Col xl='4' md='6' xs='12'>
            <CardCongratulations />
          </Col>
          <Col xl='8' md='6' xs='12'>
            <StatsCard cols={{ xl: '3', sm: '6' }} />
          </Col>
        </Row>
        <Row className='match-height'>
        <Col lg='4' md='12'>
          <Card>
            <CardImg top src={img3} alt='Card cap' />
            <CardBody>
              <CardTitle tag='h4'>Help David go to school</CardTitle>
              <CardText>
                Some quick example text to build on....
              </CardText>
              <Button.Ripple color='primary' outline>
                View Story
              </Button.Ripple>
            </CardBody>
          </Card>
          </Col>
          
          <Col lg='4' md='12'>
          <Card>
            <CardImg top src={img1} alt='Card cap' />
            <CardBody>
              <CardTitle tag='h4'>They Need Housing</CardTitle>
              <CardText>
                Some quick example text to build on....
              </CardText>
              <Button.Ripple color='primary' outline>
                View Story
              </Button.Ripple>
            </CardBody>
          </Card>
          </Col>
          <Col lg='4' md='12'>
          <Card>
            <CardImg top src={img2} alt='Card cap' />
            <CardBody>
              <CardTitle tag='h4'>She needs a new kidney</CardTitle>
              <CardText>
                Some quick example text to build on the ...
              </CardText>
              <Button.Ripple color='primary' outline>
                View Story
              </Button.Ripple>
            </CardBody>
          </Card>
          </Col>
        </Row>
        <Row className='match-height'>
          <Col lg='12' xs='12'>
            <JusticeTable />
          </Col>
          
        </Row>
      </div>
      
    ) : null }
  
    </>
  )
}

export default EcommerceDashboard
