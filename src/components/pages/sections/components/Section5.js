// Section 5. 리눅스 파티션
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section5() {
    return (
        <SectionTemplate title="리눅스 파티션">

            {/* 부제목 */}
            <h2 className="section-subtitle">파티션의 특징과 종류</h2>

            {/* 내용 */}
            <SectionBlock title="내용">

                {/* 특징 */}
                <ul className="section-list">
                    <li>파티션이란, 하나의 물리적 디스크를 여러 개의 논리적인 디스크로 분활하는 것이다.</li>
                    <li>파티션은 주 파티션, 확장 파티션, 논리 파티션, 스왑 파티션으로 구분된다.</li>
                </ul>

                {/* 파티션 */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">주 파티션</span>
                        <span className="section-info-desc">
                            부팅이 가능한 기본 파티션<br/>
                            하나의 하드디스크에 최대 4개의 주 파티션 분활 가능<br/>
                            하드디스크를 4개 이상의 파티션으로 사용해야 할 때 하나의 확장 파티션을 설정하여 확장 파티션 안에 여러 개의 논리 파티션을 분할하여 데이터
                            저장
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">확장 파티션</span>
                        <span className="section-info-desc">
                            주 파티션 내에 생성, 하나의 물리적 디스크에 1개만 생성<br/>
                            파티션 번호는 1~4번이 할당<br/>
                            데이터 저장 영역을 위한 것이 아니라 논리 파티션을 생성
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">논리 파티션</span>
                        <span className="section-info-desc">
                            확장 파티션 안에 생성되는 파티션<br/>
                            논리 파티션은 12개 이상 생성하지 않는 것을 권고하며 5번 이후의 번호가 붙여짐
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">스왑 파티션</span>
                        <span className="section-info-desc">
                            하드디스크의 일부를 메모리처럼 사용하는 영역<br/>
                            주 파티션 또는 논리 파티션에 생성<br/>
                            프로그램 실행 시 부족한 메모리 용량을 하드디스크로 리눅스 설치시에 반드시 설치되어야 하는 영역<br/>
                            스왑 영역의 크기는 메모리의 2배를 설정하도록 권고
                        </span>
                    </li>

                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">디스크와 장치명</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>분활된 파티션은 디스크의 장치 파일명 뒤에 숫자를 붙인다.</li>
                    <li>리눅스에서 파티션을 만들고 마운트 할 때 지정된 디바이스명을 사용한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">파일 시스템</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>파일 시스템은 운영체제가 파일을 시스템의 디스크 파티션상에 구성하는 방식이다.</li>
                    <li>일정한 규칙을 가지고 파일을 저장하도록 규칙 방식을 제시한다.</li>
                    <li>파티션에 파일 시스템이 없으면, 파일 시스템 생성을 거쳐야 사용이 가능하다.</li>
                    <li>리눅스는 고유의 파일 시스템뿐만 아니라 다양한 파일 시스템을 지원하고 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">LVM(Logical Volumn Manager)</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>여러 개의 하드디스크를 합쳐서 사용하는 기술로 한 개의 파일 시스템을 사용한다.</li>
                    <li>작은 용량의 하드디스크 여러 개를 큰 용량의 하나의 하드디스크처럼 사용한다.</li>
                    <li>서버를 운영하면서 대용량의 별도 저장 공간이 필요할 때 활용된다.</li>
                    <li>다수 개의 디스크를 묶어서 사용함으로써 파티션의 크기를 줄이거나 늘릴 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">RAID</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>RAID는 복수 배열 독립 디스크의 약자이다.</li>
                    <li>여러 개의 물리적 디스크를 하나의 논리적 디스크로 인식하여 작동하게 하는 기술이다.</li>
                    <li>여러 개의 하드디스크에 일부 중복된 데이터를 나눠서 저장하는 기술이다.</li>
                    <li>RAID종류는 하드웨어 RAID와 소프트웨어 RAID로 나뉜다.</li>
                    <li>데이터를 저장하는 다양한 방법이 존재하며 이 방법들을 레벨이라 한다.</li>
                    <li>레벨에 따라 저장 장치의 신뢰성을 높이거나 전체적인 성능을 향상시키는 다양한 목적을 만족시킨다.</li>
                    <li>각 레벨의 정점을 합친 RAID 구성으로는 대표적으로 RAID 0+1과 RAID 1+0이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">파티션 분활</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>fdisk는 파티션 테이블을 관리하는 명령으로 리눅스의 디스크 파티션을 생성, 수정, 삭제 할 수 있는 일종의 유틸리티이다.</li>
                </ul>

                {/* fdisk 명령어 */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">fdisk 명령어</span>
                        <span className="section-info-desc">a, l, n, t, w, p, q</span>
                    </li>
                </ul>

            </SectionBlock>
        </SectionTemplate>
    );
}