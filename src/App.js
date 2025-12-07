import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SectionList1 from './components/pages/sections1/SectionList1';
import SectionList2 from './components/pages/sections2/SectionList2';
import SectionList3 from './components/pages/sections3/SectionList3';
import Home from './components/pages/home/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    {/* 기본 경로 */}
                    <Route path="/*" element={<Home />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list1" element={<SectionList1 />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list2" element={<SectionList2 />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list3" element={<SectionList3 />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
