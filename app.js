// function App() {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">React is Working!</h1>
//       <p className="text-gray-600">
//         This page is now using React with Tailwind CSS.
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  React.createElement(
    "div",
    { className: "App" },
    React.createElement(
      "header",
      { className: "App-header" },
      React.createElement("h1", null, "Hello, React!")
    )
  )
);
