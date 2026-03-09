import trustees from '@/data/trustees.json';
import { NextResponse } from 'next/server';

export async function GET(){
    return NextResponse.json(trustees)
}