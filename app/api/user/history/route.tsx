import {db} from '../../../../configs/db'
import { HistoryTable } from '../../../../configs/schema'  // Importing HistoryTable schema
import { NextResponse } from 'next/server';  // Importing NextResponse for handling responses
import { currentUser } from '@clerk/nextjs/server';  // Importing currentUser from Clerk for user authentication

export async function POST(req:any) {
    const {content, recordId} = await req.json();
    const user = await currentUser();
    try {
        // Insert Record
        const result = await db.insert(HistoryTable).values({
            recordId:recordId,
            content:content,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: (new Date()).toString()
        })
        return NextResponse.json(result)
    } catch(e){
        return NextResponse.json(e)
    }
    
}