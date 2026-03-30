export async function GET(request) {
    // usando query params
    const { searchParams } = new URL(request.url)
    
    const nome = searchParams.get("nome")
    const id = searchParams.get("id")

    return Response.json({
        name: 'Teste API',
        metodo: request.method,
        nome: nome,
        id: +id
    })
}

// trando metodos diferentes com a mesma URL
// export async function POST(req) {
//     return Response.json({
//         name: 'Teste API',
//         metodo: req.method
//     })
// }