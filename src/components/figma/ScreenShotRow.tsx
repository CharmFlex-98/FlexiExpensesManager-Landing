"use client"

import React, {useState} from 'react'
import Image from "next/image";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Card} from "@/components/ui/card";

type Screenshot = {
    id: number
    alt: string
    src: string
}

const screenshots: Screenshot[] = [
    // Replace with your actual image sources and data
    {id: 1, alt: "Screenshot 1", src: "/product/landing/screenshot_1.png"},
    {id: 2, alt: "Screenshot 2", src: "/product/landing/screenshot_2.png"},
    {id: 3, alt: "Screenshot 3", src: "/product/landing/screenshot_3.png"},
    {id: 4, alt: "Screenshot 4", src: "/product/landing/screenshot_4.png"},
    {id: 5, alt: "Screenshot 5", src: "/product/landing/screenshot_5.png"},
    {id: 6, alt: "Screenshot 5", src: "/product/landing/screenshot_6.png"},
    {id: 7, alt: "Screenshot 5", src: "/product/landing/screenshot_7.png"},
];

export function ScreenShotRow() {
    return (
        <div className="w-full overflow-hidden">
            {/* Scrolling container */}
            <ScrollArea className="w-full h-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                    {screenshots.map((screenshot) => (
                        <Image
                            key={screenshot.id}
                            src={screenshot.src}
                            width={248}
                            height={537}
                            alt={screenshot.alt}
                        />
                    ))}
                </div>
                <ScrollBar orientation="horizontal"/>
            </ScrollArea>
        </div>
    );
}
