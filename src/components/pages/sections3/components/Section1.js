// Section 1. 리눅스 X-Windows 개념 및 사용법
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section1() {
    return (
        <SectionTemplate title="리눅스 X-Windows 개념 및 사용법">

            {/* 부제목 */}
            <h2 className="section-subtitle">X-Windows의 특징과 구성 요소</h2>

            {/* 특징 */}
            <SectionBlock title="개념과 특징">
                <ul className="section-list">
                    <li>리눅스 환경의 각종 애플리케이션과 유틸리티에 대해 그래픽 사용자 인터페이스르 제공한다.</li>
                    <li>플랫폼과 독립적으로 작동하는 그래픽 시스템이다.</li>
                    <li>X-Windows는 X11, X, X Windows System이라 한다.</li>
                    <li>네트워크 기반의 그래픽 환경을 지원한다.</li>
                    <li>이기종 시스템 사이에서도 사용 가능하다.</li>
                    <li>스크롤바, 아이콘, 색상 등 그래픽 환경 자원들이 특정 형태로 정의되어 있지 않다.</li>
                    <li>디스플레이 장치에 의존적이지 않으며 원하는 인터페이스를 만들 수 있다.</li>
                    <li>X-Windows는 네트워크 프로토콜 기반의 클라이언트/서버 시스템이다.</li>
                    <li>서버 프로그램과 클라이언트 프로그램으로 나누어 작동한다.</li>
                    <li>서버는 클라이언트들의 디스플레이에 관한 접근 허용, 클라이언트 간의 자원 공유, 네트워크 메시지 전달, 클라이언트와 입출력 기기와의
                        중계를 담당한다.</li>
                    <li>클라이언트는 애플리케이션으로 X 서버가 제공하는 기능들을 이용한다.</li>
                    <li>오픈 데스크탑 환경으로 KDE, GNMOE, XFCE 등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 구성요소의 종류 */}
            <SectionBlock title="구성요소의 종류">
                <ul className="section-list">
                    <li>Xprotocol</li>
                    <li>Xlib</li>
                    <li>XCB</li>
                    <li>Xtoolkit</li>
                    <li>XFree86</li>
                    <li>XF86Config</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">X-Windows 설정과 실행</h2>

            {/* 파일 /etc/inittab */}
            <SectionBlock title="파일 /etc/inittab">
                <ul className="section-list">
                    <li>init 프로세스가 읽는 파일로, init 프로세스가 무엇을 해야 할 것인가를 결정한다.</li>
                    <li>리눅스 사용 환경을 초기화한다.</li>
                </ul>
            </SectionBlock>

            {/* X-Windows 실행 */}
            <SectionBlock title="X-Windows 실행">
                <ul className="section-list">
                    <li>그래픽 환경이 아닌 터미널 윈도우로 로그인한 경우에는 몇 개의 프로그램을 실행해야 한다.</li>
                    <li>텀ㅣ널 윈도우의 명령어 프롬프트상에서 다음의 명령어를 실행시켜야 한다.</li>
                    <li>startx는 X-윈도우를 실행하는 스크립트로 시스템 환경을 초기화하고 xinit을 호출한다.</li>
                    <li>startx 실행 시 인자값을 xinit에 전달하는 옵션은 '--' 이다.</li>
                </ul>
            </SectionBlock>

            {/* 환경변수 DISPLAY */}
            <SectionBlock title="환경변수 DISPLAY">
                <ul className="section-list">
                    <li>환경 변수는 프로세스가 컴퓨터에서 동작하는 방식에 영향을 주는 동적인 값이다.</li>
                    <li>셸에서 정의되고 실행하는 동안 프로그램에 필요한 변수이다.</li>
                    <li>환경 변수 DISPLAY는 현재 X-윈도우 Display 위치를 지정할 수 있다.</li>
                    <li>형식: export DISPLAY=IP주소:디스플레이번호.스크린번호</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">윈도우 매니저와 데스크톱 환경</h2>

            {/* 윈도우 매니저 */}
            <SectionBlock title="윈도우 매니저">
                <ul className="section-list">
                    <li>윈도우 매니저는 X window상에서 창의 배치와 표현을 담당하는 시스템 프로그램이다.</li>
                    <li>창 열기와 닫기, 창의 생성 위치, 창 크기 조정, 창의 외양과 테두리를 변화시킬 수 있다.</li>
                    <li>라이브러리는 Xlib와 XCB를 사용한다.</li>
                    <li>윈도우 매니저의 대표적인 종류로는 fvwm, twm, mw, windowMaker, AfterStep 등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 데스크탑 환경 */}
            <SectionBlock title="데스크탑 환경">
                <ul className="section-list">
                    <li>GUI사용자에게 제공하는 인터페이스 스타일로 데스크탑 관리자라고도 한다.</li>
                    <li>윈도우 매니저, 파일 관리자, 도움말, 제어판 등 다양한 도구를 제공하는 패키지 형태의 프로그램이다.</li>
                    <li>아이콘, 창, 도구모음, 폴더, 배경화면, 데스크탑 위젯도 제공한다.</li>
                    <li>드래그 앤 드롭과 프로세스 간의 통보 기능을 지원한다.</li>
                    <li>대표적인 데스크탑 환경에는 KDE, GNOME, LXDE, Xfce 등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 디스플레이 매니저 */}
            <SectionBlock title="디스플레이 매니저">
                <ul className="section-list">
                    <li>X window system 상에서 작동하는 프로그램이다.</li>
                    <li>디스플레이 매니저 종류들로는 XDM, GDM, KDM 등이 있다.</li>
                    <li>로컬 또는 리모트 컴퓨터의 X server의 접속과 세션 시작을 담당한다.</li>
                    <li>사용자에게 그래픽 로그인 화면을 띄워주고 아이디와 패스워드를 입력받아 인증을 진행하고 인증이 정상적으로 완료되면 세션을 시작한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
