import { NextResponse } from "next/server";

export async function GET {  //async é o que não está sincronizado.
    return NextResponse.json({mensagem : "Olá Mundo!!!"});

}