const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(
    "div",
    { className: "p-4" },
    React.createElement(
      "header",
      { className: "text-2xl font-bold mb-4" },
      React.createElement(
        "h1",
        { className: "text-gray-600" },
        "This page is now using React with Tailwind CSS."
      )
    )
  )
);
