// Section 7. 리눅스 에디터 종류
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section7() {
    return (
        <SectionTemplate title="리눅스 에디터 종류">

            {/* 부제목 */}
            <h2 className="section-subtitle">개요</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>리눅스에서 지원하는 편집기로는 vi, emacs, pico, gedit, xedit등이 있다.</li>
                    <li>리눅스 편집기는 편집기를 통해 파일을 수정한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">종류</h2>

            {/* pico */}
            <SectionBlock title="pico">
                <ul className="section-list">
                    <li>워싱턴 대학의 Aboil Kasar가 개발한 유닉스 기반의 텍스트 에디터이다.</li>
                    <li>메뉴 선택 방식의 텍스트 편집기로 기본 인터페이스가 윈도우의 메모장과 유사하여 간단하다.</li>
                    <li>자유 소프트웨어 라이선스가 아니기 때문에 소스 수정이 불가능하다.</li>
                    <li>다른 편집기에 비해 사용하기 쉽고 사용하기 편리하지만 기능이 부족하고 업데이트가 잘 되지 않는다.</li>
                    <li>GNU프로젝트에서는 pico의 복제 버전 에디너인 nano를 개발하였다</li>
                    <li>vi편집기처럼 입력모드와 명령모드가 존재하지 않고 바로 텍스트 입력이 가능하다.</li>
                </ul>
            </SectionBlock>

            {/* emacs */}
            <SectionBlock title="emacs">
                <ul className="section-list">
                    <li>리차드 스톨만이 매크로 기능이 있는 텍스트 교정 및 편집기로 개발하였다.</li>
                    <li>최초의 개발자는 리차드 스톨만이며, 이후 제임스 고슬링이 LISP언어를 기반하여 emacs에 다양한 기능을 개발하여 추가하였다.</li>
                    <li>LISP에 기반을 둔 환경 설정 언어를 가지고 있다.</li>
                </ul>
            </SectionBlock>

            {/* vi */}
            <SectionBlock title="vi">
                <ul className="section-list">
                    <li>1976년 빌 조이가 초기 BSD 릴리즈에 포함될 편집기로 만들었다.</li>
                    <li>리눅스 배포판과 유닉스에 기본적으로 포함되어 있다.</li>
                    <li>유닉스 환경에서 가장 많이 쓰이는 문서 편집기이다.</li>
                    <li>다른 편집기들과 다르게 모드형 편집기이다.</li>
                    <li>명령모드, 입력모드, 편집모드로 구성되어 있다.</li>
                </ul>
            </SectionBlock>

            {/* vim */}
            <SectionBlock title="vim">
                <ul className="section-list">
                    <li>브람 무레나르가 만든 편집기이다.</li>
                    <li>vi 편집기와 호환되면서 독자적으로 다양한 기능을 추가하여 만든 편집기이다.</li>
                    <li>편집 시 다양한 색상을 이용하여 가시성을 높일 수 있다.</li>
                    <li>패턴 검색 시 하이라이트 기능을 제공하여 빠른 검색을 가능하게 해준다.</li>
                    <li>ex모드에서 히스토리 기능을 제공한다.</li>
                    <li>확장된 정규 표현식 문법과 강력한 문법 강조 기능을 갖는다.</li>
                </ul>
            </SectionBlock>

            {/* gedit */}
            <SectionBlock title="gedit">
                <ul className="section-list">
                    <li>그놈 데스크탑 환경으로 개발된 자유 소프트웨어 텍스트 편집기이다.</li>
                    <li>마이크로소프트, 윈도우, 맥OS X에서도 사용할 수 있다.</li>
                    <li>UTF-8과 호환하며 텍스트 문서를 편집하는 용도에 중점을 두었다.</li>
                    <li>X-윈도우 시스템에 맞춰 개발되었다.</li>
                    <li>GTK+와 그놈 라이브러리를 이용하여 개발되었다.</li>
                    <li>텔넷 접속 시나 텍스트 기반 콘솔 창에서는 사용할 수 없다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}