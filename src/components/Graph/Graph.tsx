import './Graph.css'

import {
    LineChart,
    ResponsiveContainer,
    Tooltip,
    Line,
    XAxis,
    YAxis,
} from "recharts";

interface Props {
    salesData: Array<salesData>
}

interface salesData {
    weekEnding: string
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number
}

const Graph: React.FC<Props> = ({salesData}) => {
    
    const formatDate = (rawDate: string) => {
        console.log('rawDate: ', rawDate)
        return new Date(rawDate).toLocaleString("en-us", { month: "short", timeZone: 'UTC' });
    }     

    return (        
        <div className='graph-container'>
            <h1 className="text-heading">Retail Sales</h1>
            <ResponsiveContainer width="100%" aspect={5}>
                <LineChart data={salesData} margin={{ right: 10, left: 10 }} {...{overflow: 'visible'}}>
                    
                    <XAxis stroke="#B3B8C5" dataKey="weekEnding" interval={4} tickLine={false} tickFormatter={(rawDate) => formatDate(rawDate)} />
                    <YAxis hide={true} padding={{ top: 20, bottom: 20}}></YAxis>
                    
                    <Tooltip />
                    <Line
                        type='monotone'
                        dataKey="retailSales"
                        stroke="#44A7F6"
                        dot={false}
                        activeDot={false}
                        strokeWidth = {2}
                        isAnimationActive={false}
                    />
                    <Line 
                        type='monotone'
                        dataKey="wholesaleSales" 
                        stroke="#99A4BE" 
                        dot={false} 
                        activeDot={false}
                        strokeWidth = {2}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph; 