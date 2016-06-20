// Create a new component. This component should produce some HTML
const App = function() {
  return <div>Hi!</div>;
}

// Take this component's generated HTML & put it on the page (in the DOM)
React.render(App);


// NOTES:
// const = constant (opp. of var) (ES6)
// webpack + babel converts JSX (ES6) to vanilla JS
// JSX = JS code that can produce HTML
