import{j as a,a as l}from"./app-2dde695b.js";const c=({label:i,name:r,className:o,errors:s=void 0,...t})=>a("div",{className:o,children:[i&&a("label",{className:"form-label",htmlFor:r,children:[i,":"]}),l("input",{id:r,name:r,...t,className:`form-input ${s?"error":""}`}),s&&l("div",{className:"form-error",children:s})]});export{c as T};