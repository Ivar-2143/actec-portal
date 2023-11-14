export async function getList(){
    const response = await fetch('https://dummyjson.com/users')

    if(!response.ok){
        throw new Error("Failed to fetch user list");
    }

    return response.json();
}


export default async function MobileTable() {
    const list = await getList();
    
    console.log(list.users);
    return (
    <main>
        {
            list.users.map((item)=>(
                <div key={item.id}>
                    id: {item.id}
                    firstname : {item.firstName}
                    lastname : {item.lastName}

                </div>
            ))
        }
    </main>
    )
}
