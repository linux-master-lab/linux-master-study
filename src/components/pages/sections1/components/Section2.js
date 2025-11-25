// Section 2. 리눅스 역사
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section2() {
    return (
        <SectionTemplate title="리눅스 역사">

            {/* 부제목 */}
            <h2 className="section-subtitle">부제목 (넘어감)</h2>

            {/* 소제목 */}
            <SectionBlock title="소제목 (넘어감)">
                <ul className="section-list">
                    <li>내용1 (넘어감)</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}
