import './App.css';
import {BrowserRouter, HashRouter, Routes, Route} from "react-router-dom";
import SectionList1 from './components/pages/sections1/SectionList1';
import SectionList2 from './components/pages/sections2/SectionList2';
import SectionList3 from './components/pages/sections3/SectionList3';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    {/* 기본 경로 */}
                    {/* <Route path="/" element={<Sections />}/> */}

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list1" element={<SectionList1 />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list2" element={<SectionList2 />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list3" element={<SectionList3 />}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
