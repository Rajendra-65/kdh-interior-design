"use client"
import { Star } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import React from "react"
import { ReviewTypes } from "../../../../types/review"
import { useState } from "react"
import { useEffect } from "react"
import { getReviews } from "../../../../service/ReviewService"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Reviews = () => {

    const [reviews, setReviews] = useState<ReviewTypes[]>([])
    const [fetched, setFetched] = useState<boolean>(false)
    const [error,setError] = useState(false)
    const totalRate = 5
    const router = useRouter()

    const fetchReview = async () => {
        const response = await getReviews()
        if(response.success){
            const data = response.reviews
            setReviews(data)
            setFetched(true)
        }else{
            setError(true)
        }
        
    }

    useEffect(() => {
        fetchReview()
    }, [])

    return (
        <>
            {
                error ? (
                    <div className = "flex items-center justify-center px-4">
                        <div className = "flex items-center justify-center w-full md:w-[50%] border border-b-2 border-r-2 border-cyan-400">
                            <h1 className="font-bold text-xl px-2 py-2">
                                Error in Fetching the Data please try again
                            </h1>
                        </div>
                    </div>
                ) : (
                    fetched ? (
                    <>
                        <div className = "w-[80%] md:w-[50%] px-3 py-2 flex m-auto">
                            <Button 
                                className = "w-full bg-cyan-400 rounded-md animate-bounce"
                                onClick = {()=>router.push("/write-review")}
                            >
                                Write an Review
                            </Button>
                        </div>
                        <div className="flex items-center gap-5 justify-center flex-wrap">
                            {
                                reviews.map((review, index) => (
                                    <>
                                        <div
                                            className="border border-b-4 border-r-4 rounded-md border-sky-300 w-[350px] h-[210px]"
                                            key={index}
                                        >
                                            <div className="px-2 py-2 flex flex-col gap-4 ">
                                                <div className="flex justify-between px-2.5">
                                                    <div className="w-10 h-10 rounded-full bg-amber-300 flex items-center">
                                                        <Tooltip>
                                                            <TooltipTrigger className="flex m-auto justify-center items-center">
                                                                <h1
                                                                    className="font-bold "
                                                                >
                                                                    {review.userName.charAt(0).toUpperCase()}
                                                                </h1>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <div className="flex flex-col gap-2">
                                                                    <h1 className="text-secondary">
                                                                        {review.userName}
                                                                    </h1>
                                                                    <h1 className="text-secondary">
                                                                        {`rated us ${review.rate} / 5`}
                                                                    </h1>
                                                                </div>
                                                            </TooltipContent>
                                                        </Tooltip>

                                                    </div>
                                                    <div
                                                        className="flex items-center justify-center gap-1"
                                                    >
                                                        {[...Array(review.rate)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="fill-amber-300 size-5" />
                                                        ))}
                                                        {[...Array(totalRate - review.rate)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="size-5" />
                                                        ))}

                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p
                                                        className="text-base/6 leading-6 indent-8"
                                                    >
                                                        {review.message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </>

                ) : (
                    <div className="flex items-center space-x-4 m-auto">
                        <Skeleton className="h-12 w-12 rounded-full bg-gray-400" />
                        <div className="space-y-2 ">
                            <Skeleton className="h-4 w-[250px] bg-gray-400" />
                            <Skeleton className="h-4 w-[200px] bg-gray-400" />
                        </div>
                    </div>
                )
                )
                
            }
        </>
    )
}

export default Reviews