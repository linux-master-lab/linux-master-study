// Section 9. 리눅스 기타 명령어
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section9() {
    return (
        <SectionTemplate title="리눅스 기타 명령어">

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 관련 명령어</h2>

            {/* ping */}
            <SectionBlock title="ping">
                <ul className="section-list">
                    <li>외부 호스트에 신호를 보내며 신호를 받은 호스트는 응답을 주면서 서로 네트워크가 연결되어 있음을 확인시켜주는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* traceroute */}
            <SectionBlock title="traceroute">
                <ul className="section-list">
                    <li>목적지 호스트까지의 경로를 표시하고 그 구간의 정보를 기록하는 명령어다.</li>
                    <li>목적지 호스트까지의 패킷 전송 지역을 측정하거나 목적지 호스트로 향하는 경로상에 어떤 장애가 있는 경우 위치를 파악할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* nslookup */}
            <SectionBlock title="nslookup">
                <ul className="section-list">
                    <li>도메인명으로 IP 주소를 조회하거나 또는 IP 주소로 도메인명을 조회하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* dig */}
            <SectionBlock title="dig">
                <ul className="section-list">
                    <li>명령어 nslookup과 유사한 기능을 가진 명령어로 호스트명에 대한 IP 주소 정보 또는 IP주소에 대한 호스트명을 조회하는 명령어이다.</li>
                    <li>서버명은 확인하고자 할 네임 서버를 지정하는 것이며 지정하지 않을 경우 /etc/resolv에 등록된 네임 서버를 이용하여 루트 서버를
                        조회하게 된다.</li>
                </ul>
            </SectionBlock>

            {/* host */}
            <SectionBlock title="host">
                <ul className="section-list">
                    <li>호스트명을 알고 있는데 IP 주소를 모르거나 그 반대의 경우에 사용하는 명령어이다.</li>
                    <li>호스트명을 이용하면 IP 주소뿐만 아니라 하위 호스트명도 조회할 수 있다.</li>
                    <li>호스트는 시스템에 등록된 DNS서버를 이용하여 검색하는데 다른 DNS서버를 이용해서 따로 지정할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* hostname */}
            <SectionBlock title="hostname">
                <ul className="section-list">
                    <li>시스템 이름을 확인하거나 변경할 때 사용하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">시스템 종료 명령어</h2>

            {/* shotdown */}
            <SectionBlock title="shotdown">
                <ul className="section-list">
                    <li>시스템을 종료하거나 재부팅하는 명령어이다.</li>
                    <li>현재 수행 중인 프로세스들을 종료하며 sync를 수행하며 저장되지 않는 데이터를 디스크에 저장하고 모든 파일 시스템을 mount시킨 후에
                        시스템을 종료한다.</li>
                    <li>root 사용자만이 권한을 가지고 있는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* init */}
            <SectionBlock title="init">
                <ul className="section-list">
                    <li>shotdown 명령어 동일한 기능을 가진 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* reboot */}
            <SectionBlock title="reboot">
                <ul className="section-list">
                    <li>시스템을 재부팅하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* halt */}
            <SectionBlock title="halt">
                <ul className="section-list">
                    <li>시스템을 종료하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">기타 명령어</h2>

            {/* cal */}
            <SectionBlock title="cal">
                <ul className="section-list">
                    <li>시스템에 설정된 달력을 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* date */}
            <SectionBlock title="date">
                <ul className="section-list">
                    <li>시스템의 날짜와 시간을 표시하거나 변경한다..</li>
                </ul>
            </SectionBlock>

            {/* clear */}
            <SectionBlock title="clear">
                <ul className="section-list">
                    <li>터미널의 내용을 지우는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* tty */}
            <SectionBlock title="tty">
                <ul className="section-list">
                    <li>현재 사용하고 있는 단말기 장치의 경로명과 나타낸다.</li>
                    <li>텔넷 등에서 동일한 계정으로 여러 개 로그인한 경우 확인 시 유용하다.</li>
                </ul>
            </SectionBlock>

            {/* time */}
            <SectionBlock title="time">
                <ul className="section-list">
                    <li>프로그램이 수행되는데 걸리는 시간을 측정하여 출력하는 명령어이다.</li>
                    <li>세 가지 시간 결과 real, user, sys를 보여준다. real을 총 수행시간, user는 CPU가 사용자 영역에서 보낸 시간,
                        sys는 시스템 호출 실행에 걸린 시간이다.</li>
                </ul>
            </SectionBlock>

            {/* wall */}
            <SectionBlock title="wall">
                <ul className="section-list">
                    <li>모든 로그인된 사용자들에게 터미널을 통해 메시지를 전달받는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* write */}
            <SectionBlock title="write">
                <ul className="section-list">
                    <li>해당 사용자에게 메시지를 전달하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* mesg */}
            <SectionBlock title="mesg">
                <ul className="section-list">
                    <li>write를 사용해서 들어오는 메시지 수신 여부를 확인하고 제어하는 명령어이다.</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}