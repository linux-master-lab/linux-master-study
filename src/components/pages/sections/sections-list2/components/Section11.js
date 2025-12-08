// Section 11. 리눅스 주변 장치 연결 및 설정
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section11() {
    return (
        <SectionTemplate title="리눅스 주변 장치 연결 및 설정">

            {/* 부제목 */}
            <h2 className="section-subtitle">프린터 인쇄 시스템 설치 및 설정</h2>

            {/* LPRing */}
            <SectionBlock title="LPRing">
                <ul className="section-list">
                    <li>리눅스 초기에 사용되었던 인쇄 시스템이다.</li>
                    <li>버클리 프린팅 시스템으로 BSD계열 유닉스에서 사용하기 위해 개발되었다.</li>
                    <li>라인 프린터 데몬 프로토콜을 사용하여 프린터 스폴링과 네트워크 프린터 서버를 지원한다.</li>
                    <li>LPRing설정 파일은 /etc/printcap이다.</li>
                </ul>
            </SectionBlock>

            {/* CPUS */}
            <SectionBlock title="CPUS">
                <ul className="section-list">
                    <li>애플이 개발한 오픈 소스 프린팅 시스템이다.</li>
                    <li>유닉스 계열 운영체제의 시스템을 프린터 서버로 사용 가능하게 해준다.</li>
                    <li>메킨토시나 윈도우 등 시중에 시판되는 대부분의 프린트를 지원한다.</li>
                    <li>HTTP기반의 IPP(Internet Printing Protocol)를 사용하여 프린터를 웹 기반으로 제어한다.</li>
                    <li>CPUS 설정 파일은 /etc/cpus이다.</li>
                    <li>사용자 및 호스트 기반의 인증을 제공한다.</li>
                    <li>CPUS 관련 파일은 cpusd.conf, printers.conf, classes.conf, cpused등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 프린터 설정 */}
            <SectionBlock title="프린터 설정">
                <ul className="section-list">
                    <li>일반적으로 X-Windows상에서 '프린터 설정 도구'로 프린터를 설치한다.</li>
                    <li>'로컬 접속'으로 프린터를 직접 연결할 수 있다.</li>
                    <li>네트워크 프린터를 설정할 경우 5가지 방법을 제공하고 있다.</li>
                </ul>

                {/* 방법 */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">AppSocket/HP jecDirect</span>
                        <span className="section-info-desc">프린터가 컴퓨터에 연결되어 있지 않고 네트워크에 연결된 경우 사용</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">LPD/LPR호스트 또는 프린터</span>
                        <span className="section-info-desc">IPP 프로토콜 기반의 프린터 설정 시 사용</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">Windows Printer vis SAMBA</span>
                        <span className="section-info-desc">
                            윈도우 시스템에 연결된 프린터 설정 시 사용<br/>
                            삼바 기반의 SMB프로토콜 사용
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">인터넷 프린터 프로토콜 https</span>
                        <span className="section-info-desc">https프로토콜 기반의 프린터 설정 시 사용</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">인터넷 프린터 프로토콜 ipp</span>
                        <span className="section-info-desc">IPP프로토콜 기반의 프린터 설정 시 사용</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사운드 카드 장치 및 설정</h2>

            {/* OSS(Open Sound System) */}
            <SectionBlock title="OSS(Open Sound System)">
                <ul className="section-list">
                    <li>리눅스 및 유닉스 계열 운영체제에서 사운드를 만들고 캡쳐하는 인터페이스이다.</li>
                    <li>표준 유닉스 장치 시스템콜에 기반을 둔 것이다.</li>
                    <li>현재 리눅스 커뮤니티에서는 ALSA로 대체되었다.</li>
                </ul>
            </SectionBlock>

            {/* ALSA(Advanced Linux Sound Architecture) */}
            <SectionBlock title="ALSA(Advanced Linux Sound Architecture)">
                <ul className="section-list">
                    <li>사운드 카드용 장치 드라이버를 제공하기 위한 리눅스 커널 요소이다.</li>
                    <li>GPL및 LGPL라이선스 기반으로 배포되고 있다.</li>
                    <li>사운드 카드를 자동으로 구성하고 시스템에 여러 개의 사운드 장치를 관리하는 것이 목적이다.</li>
                    <li>OSS의 지원을 받아서 하드웨어 기반 미디합성, 다중 채널 하드웨어 믹싱, 전이중 통신, 다중 프로세서와의 조화, 스레드 안전장치
                        드라이브 등의 기능을 지원한다.</li>
                    <li>현결 설정 파일은 /etc/asound.state이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">스캐너 설치 및 설정</h2>

            {/* SANE(Scanner Access Now Esay) */}
            <SectionBlock title="SANE(Scanner Access Now Esay)">
                <ul className="section-list">
                    <li>평판 스캐너, 핸드 스캐너, 비디오 캠 등 이미지 관련 하드웨어를 제어하는 API이다.</li>
                    <li>GPL라이선스, 리눅스 및 유닉스 계열, OS2, Windows도 지원한다.</li>
                </ul>
            </SectionBlock>

            {/* XSANE(X based interface for the SANE) */}
            <SectionBlock title="XSANE(X based interface for the SANE)">
                <ul className="section-list">
                    <li>SANE스캐너 인터페치스를 이용하여 X-Windows기반의 스캐너 프로그램이다.</li>
                    <li>스캐너, 디지털 카메라, 디지털 캠 등 다양한 장치에서 사용이 가능하다.</li>
                    <li>스캔 작업뿐만 아니라 캡쳐한 이미지에 수정 작업을 할 수도 있다.</li>
                    <li>GPL라이선스, 리눅스 및 유닉스 계열, OS2, Windows도 지원한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}