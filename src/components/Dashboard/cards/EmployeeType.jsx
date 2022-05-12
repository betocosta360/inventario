import React, { useEffect, useState } from 'react'
import { ApiClient } from 'adminjs';
import { Text } from '@adminjs/design-system'
import { Chart } from "react-google-charts";
import _ from 'lodash';
import { Card } from '../styles'



const api = new ApiClient()
const makeChartData = (records) => {
    const status = {
        active: "Ativos",
        archived: "Bloqueados"   
    }
    
    const values = _.groupBy(records, (record) => record.params.status)
    const data = _.map(status, (value, key) => [value, values[key]?.length || 0])
    return [['employees', 'status'], ...data]
}

const options = {
    pieHole: 0.4,
    is3D: false,
  };

const EmployeeType = () => {
    const [chartData, setChartData] = useState(['employees', 'status']);
    const [loading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await api.resourceAction({
                resourceId: 'employees',
                actionName: 'list'
            })
            console.log('response', response)
            setChartData(makeChartData(response.data.records))
            setIsEmpty(response.data.records.length == 0)
            setLoading(false)
        })()
    }, [])

    return (
        <Card as='a' href='http://localhost:8000/admin/resources/employees'>
            <Text textAlign='center'>
                <h5>Funcionários</h5>
                <Text><Chart
                    chartType="PieChart"
                    data={chartData
                    }
                    options={options}
                    width={"100%"}
                    height={"200px"}
                /></Text>
            </Text>
        </Card>
    )
}

export default EmployeeType