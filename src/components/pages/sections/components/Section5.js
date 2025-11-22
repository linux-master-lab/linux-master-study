// Section 5. 리눅스 파티션
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section5() {
    return (
        <SectionTemplate title="리눅스 파티션">
            <h2 className="section-subtitle">부제목</h2>

            <SectionBlock title="소제목">
                <ul className="section-list">
                    <li>내용1</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}