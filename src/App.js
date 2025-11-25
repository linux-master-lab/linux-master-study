import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SectionList1 from './components/pages/sections1/SectionList1';
import SectionList2 from './components/pages/sections2/SectionList2';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* 기본 경로 */}
                    {/* <Route path="/" element={<Sections />}/> */}

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list1" element={<SectionList1 />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list2" element={<SectionList2 />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
