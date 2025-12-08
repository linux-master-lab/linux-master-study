// Section 7. 리눅스 활용 기술
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section7() {
    return (
        <SectionTemplate title="리눅스 활용 기술">

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 서버 분야</h2>

            {/* 서버 가상화 */}
            <SectionBlock title="서버 가상화">
                <ul className="section-list">
                    <li>서버를 구성하는 모든 자원의 가상화를 의미한다.</li>
                    <li>하나의 물리적 서버 호스트에서 여러 개의 서버 운영 체제를 게스트로 실행할 수 있게 해주는 소프트웨어 아키텍처이다.</li>
                    <li>서버들을 하나의 서버로 통합하여 가상환경을 구동시킴으로써 물리서버 및 공간을 절감한다.</li>
                    <li>서버 자원 통합 운영으로 하드웨어 가용성을 증가시킨다.</li>
                    <li>손쉬운 이중화구성과 유연한 자원 할당으로 시스템 가용성과 안정성을 확보한다.</li>
                    <li>통합 구축, 공동 활용, 유지 관리, 전력 및 관리 비용 등 중복 투자 방비 및 예산을 절감한다.</li>
                </ul>
            </SectionBlock>

            {/* 클라우드 컴퓨팅 */}
            <SectionBlock title="클라우드 컴퓨팅">
                <ul className="section-list">
                    <li>공유 구성이 가능한 컴퓨팅 리소스의 통합으로 어디서나 간편하게 요청에 따라 네트워크를 통해 접근하는 것을 가능하게 한다.</li>
                    <li>사업자와 직접 상호 작용하지 않고 사용자의 개별 관리 화면을 통해 서비스를 이용할 수 있다.</li>
                    <li>사업자의 컴퓨팅 리소스를 여러 사용자가 공유하는 형태로 이용한다.</li>
                    <li>필요에 다라 필요한 만큼의 스케일업과 스케일다운이 가능하다.</li>
                </ul>

                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">IaaS(Infrastructure as a Service)</span>
                        <span className="section-info-desc">서버나 스토리지 같은 하드웨어 자원만을 임대해 주는 클라우드 서비스이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">Paas(Platform as a Service)</span>
                        <span className="section-info-desc">소프트웨어 서비스를 개발하기 위한 플랫폼을 제공하는 클라우드 서비스이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">SaaS(Software as a Service)</span>
                        <span className="section-info-desc">클라우드 환경에서 동작하는 응용 프로그램을 서비스 형태로 제공한다.</span>
                    </li>
                </ul>

                <ul className="section-list">
                    <li>사설 클라우드, 공유 클라우드, 하이브리드 클라우드 모델이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 빅데이터 */}
            <SectionBlock title="빅데이터">
                <ul className="section-list">
                    <li>기존 데이터베이스 관리 도구의 데이터 수집, 저장, 관리, 분석 역량을 넘어서는 데이터이다.</li>
                    <li>다양한 종류의 대규모 데이터로부터 저렴한 비용으로 가치를 추출하고 데이터의 빠른 수집, 발굴 분석을 지원할 수 있도록 고안된 차세대 기술
                        및 아키텍처이다.</li>
                    <li>볼륨, 속도, 다양성의 3대 요소가 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">임베디드 시스템</h2>

            {/* 모바일 */}
            <SectionBlock title="모바일">
                <ul className="section-list">
                    <li>스마트폰의 OS란 스마트폰을 구성하고 있는 하드웨어 부품인 메모리, LCD, CPU 등의 기계적인 부품들을 효율적으로 관리 및 구동하게
                        하며, 사용자와의 편리한 의사소통을 위해 만들어진 다양한 프로그램들이 구동될 수 있도록 하는 소프트웨어 플랫폼이다.</li>
                    <li>대표적으로 안드로이드와 iOS가 있다.</li>
                    <li>리눅스 기반의 공개형 운영체제로 마에모, 모블린, 미고, 리모, 타이벤, iOS가 있다.</li>
                </ul>
            </SectionBlock>

            {/* 스마트TV */}
            <SectionBlock title="스마트TV">
                <ul className="section-list">
                    <li>텔레비전에 인터넷 접속 기능이 결합되어, 각종 애플리케이션을 설치하여 TV방송 시청이외의 다양한 기능을 활용할 수 있는 다기능 TV이다.</li>
                    <li>인터넷 TV 또는 커넥티드 TV라고도 불린다.</li>
                </ul>
            </SectionBlock>

            {/* IVI(In Vehicle Infotainment) */}
            <SectionBlock title="IVI(In Vehicle Infotainment)">
                <ul className="section-list">
                    <li>인포테인먼트란 정보와 오락의 합성어로 정보전달에 오락성을 가미한 시스템이다.</li>
                    <li>내비게이션이나 계기판, AV 시스템, DMB, MP3, 오디오 및 외부 기기와의 연결까지 가능한 통합적인 차량 내부 시스템을 포함한다.</li>
                    <li>GENIVI 표준 플랫폼 기반의 인포테인먼트 시스템이다.</li>
                    <li>운전자 편의성 및 안전성을 증대시킨다.</li>
                    <li>GENIVI(GENEVA In Vehicle Infotainment)는 오픈 소스 기반 플랫폼 얼라이언스로 차량 멀티미디어 플랫폼 표준화
                        활동이다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}