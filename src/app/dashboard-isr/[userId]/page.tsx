import Link from "next/link";
import Cell from "./components/cell"

export async function generateStaticParams() {
    const userIds = ["guest"]; // Fetch the list of user IDs

    return userIds.map((id) => ({ userId: id.toString() }));
}

export const revalidate = 120;

export default async function DashboardPage({ params }: { params: Promise<{ userId: string }> }) {

    const { userId } = await params

    const date = new Date()
    return <main className="flex flex-col flex-start">
        <div className="flex flex-row flex-start pr-6 pl-6">
            <div className="flex flex-col flex-start w-64 bg-gray-200">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/dashboard-isr" className="text-blue-600 bold">Dashboard ISR</Link>
            </div>
            <div className="flex-grow">
                <table className="flex-grow w-full">
                    <tbody>
                        {Array.from(new Array(400)).map((_, r) => <tr key={r}>
                            {
                                Array.from(new Array(4)).map((_, i) => <Cell
                                    key={i}
                                    x={r}
                                    y={i}
                                    userId={userId}
                                />)
                            }
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="p-6">Rendered at {date.toISOString()}</div>
        <div className="pl-6 pr-6 align-middle border-b text-center">User Id : {userId}</div>
    </main>
}