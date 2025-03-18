import Link from "next/link";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="flex flex-col flex-start">
        <div className="m-6 mb-0 p-6 pl-0 align-middle flex flex-col flex-start bg-gray-200">

            <Link href={"/"} className="mr-10 text-blue-500">Home</Link>

            <h1 className="italic text-2xl">Dashbord SSR</h1>
        </div>

        {children}
    </main>
}