import { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
import { List, Activity, Box, CheckCircle, User, Clock, Database, ThumbsDown } from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'
import '@styles/react/pages/page-profile.scss' 
//import CardCongratulations from '../../ui-elements/cards/advance/CardCongratulations'

import img1 from '@src/assets/images/topme/gallery1.jpg'
import img2 from '@src/assets/images/topme/donation1.jpg'
import img3 from '@src/assets/images/topme/gallery5.jpg'
import JusticeTable from '../../../tables/data-tables/basic/JusticeTable'
import JusticeProfileHead from '../../../pages/profile/JusticeProfileHead'
import Earnings from '../../../dashboard/admin/Earnings'

const JusticeView = () => {
    
  const context = useContext(ThemeColors)
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
                <JusticeProfileHead data={data.header} verified={false} isAdmin={true} status='inactive' />
              </Col>
            </Row>
          </div>
          <Row className='match-height'>
            <Col lg='6' sm='6'>
                <Row>
                    <Col lg='6'>
                    <StatsHorizontal icon={<List size={21} />} color='info' stats='36' statTitle='Total Projects' />
                    </Col>
                    <Col lg='6'>
                    <StatsHorizontal icon={<Box size={21} />} color='primary' stats='15' statTitle='Active Projects' /> 
                    </Col>
                    <Col lg='6'>
                    <StatsHorizontal icon={<CheckCircle size={21} />} color='success' stats='17' statTitle='Completed' />
                    </Col>
                    <Col lg='6'>
                    <StatsHorizontal icon={<ThumbsDown size={21} />} color='danger' stats='4' statTitle='Declined Projects' />
                    </Col>
                </Row>
            
            </Col>
            <Col lg='6' sm='6'>
                <Earnings success={context.colors.success.main} styles={{fontSize:30}}/>
            </Col>
            {/* <Col lg='3' sm='6'>
            <StatsHorizontal icon={<CheckCircle size={21} />} color='success' stats='17' statTitle='Completed' />
            </Col>
            <Col lg='3' sm='6'>
            <StatsHorizontal icon={<ThumbsDown size={21} />} color='danger' stats='4' statTitle='Declined Projects' />
            </Col> */}
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
              <Button.Ripple tag={Link} to='/pages/story/view/2' color='primary' outline>
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

export default JusticeView
