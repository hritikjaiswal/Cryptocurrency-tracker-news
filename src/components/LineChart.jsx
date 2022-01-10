import React from 'react'
import {Line} from 'react-chartjs-2';
import {Col, Row, Typography} from 'antd';

const {Title} = Typography;


const LineChart = ({coinHistory, currentPrice, coinName, coinIcon}) => {
    const coinPrice  =[];
    const coinTimeStamp = [];
     
    for (let i =0; i < coinHistory?.data?.history?.length; i+=1){
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data ={
        labels : coinTimeStamp,
        datasets : [
            {
                labels: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: "#59981A",
                borderColor: "#59981A"
            }
        ]
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              }
            }
          ]
        }
      };

    return (
        <>
        <div className= "crypto-container-pricechart">
            <Row className="chart-header">
                <Title level={2} className="chart-title">{ coinIcon }  { coinName } Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options = {options} />
        </div>
        </>
    )
}

export default LineChart
