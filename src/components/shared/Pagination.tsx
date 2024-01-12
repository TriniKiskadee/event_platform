"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "@/components/ui/button";
import {formUrlQuery} from "@/lib/utils";

type PaginationProps = {
    page: number | string,
    totalPages: number,
    urlParamName?: string
}

const Pagination = ({urlParamName, page, totalPages}: PaginationProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const onClick = (btnType: string) => {
        const pageValue = btnType === "next"
            ? Number(page) + 1
            : Number(page) - 1

        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: urlParamName || "page",
            value: pageValue.toString(),
        })

        router.push(newUrl, {scroll: false})
    }

    return (
        <div className={"flex gap-2"}>
            <Button
                size={"lg"}
                variant={"outline"}
                className={""}
                onClick={() => onClick("previous")}
                disabled={Number(page) <= 1}
            >
                Previous
            </Button>
            <Button
                size={"lg"}
                variant={"outline"}
                className={""}
                onClick={() => onClick("next")}
                disabled={Number(page) >= totalPages}
            >
                Previous
            </Button>
        </div>
    );
};

export default Pagination;