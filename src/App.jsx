// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Compiler from "./pages/Compiler";
// import About from "./pages/About";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ContactUs from "./pages/ContactUs";
// import Adsense from "./components/Adsense";
// import BlogList from "./pages/Blog/BlogList";
// import BlogPost from "./pages/Blog/BlogPost";
// import AdminPanel from "./pages/AdminPanel";
// import LecturesView from "./pages/LecturesView";
// /**
//  * Main App Component
//  * Sets up routing and renders the application
//  */
// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/compiler" element={<Compiler />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//           <Route path="/blog" element={<BlogList />} />
//           <Route path="/blog/:slug" element={<BlogPost />} />
//           <Route path="/admin" element={<AdminPanel />} />
//           <Route path="/lectures" element={<LecturesView />} />
//         </Routes>
//         {/* SAFE GLOBAL AD (below content, above footer) */}
//         <div style={{ width: "100%", maxWidth: "1100px", margin: "40px auto" }}>
//           <Adsense slot="8351730639" />
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Compiler from './pages/Compiler';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import BlogList from './pages/Blog/BlogList';
import BlogPost from './pages/Blog/BlogPost';
import AdminPanel from './pages/AdminPanel';
import LecturesView from './pages/LecturesView';
import Auth from './pages/Auth';

const FULL_SCREEN = ['/auth'];

function Layout({ children }) {
  const location = useLocation();
  const isFullScreen = FULL_SCREEN.includes(location.pathname);
  return (
    <div className="app">
      {!isFullScreen && <Navbar />}
      <Routes>{children}</Routes>
      {!isFullScreen && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Route path="/"               element={<Home />} />
          <Route path="/compiler"       element={<Compiler />} />
          <Route path="/about"          element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog"           element={<BlogList />} />
          <Route path="/blog/:slug"     element={<BlogPost />} />
          <Route path="/auth"           element={<Auth />} />
          <Route path="/admin"          element={<AdminPanel />} />
          <Route path="/lectures"       element={<LecturesView />} />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;