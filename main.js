const users =[
    {id:1,name:'jonh',email:'john@gmail.com',address:'john123'},
    {id:2,name:'aman',email:'aman@gmail.com',address:'aman123'},
    {id:3,name:'abc',email:'abc@gmail.com',address:'abc123'},
    {id:4,name:'misha',email:'misha@gmail.com',address:'misha123'},
    {id:5,name:'nisha',email:'nisha@gmail.com',address:'nisha123'}
]

const UserProfile =({user})=>{
        return (
            <div className='card'>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
                <p>{user.address}</p>

            </div>
        )
}

const UserProfileList=()=>{
    const[searchValue,setSearchValue]= React.useState('')


     const handleChange=(e)=>{
        let value= e.target.value;
        setSearchValue(value)
        // console.log('object')
     }
    console.log(searchValue)
    
    const filtereddata= users.filter((user)=>
        user.name.toLowerCase().includes(searchValue.toLowerCase()))
    
    return (
            <div>
                <input type='text' placeholder='Search by name' onChange={handleChange} />

            <div>
            {
                filtereddata.map((el)=>{
                    return <UserProfile key={el.id} user={el} />
                })
            }
            </div>
            </div>
        )
}

const APP=()=>{
    return (
        <>
    <UserProfileList/>
        </>

    )
}

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<APP/>)