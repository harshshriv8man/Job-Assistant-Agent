import { PricingTable } from "@clerk/nextjs";
import React from "react";

function Billing() {
    return (
        <div>
            <h2 className="font-bold text-3xl text-center"> Choose Your Plan </h2>
            <p className="text-lg text-center"> Select a Subscription Bundle to Get More AI Features!</p>
            <div className="mt-6">
                <PricingTable/>
            </div>
        </div>
    )
}

export default Billing;
