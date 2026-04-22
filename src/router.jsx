



// import { createBrowserRouter } from "react-router-dom";

// import App from "./App";
// import Home from "./pages/Home";
// import About from "./sections/about/About";
// import Events from "./sections/gallery/EventGallery";
// import Testimonials from "./sections/testimonials/Testimonials";
// import Contact from "./sections/contact/Contact";
// import NotFound from "./pages/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },

//       // ✅ Add all pages used in navbar
//       { path: "about", element: <About /> },
//       { path: "events", element: <Events /> },
//       { path: "testimonials", element: <Testimonials /> },
//       { path: "contact", element: <Contact /> },

//       // ✅ Catch all
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);

// export default router;


















import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./sections/about/About";
import Events from "./sections/gallery/EventGallery";
import Testimonials from "./sections/testimonials/Testimonials";
import Contact from "./sections/contact/Contact";
import AIWorkshopsIndia from "./pages/AIWorkshopsIndia"; // ✅ NEW
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      // Existing routes
      { path: "about", element: <About /> },
      { path: "events", element: <Events /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },

      // 🔥 NEW SEO PAGE
      { path: "ai-workshops-india", element: <AIWorkshopsIndia /> },

      // Catch all
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;   