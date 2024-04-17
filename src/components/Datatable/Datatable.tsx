import './Datatable.css'
import React from 'react'
import { useState, useEffect } from 'react'
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

interface sortArray{
    field: string;
    ascending: boolean;
}

interface sortedData {
    column: string
}

type a = keyof salesData;

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
        <div className='datatable-container'>Datatable
            <table>
                <thead>
                    <tr>

                        <th>
                            <button type="button" onClick={()=> sortCol("weekEnding", !sorting.ascending)}>
                                Week ending
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("retailSales", !sorting.ascending)}>
                                Retail sales
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("wholesaleSales", !sorting.ascending)}>
                                Wholesale Sales
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("unitsSold", !sorting.ascending)}>
                                Units Sold
                            </button>
                        </th>
                        <th>
                            <button type="button" onClick={()=> sortCol("retailerMargin", !sorting.ascending)}>
                                Retailer Margin
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
                                <td>{row.retailSales}</td>
                                <td>{row.wholesaleSales}</td>
                                <td>{row.unitsSold}</td>
                                <td>{row.retailerMargin}</td>
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