// Section 3. 리눅스 셸 개념 및 종류
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section3() {
    return (
        <SectionTemplate title="리눅스 셸 개념 및 종류">

            {/* 부제목 */}
            <h2 className="section-subtitle">개념</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>명령어 해석기이다.</li>
                    <li>로그인할 때 실행되어 사용자별로 사용 환경 설정을 가능하게 한다.</li>
                    <li>강력한 스크립트 언어이다.</li>
                    <li>입출력 방향 재지정과 파이프 기능을 제공한다.</li>
                    <li>포어/백그라운드 프로세스를 실행한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">종류</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>본셸계열과 C셸 계열로 나뉜다.</li>
                    <li>사용자 프롬프트 $이면 본셸 계열, %이면 C셸 계열을 사용하고 있다는 것이다.</li>
                    <li>대부분의 셸은 본셸 계열의 기능을 포함하여 확대 발전한 형태이다.</li>
                    <li>C셸은 본셸의 모든 기능과 명령어 히스토리, 별명, 작업 제어 기능을 추가로 가지고 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">셸 확인 및 변경</h2>

            {/* 로그인 셸 확인 */}
            <SectionBlock title="로그인 셸 확인">
                <ul className="section-list">
                    <li>파일 /etc/shell에서 사용할 수 있는 셸들을 확인할 수 있다.</li>
                    <li>파일 /etc/passwd파일에서 계정마다 할당된 셸을 확인할 수 있다.</li>
                    <li>명령어 echo $SHELL은 현재 로그인한 사용자가 사용하고 있는 셸을 확인할 수 있더.</li>
                </ul>
            </SectionBlock>

            {/* 셸 변경 */}
            <SectionBlock title="셸 변경">
                <ul className="section-list">
                    <li>로긍인한 셸 변경은 반영구적인 셸 변경 방법으로 관리자가 셸 변경 후 다음 변경을 하기 전까지 지정된 셸을 사용한다.</li>
                </ul>

                {/* 명령어 : 설명  */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">명령어 chsh</span>
                        <span className="section-info-desc">일반 사용자 환경에서 셸 변경 시 사용한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">명령어 usermod</span>
                        <span className="section-info-desc">관리자 환경에서 지정된 계정자의 정보를 변경할 때 사용하는 명령어이다.</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
