import React, { useState } from "react";
import Chart from "react-apexcharts";
import { Colors } from "../Common/Colors";

const ChartData = () => {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false // Hide the toolbar (menu options)
      }
    },
    xaxis: {
      categories: [],
      labels: {
        style: {
          colors: '#FFFFFF', // Change to the color you want
          fontSize: '12px'
        }
      },
      
    },
    yaxis: {
      labels: {
        style: {
          colors: '#FFFFFF', // Change to the color you want
          fontSize: '12px'
        }
      },
      
    },
    
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top' // Adjust data label position if needed
        }
      }
    },
    dataLabels: {
      enabled: false // Hide data labels
    },
    theme: {
      monochrome: {
        enabled: true,
        color: Colors.PRIMARY_COLOR // Change to the color you want for bars
      }
    }
  })

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 21,25,76,35,65,34]
    }
  ])
  return (
<div className='rounded px-2 pt-3' style={{backgroundColor:Colors.PRIMARY_DARK}}>
        <div className="row">
          <div className="d-flex justify-content-between pe-3">
            <h4 className="text-light">Activity</h4>
            <select name="" id="" >
              <option value="">Weekly</option>
            </select>
          </div>
          
          <div className="mixed-chart pe-3">
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height={200}
            />
          </div>
        </div>
      </div>
  )
}


export default ChartData;