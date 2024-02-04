import { access } from "fs";
import { NextResponse } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request: any){
   
    
    const {searchParams} = new URL(request.url);

    const searchText = searchParams.get('q')

    const res= await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=1&session_token=55b5e516-a16e-4d17-9f76-57fc6e1f50f0&country=AO'
    +'&access_token='+process.env.MAPBOX_ACESS_TOKEN, 
    {
        headers: { 
            'Content-Type': 'application/json' 
            },
    })

    const searchResult = await res.json();
    return NextResponse.json({data: searchResult});
}