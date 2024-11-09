import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface DynamicCardprops {
    height?: number
    width?: number
    CardTitleStr: string
    CardDescriptionStr: string
    CardContentJSX: JSX.Element
    CardFooterJSX: JSX.Element
}

const DynamicCard: React.FC<DynamicCardprops> = ({ height, width, CardTitleStr, CardDescriptionStr, CardContentJSX, CardFooterJSX }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{CardTitleStr}</CardTitle>
                <CardDescription>{CardDescriptionStr}</CardDescription>
            </CardHeader>
            <CardContent>
                {CardContentJSX}
            </CardContent>
            <CardFooter className="flex justify-between">
                {CardFooterJSX}
            </CardFooter>
        </Card>
    )
}

export default DynamicCard