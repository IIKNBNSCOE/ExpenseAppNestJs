interface Data{
    report:{
        id:string,
        source:string,
        amount:number,
        created_At:Date,
        updated_At:Date,
        type:"expense" | "income"
    }[]
}
export const data:Data={
    report:[]
}

data.report.push(
    {
        id:"958c5a77-0e3d-48af-9f55-4386c08bbb53",
        source:"salary",
        amount:10000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"income"
    }
)
data.report.push(
    {
        id:"16ffd61f-2394-4399-b756-724b4a28707c",
        source:"ecommerce",
        amount:5000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"income"
    }
)
data.report.push(
    {
        id:"9c89eb4c-e059-4216-8847-724efe39b7a1",
        source:"ecommerce",
        amount:2000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"expense"
    }
)