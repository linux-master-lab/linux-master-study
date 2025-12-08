import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SectionsList1 from './components/pages/sections/sections-list1/SectionsList1';
import SectionsList2 from './components/pages/sections/sections-list2/SectionsList2';
import SectionsList3 from './components/pages/sections/sections-list3/SectionsList3';
import SectionsListAll from './components/pages/sections/sections-list-all/SectionsListAll';
import Home from './components/pages/home/Home';

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    {/* 기본 경로 */}
                    <Route path="/*" element={<Home />}/>

                    {/* 리눅스 웹 */}
                    <Route path="/liunx-list1" element={<SectionsList1 />}/>
                    <Route path="/liunx-list2" element={<SectionsList2 />}/>
                    <Route path="/liunx-list3" element={<SectionsList3 />}/>
                    <Route path="/liunx-list-all" element={<SectionsListAll />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
