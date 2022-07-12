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
        id:"11",
        source:"salary",
        amount:10000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"income"
    }
)
data.report.push(
    {
        id:"12",
        source:"ecommerce",
        amount:5000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"income"
    }
)
data.report.push(
    {
        id:"13",
        source:"ecommerce",
        amount:2000,
        created_At:new Date(),
        updated_At:new Date(),
        type:"expense"
    }
)