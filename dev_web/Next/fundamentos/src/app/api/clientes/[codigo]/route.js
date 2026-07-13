export async function GET(request, { params }) {
    const { codigo } = await params

    return Response.json({
        id: codigo,
        nome: "Renato",
        idade: 19
    })
}
