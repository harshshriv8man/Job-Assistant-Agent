import {db} from '../../../../configs/db'
import { HistoryTable } from '../../../../configs/schema'  // Importing HistoryTable schema
import { NextResponse } from 'next/server';  // Importing NextResponse for handling responses
import { currentUser } from '@clerk/nextjs/server';  // Importing currentUser from Clerk for user authentication
import { eq } from 'drizzle-orm';  // Importing eq for equality checks in queries

export async function POST(req:any) {
    const {content, recordId,aiAgentType} = await req.json();
    const user = await currentUser();
    try {
        // Insert Record
        const result = await db.insert(HistoryTable).values({
            recordId:recordId,
            content:content,
            userEmail: user?.primaryEmailAddress?.emailAddress,
            createdAt: (new Date()).toString(),
            aiAgentType: aiAgentType
        })
        return NextResponse.json(result)
    } catch(e){
        return NextResponse.json(e)
    }
    
}

export async function PUT(req:any) {
    const {content, recordId} =  await req.json();
    try {
        // Insert Record
        const result = await db.update(HistoryTable).set({
            content:content
        }).where(eq(HistoryTable.recordId, recordId)) 
        return NextResponse.json(result)
    } catch(e){
        return NextResponse.json(e)
    }
    
}

export async function  GET(req:any) {
    const {searchParams} = new URL(req.url);
    const recordId = searchParams.get('recordId');
    try{
        if (recordId) {
            const result = await db.select().from(HistoryTable).where(eq(HistoryTable.recordId, recordId));
            return NextResponse.json(result[0]);
        }
        return NextResponse.json({});
    }catch(e){
        return NextResponse.json(e);
    }
}