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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">LVM(Logical Volumn Manager)</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">RAID</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">파티션 분활</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li></li>
                    <li></li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">디스크와 장치명</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li></li>
                    <li></li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}