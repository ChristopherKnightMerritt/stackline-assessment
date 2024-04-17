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
        return new Date(rawDate).toLocaleString("default", { month: "short" });
    }     

    return (        
        <div className='graph-container'>
            <h1 className="text-heading">Retail Sales</h1>
            <ResponsiveContainer width="100%" aspect={5}>
                <LineChart data={salesData} margin={{ right: 10, left: 10 }}>
                    
                    <XAxis dataKey="weekEnding" interval={5} tickLine={false} tickFormatter={(rawDate) => formatDate(rawDate)} />
                    <YAxis hide={true} padding={{ top: 50, bottom: 50}}></YAxis>
                    
                    <Tooltip />
                    <Line
                        type='monotone'
                        dataKey="retailSales"
                        stroke="#44A7F6"
                        dot={false}
                        activeDot={false}
                        strokeWidth = {2}
                    />
                    <Line 
                        type='monotone'
                        dataKey="wholesaleSales" 
                        stroke="#99A4BE" 
                        dot={false} 
                        activeDot={false}
                        strokeWidth = {2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Graph; 