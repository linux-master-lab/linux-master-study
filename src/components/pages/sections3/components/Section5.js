// Section 5. 리눅스 인터넷 서비스 설정
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section5() {
    return (
        <SectionTemplate title="리눅스 인터넷 서비스 설정">

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 인터페이스 설정</h2>

            {/* 내용 */}
            <SectionBlock title="내용">

                {/* 특징 */}
                <ul className="section-list">
                    <li>리눅스는 다양한 네트워크를 지원한다.</li>
                    <li>일반적으로 네트워크 인터페이스는 자동으로 인식되지만 자동으로 인식되지 않을 경우 수동으로 설정해야 한다.</li>
                    <li>네트워크 인터페이스 수동 설정 방법은 컴파일된 인터페이스 모듈을 커널에 적재하는 것이다.</li>
                </ul>

            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 설정 파일들</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">/etc/sysconfig/network</span>
                        <span className="section-info-desc">네트워크의 기본 정보가 설정되어 있는 파일이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc/sysconfig/network-scripts/ifcfg-ethX</span>
                        <span className="section-info-desc">지정된 네트워크 인터페이스의 네트워크 환경 설정 정보가 저장된다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc/resolv.conf</span>
                        <span className="section-info-desc">기본적으로 사용할 도메인명과 네임서버를 설정한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc/hosts</span>
                        <span className="section-info-desc">IP 주소와 도메인 주소를 1:1로 등록하여 도에밍네 대한 IP 주소를 조회하도록 한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc/host.conf</span>
                        <span className="section-info-desc">DNS 서비스를 제공할 때 먼저 이 파일을 검사하여 파일의 설정에 따라 서비스한다.</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 설정</h2>

            {/* IP 주소 설정 */}
            <SectionBlock title="IP 주소 설정">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">네트워크 설정 파일로 주소 설정</span>
                        <span className="section-info-desc">파일 /etc/sysconfig/network 또는
                            /etc/sysconfig/network-scripts/ifcfg-ethX로 IP 주소를 설정한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">명령어를 이용한 주소 설정</span>
                        <span className="section-info-desc">명령어 ifconfig를 이용하여 IP주소를 할당한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">유틸리티를 이용한 주소 설정</span>
                        <span className="section-info-desc">netconfig, system-config-network,
                            redhat-config-network등의 다양한 유틸리티를 이용하여 주소를 설정한다.</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 라우팅 테이블 설정 및 관리 */}
            <SectionBlock title="라우팅 테이블 설정 및 관리">
                <ul className="section-list">
                    <li>라우팅이란 송신 패킷이 목적지까지 전송할 수 있도록 경로를 설정하는 작업이다.</li>
                    <li>송신 패킷은 라우팅 테이블에 목적지 경로 정보가 있다면 해당 경로로 패킷을 전송한다.</li>
                    <li>명령어 route는 라우팅 테이블을 설정하거나 확인한다.</li>
                    <li>목적지 경로가 라우팅 테이블에 없다면 디폴트게이트웨이로 트래픽을 전송할 수 있게 라우팅 테이블을 설정할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">TCP/IP주소 설정 정보 확인</span>
                        <span className="section-info-desc">ifconfig, nslookup</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">네트워크 경로 상태 확인</span>
                        <span className="section-info-desc">ping, traceroute</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">네트워크 연결 상태 확인</span>
                        <span className="section-info-desc">netstat</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">라우팅 테이블 확인</span>
                        <span className="section-info-desc">route</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">NIC 상태 확인</span>
                        <span className="section-info-desc">ethtool, mii-tool, arp</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}