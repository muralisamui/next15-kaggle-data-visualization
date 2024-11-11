"use client";

import React, { lazy, Suspense, useEffect, useState } from 'react'
import TradeData from '../../../data/tradeData.json'
import { assignRandomColors } from '@/lib/assignRandomColors'
import { filterLastNYears } from '@/lib/FilterNYearsData'
import TradeChart from '@/components/TradeChart'
import { Skeleton } from '@/components/ui/skeleton'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

const PieChartData = lazy(() => import('@/components/PieChartData'));


const FallbackComponent = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
            <Skeleton className="h-[400px] md:h-[670px] lg:h-[300px]  rounded-xl flex justify-center items-center" >
                <LoadingSpinner className='h-16 w-16' />
            </Skeleton>
            <Skeleton className="h-[400px] md:h-[670px] lg:h-[300px]  rounded-xl flex justify-center items-center" >
                <LoadingSpinner className='h-16 w-16' />
            </Skeleton>
            <Skeleton className="h-[400px] md:h-[670px] lg:h-[300px]  rounded-xl flex justify-center items-center" >
                <LoadingSpinner className='h-16 w-16' />
            </Skeleton>
            <Skeleton className="h-[500px] w-full rounded-xl lg:col-span-3 flex items-center justify-center" >
                <LoadingSpinner className='h-20 w-20' />
            </Skeleton>
        </div>
    )
}

const ProductHomePage = () => {
    const { user, isLoading } = useUser();
    const router = useRouter();
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace("/api/auth/login");
        }
    }, [user, isLoading, router]);

    useEffect(() => {
        const loadTradeData = async () => {
            await import('../../../data/tradeData.json');
            setIsDataLoaded(true);
        };

        loadTradeData();
    }, []);

    if (isLoading || !isDataLoaded) return <FallbackComponent />
    if (!user) {
        return null; // Will redirect if user is not logged in
    }

    const FilteredIndiaData = TradeData.filter((item) => item.ReporterName === "India");
    const IndiaData = assignRandomColors(filterLastNYears(FilteredIndiaData, 10))

    const FilteredJapanData = TradeData.filter((item) => item.ReporterName === "Japan");
    const JapanData = assignRandomColors(filterLastNYears(FilteredJapanData, 10))

    const FilteredNorwayData = TradeData.filter((item) => item.ReporterName === "Norway");
    const NorwayData = assignRandomColors(filterLastNYears(FilteredNorwayData, 10))

    return (
        <Suspense fallback={<FallbackComponent />}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
                <PieChartData country="India" data={IndiaData} />
                <PieChartData country="Japan" data={JapanData} />
                <PieChartData country="Norway" data={NorwayData} />
                <div className="lg:col-span-3">
                    <TradeChart />
                </div>
            </div>
        </Suspense>
    )
}

export default ProductHomePage

