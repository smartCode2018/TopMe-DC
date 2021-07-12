import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, TrendingDown, User, Box, DollarSign } from 'react-feather'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '6',
      subtitle: 'Projects',
      color: 'light-primary',
      icon: <Box size={24} />
    },
    {
      title: '170',
      subtitle: 'Donors',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '2',
      subtitle: 'Declined',
      color: 'light-danger',
      icon: <TrendingDown size={24} />
    },
    {
      title: '4',
      subtitle: 'Approved',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Help Eze Go To School</CardTitle>
        <CardText className='card-text font-small-2 mr-25 mb-0'>Updated 12 seconds ago</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
