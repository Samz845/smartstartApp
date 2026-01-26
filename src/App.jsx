import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplayOut from "./ui/ApplayOut";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthorizedLayout from "./ui/AuthorizedLayout";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./ui/ProtectedRoute";
import EmployeeHome from "./pages/EmployeeHome";
import UnAuthorized from "./ui/UnAuthorized";
import Checklist from "./pages/EmployeePages/Checklist";
import Uploads from "./pages/EmployeePages/Uploads";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="unauthorized" element={<UnAuthorized />} />

          <Route element={<ApplayOut />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
          </Route>

          <Route element={<AuthorizedLayout />}>
            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminHome />
                </ProtectedRoute>
              }
            />

            {/* Employee Routes */}
            <Route
              path="/checklist"
              element={
                <ProtectedRoute allowedRoles={["employee"]}>
                  <Checklist />
                </ProtectedRoute>
              }
            />

            <Route
              path="/uploads"
              element={
                <ProtectedRoute allowedRoles={["employee"]}>
                  <Uploads />
                </ProtectedRoute>
              }
            />

            <Route
              path="/employee/dashboard"
              element={
                <ProtectedRoute allowedRoles={["employee"]}>
                  <EmployeeHome />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "12px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },

          error: {
            duration: 5000,
          },

          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
