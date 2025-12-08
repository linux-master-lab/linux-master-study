// Section 4. 리눅스 기본 설치 및 유형
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section4() {
    return (
        <SectionTemplate title="리눅스 기본 설치 및 유형">

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 설치의 개요</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>리눅스 설치 파일은 해당 배포본의 홈페이지에서 다운로드 받을 수 있다.</li>
                    <li>리눅스는 단 하나의 제품 또는 한 종류의 제품군만 있는 것이 아니다.</li>
                    <li>리눅스는 배포본마다 설치 환경과 설치 과정이 다르다.</li>
                    <li>리눅스의 설치 유형은 배포판마다 다르지만 패키지에 따라 데스크탑형, 서버형, 사용자 정의형으로 구분된다.</li>
                    <li>설치 전에 시스템에 있는 모든 파일을 백업해 둔다.</li>
                    <li>멀티 부팅 시스템을 만든다면, 현재 운영체제의 배포 미디어를 가지고 있어야 한다.</li>
                    <li>부팅 드라이브를 다시 파티션 하는 경우라면, 운영체제의 부트로더를 다시 설치해야 할 수도 있고, 더 많은 경우에 운영체제 전체를 해당
                        파티션에 다시 설치해야한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 설치를 위한 하드웨어 정보 파악</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>하드웨어 정보</li>
                    <li>하드웨어 호환성</li>
                    <li>네트워크 설정</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 설치하기</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">1단계</span>
                        <span className="section-info-desc">설치 초기화면 - Test this media & install CentOS7, Install CentOS8</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">2단계</span>
                        <span className="section-info-desc">설치 초기화면 - Rescue a CentOS System, Run a memory test</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">3단계</span>
                        <span className="section-info-desc">언어 선택</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">4단계</span>
                        <span className="section-info-desc">설치 요약 확인</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">5단계</span>
                        <span className="section-info-desc">날짜와 시간 설정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">6단계</span>
                        <span className="section-info-desc">설치 소스 - 저장소(repository) 서버 주소 변경</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">7단계</span>
                        <span className="section-info-desc">설치 소스 - 설치와 관련된 특수 저장 장치 설정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">8단계</span>
                        <span className="section-info-desc">설치 소스 - 기본 저장 장치 하드디스크 파티션 설정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">9단계</span>
                        <span className="section-info-desc">소프트웨어 선택</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">10단계</span>
                        <span className="section-info-desc">kdump 설정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">11단계</span>
                        <span className="section-info-desc">네트워크 설정과 호스트명 지정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">12단계</span>
                        <span className="section-info-desc">패스워드 지정</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}