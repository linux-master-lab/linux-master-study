// Section 1. 리눅스 개요
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

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

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 디렉터리 종류와 특징</h2>

            {/* 디렉터리 */}
            <SectionBlock title="디렉터리 및 저장 내용">
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
                        <span className="section-info-desc">부트 디렉터리로 부팅 시 커널 이미지의 부팅 정보 저장 파일</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/proc</span>
                        <span className="section-info-desc">
                            시스템 정보 디렉터리이며 커널 기능을 제어하는 역할<br/>
                            현재 실행되는 프로세스와 시레로 사용되는 장치, 하드웨어 정보 저장
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/lib</span>
                        <span className="section-info-desc">
                            공유 라이브러리 디렉터리<br/>
                            커널 모듈 파일들과 프러그램 실행을 지원해 주는 라이브러리 저장
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/bin</span>
                        <span className="section-info-desc">
                            기본적인 명령어가 저장된 디렉터리<br/>
                            root 사용자와 일반 사용자가 함께 사용할 수 있는 명령의 디렉터리
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/dev</span>
                        <span className="section-info-desc">
                            시스템 디바이스 파일들을 저장하는 디렉터리<br/>
                            하드디스크 장치 파일, CD-ROM 장치파일 같은 파일 저장
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/etc</span>
                        <span className="section-info-desc">시스템 환경 설정 저장 디렉터리</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/root</span>
                        <span className="section-info-desc">시스템 관리자용 홈 디렉터리</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/sbin</span>
                        <span className="section-info-desc">관리자용 시스템 표준 명령 및 시스템 관리와 관련된 실행 명령어 저장</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/usr</span>
                        <span className="section-info-desc">사용자 디렉터리로 사용자 데이터나 애플리케이션 저장</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/home</span>
                        <span className="section-info-desc">
                            사용자 계정 디렉터리로 계정들의 홈 디렉터리가 위치<br/>
                            일반 사용자들이 로그인 시 처음으로 위치하게 되는 디렉터리
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/var</span>
                        <span className="section-info-desc">가변 자료 저장 디렉터리로 로그 파일이나 메일 데이터 저장</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/tmp</span>
                        <span className="section-info-desc">
                            각종 프로그램이나 프로세스 작업을 할 때 임시로 생성되는 파일 저장<br/>
                            모든 사용자에 대해서 읽기와 쓰기가 허용<br/>
                            시티키 비트 설정으로 파일의 소유자만이 자신의 소유 파일을 지울 수 있음
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/mnt</span>
                        <span className="section-info-desc">파일 시스템을 일시적으로 마운트 할 때 사용</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">/lost+found</span>
                        <span className="section-info-desc">결함이 있는 파일에 대한 정보가 저장되는 디렉터리</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 배포판</h2>

            {/* 리눅스 배포판 */}
            <SectionBlock title="종류">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">슬랙웨어 리눅스</span>
                        <span className="section-info-desc">배포판 가운데 가장 먼저 대중호된 배포판으로 1992년 패트릭 볼커딩에 의해 출시되었다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">데비안</span>
                        <span className="section-info-desc">데비안 프로젝트에서 만들어 배포하는 공개 운영체제로 GNU의 공식적인 후원을 받고있는 유일한 배포판이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">우분투</span>
                        <span className="section-info-desc">데비안 GNU/리눅스에 기초한 운영체제이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">레드햇</span>
                        <span className="section-info-desc">미국의 레드햇사가 개발하던 리눅스 배포판이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">RHEL</span>
                        <span className="section-info-desc">레드햇이 개발하여 판매하고 있는 상용 리눅스 배포판이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">페도라</span>
                        <span className="section-info-desc">리눅스 커널에 기반한 운영체제와 레드햇의 후원과 개발 공동체의 지원 아래 개발된 배포판이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">CentOS</span>
                        <span className="section-info-desc">업스트림 소스인 레드햇 엔터프라이즈 리눅스와 완벽하게 호환되는 무료 기업용 컴퓨팅 운영체제이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">수세</span>
                        <span className="section-info-desc">독일에서 출시된 배포판으로 유럽에서 인기를 누리고 있다.</span>
                    </li>

                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
