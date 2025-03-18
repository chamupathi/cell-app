export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="flex flex-col flex-start">
        <div className="mb-0 p-6 align-middle flex flex-col flex-start bg-gray-200">

            <h1 className="italic text-2xl">Dashbord ISR : The page is rendered incrementally for each unique user</h1>
        </div>

        {children}
    </main>
}