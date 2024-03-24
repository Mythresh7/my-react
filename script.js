//hello world using js
 // const heading=document.createElement("h1");
// heading.innerHTML="Hi from javascript";
// const k=document.getElementById("root");
// k.appendChild(heading);

 //using react
/*
 const heading=React.createElement("h1",{id:"hi"},"hi from react");
 //{}-->used to giv atttributes

 // const root=ReactDOM.createRoot(document.getElementById("root"));
 // root.render(heading);
 ReactDOM.render(heading,document.getElementById("root"));
*/
 /*
<div id="parent">
    <div id="child1">
        <h1>hi</h1>
        <h2>hi</h2>
    </div>
     <div id="child2">
        <h1>hi</h1>
        <h2>hi</h2>
    </div>
</div>*/
const parent=React.createElement(
    "div",
    {id:"parent"},
     [
     React.createElement("div",
     {id:"child1"},
     [React.createElement("h1",{},"HI"),
     React.createElement("h2",{},"em dng")]
 ),
 React.createElement("div",
     {id:"child2"},
     [React.createElement("h1",{},"HI"),
     React.createElement("h2",{},"em dng")]
 )]
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
