import './Datatable.css'
import React from 'react'
import { useState } from 'react'
import { useAppDispatch, RootState, AppDispatch } from "../../redux/index";
import { updateDatatable } from '../../redux/DatatableReducer';
import { useSelector } from 'react-redux';


interface Props {
    salesData: Array<salesData>
}

interface salesData {
    weekEnding: string
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number,
}

const Datatable: React.FC<Props> = ({salesData}) => {

    const dispatch: AppDispatch = useAppDispatch();
    const tableData = useSelector((state: RootState) => state.datatable.tableData)

    const [sorting, setSorting] = useState({ field: 'weekEnding', ascending: true })
    const sortedData = [...salesData]

    const sortCol = (column: string, ascending: boolean) => {
        setSorting({field: column, ascending: ascending})
        
        if (ascending){
            sortedData.sort((a: any, b: any) => a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0)
        }
        else{
            sortedData.sort((a: any, b: any) => a[column] > b[column] ? -1 : a[column] < b[column] ? 1 : 0)
        }
        dispatch(updateDatatable(sortedData))
        
    }

    return (
        <div className='datatable-container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <button type="button" onClick={()=> sortCol("weekEnding", !sorting.ascending)}>
                                WEEK ENDING <div className='downIcon'>&#x2304;</div>
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("retailSales", !sorting.ascending)}>
                                RETAIL SALES <div className='downIcon'>&#x2304;</div>
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("wholesaleSales", !sorting.ascending)}>
                                WHOLESALE SALES <div className='downIcon'>&#x2304;</div>
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("unitsSold", !sorting.ascending)}>
                                UNITS SOLD <div className='downIcon'>&#x2304;</div>
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("retailerMargin", !sorting.ascending)}>
                                RETAILER MARGIN <div className='downIcon'>&#x2304;</div>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    tableData.map((row, i) => {
                        return(
                            <tr key={i}>
                                <td>{row.weekEnding}</td>
                                <td>${row.retailSales}</td>
                                <td>${row.wholesaleSales}</td>
                                <td>{row.unitsSold}</td>
                                <td>${row.retailerMargin}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Datatable;