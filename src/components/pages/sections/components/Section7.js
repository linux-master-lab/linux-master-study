// Section 7. 사용자 생성 및 계정 관리
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section7() {
    return (
        <SectionTemplate title="사용자 생성 및 계정 관리">
            <h2 className="section-subtitle">부제목</h2>

            <SectionBlock title="소제목">
                <ul className="section-list">
                    <li>내용1</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}