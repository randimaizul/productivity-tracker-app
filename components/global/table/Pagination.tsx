"use client";

import React from 'react';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { generatePagination } from '@/utils/global';

type ParamProps = {
    totalPages: number,
}

type ParamPageProps = {
    page: number | string,
    href: string,
    position: "first" | "last" | "middle" | "single",
    isActive: boolean
}

type ParamArrowProps = {
    href: string,
    direction: "left" | "right",
    isDisabled: boolean
}

const Pagination = ({ totalPages }: ParamProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: string | number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    const allPages = generatePagination(currentPage, totalPages);

    const PaginationNumber = ({
        page,
        href,
        position,
        isActive
    } : ParamPageProps) => {

        const className = clsx ("flex h-10 w-10 items-center justify-center text-sm border", {
            "rounded-l-sm": position === "first" || position === "single",
            "rounded-r-sm": position === "last" || position === "single",
            "z-10 bg-blue-100 border-blue-500 text-white" : isActive,
            "hover:bg-gray-100": !isActive  && position !== "middle",
            "text-gray-300 pointer-events-none": position === "middle"
        });

        return isActive && position === "middle" ? (
            <div className={className}>{page}</div>
        ) : (
            <Link href={href} className={className} >
                {page}
            </Link>
        )

    };

    const PaginationArrow = ({
        href,
        direction,
        isDisabled
    }: ParamArrowProps) => {

        const className = clsx ("flex h-10 w-10 items-center justify-center text-sm border", {
            "mr-2": direction === "left",
            "ml-2": direction === "right",
            "text-gray-300 pointer-events-none": isDisabled,
            "hover:bg-gray-100": !isDisabled
        });

        const icon = direction === "left" ? (
            <HiChevronLeft size={20} />
        ) : (
            <HiChevronRight size={20} />
        );

        return isDisabled ? (
            <div className={className}>{icon}</div>
        ) : (
            <Link href={href} className={className} >
                {icon}
            </Link>
        )
    }

    return (
        <div className='inline-flex'>
            <PaginationArrow 
                direction='left'
                href={createPageURL(currentPage - 1)}
                isDisabled={currentPage <= 1}
            />

            <div className='flex -space-x-px'>
                {allPages.map((page, index) => {
                    let position: "first" | "last" | "middle" | "single";
                    if (index === 0) position = "first";
                    if (index === allPages.length - 1) position = "last";
                    if (allPages.length === 1) position = "single";
                    if(page === "...") position = "middle";
                    
                    return (
                        <PaginationNumber 
                            key={index}
                            href={createPageURL(page)}
                            page={page}
                            position={position}
                            isActive={page === currentPage}
                        />
                    );
                })}
            </div>

            <PaginationArrow 
                direction='right'
                href={createPageURL(currentPage + 1)}
                isDisabled={currentPage >= totalPages}
            />
        </div>
    )
}

export default Pagination