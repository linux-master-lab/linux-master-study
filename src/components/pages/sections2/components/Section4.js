// Section 4. 리눅스 셸 환경 설정
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section4() {
    return (
        <SectionTemplate title="리눅스 셸 환경 설정">

            {/* 부제목 */}
            <h2 className="section-subtitle">환경 변수와 셸 변수</h2>

            {/* 환경 변수 */}
            <SectionBlock title="환경 변수">
                <ul className="section-list">
                    <li>전체 셸에서 사용 가능한 전역 변수</li>
                    <li>서브 셸에 기능 상속 가능</li>
                    <li>환경 변수 확인 명령 env</li>
                </ul>
            </SectionBlock>

            {/* 셸 변수 (지역 변수) */}
            <SectionBlock title="셸 변수 (지역 변수)">
                <ul className="section-list">
                    <li>현재 로그인 셸에서만 사용 가능한 지역 변수</li>
                    <li>서브 셸에 기능 상속 불가능</li>
                    <li>셸 변수 확인 명령 set</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">환경 설정 파일</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>
                        셸 시작 시 자동으로 실행되는 고유의 시작 파일이 있다.<br/>
                        이 파일은 사용자 운영환경을 설정한다.
                    </li>
                    <li>배쉬셸의 시작 파일은 /etc/profile, /etc/bashrc, ~/.bash_profile, ~/.bashrc 이다.</li>
                    <li>셸 파일은 전역적 파일과 지역적 파일로 나뉜다.</li>
                    <li>파일 /etc/profile.d는 몇몇 응용 프로그램들이 시작 시 자동 실행할 스크립트 파일 경로를 넣어둔다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">배쉬셸의 주요 기능</h2>

            {/* History 기능 */}
            <SectionBlock title="History 기능">
                <ul className="section-list">
                    <li>일정 개수 이상 사용했던 명령어를 .bash_history에 저장해 두고 다시 불러서 사용할 수 있게 하는 기능이다.</li>
                    <li>대부분의 셸은 이전에 입력했던 명령어를 반복하거나 약간 변형하여 다시 사용할 수 있도록 하는 기능이다.</li>
                </ul>
            </SectionBlock>

            {/* alias 기능 */}
            <SectionBlock title="alias 기능">
                <ul className="section-list">
                    <li>자주 사용하는 명령어를 특정 문자로 입력해 두고 간편하게 사용할 수 있게 하는 기능이다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}