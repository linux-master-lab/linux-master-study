// Section 8. 리눅스 에디터 활용
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section8() {
    return (
        <SectionTemplate title="리눅스 에디터 활용">

            {/* 부제목 */}
            <h2 className="section-subtitle">에디터 기초 사용법</h2>

            {/* pico */}
            <SectionBlock title="pico">
                {/* 메뉴 : 기능 */}
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">메뉴</span>
                        <span className="section-info-desc">기능</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [O]</span>
                        <span className="section-info-desc">파일 저장</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [X]</span>
                        <span className="section-info-desc">파일 종료, 종료 시 저장이 안 되어 있으면 저장할 것 인지 물어봄</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [R]</span>
                        <span className="section-info-desc">현재 커서 위치에 다른 파일을 불러옴</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [A]</span>
                        <span className="section-info-desc">현재 행의 맨 앞으로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [E]</span>
                        <span className="section-info-desc">현재 행의 맨 끝으로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [V]</span>
                        <span className="section-info-desc">이전 페이지로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [Y]</span>
                        <span className="section-info-desc">다음 페이지로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [C]</span>
                        <span className="section-info-desc">현재 커서의 위치를 표시</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [T]</span>
                        <span className="section-info-desc">영문자의 철자를 확인</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [W]</span>
                        <span className="section-info-desc">키를 누르고 문자열을 입력하면 원하는 문자열을 찾음</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [K]</span>
                        <span className="section-info-desc">현재 라인을 삭제</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [U]</span>
                        <span className="section-info-desc">마지막으로 삭제된 라인을 복구</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [I]</span>
                        <span className="section-info-desc">화면 갱신</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* emacs */}
            <SectionBlock title="emacs">
                {/* 메뉴 : 기능 */}
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">메뉴</span>
                        <span className="section-info-desc">기능</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">
                            [Ctrl] + [X]<br/>
                            [Ctrl] + [S]
                        </span>
                        <span className="section-info-desc">파일 저장</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">
                            [Ctrl] + [X]<br/>
                            [Ctrl] + [C]
                        </span>
                        <span className="section-info-desc">편집 종료</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">
                            마크 설정 후<br/>
                            [Ctrl] + [W]
                        </span>
                        <span className="section-info-desc">잘라내기</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [K]</span>
                        <span className="section-info-desc">커서 뒤에 있는 한 줄이 모두 지워짐</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [A]</span>
                        <span className="section-info-desc">커서를 줄의 맨 앞으로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [E]</span>
                        <span className="section-info-desc">커서를 줄의 맨 뒤로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [N]</span>
                        <span className="section-info-desc">커서를 한 줄 아래로 이동</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">
                            [Ctrl] + [S]<br/>
                            찾을 문자열
                        </span>
                        <span className="section-info-desc">커서의 아랫부분에서 찾을 문자열을 검색</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">
                            [Ctrl] + [R]<br/>
                            찾을 문자열
                        </span>
                        <span className="section-info-desc">커서의 윗부분에서 찾을 문자열을 검색</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">[Ctrl] + [G]</span>
                        <span className="section-info-desc">진행되고 있는 명령을 끔</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}