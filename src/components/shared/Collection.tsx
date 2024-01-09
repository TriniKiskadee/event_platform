import {IEvent} from "@/lib/database/models/event.model";

type CollectionProps = {
    data: IEvent[]
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    collectionType?: "Events_Organized" | "My_Tickets" | "All_Events",
    urlParamName?: string,
}

const Collection = ({
    data,
    emptyTitle,
    emptyStateSubtext,
    page,
    totalPages = 0,
    collectionType,
    urlParamName
}: CollectionProps) => {
    return (
        <>
            {data.length > 0 ? (
                <div>

                </div>
            ) : (
                <div>
                    <h3>
                        {emptyTitle}
                    </h3>
                    <p>
                        {emptyStateSubtext}
                    </p>
                </div>
            )}
        </>
    )
}

export default Collection;