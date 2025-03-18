export async function getCellData(x:number, y:number) {
    await new Promise(resolve => {setTimeout(resolve, 2500)})
    
    return {
        data: `${(x + 1) * (y + 1)} data`,
        revalidate: 60 
    }
} 