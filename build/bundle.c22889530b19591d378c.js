"use strict";(self.webpackChunkreact_webpack_typescript_2021=self.webpackChunkreact_webpack_typescript_2021||[]).push([[296],{995:(e,t,l)=>{var n=l(294),r=l(60),a=l(250);const c=()=>n.createElement("div",null,n.createElement("h1",null,"Main Layout"),n.createElement(a.j3,null)),m=()=>{const e=(0,a.s0)();return n.createElement("div",null,"Login Page",n.createElement("button",{onClick:()=>{localStorage.setItem("token","test"),e("/")}},"Login"))},E=()=>n.createElement("div",null,"Errorrrrrrrrrrrrrrrrrrrrrr"),o=()=>n.createElement("div",null,"Dashboard"),u=function(){return n.createElement("div",null,"Test")},s=()=>n.createElement("div",null,n.createElement("h1",null,"Empty Layout"),n.createElement(a.j3,null));var d=l(655);const i=()=>{const e=(0,a.s0)();return n.createElement("div",{className:"bg-red"},n.createElement("h1",{className:"text-5xl"},"Dashboard layput "),n.createElement("nav",null,n.createElement(d.rU,{to:"/dashboard"},"Dashboard"),n.createElement(d.rU,{to:"/dashboard/test"},"Test"),n.createElement("p",{onClick:()=>{localStorage.removeItem("token"),e("/login")}},"Logout")),n.createElement(a.j3,null))},h=({children:e})=>localStorage.getItem("token")?e:n.createElement(a.Fg,{to:"/login"}),p=function(){return n.createElement(a.Z5,null,n.createElement(a.AW,{element:n.createElement(h,null,n.createElement(i,null))},n.createElement(a.AW,{path:"/",element:n.createElement(o,null)}),n.createElement(a.AW,{path:"/dashboard",element:n.createElement(o,null)}),n.createElement(a.AW,{path:"/dashboard/test",element:n.createElement(u,null)})),n.createElement(a.AW,{element:n.createElement(c,null)},n.createElement(a.AW,{path:"/login",element:n.createElement(m,null)})),n.createElement(a.AW,{element:n.createElement(s,null)},n.createElement(a.AW,{path:"*",element:n.createElement(E,null)})))};e=l.hmd(e),r.render(n.createElement(n.StrictMode,null,n.createElement(d.VK,null,n.createElement((()=>n.createElement(n.Fragment,null,n.createElement("h1",{className:"bg-red-900 text-white"},"Hello world"),n.createElement(p,null),";")),null))),document.getElementById("root"))}},e=>{e.O(0,[216],(()=>(995,e(e.s=995)))),e.O()}]);