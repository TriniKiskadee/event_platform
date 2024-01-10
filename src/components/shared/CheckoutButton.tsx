"use client"

import {IEvent} from "@/lib/database/models/event.model";
import {useUser} from "@clerk/nextjs";

const CheckoutButton = ({event}: {event: IEvent}) => {
    const {user} = useUser()
    const userId = user?.publicMetadata.userId as string

    const hasEventFinished = new Date(event.endDateTime) < new Date()

    return (
        <div className={"flex items-center gap-3"}>
            {/* Cannot buy past event */}
            {hasEventFinished ? (
                <p>Sorry, Tickets are no longer available.</p>
            ): (
                <>
                    Button
                </>
            )}
        </div>
    );
};

export default CheckoutButton;