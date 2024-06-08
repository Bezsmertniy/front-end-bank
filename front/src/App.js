import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import WellcomePage from "./container/pages/welcome";
import { AuthProvider } from "./utils/AuthContext";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route
              index
              element={
                <AuthRoute>
                  <WellcomePage />
                </AuthRoute>
              }
            />
            {/* <Route
              path="/signup"
              element={<AuthRoute element={<SignupPage />} />}
            />
            <Route
              path="/signup-confirm"
              element={<AuthRoute element={<SignupConfirmPage />} />}
            />
            <Route
              path="/signin"
              element={<AuthRoute element={<SigninPage />} />}
            />
            <Route
              path="/recovery"
              element={<AuthRoute element={<RecoveryPage />} />}
            />
            <Route
              path="/recovery-confirm"
              element={<AuthRoute element={<RecoveryConfirmPage />} />}
            />
            <Route
              path="/balance"
              element={<PrivateRoute element={<BalancePage />} />}
            />
            <Route
              path="/settings"
              element={<PrivateRoute element={<SettingsPage />} />}
            />
            <Route
              path="/receive"
              element={<PrivateRoute element={<ReceivePage />} />}
            />
            <Route
              path="/send"
              element={<PrivateRoute element={<SendPage />} />}
            />
            <Route
              path="/notifications"
              element={<PrivateRoute element={<NotificationsPage />} />}
            />
            <Route
              path="/transaction/:id"
              element={<PrivateRoute element={<TransactionPage />} />}
            /> */}
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
