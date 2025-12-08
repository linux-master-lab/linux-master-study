// Section 6. 리눅스 부트 매니저
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section6() {
    return (
        <SectionTemplate title="리눅스 부트 매니저">

            {/* 부제목 */}
            <h2 className="section-subtitle">부트로더</h2>

            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>부트스크랩 로더의 준말로 컴퓨터를 사용자가 사용할 수 있도록 디스크나 플래시에 저장된 운영체제를 읽어 주기억장치에 적재해 주는 프로그램이다.</li>
                    <li>부트로더는 운영체제가 시동되게 이전에 미리 실행되면서 커널이 올바르게 시동되기 위해 필요한 모든 관련을 작업을 마루리하고 최종적으로 운영체제를 시동시키기 위한 프로그램이다.</li>
                    <li>임베디드 시스템 부트로더란, PC의 BIOS와 OS Loader의 기능을 수행하는 프로그램으로 시스템이 부팅할 때 가장 먼저 수행된다.</li>
                    <li>운영체제 실행에 필요한 환경을 설정하고 운영체제 이미지를 메모리에 복사한다.</li>
                    <li>부트로더는 부트매니저라고도 부르며 크기가 512바이트로 하드디스크의 첫번째 섹터인 MBR(Master Boot Record)에 위치한다.</li>
                    <li>주 파티션마다 부트섹터가 할당된다.</li>
                    <li>분활된 주 파티션들은 자신의 루트 레코드를 MBR에 기록하여 실행된다.</li>
                    <li>한 컴퓨터에 다수개의 운영체제가 설치되어 있는 경우 작업 운영체제를 선택하여 부팅할 수 있게 한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">런레벨</h2>

            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>리눅스 부팅 시 작동하는 서비스들이 있다. 런레벨에 따라 작동하는 서비스를 조정 가능하다.</li>
                    <li>런레벨은 0에서 6까지 총 7가지이다.</li>
                    <li>7가지 런레벨 중 리눅스가 가동 시 특정 모드의 레벨을 디폴트로 할 경우 파일 /etc/inittab에 설명한다.</li>
                    <li>/etc/initab 파일 형식은 '코드 런레벨:행동:명령어'이다.</li>
                    <li>현재 실행되는 런레벨을 확인하는 명령어 runlevel이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">로그인과 로그아웃</h2>

            <SectionBlock title="로그인">
                <ul className="section-list">
                    <li>리눅스는 X윈도우상에서의 로그인/로그아웃과 콘솔상에서의 로그인/로그아웃이 있다.</li>
                </ul>
                {/* 파티션 */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">로그인 과정</span>
                        <span className="section-info-desc">입력한 패스워드와 파일은 /etc/passwd 필드 비교 → 셀 설정 파일 실행 → 로그인 셀 실행</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 로그아웃 */}
            <SectionBlock title="로그아웃">
                <ul className="section-list">
                    <li>로그아웃은 logout, exit 또는 조합키 Ctrl+D를 사용한다.</li>
                    <li>관리자는 일정시간 동안 작업을 수행하지 않는 모든 사용자들을 강제로 로그아웃할 수 있다.</li>
                </ul>
            </SectionBlock>


        </SectionTemplate>
    );
}