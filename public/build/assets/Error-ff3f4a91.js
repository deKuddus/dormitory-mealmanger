import{j as n,a as e,n as a}from"./app-b424552e.js";const t=({status:r})=>{const o={503:"503: Service Unavailable",500:"500: Server Error",404:"404: Page Not Found",403:"403: Forbidden"}[r],s={503:"Sorry, we are doing some maintenance. Please check back soon.",500:"Whoops, something went wrong on our servers.",404:"Sorry, the page you are looking for could not be found.",403:"Sorry, you are forbidden from accessing this page."}[r];return n("div",{className:"flex items-center justify-center min-h-screen p-5 text-indigo-100 bg-indigo-800",children:[e(a,{title:o}),n("div",{className:"w-full max-w-md",children:[e("h1",{className:"text-3xl",children:o}),e("p",{className:"mt-3 text-lg leading-tight",children:s})]})]})};export{t as default};
