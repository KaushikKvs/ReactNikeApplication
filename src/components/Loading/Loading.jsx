import { useState, useEffect } from "react";
import Typical from "react-typical";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 18000);
  }, []);

  return (
    <div>
      <h1
        id="loading"
        className="flex h-screen items-center justify-center text-4xl text-yellow-500  progress"
      >
        {loading ? (
          <div className="color"></div>
        ) : //   <Typical className="color" />
        //   <Typical
        //     className="color"
        //     oop={1}
        //     wrapper="p"
        //     steps={[
        //       "Hello",
        //       2000,
        //       "My name is Kaushik.",
        //       3000,
        //       "I am an aspiring developer",
        //       3000,
        //       "Welcome to my website!",
        //       3000,
        //     ]}
        //   />
        null}
      </h1>
    </div>
  );
};

export default Loading;

// import { useState, useEffect } from "react";

// const Loading = () => {
//   const [loading, setLoading] = useState(false);

//   const [quote, setQuote] = useState({});

//   const getRandomQuote = () => {
//     setLoading(true);
//     fetch("https://api.quotable.io/random")
//       .then((res) => res.json())
//       .then((data) => {
//         setLoading(false);
//         setQuote(data);
//       });
//   };
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div className="container">
//       {loading ? (
//         <div className="loader-container">
//           <div className="spinner"></div>
//         </div>
//       ) : (
//         <div className="main-content">
//           <h1>Hello World!</h1>
//           <p>
//             This is a demo Project to show how to add animated loading with
//             React.
//           </p>
//           <div className="buttons">
//             <button className="btn">
//               <a href="#">Read Article</a>
//             </button>
//             <button className="btn get-quote" onClick={getRandomQuote}>
//               Generate Quote
//             </button>
//           </div>
//           <div className="quote-section">
//             <blockquote className="quote">{quote.content}</blockquote>-{" "}
//             <span className="author">{quote.author}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Loading;
