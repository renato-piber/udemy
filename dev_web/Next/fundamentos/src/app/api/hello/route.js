export async function GET(req) {
    return Response.json({
        name: 'Teste API',
        metodo: req.method
    })
}

// trando metodos diferentes com a mesma URL
// export async function POST(req) {
//     return Response.json({
//         name: 'Teste API',
//         metodo: req.method
//     })
// }