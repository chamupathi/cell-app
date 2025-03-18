import Cell from "./components/cell"

export async function generateStaticParams() {
    const userIds = ["guest"]; // Fetch the list of user IDs

    return userIds.map((id) => ({ userId: id.toString() }));
}

export const revalidate = 60;

export default async function DashboardPage({ params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params

    const date = new Date()
    return <main className="flex flex-col flex-start">
        <div className="p-6">Header {date.toISOString()}</div>
        <div className="p-6 align-middle border text-center">Content</div>
        <div className="p-6 align-middle border text-center">{userId}</div>

        <table className="m-6">
            <tbody>
                {Array.from(new Array(800)).map((_, r) => <tr key={r}>
                    {
                        Array.from(new Array(10)).map((_, i) => <Cell
                            key={i}
                            x={r} y={i} />)
                    }
                </tr>)}
            </tbody>
        </table>


    </main>
}