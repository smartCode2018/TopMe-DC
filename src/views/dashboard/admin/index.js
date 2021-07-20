import { useContext } from 'react'
import { List, Activity, Box, CheckCircle, User, Clock, Database, ThumbsDown } from 'react-feather'
import InvoiceList from './invoice/list'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import ActiveUsers from './ActiveUsers'
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'
import Earnings from './Earnings'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media, Badge } from 'reactstrap'
import OrdersBarChart from './OrdersBarChart'


import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

import DataTable, { createTheme } from 'react-data-table-component'

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198'
  },
  background: {
    default: '#002b36'
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF'
  },
  divider: {
    default: '#073642'
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)'
  }
})

const data = [
  { id: 1, 
    invoiceid: '7365GFTD', 
    donor: 'Justice Kelechi',
    impact: 'Help Eze Go To School',
    amount: '50,000',
    status: 'paid',
    date: '28/06/2021'
  },
  { id: 2, 
    invoiceid: '7365GFTD', 
    donor: 'Justice Kelechi',
    impact: 'Help Eze Go To School',
    amount: '50,000',
    status: 'paid',
    date: '28/06/2021'
  },
  { id: 3, 
    invoiceid: '7365GFTD', 
    donor: 'Justice Kelechi',
    impact: 'Help Eze Go To School',
    amount: '50,000',
    status: 'paid',
    date: '28/06/2021'
  },
  { id: 4, 
    invoiceid: '7365GFTD', 
    donor: 'Justice Kelechi',
    impact: 'Help Eze Go To School',
    amount: '50,000',
    status: 'paid',
    date: '28/06/2021'
  },
  { id: 5, 
    invoiceid: '7365GFTD', 
    donor: 'Justice Kelechi',
    impact: 'Help Eze Go To School',
    amount: '50,000',
    status: 'paid',
    date: '28/06/2021'
  }
]
const columns = [
  {
    name: 'Invoice ID',
    selector: 'invoiceid',
    sortable: true,
    minWidth:'150px'
  },
  {
    name: 'Donor Name',
    selector: 'donor',
    sortable: true,
    minWidth:'180px'
  },
  {
    name: 'Impact Name',
    selector: 'impact',
    sortable: true,
    minWidth:'180px'
  },
  {
    name: 'Amount',
    selector: 'amount',
    sortable: true,
    minWidth:'180px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    maxWidth:'50px',
    cell: row => <Badge color='success' className='badge-glow'>Paid</Badge>
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    right: true,
    minWidth:'180px'
  }
]


const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)
    
  const context = useContext(ThemeColors)

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='3' sm='6'>
        <StatsHorizontal icon={<List size={21} />} color='info' stats='36' statTitle='Total Projects' />
        </Col>
        <Col lg='3' sm='6'>
        <StatsHorizontal icon={<Box size={21} />} color='primary' stats='15' statTitle='Active Projects' />
        </Col>
        <Col lg='3' sm='6'>
        <StatsHorizontal icon={<CheckCircle size={21} />} color='success' stats='17' statTitle='Completed' />
        </Col>
        <Col lg='3' sm='6'>
        <StatsHorizontal icon={<ThumbsDown size={21} />} color='danger' stats='4' statTitle='Declined Projects' />
        </Col>
      </Row>
      <Row className='match-height'>
          <Col lg='6'>
            <Earnings success={context.colors.success.main} />
          </Col>
            <Col lg='3'>
              <OrdersBarChart warning={context.colors.warning.main} />
            </Col>
            <Col lg='3'>
              <ActiveUsers success={context.colors.success.main} />
            </Col>
      </Row>
      <Row className='match-height'>
        <Col xs='12'>
          {/* <InvoiceList /> */}
          <Card>
            <CardBody>
            <DataTable
            title="INVOICE TABLE"
            columns={columns}
            data={data}
            pointerOnHover={true}
            persistTableHead={true}
            highlightOnHover={true}
            pagination={true}
            className='react-dataTable'
          />
            </CardBody>
          
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
