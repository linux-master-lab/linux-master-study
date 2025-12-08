// Section 6. 리눅스 프로세스 유틸리티
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section6() {
    return (
        <SectionTemplate title="리눅스 프로세스 유틸리티">

            {/* 부제목 */}
            <h2 className="section-subtitle">프로세스 관련 명령어</h2>

            {/* ps */}
            <SectionBlock title="ps">
                <ul className="section-list">
                    <li>현재 실행중인 프로세스의 상태를 보여주는 명령어이다.</li>
                    <li>CPU사용도가 낮은 순서로 출력된다.</li>
                </ul>
            </SectionBlock>

            {/* pstree */}
            <SectionBlock title="pstree">
                <ul className="section-list">
                    <li>실행 중인 프로세스들을 트리구조로 나타낸다.</li>
                </ul>
            </SectionBlock>

            {/* jobs */}
            <SectionBlock title="jobs">
                <ul className="section-list">
                    <li>작업이 중지된 상태, 백그라운드로 진행 중인 상태, 변경되었지만 보고되지 않은 상태 등을 표시한다.</li>
                    <li>백그라운드로 실행중인 프로세스를 확인한다. [숫자]는 작업번호이다.</li>
                    <li>출력된 목록에서 +는 현재 작업 실행, -는 앞으로 실행될 작업을 나타낸다.</li>
                </ul>
            </SectionBlock>

            {/* bg와 fg */}
            <SectionBlock title="bg와 fg">
                <ul className="section-list">
                    <li>포어그라운드에서 백그라운드로 전환: bg %작업번호 또는 bg 작업번호</li>
                    <li>백그라운드에서 포어그라운드로 전환: fg %작업번호 또는 fg 작업번호</li>
                </ul>
            </SectionBlock>

            {/* kill */}
            <SectionBlock title="kill">
                <ul className="section-list">
                    <li>프로세스를 종료시킨다.</li>
                </ul>
            </SectionBlock>

            {/* killall */}
            <SectionBlock title="killall">
                <ul className="section-list">
                    <li>같은 데몬의 여러 프로세스를 한 번에 종료시킬 때 사용한다.</li>
                    <li>프로세스명으로 연관된 프로세스들을 종료시킨다.</li>
                </ul>
            </SectionBlock>

            {/* nice */}
            <SectionBlock title="nice">
                <ul className="section-list">
                    <li>프로세스 사이의 우선순위를 변경할 수 있는 명령어이다.</li>
                    <li>조정할 수 있는 NI 값의 범위는 -20 ~ 19 (우선순위 높음 → 낮음)이다.</li>
                    <li>우선순위 0의 값을 가지며 값이 작을수록 우선순위가 높다.</li>
                    <li>옵션 -n을 사용하지 않으면 디폴트는 10을 사용한다.</li>
                    <li>조정수치가 생략되면 명령의 우선권은 10만큼 증가한다.</li>
                    <li>
                        명령어 'nice -10 bash'는 bash 프로세스 NI값을 10만큼 증가시키는 것이다.<br/>
                        값이 증가한다는 것은 우선선위를 낮추는 것이다.<br/>
                        우선순위를 높이는 명령어는 'nice --10 bash'이다.<br/>
                        이것은 NI값을 -10만큼 감소시켜 우선순위를 높인다.
                    </li>
                    <li>nice [옵션] 프로세스명</li>
                </ul>
            </SectionBlock>

            {/* renice */}
            <SectionBlock title="renice">
                <ul className="section-list">
                    <li>이미 실행중인 프로세스의 우선순위를 변경한다.</li>
                    <li>nice는 기존 NI값을 증감하지만 명령어 renice는 지정한 NI값을 설정한다.</li>
                    <li>nice는 양수값은 -를, 음수값은 --를 사용하지만, renice는 양수값에 -를 사용하지 않는다.</li>
                    <li>renice [옵션] NI값 PID</li>
                </ul>
            </SectionBlock>

            {/* top */}
            <SectionBlock title="top">
                <ul className="section-list">
                    <li>리눅스 시스템의 운영 상태를 실시간으로 모니터링하거나 프로세스 상태를 확인할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* nohup */}
            <SectionBlock title="nohup">
                <ul className="section-list">
                    <li>프로세스가 중단되지 않고 백그라운드로 작업을 수행할 수 있게 한다.</li>
                    <li>사용자가 로그아웃하거나 작업 중인 터미널 창이 닫혀도 실행 중인 프로세스를 백그라운드 프로세스로 계속 작업할 수 있도록 한다.</li>
                    <li>용량이 큰 데이터 압축 해제와 같은 실행 시간이 오래 걸리는 프로세스들에 대해 nohub으로 처리하여 작업하면 작업 중단 없이 해당
                        업무를 완료할 수 있다.</li>
                    <li>백그라운드로 실행될 수 있도록 명령행 뒤에 &를 명시한다.</li>
                </ul>
            </SectionBlock>

            {/* tail */}
            <SectionBlock title="tail">
                <ul className="section-list">
                    <li>파일의 마지막 행을 기준으로 지정한 행까지 파일 내용의 일부를 출력한다.</li>
                    <li>기본값으로 마지막 10줄을 출력한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">스케줄링과 cron</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>주기적으로 반복되는 일은 자동적으로 실행될 수 있도록 설정한다.</li>
                    <li>스케줄링 데몬은 crond이며 관련 파일은 /etc/crontab이다.</li>
                    <li>파일 /etc/crontab은 7개의 필드로 구성되어 있다.</li>
                    <li>명령어 crontab은 사용자가 주기적인 작업을 등록할 수 있게 한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}