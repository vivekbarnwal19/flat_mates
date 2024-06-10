import React from "react";
import MyTeamIcon from '../assets/user-management-13.png'
import AddListingIcon from '../assets/plus_icon-icons.com_66718.png'
import AvatarIcon from '../assets/man_person_people_avatar_icon_230017.png'
import RIcon from '../assets/png-transparent-registered-trademark-symbol-service-mark-copyright-r-miscellaneous-text-trademark-thumbnail.png'

function Header() {
    return (
        <div className="max-w-6xl flex items-center justify-between mr-auto ml-auto w-11/12 mt-6">
            
        
            <p className="heading relative cursor-pointer">Flat<span className="text-green-600 font-semibold">Mates</span>
            <img src={RIcon} height={15} width={15} alt=""  className="absolute left-[102px] top-1"/>
            </p>
            
            <div className="flex gap-6">
            <div className="myteam">
                <img src={MyTeamIcon} height={30} width={30} alt="" />
                <button>My Team</button>
            </div>
            <div className="add-listing">
                <img src={AddListingIcon} height={20} width={20} alt="" />
                <button>Add Listing</button>
                <p className="free">FREE</p>
            </div>
            <div className="profile">
                <button><img src={AvatarIcon} height={40} width={40} alt="" /></button>

            </div>
            </div>
        </div>
    )
}
export default Header;