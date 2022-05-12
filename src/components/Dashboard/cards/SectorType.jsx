import React, { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs';
import { Text } from '@adminjs/design-system'
import { Chart } from "react-google-charts";
import _ from 'lodash';
import { Card } from '../styles'

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const api = new ApiClient()
const makeChartData = ()=>{
    const status ={
        backlog: 'Backlog',
        doing: '',
        done: '',
        approved: '',
        rejected: ''
    }
    const values = _.groupBy(records, (record)=> record.params.status)
    const data = _.map(status, (value, key)=> [
        value,
        values[key]?.length || 0
    ])
}

const SectorType = () => {
    const [chartData, setChartData] = useState('[]');
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    useEffect(() => { 
        (async ()=>{
            const apiResponse = await api.resourceAction({
                resourceId: 'sectorTypes',
                actionName: 'list'
            })
            console.log('apiResponse', apiResponse)
            //setChartData()
           // setIsEmpty()
            //setLoading()
        })()
    }, [])

    return (
        <Card as='a' href='#'>
            <Text textAlign='center'>
                <h5>Setores</h5>
                <Text><Chart
                    chartType="PieChart"
                    data={data}

                    width={"100%"}
                    height={"100px"}
                /></Text>
            </Text>
        </Card>
    )
}

export default SectorType