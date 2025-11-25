// Section 1. 리눅스 권한 및 그룹 설정
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section1() {
    return (
        <SectionTemplate title="리눅스 리눅스 권한 및 그룹 설정">
            
            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>리눅스 시스템은 모든 파일과 디렉터리에는 접근권한과 소유권이 부여된다.</li>
                    <li>명령어 'ls -l'은 파일 속성을 나타낸다.</li>
                    <li>속성 필드 중 첫 번째 필드는 파일이나 디렉터리의 허가권, 세번째와 네번째 필드는 파일이나 디렉터리의 소유권을 나타낸다.</li>
                    <li>파일의 허가권이나 소유권을 설정하는 명령어는 chmod, chown, chgrp, umask등이 있다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
