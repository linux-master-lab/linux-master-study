// Section 2. 리눅스 X-Windows 활용
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section2() {
    return (
        <SectionTemplate title="리눅스 X-Windows 활용">

            {/* 부제목 */}
            <h2 className="section-subtitle">원격지에서 X 클라이언트 이용</h2>

            {/* xhost */}
            <SectionBlock title="xhost">
                <ul className="section-list">
                    <li>명령어 xhost는 X 서버에 접속할 수 있는 클라이언트를 지정하거나 해제한다</li>
                    <li>X 서버에게 디스플레이를 요청 시 해당 요청에 대해 허용 여부를 호스트 단위로 제어한다.</li>
                    <li>xhost [+|-] [IP|도메인명]</li>
                    <li>환경변수 DISPLAY로 X 서버 프로그램이 실행될 때 표시되는 클라이언트 주소를 지정한다.</li>
                </ul>
            </SectionBlock>

            {/* xauth */}
            <SectionBlock title="xauth">
                <ul className="section-list">
                    <li>.Xauthority파일의 쿠키 내용을 추가, 삭제, 리스트를 출력하는 유틸리티이다.</li>
                    <li>xhost가 호스트 기반 인증 방식을 사용하기 위해 필요한 유틸리티라면 xauth는 MMC방식의 인증방식을 사용하기 위한 필수 유틸리티이다.</li>
                    <li>원격지에서 접속하는 X클라이언트를 허가할 때 IP 주소나 호스트명이 아닌 X-윈도우 실행 시에 생성되는 키 값으로 인증할 때 사용한다.</li>
                    <li>사용자 인증 기반을 지원하기 위해 각 사용자에게 네트워크화 된 홈 디렉터리에 파일 $HOME/.Xauthority에 대해 읽기 및 쓰기
                        권한이 있어야 한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">X-Windows 응용 프로그램</h2>

            {/* 오피스 */}
            <SectionBlock title="오피스">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">LibreOffice</span>
                        <span className="section-info-desc">오피스 프로그램 피키지</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">gedit</span>
                        <span className="section-info-desc">텍스트 편집 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">kwrite</span>
                        <span className="section-info-desc">KDE 기반의 텍스트 편집기</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 그래픽 */}
            <SectionBlock title="그래픽">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">GIMP</span>
                        <span className="section-info-desc">이미지 편집 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ImageMagick</span>
                        <span className="section-info-desc">이미지 생성 및 편집을 지원하는 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">eog</span>
                        <span className="section-info-desc">GNOM의 이미지 뷰어 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">kolourpaint</span>
                        <span className="section-info-desc">Ubuntu 이미지 편집 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">gThumb</span>
                        <span className="section-info-desc">GNOME의 데스크톱 이미지 뷰어 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">gwenview</span>
                        <span className="section-info-desc">KDE의 기본 이미지 뷰어</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 멀티미디어 */}
            <SectionBlock title="멀티미디어">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">Totem</span>
                        <span className="section-info-desc">GNOME기반의 사운드 및 비디오 재생 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">RHYTHMBOX</span>
                        <span className="section-info-desc">통합형 음악 관리 프로그램</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">CHEESE</span>
                        <span className="section-info-desc">GNOME기반의 카메라 동영상 프로그램</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 개발 */}
            <SectionBlock title="개발">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">ECLIPSE</span>
                        <span className="section-info-desc">통합 개발 환경으로 자바를 비롯한 다양한 언어를 지원</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 기타 */}
            <SectionBlock title="기타">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">Dolphine</span>
                        <span className="section-info-desc">KDE용 파일 관리자</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">KSnapshot</span>
                        <span className="section-info-desc">스크린샷 프로그램</span>
                    </li>

                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
