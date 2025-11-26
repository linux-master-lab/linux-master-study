// Section 5. 리눅스 프로세스 개념 및 유형
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section5() {
    return (
        <SectionTemplate title="리눅스 프로세스 개념 및 유형">

            {/* 부제목 */}
            <h2 className="section-subtitle">개념</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>프로세스는 CPU와 메모리를 할당받아 실행 중인 프로그램이다.</li>
                    <li>프로세스들마다 고유의 프로세스 ID를 할당받는다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">프로세스의 유형</h2>

            {/* 포어그라운드 프로세스 */}
            <SectionBlock title="포어그라운드 프로세스">
                <ul className="section-list">
                    <li>사용자와 상호작용하는 프로세스</li>
                    <li>터미널에 직업 연결되어 입출력을 주고받는 프로세스</li>
                    <li>명령 입력 후 수행 종료까지 기다려야 하는 프로세스</li>
                    <li>화면에서 실행되는 것이 보이는 프로세스</li>
                    <li>응용프로그램이나 명령어 등</li>
                </ul>
            </SectionBlock>

            {/* 백그라운드 프로세스 */}
            <SectionBlock title="백그라운드 프로세스">
                <ul className="section-list">
                    <li>사용자와 직접적인 대화를 하지 않고 뒤에서 실행되는 프로세스</li>
                    <li>사용자의 입력에 관계없이 실행되는 프로세스</li>
                    <li>실행은 되지만 화면에 나타나지 않고 실행되는 프로세스</li>
                    <li>시스템 프로그램, 데몬 등</li>
                </ul>
            </SectionBlock>

            {/* fork */}
            <SectionBlock title="fork">
                <ul className="section-list">
                    <li>새로운 프로세스를 만들 때 기존 프로세스를 복제하는 방식을 사용한다.</li>
                    <li>새로운 프로세스를 위한 메모리를 할당한다.</li>
                    <li>새로 생성된 프로세스는 원래의 프로세스와 똑 같은 코드를 가지고 있다.</li>
                    <li>원본 프로세스를 부모 프로세스라 부르고, 새로 복제된 프로세스를 자식 프로세스라고 부른다.</li>
                </ul>
            </SectionBlock>

            {/* exec */}
            <SectionBlock title="exec">
                <ul className="section-list">
                    <li>호출하는 프로세스가 새로운 프로세스로 변경되는 방식이다.</li>
                    <li>새로운 프로세스를 위한 메모리를 할당하지 않는다.</li>
                    <li>호출한 프로세스의 메모리에 새로운 프로세스의 코드를 덮어씌워 버린다.</li>
                </ul>
            </SectionBlock>

            {/* 데몬 */}
            <SectionBlock title="데몬">
                <ul className="section-list">
                    <li>리눅스 시스템이 부팅 시 자동으로 실행되는 백그라운드 프로세스이다.</li>
                    <li>메모리에 상주하면서 사용자의 특정 요청이 오면 즉시 실행되는 대기 중인 서버 프로세스이다.</li>
                    <li>주기적이고 지속적인 서비스 요청을 처리하기 위해 사용된다.</li>
                    <li>사용자들은 이 프로세스들을 볼 수 있는 권한이 없다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}