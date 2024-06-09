const ProfileList = ()=>{


    const navigationList = [
        {
            label :"myprefrences",
            route :"/prefrences"
        },
        {
            label :"mynotification",
            route :"/notification"
        },
        {
            label :"requestrefund",
            route :"/requestrefund"
        },
        {
            label :"myprofile",
            route :"/profile"
        },
        {
            label :"getapp",
            route :"/getapp"
        },
        {
            label :"needhelp",
            route :"/needhelp"
        },
        {
            label :"logout",
            route :"/logout"
        },
    ]



     return <>{
        navigationList?.map((data,index)=>{
            return <li key={index}> <button>{data?.label}</button> </li>
        })}</> 

}