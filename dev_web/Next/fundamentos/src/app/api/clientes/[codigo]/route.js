
export async function GET(req, { params }) {
    
    const { codigo } = params // server components do tipo route.js sao sincronos, n precisam de await

    return Response.json({
        id: codigo,
        nome: `renato ${codigo}`,
        idade: 19
    })
}