// Section 8. 리눅스 디렉터리 및 파일
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section8() {
    return (
        <SectionTemplate title="리눅스 디렉터리 및 파일">

            {/* 부제목 */}
            <h2 className="section-subtitle">디렉터리 관리 명령어</h2>

            {/* pwd */}
            <SectionBlock title="pwd">
                <ul className="section-list">
                    <li>현재 작업 중인 디렉터리의 위치를 나타태는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* cd */}
            <SectionBlock title="cd">
                <ul className="section-list">
                    <li>디렉터리를 이동할 때 사용하는 명령어이다.</li>
                    <li>절대경로는 시작 위치와 상관없이 경로에 모든 디렉터리를 표시하며, 절대 경로의 시작은 / 에서부터 시작한다.</li>
                    <li>상대 경로는 현재 작업 중인 디렉터리를 기준으로 표시하는 경로이다.</li>
                </ul>
            </SectionBlock>

            {/* mkdir */}
            <SectionBlock title="mkdir">
                <ul className="section-list">
                    <li>새로운 디렉터리를 생성할 때 사용하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* rmdir */}
            <SectionBlock title="rmdir">
                <ul className="section-list">
                    <li>디렉터리만 삭제하는 명령어로 디렉터리 안에 파일이 존재하는 경우 삭제되지 않는다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">파일 관리 명령어</h2>

            {/* ls */}
            <SectionBlock title="ls">
                <ul className="section-list">
                    <li>현재 위치한 디렉터리의 파일 목록들을 나타내는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* cp */}
            <SectionBlock title="cp">
                <ul className="section-list">
                    <li>파일 또는 디렉터리를 복사하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* rm */}
            <SectionBlock title="rm">
                <ul className="section-list">
                    <li>파일 또는 디렉터리를 삭제하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* mv */}
            <SectionBlock title="mv">
                <ul className="section-list">
                    <li>파일 또는 디렉터리를 이동하거나 파일명을 변경할 때 사용하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* touch */}
            <SectionBlock title="touch">
                <ul className="section-list">
                    <li>파일 크기가 0바이트인 빈 파일을 생성한다.</li>
                    <li>서버의 현재 시간으로 파일의 최근 사용한 시간과 최근 수정 시간 등 타임스탬프를 변경한다.</li>
                </ul>
            </SectionBlock>

            {/* file */}
            <SectionBlock title="file">
                <ul className="section-list">
                    <li>파일 종류 및 파일 속성값을 나타내는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* find */}
            <SectionBlock title="find">
                <ul className="section-list">
                    <li>현재 디렉터리에서부터 하위 디렉터리까지 주어진 조건의 파일을 찾아 해당 경로를 표시한다.</li>
                </ul>
            </SectionBlock>

            {/* locate */}
            <SectionBlock title="locate">
                <ul className="section-list">
                    <li>파일 위치를 찾는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">텍스트 파일 관련 명령어</h2>

            {/* cat */}
            <SectionBlock title="cat">
                <ul className="section-list">
                    <li>파일의 내용을 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* head */}
            <SectionBlock title="head">
                <ul className="section-list">
                    <li>파일의 앞부분을 지정한 만큼 출력하는 명령어다.</li>
                </ul>
            </SectionBlock>

            {/* head */}
            <SectionBlock title="tail">
                <ul className="section-list">
                    <li>파일의 마지막 행을 기준으로 지정한 행까지의 파일 내용 일부를 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* more */}
            <SectionBlock title="more">
                <ul className="section-list">
                    <li>파일을 확인하는 명령어로 파일을 읽어 화면 단위로 끊어서 출력하는 명령어이다.</li>
                    <li>위에서 아래 방향으로만 출력되기 때문에 지나간 내용을 다시 볼 수 없다.</li>
                </ul>
            </SectionBlock>

            {/* less */}
            <SectionBlock title="less">
                <ul className="section-list">
                    <li>텍스트 파일을 한 번에 한 화면씩 나타내는 명령어이다.</li>
                    <li>기능적으로 more를 확장한 것으로 커서를 파일의 상하좌우로 이동할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* grep */}
            <SectionBlock title="grep">
                <ul className="section-list">
                    <li>파일에서 특정한 패턴 또는 정규 문자식으로 나타낸 단어를 찾는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* wc */}
            <SectionBlock title="wc">
                <ul className="section-list">
                    <li>파일의 라인 수, 단어 수, 알파벳 수를 알려주는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* sort */}
            <SectionBlock title="sort">
                <ul className="section-list">
                    <li>파일에서 특정 필드를 추출해 낸다.<br/>필드는 구분자로 구분할 수 있다</li>
                </ul>
            </SectionBlock>

            {/* split */}
            <SectionBlock title="split">
                <ul className="section-list">
                    <li>하나의 파일을 여러 개의 작은 파일로 분리할 때 사용한다.</li>
                    <li>파일의 내용을 라인 수로 분할할 수도 있고, 용량 단위로 분할할 수도 있다.</li>
                    <li>주로 디스켓에 파일을 나누어 복사하거나 백업할 때 CD-RW 용량 단위로 분할할 경우 유용하다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">파일 비교 명령어</h2>

            {/* diff */}
            <SectionBlock title="diff">
                <ul className="section-list">
                    <li>두 개의 파일명을 행 단위로 비교하여 다른 부분을 출력하는 명령어이다.</li>
                    <li>두 개의 파일명을 매개변수로 사용하여 화면에 차이점을 나열한다.</li>
                </ul>
            </SectionBlock>

            {/* cmp */}
            <SectionBlock title="cmp">
                <ul className="section-list">
                    <li>두 개의 파일을 바이트 단위로 비교하여 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* comm */}
            <SectionBlock title="comm">
                <ul className="section-list">
                    <li>두 개의 파일의 행과 행을 비교하여 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">리다이렉션과 정규 표현식</h2>

            {/* 리다이렉션 */}
            <SectionBlock title="리다이렉션">
                <ul className="section-list">
                    <li>표준 입력과 표준 출력의 방향을 재지정하는 것이다.</li>
                    <li>표준 입력/출력/에러가 화면이 아닌 파일로 대체한다. 즉, 모니터로 출력이 파일로 재지정한다.</li>
                    <li>표준 입력 장치는 키보드, 표준 출력 장치는 모니터, 표준 에러 장치는 모니터이다.</li>
                </ul>
            </SectionBlock>

            {/* 파이프 */}
            <SectionBlock title="파이프">
                <ul className="section-list">
                    <li>둘 이상의 명령을 함께 묶어 출력 결과를 다른 프로그램이 입력으로 전환하는 기능이다.</li>
                    <li>현재 명령의 표준 출력을 다음 명령의 표준 입력으로 사용하는 것이다.</li>
                    <li>명령어와 명령어의 연결은 | 기호를 사용한다.</li>
                    <li>명령어1의 출력 결과는 명령어2의 입력으로 처리된다.</li>
                    <li>더 이성 처리할 명령어가 없으면 표준 출력 장치인 화면으로 출력한다.</li>
                </ul>
            </SectionBlock>

            {/* 정규표현식 */}
            <SectionBlock title="정규표현식">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">기호</span>
                        <span className="section-info-desc">의미</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">^</span>
                        <span className="section-info-desc">라인의 첫 글자</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">$</span>
                        <span className="section-info-desc">라인의 끝 글자</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">.</span>
                        <span className="section-info-desc">한 글자</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">*</span>
                        <span className="section-info-desc">* 기호 바로 이전의 글자는 정규 표현식이 0회 이상 반복</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[]</span>
                        <span className="section-info-desc">대체 글자 목록을 []에 나열</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[^]</span>
                        <span className="section-info-desc">대체 못할 글자 목록을 [^]에 나열</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">+</span>
                        <span className="section-info-desc">+ 기호 바로 이전 글자나 정규 표현식이 1회 이상 반복</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">?</span>
                        <span className="section-info-desc">? 기호 바로 이전 글자나 정규 표현식이 없거나 1회만 존재</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">()</span>
                        <span className="section-info-desc">부분 정규 표현식의 시작과 끝을 표시</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">|</span>
                        <span className="section-info-desc">|로 구분된 단어들 중 최소 하나 존재</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">{`{m, n}`}</span>
                        <span className="section-info-desc">{`{}`}
                            기호 바로 이전 글자나 정규 표현식이 m개 이상 n개 이하 반복</span>
                    </li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}