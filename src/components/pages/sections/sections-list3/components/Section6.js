// Section 6. 리눅스 기술 동향
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section6() {
    return (
        <SectionTemplate title="리눅스 기술 동향">

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 동향</h2>

            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>1991년, 초기 리눅스는 주로 서버로 이용되었다.</li>
                    <li>현재의 리눅스 활용 분야는 크게 서버, 데스크톱 및 개발, 임베디드 분야로 나눌 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 관련 기술</h2>

            {/* 클러스터링 */}
            <SectionBlock title="클러스터링">
                <ul className="section-list">
                    <li>여러 개의 시스템이 하나의 거대한 시스템으로 보이게 만드는 기술이다.</li>
                    <li>여러 개의 컴퓨터를 네트워크를 통해 연결하여 하나의 컴퓨터처럼 동작하도록 제작한 시스템이다.</li>
                    <li>클러스터 노드와 클러스터 관리자로 구성된다.</li>
                    <li>고계산용 클러스터, 부하분산 클러스터, 고가용성 클러스터 종류가 있다.</li>
                </ul>
            </SectionBlock>

            {/* 임베디드 시스템 */}
            <SectionBlock title="임베디드 시스템">
                <ul className="section-list">
                    <li>컴퓨터의 하드웨어 제어인 프로세스, 메모리 입출력장치와 하드웨어를 제어하는 소프트웨어가 조합되어 특정한 목적을 수행하는 시스템이다.</li>
                    <li>미리 정해진 특정한 기능을 수행하도록 프로그램이 내장되어 있는 시스템이다.</li>
                    <li>하드웨어와 소프트웨어를 포함하는 특정한 응용시스템이다.</li>
                    <li>개인 휴대 정보 단말, 지리 정보 시스템, 정보가전, 게임기기 등의 시스템을 통칭한다.</li>
                    <li>하드웨어로는 프로세서/컨트롤러, 메모리, I/O장치, 네트워크 장치, 센서 등이다.</li>
                    <li>소프트웨어로는 운영체제, 시스템 S/W, 응용 S/W 이다.</li>
                    <li>실시간 처리를 지원한다.</li>
                    <li>소형, 경량 및 저전력을 지원한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}