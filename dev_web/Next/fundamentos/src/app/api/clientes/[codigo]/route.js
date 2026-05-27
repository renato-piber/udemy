
export async function GET(req, { params }) {
    // usando routes params
    const { codigo } = await params // server components do tipo route.js sao sincronos, n precisam de await

    return Response.json({
        id: codigo,
        nome: `renato`,
        idade: 19
    })
}