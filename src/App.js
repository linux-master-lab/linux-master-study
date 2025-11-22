import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sections from './components/pages/sections/Sections';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* 기본 경로 */}
                    {/* <Route path="/" element={<Sections />}/> */}

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-web" element={<Sections />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
