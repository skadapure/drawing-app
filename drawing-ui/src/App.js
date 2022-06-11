// import { useEffect} from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Draw from "./components/Draw"
import Login from "./components/Login";
import DrawingList from "./components/DrawingList";
import { useStore } from "./store";
import { useEffect,} from "react";

function App() {
  let navigate = useNavigate();
  let store = useStore();
  useEffect(() => {
    console.log("userId1", store.userId, store);
    if(!store.userId) {
      console.log("userId2", store.userId, store);
      navigate("/login", { replace: true});
    }
  }, [store, navigate]);
  console.log("APP")
  return (
    <Routes>
      <Route path="/draw" exact element={<Draw />}/>
      <Route path="/login" exact element={<Login />}/>
      <Route path="/" element={<DrawingList />}/>
    </Routes>
  );
}

export default App;
