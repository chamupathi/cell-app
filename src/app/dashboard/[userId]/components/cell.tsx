import { getCellData } from "@/lib/data"

export default async function Cell({ x, y }: { x: number, y: number }) {
    const { data } = await getCellData(x, y)
    return <td className="w-10 border text-center border-amber-50 cursor-pointer">{data}</td>
}