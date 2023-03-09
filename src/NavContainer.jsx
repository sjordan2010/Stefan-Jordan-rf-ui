import React from 'react'
import NavBar from './NavBar'
import Profile from './Profile'

export default function NavContainer({ event, formattedDate, setSelected, navLinks }) {
    // console.log('navLinks', navLinks)


//   <div class="header"></div>
//      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
//      <label for="openSidebarMenu" class="sidebarIconToggle">
//          <div class="spinner diagonal part-1"></div>
//          <div class="spinner horizontal"></div>
//          <div class="spinner diagonal part-2"></div>
//      </label>
//      <div id="sidebarMenu">
//          <ul class="sidebarMenuInner">
//          </ul>
//      </div>
//  </div>

// .header {
//     position: fixed;
//     height: 60px!important;
//     overflow: hidden;
//     z-index: 10;
// }

// #sidebarMenu {
//     height: 100%;
//     position: fixed;
//     left: 0;
//     width: 250px;
//     margin-top: 60px;
//     transform: translateX(-250px);
//     transition: transform 250ms ease-in-out;
//     background: linear-gradient(180deg, #FC466B 0%, #3F5EFB 100%);
// }

// input[type="checkbox"]:checked ~ #sidebarMenu {
//     transform: translateX(0);
// }

// input[type=checkbox] {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     display: none;
// }
// .sidebarIconToggle {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     cursor: pointer;
//     position: absolute;
//     z-index: 99;
//     height: 100%;
//     width: 100%;
//     top: 22px;
//     left: 15px;
//     height: 22px;
//     width: 22px;
// }
// .spinner {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     position: absolute;
//     height: 3px;
//     width: 100%;
//     background-color: #fff;
// }
// .horizontal {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     position: relative;
//     float: left;
//     margin-top: 3px;
// }
// .diagonal.part-1 {
//     position: relative;
//     transition: all 0.3s;
//     box-sizing: border-box;
//     float: left;
// }
// .diagonal.part-2 {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     position: relative;
//     float: left;
//     margin-top: 3px;
// }
// input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     opacity: 0;
// }
// input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     transform: rotate(135deg);
//     margin-top: 8px;
// }
// input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
//     transition: all 0.3s;
//     box-sizing: border-box;
//     transform: rotate(-135deg);
//     margin-top: -9px;
// }

  return (
    <div className="nav-container flex">
        <Profile event={event} formattedDate={formattedDate} setSelected={setSelected} navLinks={navLinks} />
        <NavBar event={event} formattedDate={formattedDate} setSelected={setSelected} navLinks={navLinks} />
    </div>
  )
}