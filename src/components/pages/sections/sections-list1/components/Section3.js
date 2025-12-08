// Section 3. 리눅스 라이선스
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section3() {
    return (
        <SectionTemplate title="리눅스 라이선스">

            {/* 부제목 */}
            <h2 className="section-subtitle">종류</h2>

            {/* 라이선스 종류 및 설명 */}
            <SectionBlock title="라이선스 종류 및 설명">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">GNU</span>
                        <span className="section-info-desc">GNU는 유닉스가 아니다 (GNU's Not UNIX)의 약자이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">자유 소프트웨어</span>
                        <span className="section-info-desc">FSF(Free Software Foundation)으로 1985년 리처드 스톨만이 설립한 재단이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">오픈 소스 소프트웨어</span>
                        <span className="section-info-desc">Open Source Software 1998년 일부 커뮤니티 '자유 소프트웨어' 대신 '오픈 소스 소프트웨어' 라는 용어를 사용하기 시작했다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">GNU GPL</span>
                        <span className="section-info-desc">GPL(General Public License)은 자유 소프트웨어 재단에서 만든 Free 소프트웨어 라이선스다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">GNU LGPL</span>
                        <span className="section-info-desc">
                            LGPL(Lesser General Public License)은 GPL(General Public License)보다는 훨씬 완화된 조건의
                            공개 소프트웨어 라이선스다.<br/>
                            LGPL(Lesser General Public License)이 적요된 라이브러리를 이용하여 개발하였을 경우 프로그램 소스코드는 공개하지
                            않아도 된다.
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">BSD 라이선스</span>
                        <span className="section-info-desc">BSD(Berkeley Software Distribution)는 버클리 캘리포니아 대학의 자유 소프트웨어 저작권의 한 가지이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">아파치 라이선스</span>
                        <span className="section-info-desc">아파치(Apache) 소프트웨어 재단에서 자체적으로 만든 소프트웨어에 대한 라이선스 규정이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">MIT 라이선스</span>
                        <span className="section-info-desc">
                            MIT(Massachusetts Institute of Technology)는 BSD(Berkeley Software Distribution)
                            라이선스를 기초로 작성된 BSD(Berkeley Software Distribution) 계열 라이선스 중의 하나이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">MPL</span>
                        <span className="section-info-desc">MPL(Mozilla Public License)의 특징은 소스코드와 실행파일의 저작권을 분리했다는 점이다.</span>
                    </li>

                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}
