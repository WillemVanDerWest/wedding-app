import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "nodemailercabous@gmail.com",
        pass: "Willem12345"
    }
}
)

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



    async function email() {
        transporter.sendMail({
            from: `nodemailercabous@gmail.com`,
            to: "willem04011999@gmail.com",
            subject: "hello world",
            text: 'hello worlds',
            html: "<b>Hello world</b>"
        })
        
    }
    return new Response(JSON.stringify(body),{
        status:201,
        headers: { 'Content-Type' : 'application/json' }
    })
}

