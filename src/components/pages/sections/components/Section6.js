// Section 6. 리눅스 부트 매니저
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section6() {
    return (
        <SectionTemplate title="리눅스 부트 매니저">
            <h2 className="section-subtitle">부제목</h2>

            <SectionBlock title="소제목">
                <ul className="section-list">
                    <li>내용1</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}