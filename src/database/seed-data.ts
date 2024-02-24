
interface SeedData{
    entries:SeedEntry[]
}

interface SeedEntry {
    description: string,
    status:string,
    createdAt:number
}

export const seedData : SeedData = {
    entries:[
        {
            description:'Pendiente: lorem akldjlaskjdlaksjdkjdas',
            status:'pending',
            createdAt:Date.now()
        },{
            description:'In Progress: lorem akldjlaskjdlaksjdkjdas 2',
            status:'in-progress',
            createdAt:Date.now() - 1000000
        },{
            description:'Finished: lorem akldjlaskjdlaksjdkjdas 3',
            status:'finished',
            createdAt:Date.now() -100000
        },
    ]
}