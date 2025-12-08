// Section 10. 리눅스 소스 파일 설치
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section10() {
    return (
        <SectionTemplate title="리눅스 소스 파일 설치">

            {/* 부제목 */}
            <h2 className="section-subtitle">파일 아카이브와 압축</h2>

            {/* 파일 아카이브 */}
            <SectionBlock title="파일 아카이브">
                <ul className="section-list">
                    <li>아카이브는 다수 개의 파일이나 디렉터리를 하나의 파일로 묶는 것이다.</li>
                    <li>아카이브 파일은 다른 시스템으로 다수 개의 파일을 한 번에 전송하거나 파일 백업용으로 사용한다.</li>
                </ul>
            </SectionBlock>

            {/* 파일압축과 해제 */}
            <SectionBlock title="파일압축과 해제">
                <ul className="section-list">
                    <li>대표적인 파일 압축 명은 compress, gzip, bzip2, xz가 있다.</li>
                    <li>일반적으로 많이 사용되는 압축 명령어는 gzip과 bzip2이다.</li>
                    <li>압축률이 가장 낮은 것은 명령어 compress이며, 압축률이 가장 높은 것은 명령어 xz이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">소스 코드 설치</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>소스 코드를 압축 해제 후 컴파일 순서에 따라 프로그램을 설치한다.</li>
                    <li>컴파일 순서는 설치 파일의 환경설정, 컴파일, 파일설치이다.</li>
                </ul>

                {/* 단계 */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">1단계 환경설정</span>
                        <span className="section-info-desc">./configure 프로그램 설치 과정에서 필요로 하는 환경파일 makefile생성</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">2단계 컴파일</span>
                        <span className="section-info-desc">make makefile을 기반으로 소스 파일을 컴파일</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">3단계 파일 설치</span>
                        <span className="section-info-desc">make install컴파일 된 실행파일을 지정된 속성으로 지정된 디렉터리에 설치</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}