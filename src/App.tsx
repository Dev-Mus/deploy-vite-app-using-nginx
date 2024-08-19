import "./App.css";
import Section from "./components/Section";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const config: Record<
  "home" | "about" | "notFound",
  { title: string; description?: string }
> = {
  home: {
    title: "How to Deploy a Vite React App using Nginx server",
    description:
      "Learn the step-by-step process of deploying your Vite React application on an Nginx server. This comprehensive guide covers everything from building your project to configuring Nginx for optimal performance and security. Whether you're a seasoned developer or just getting started, you'll find practical tips and clear instructions to get your app live and running smoothly on the web.",
  },
  about: {
    title: "About Us",
    description: `Welcome to the About Us page of our Vite React app! Here, you'll learn more about our mission, values, and the passionate team behind this project. We're dedicated to creating innovative, high-performance web applications that enhance user experiences and drive success. Our journey began with a simple goal: to leverage cutting-edge technology to solve real-world problems. Over time, we've grown into a dynamic team of developers, designers, and tech enthusiasts, all committed to delivering exceptional digital solutions. Explore this page to discover our story, meet our team, and understand what drives us forward. We're excited to share our vision with you!`,
  },
  notFound: {
    title: "Oops! Page Not Found",
    description: `Sorry, the page you're looking for doesn't exist or has been moved. But don't worry, we're here to help you get back on track!`,
  },
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Section {...config.home} />} />
          <Route path="/about" element={<Section {...config.about} />} />
          <Route path="/*" element={<Section {...config.notFound} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
