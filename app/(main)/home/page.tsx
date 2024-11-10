import DynamicCard from '@/components/DynamicCard'
import { PieChartData } from '@/components/PieChartData'
import { TempPieChartData } from '@/components/TempPieData'
import TempTradeChart from '@/components/TempTradeChart'
import { TradeChart } from '@/components/TradeChart'
import React from 'react'
import TradeData from '../../../data/tradeData.json'
import { assignRandomColors } from '@/lib/assignRandomColors'
import { filterLastNYears } from '@/lib/FilterNYearsData'

const Home = () => {
    const FilteredIndiaData = TradeData.filter((item) => item.ReporterName === "India");
    const IndiaData = assignRandomColors(filterLastNYears(FilteredIndiaData, 10))

    const FilteredJapanData = TradeData.filter((item) => item.ReporterName === "Japan");
    const JapanData = assignRandomColors(filterLastNYears(FilteredJapanData, 10))

    const FilteredNorwayData = TradeData.filter((item) => item.ReporterName === "Norway");
    const NorwayData = assignRandomColors(filterLastNYears(FilteredNorwayData, 10))

    return (
        <div className='grid grid-cols-3 gap-3 p-3'>
            <TempPieChartData country='India' data={IndiaData} />
            <TempPieChartData country='Japan' data={JapanData} />
            <TempPieChartData country='Norway' data={NorwayData} />
            <div className='col-span-3'>
                {/* <TradeChart/> */}
                <TempTradeChart />
            </div>
        </div>
    )
}

export default Home
