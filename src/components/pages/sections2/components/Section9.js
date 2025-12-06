// Section 9. 리눅스 소프트웨어 프로그램 설치
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section9() {
    return (
        <SectionTemplate title="리눅스 소프트웨어 프로그램 설치">

            {/* 부제목 */}
            <h2 className="section-subtitle">계열</h2>

            {/* 데비안 계열 */}
            <SectionBlock title="데비안 계열">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">배포 업체</span>
                        <span className="section-info-desc">Debian, Ubuntu, Xandros, Linspire</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">패키지 툴</span>
                        <span className="section-info-desc">dpkg, apt-get, optitude, Linspire</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 레드햇 계열 */}
            <SectionBlock title="레드햇 계열">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">배포 업체</span>
                        <span className="section-info-desc">Fedora, CentOS, RHEL, openSUSE, Mandirva</span>
                    </li>
                    
                    <li className="section-info-item">
                        <span className="section-info-name">패키지 툴</span>
                        <span className="section-info-desc">rpm, yum</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* rpm */}
            <SectionBlock title="rpm">
                <ul className="section-list">
                    <li>레드햇 사에서 만들어낸 패키지 관리 툴이다.</li>
                    <li>새로운 패키지를 설치하거나 업그레이드, 삭제 시 사용한다.</li>
                    <li>Windows의 setup.exe와 유사하게 만든 프로그램이다.</li>
                    <li>레드햇 계열의 패키지 파일 확장명은 *.rpm이다.</li>
                </ul>
            </SectionBlock>

            {/* yum */}
            <SectionBlock title="yum">
                <ul className="section-list">
                    <li>네트워크를 통해 기존 RPM패키지 파일의 업데이트 자동 수행, 새로운 패키지 설치 및 제거를 수행한다.</li>
                    <li>RPM의 의존성 문제를 해결하기 위한 유틸리티이다.</li>
                    <li>인터넷을 기반으로 설치하므로 네트워크가 정상적으로 연결된 상태여야만 한다.</li>
                    <li>YUM은 페도라 22버전 이후부터 YUM의 문제점을 보안한 DNF로 전환되고 있다.</li>
                </ul>
            </SectionBlock>

            {/* dpkg */}
            <SectionBlock title="dpkg">
                <ul className="section-list">
                    <li>데비안의 저레벨 패키지 관리 툴이다.</li>
                    <li>deb패키지의 설치, 삭제, 정보 제공을 위해 사용된다.</li>
                    <li>확장자 deb파일은 데비안 패키지 파일이다.</li>
                    <li>패키지 설치 및 제거 시 RPM과 같은 의존성 문제를 일으킨다.</li>
                    <li>명령어 'dpkg -s 패키지'는 지정된 패키지에 대한 자세한 정보를 나타낸다.</li>
                </ul>
            </SectionBlock>

            {/* apt-get */}
            <SectionBlock title="apt-get">
                <ul className="section-list">
                    <li>데비안 리눅스에서 소프트웨어 설치와 제거를 위한 패키지 관리 유틸리티이다.</li>
                    <li>패키지 관련 정보를 확인하거나 패키지 설치 시 발생할 수 있는 의존성과 충돌문제를 해결하기 위해
                        /etc/apt/source.list파일을 참조한다.</li>
                </ul>
            </SectionBlock>

            {/* aptitude */}
            <SectionBlock title="aptitude">
                <ul className="section-list">
                    <li>우분투 패키지 관리 유티릴티로 APT처럼 패키지를 관리를 자동화한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}