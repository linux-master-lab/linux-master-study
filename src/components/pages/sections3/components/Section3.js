// Section 3. 리눅스 인터넷 활용
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";
import image3_1 from "../image/section3/section3_1.png"
import image3_2 from "../image/section3/section3_2.png"
import image3_3 from "../image/section3/section3_3.png"
import image3_4 from "../image/section3/section3_4.png"
import image3_5 from "../image/section3/section3_5.png"

export function Section3() {
    return (
        <SectionTemplate title="리눅스 인터넷 활용">

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 분류</h2>

            {/* lan(Local Area Network) */}
            <SectionBlock title="lan(Local Area Network)">
                <ul className="section-list">
                    <li>근거리 통신망을 연결하는 네트워크이다.</li>
                    <li>학교나, 회사등 가까운 지역을 묶는 소규모 네트워크이다.</li>
                    <li>로컬 또는 리모트 컴퓨터의 X server의 접속과 세션 시작을 담당한다.</li>
                    <li>사용자에게 그래픽 로그인 화면을 띄워주고 아이디와 패스워드를 입력받아 인증을 진행하고 인증이 정상적으로 완료되면 세션을 시작한다.</li>
                </ul>
            </SectionBlock>

            {/* man(MetroPolice Area Network) */}
            <SectionBlock title="man(MetroPolice Area Network)">
                <ul className="section-list">
                    <li>도시권 통신망을 연결하는 네트워크이다.</li>
                    <li>LAN과 WAN의 중간크기이다.</li>
                </ul>
            </SectionBlock>

            {/* wan(Wide Area Network) */}
            <SectionBlock title="wan(Wide Area Network)">
                <ul className="section-list">
                    <li>국가, 대륙 등과 같이 넓은 지역을 연결하는 네트워크이다.</li>
                    <li>거리의 제한은 없으나 다양한 경로를 경유해 도달하므로 속도가 느리고 전송 에러율도 높다.</li>
                </ul>
            </SectionBlock>

            {/* san(Storage Area Network) */}
            <SectionBlock title="san(Storage Area Network)">
                <ul className="section-list">
                    <li>스토리지를 위해 고안된 스토리지 전용 고속 네트워크이다.</li>
                    <li>파이버 채널을 이용하여 구성되는 저장장치 네트워크이다.</li>
                    <li>호스트 컴퓨터의 종류에 구애받지 않고 별도의 연결된 저장장치 사이에 대용량의 데이터를 전송시킬 수 있는 고속 네트워크이다.</li>
                    <li>서버가 클라이언트로부터 받은 파일 I/O 요청을 직접 블록 I/O로 전환하여 SAN에 연결된 스토리지로 저장한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 개요</h2>

            {/* LAN 토폴로지 */}
            <SectionBlock title="LAN 토폴로지">
                <ul className="section-list">
                    <li>토폴로지는 호스트 및 장비들의 물리적인 배치 형태이다.</li>
                    <li>토폴로지는 성형, 망형, 버스형, 링형, 트리형 등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 성형 */}
            <SectionBlock title="성형">
                <ul className="section-list">
                    <li>중앙 컴퓨터에 여러 대의 컴퓨터가 허브 또는 스위치와 같은 장비로 연결</li>
                    <li>중앙 집중식 형태로 네트워크 확장에 용이</li>
                    <li>고속의 대규모 네트워크에 적합</li>
                    <li>관리하는 중앙 컴퓨터 고장 시 전체 네트워크 사용이 불가능</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image3_1} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 망형 */}
            <SectionBlock title="망형">
                <ul className="section-list">
                    <li>모든 노드가 서로 일대일로 연결된 형태</li>
                    <li>대량의 데이터를 송수신할 경우 적합</li>
                    <li>장애 발생 시 다른 시스템에 영향이 적고 우회할 수 있는 경로가 존재하여 가장 신뢰성이 높은 방식</li>
                    <li>회선 구축 비용이 많이 듬</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image3_2} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 버스형 */}
            <SectionBlock title="버스형">
                <ul className="section-list">
                    <li>하나의 통신회선에 여러 컴퓨터를 연결해서 전송</li>
                    <li>연결된 컴퓨터 수에 따라 네트워크 성능이 변동</li>
                    <li>단말기 추가 및 제거가 용이하며 설치 비용이 저렴</li>
                    <li>노드 수 증가 시 트래픽 증가로 병목현상 발생, 네트워크 성능 저하 초래</li>
                    <li>문제가 발생한 노드의 위치를 파악하기 어려움</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image3_3} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 링형 */}
            <SectionBlock title="링형">
                <ul className="section-list">
                    <li>각 노드가 좌우의 인접한 노드와 연결되어 원형을 이룬 형태</li>
                    <li>앞의 컴퓨터로부터 수신한 내용을 다음컴퓨터로 재전송하는 방법</li>
                    <li>토큰패싱이라는 방법을 통해 데이터 전송</li>
                    <li>고속네트워크로 자주 네트워크 환경이 바뀌지 않는 경우 구성</li>
                    <li>분산제어와 검사 및 회복이 가능</li>
                    <li>네트워크 전송상의 충돌이 없고 노드 숫자가 증가하더라도 망 성능의 저하가 적음</li>
                    <li>논리적인 순환형 토폴로지로 하나의 노드장애가 전체 토폴로지에 영향</li>
                    <li>노드의 추가 및 삭제가 용이하지 않음</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image3_4} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 트리형 */}
            <SectionBlock title="트리형">
                <ul className="section-list">
                    <li>버스형과 성형 토폴로지의 확장 형태</li>
                    <li>백본과 같은 공통 배선에 적절한 분기장치를 사용하여 링크를 덧붙여 나갈 수 있는 구조</li>
                    <li>트래픽 양 증가 시 병목 현상의 가능성 증대</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image3_5} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 매체 접근 제어 방식 */}
            <SectionBlock title="매체 접근 제어 방식">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">CSMA/CD</span>
                        <span className="section-info-desc">단말기가 전송로의 신호 유무를 조사하고 다른 단말기가 신호를 송출하는지 확인한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">토큰패싱</span>
                        <span className="section-info-desc">토큰의 흐름에 의해 전송 순서가 결정된다. 토큰패싱은 free token과 busy token을 이용하여 매체 접근을 제어한다.</span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 장비</h2>

            {/* 케이블 */}
            <SectionBlock title="케이블">
                <ul className="section-list">
                    <li>보호 외피나 외장 안에 두 개 이상의 전선이나 광섬유로 묶여 있는 것이다.</li>
                    <li>TP 케이블, 동축 케이블, 광섬유 케이블 등을 사용할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* 리피터 */}
            <SectionBlock title="리피터">
                <ul className="section-list">
                    <li>신호의 재생 및 증폭기능을 수행하여 물리적인 거리를 확장시킨다.</li>
                </ul>
            </SectionBlock>

            {/* 허브 */}
            <SectionBlock title="허브">
                <ul className="section-list">
                    <li>신호를 노드에 전달해 주는 장비이다.</li>
                    <li>네트워크 확장, 다른 허브와의 상호 연결, 신호의 증폭 등의 기능을 제공한다.</li>
                </ul>
            </SectionBlock>

            {/* LAN카드 */}
            <SectionBlock title="LAN카드">
                <ul className="section-list">
                    <li>네트워크에 접속할 수 있도록 컴퓨터 내에 설치되는 확장 카드이다.</li>
                    <li>전기신호로부터 데이터를 송신하고 변환하며, 데이터를 전기신호로 변환하여 송신한다.</li>
                    <li>MAC 주소를 이용하여 데이터의 수신 여부를 판별한다.</li>
                </ul>
            </SectionBlock>

            {/* 브릿지 */}
            <SectionBlock title="브릿지">
                <ul className="section-list">
                    <li>모든 수신 프레임을 일단 버퍼에 저장하고, 주소에 따라 목적지 포트로 프레임을 전달하는 장비이다.</li>
                    <li>큰 네트워크를 단일 네트워크상의 트래픽 감소 등과 같은 작고 관리하기 쉬운 Segment로 나눌 필요가 있을 때 사용한다.</li>
                    <li>전기적으로 신호의 재생 및 패킷의 송수신 어드레스를 분석하여 패킷의 통과 여부를 판정하는 필터링을 작용한다.</li>
                </ul>
            </SectionBlock>

            {/* 스위치 */}
            <SectionBlock title="스위치">
                <ul className="section-list">
                    <li>브릿지와 비슷한 기능을 갖는 장비이다.</li>
                    <li>소프트웨어 기반인 처리 방식으로 브릿지보다 빠르게 데이터를 전송한다.</li>
                    <li>맥 주소 테이블을 기반으로 프레임 전송한다.</li>
                    <li>스위칭 허브는 전용매체교환 기술을 이용하여 트래픽 병목 현상을 제거하고, 포트별로 속도가 전용으로 보장된다.</li>
                </ul>
            </SectionBlock>

            {/* 라우터 */}
            <SectionBlock title="라우터">
                <ul className="section-list">
                    <li>OSI모델의 물리 계층, 데이터링크 계층, 네트워크 계층의 기능을 지원하는 장치이다.</li>
                    <li>서로 다른 통신망과 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 한다.</li>
                    <li>LAN을 연결시켜주는 망 연동 장치로서 통신망에서 정보를 전송하기 위해 경로를 설정하는 역할을 제공하는 핵심적인 통신장비이다.</li>
                    <li>목적지로 향하는 최적의 경로 설정 데이터를 목적지까지 전달하는 기능을 수행한다.</li>
                </ul>
            </SectionBlock>

            {/* 게이트웨이 */}
            <SectionBlock title="게이트웨이">
                <ul className="section-list">
                    <li>서로 다른 형태의 네트워크를 상호 접속하는 장치이다.</li>
                    <li>서로 다른 통신망이나 프로토콜을 사용하는 네트워크 간의 통신을 가능하게 하는 장비를 통칭한다.</li>
                    <li>데이터 포맷 등 두 개의 시스템 사이에서 중계자 역할을 수행한다.</li>
                </ul>
            </SectionBlock>

            {/* UTP 케이블링 */}
            <SectionBlock title="UTP 케이블링">
                <ul className="section-list">
                    <li>다이렉트 케이블</li>
                    <li>크로스오버 케이블</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">프로토콜 개요와 기능</h2>

            {/* 범용 테이블 */}
            <SectionBlock title="OSI7 모델과 TCP/IP모델">
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="center col-num">번호</th>
                                <th className="center">OSI 7 모델</th>
                                <th className="center">기능</th>
                                <th className="center col-wide">TCP/IP 모델</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td className="col-num">7</td>
                                <td className="col-title">응용 계층</td>
                                <td>사용자에게 다양한 네트워크 서비스를 제공하기 위해 User Interface를 제공, UI로 데이터를 생성</td>
                                <td className="col-wide">응용 계층</td>
                            </tr>

                            <tr>
                                <td className="col-num">6</td>
                                <td className="col-title">표현 계층</td>
                                <td>부호화, 압축, 암호화 기능</td>
                                <td className="col-wide">응용 계층</td>
                            </tr>

                            <tr>
                                <td className="col-num">5</td>
                                <td className="col-title">세션 계층</td>
                                <td>종단 간 애플리케이션들의 연결 설정, 유지, 해제</td>
                                <td className="col-wide">응용 계층</td>
                            </tr>

                            <tr>
                                <td className="col-num">4</td>
                                <td className="col-title">전송 계층</td>
                                <td>종단 간 연결, 응용 계층 사이에 논리적인 통신 제공</td>
                                <td className="col-wide">전송 계층</td>
                            </tr>

                            <tr>
                                <td className="col-num">3</td>
                                <td className="col-title">네트워크 계층</td>
                                <td>논리적인 주소를 사용, 경로 관리, 최적 경로 결정</td>
                                <td className="col-wide">인터넷 층</td>
                            </tr>

                            <tr>
                                <td className="col-num">2</td>
                                <td className="col-title">데이터링크 계층</td>
                                <td>데이터 전송을 위한 형식을 결정<br/>데이터 전송을 위하여 Media에 접근하는 방법 제공<br/>오류 검출 기능 제공</td>
                                <td className="col-wide">네트워크 인터페이스 층</td>
                            </tr>

                            <tr>
                                <td className="col-num">1</td>
                                <td className="col-title">물리 계층</td>
                                <td>물리적인 연결, 전기적, 기계적, 기능적 절차적인 수단 제공</td>
                                <td className="col-wide">네트워크 인터페이스 층</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </SectionBlock>

            {/* 계층별 프로토콜 */}
            <SectionBlock title="계층별 프로토콜">
                <ul className="section-list">
                    <li>프로토콜은 특정 통신 기능을 수행하기 위한 규약이다.<br/>이것은 두 노드 사이의 정보 교환시 발생하는 통신상의 에러를 피하기 위하여 합리적인 통제를 한다.</li>
                    <li>프로토콜 구성요소는 형식, 의미, 순서이다.</li>
                </ul>

                {/* key:value */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">형식</span>
                        <span className="section-info-desc">데이터 포맷, 부호화 및 신호 레벨 등</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">의미</span>
                        <span className="section-info-desc">특정 패턴을 어떻게 해석하고, 어떤 동작을 할 것인가 결정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">순서</span>
                        <span className="section-info-desc">속도 일치 및 순서 제어 등</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">인터넷/네트워크 계층 프로토콜</span>
                        <span className="section-info-desc">IP, ICMP, IGMP, ARP, RARP</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">전송 계층 프로토콜</span>
                        <span className="section-info-desc">TCP, UDP</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">응용 계층 프로토콜</span>
                        <span className="section-info-desc">SMTP, POP, Telnet, SSH, FTP, HTTP, SNMP, TFTP, DHCP</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">IP주소와 도메인</h2>

            {/* IPv4 주소 체계 */}
            <SectionBlock title="IPv4 주소 체계">
                <ul className="section-list">
                    <li>IPv4 주소는 4개의 옥탯으로 구성된다.</li>
                    <li>각 옥탯은 8비트이므로 IPv4는 총 32비트이다.</li>
                    <li>클래스 E는 240~255 사이의 대역에 있으며 IP 주소 부족을 위해 예약해 놓은 것이다.</li>
                    <li>IP주소는 네트워크 ID와 호스트 ID로 구성되어 있다.</li>
                    <li>서브넷 마스크는 네트워크 부분과 호스트 부분을 구분해주는 값이다.<br/>이것은 효율적인 네트워크 분리를 가능하게 한다.</li>
                </ul>
            </SectionBlock>

            {/* 서브넷팅 */}
            <SectionBlock title="서브넷팅">
                <ul className="section-list">
                    <li>서브넷은 특정 네트워크를 여러 개의 네트워크, 브로드캐스트 도메인을 나누는 것이다</li>
                    <li>IP주소의 부족 현상을 해소하기 위한 방안이다.</li>
                    <li>서브넷팅은 디폴트 서브넷 마스크를 기준으로 해서 네트워크 ID비트수를 늘리고 호스트 ID 비트수를 줄이는 것이다.<br/>이때 기준에서 늘어난 네트워크 ID비트는 서브넷ID라 부른다.</li>
                </ul>
            </SectionBlock>

            {/* IPv6 주소 체계 */}
            <SectionBlock title="IPv6 주소 체계">
                <div className="table-wrapper">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="center col-num">번호</th>
                                <th className="center">구분</th>
                                <th className="center">IPv4</th>
                                <th className="center">IPv6</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="col-num">4</td>
                                <td className="col-title">IP주소 비트수</td>
                                <td>32비트</td>
                                <td>64비트</td>
                            </tr>

                            <tr>
                                <td className="col-num">3</td>
                                <td className="col-title">IP주소 방식</td>
                                <td>지정 주소 방식<br/>일반주소<br/>브로드캐스트주소</td>
                                <td>자동 설정 주소 방식<br/>유니캐스트주소<br/>멀티캐스트주소<br/>애니캐스트주소</td>
                            </tr>

                            <tr>
                                <td className="col-num">2</td>
                                <td className="col-title">IP헤더 길이</td>
                                <td>20바이트 ~ 60바이트</td>
                                <td>40바이트와 확장필드 이용</td>
                            </tr>

                            <tr>
                                <td className="col-num">1</td>
                                <td className="col-title">기능</td>
                                <td>IP헤더를 이용한 기본 기능</td>
                                <td>암호 및 인증 가능<br/>QoS 관련 기능<br/>보안 기능</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </SectionBlock>

        </SectionTemplate>
    );
}
