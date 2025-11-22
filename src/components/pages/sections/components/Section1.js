// Section 1. 리눅스 개요
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section1() {
    return (
        <SectionTemplate title="리눅스 개요">

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스의 특징 및 장단점</h2>

            {/* 특징 */}
            <SectionBlock title="특징">
                <ul className="section-list">
                    <li>오픈 소스 운영체제이다.</li>
                    <li>멀티유저(다중 사용자), 멀티테스킹(다중 작업) 운영체제이다.</li>
                    <li>다중 스레드를 지원하는 네트워크 운영체제이다.</li>
                    <li>여러 종류의 파일 시스템을 지원하는 운영체제이다.</li>
                </ul>
            </SectionBlock>

            {/* 장단점 */}
            <SectionBlock title="장단점">
                <ul className="section-list">
                    <li>리눅스는 유닉스와 완벽하게 호환 가능하다.</li>
                    <li>리눅스는 PC용 운영체제보다 안정적이다.</li>
                    <li>하드웨어 기능을 효과적으로 사용한다.</li>
                    <li>리눅스는 오픈 소스 운영체제이다.</li>
                    <li>공개 운영체제이기 때문에 문제점 발생 시 기술지원을 받기 어렵다.</li>
                    <li>한글 지원이 미흡하다.</li>
                </ul>
            </SectionBlock>

            {/* 디렉터리 */}
            <SectionBlock title="리눅스 디렉터리 종류와 특징">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">/</span>
                        <span className="section-info-desc">
                            파일 시스템이 있는 최상위 디렉터리로 루트 디렉터리라고 함.<br/>
                            모든 디렉터리의 출발점인 동시에 다른 시스템과의 연결점이 되는 디렉토리.
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/boot</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/proc</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/lib</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/bin</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/dev</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/root</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/sbin</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/usr</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/home</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/var</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/tmp</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/mnt</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/lost+found</span>
                        <span className="section-info-desc">작성 필요</span>
                    </li>

                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
