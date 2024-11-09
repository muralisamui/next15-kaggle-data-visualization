import DynamicCard from '@/components/DynamicCard'
import TempTradeChart from '@/components/TempTradeChart'
import { TradeChart } from '@/components/TradeChart'
import React from 'react'



const Home = () => {
    return (
        <div className='grid grid-cols-3 gap-3 p-3'>
            <DynamicCard
                CardTitleStr='Test'
                CardDescriptionStr='test desc'
                CardContentJSX={<h3>Hello</h3>}
                CardFooterJSX={<h4>ms</h4>}
            />
            <DynamicCard
                CardTitleStr='Test'
                CardDescriptionStr='test desc'
                CardContentJSX={<h3>Hello</h3>}
                CardFooterJSX={<h4>ms</h4>}
            />
            <DynamicCard
                CardTitleStr='Test'
                CardDescriptionStr='test desc'
                CardContentJSX={<h3>Hello</h3>}
                CardFooterJSX={<h4>ms</h4>}
            />
            <div className='col-span-3'>
                {/* <TradeChart/> */}
                <TempTradeChart/>
            </div>
        </div>
    )
}

export default Home