import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'


const Dankmemes = () => {
    const [chartData, setChartData] = useState({})
    const [employeeSalary, setEmployeeSalary] = useState([])
    const [employeeAge, setEmployeeAge] = useState([])
    

    const chart = () => {
        let empSal = []
        let empAge = []
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => {
            console.log(res)
            for(const dataObj of res.data.data) {
                empSal.push(parseInt(dataObj.employee_salary))
                empAge.push(parseInt(dataObj.employee_age))
            }

            setChartData({
                // labels: ['monday', 'tuesday', 'wednasday', 'thrusday', 'friday'],
                labels: empAge,
                datasets: [
                    {
                        label: "level of thickness",
                        // data: [323, 45, 12, 76, 69],
                        data: empSal,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)'
                        ],
                        borderWidth: 4
                    }
                ]
            })

        })
        .catch(err =>{
            console.log(err)
        })
        console.log(empSal,empAge)

        
    }

    useEffect(() => {
        chart()
    }, [])
      
    return (
        <div>
            <h1>These are Danke memes</h1>
            <div>
                <Bar data={chartData}
                options={{
                    responsive:true,
                    title: {text: "Thickness scale", display:true},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }

                }}
                />
            </div>
        </div>
    )
}

export default Dankmemes
