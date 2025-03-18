import { fetchCellData, } from "@/lib/data"

export default async function Cell({ x, y, userId }: { x: number, y: number, userId: string }) {
    const data = await fetchCellData(x, y, userId)
    return <td className="w-10 text-center border-gray-400 border-2 cursor-pointer">{data.value}</td>
}