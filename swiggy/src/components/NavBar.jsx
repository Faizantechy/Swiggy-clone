import React from 'react'

const NavBar = ({setSideBar}) => {

    let Links = [
        { link: 'Search', icon: 'ri-search-line' },
        { link: 'Offers', icon: 'ri-fire-fill' },
        { link: 'Help', icon: 'ri-questionnaire-fill' },
        { link: 'Sign In', icon: 'ri-login-box-line' },
        { link: 'Cart', icon: 'ri-shopping-cart-fill' }
      ];
      
    return (
        <div className='w-full h-20 bg-white  px-[8%]  flex items-center text-black justify-between'>
            <div className="part1 flex items-center">
                <div className="logo"><img src="https://tse3.mm.bing.net/th?id=OIP.MbWLwqgg15Gk_gjLDJllRAHaFj&pid=Api&P=0&h=220" alt="" className='w-14' /></div>
                <div className="links flex gap-2 text-xl font-bold list-none">

                    <li>Ratnadha</li>
                    <li>Jodhpur</li>
                    <li>SiriNagar</li>
                    <i
  className="ri-arrow-drop-down-line text-2xl font-bold cursor-pointer"
  onClick={() => setSideBar(prevValue => !prevValue)}
></i>                </div>

            </div>
            <div className="part2"></div>

            <div className="links list-none text-xl space-x-8 flex gap-2 items-center">

{Links.map((link)=>{

return  <li className='hover:border-b-yellow-400 border-b-2'><i className={link.icon}></i>{link.link}</li>


})}                


            </div>



        </div>
    )
}

export default NavBar
