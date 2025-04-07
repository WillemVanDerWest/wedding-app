
export async function GET() {
    const users = [
        { id:1, name: 'Alice'},
        { id:2, name: 'Bob'}
    ];

    return new Response(JSON.stringify(users), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    });
}

export async function POST(request: Request){
    const body= await request.json();




    return new Response(JSON.stringify(body),{
        status:201,
        headers: { 'Content-Type' : 'application/json' }
    })
}

