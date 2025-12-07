// Section 1. 리눅스 권한 및 그룹 설정
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";
import image1_1 from "../image/section1/section1_1.png"

export function Section1() {
    return (
        <SectionTemplate title="리눅스 권한 및 그룹 설정">

            {/* 부제목 */}
            <h2 className="section-subtitle">네트워크 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>리눅스 시스템은 모든 파일과 디렉터리에는 접근권한과 소유권이 부여된다.</li>
                    <li>명령어 'ls -l'은 파일 속성을 나타낸다.</li>
                    <li>속성 필드 중 첫 번째 필드는 파일이나 디렉터리의 허가권, 세번째와 네번째 필드는 파일이나 디렉터리의 소유권을 나타낸다.</li>
                    <li>파일의 허가권이나 소유권을 설정하는 명령어는 chmod, chown, chgrp, umask등이 있다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">소유권 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>소유권은 임의의 파일 또는 디렉터리에 대한 사용자와 그룹들의 소유 권한을 나타낸 것이다.</li>
                    <li>그룹은 사용자들의 시스템 운영 특성에 따라 묶어 놓은 것으로, 같은 그룹에 속한 사용자들은 파일 또는 디렉터리에 대해 동일한 소유권과
                        직접 갖는다.</li>
                </ul>
            </SectionBlock>

            {/* chown */}
            <SectionBlock title="chown">
                <ul className="section-list">
                    <li>파일과 디렉터리의 사용자 소유권과 그룹 소유권을 변경한다.</li>
                </ul>
            </SectionBlock>

            {/* chgrp */}
            <SectionBlock title="chgrp">
                <ul className="section-list">
                    <li>파일이나 디렉터리의 그룹 소유권을 변경한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">허가권 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>명령어 'ls -l'으로 파일 유형과 허가권을 알 수 있다.</li>
                    <li>파일 허가권의 첫 번째 자리는 파일 유형을 기호로 정의한다.</li>
                    <li>파일은 일반 파일, 디렉터리 파일, 특수 파일로 나뉜다.</li>
                    <li>파일 권한을 읽기(read), 쓰기(write), 실행(excute)이 있다.</li>
                    <li>읽기, 쓰기 또는 실행의 접근 제한 표시는 하이픈(-)으로 나타낸다.</li>
                </ul>
            </SectionBlock>

            {/* chmod */}
            <SectionBlock title="chmod">
                <ul className="section-list">
                    <li>파일이나 디렉터리의 접근 허가권을 변경하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* umask */}
            <SectionBlock title="umask">
                <ul className="section-list">
                    <li>새로 생성되는 파일이나 디렉터리의 기본 허가권을 값을 지정한다.</li>
                    <li>파일의 기본 권한은 666, 디렉터리의 기본 권한 777이다.</li>
                    <li>파일이나 디렉터리 생성 시 디폴트 권한 값에서 설정한 umask를 뺀 값을 기본 허가권으로 설정한다.</li>

                    {/* 사진 */}
                    <div className="photo-wrapper">
                        <img src={image1_1} alt="" className="photo-image"/>
                    </div>

                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">특수 권한</h2>

            {/* SetUID와 SetGID */}
            <SectionBlock title="SetUID와 SetGID">
                <ul className="section-list">
                    <li>프로세스가 실행되는 동안 해당 프로세스의 root 권한을 임시로 가져오는 기능이다.</li>
                    <li>프로세스가 사용자보다 높은 수준의 접근을 요구할 때 파일 접근 제한 때문에 원활한 기능을 제공할 수 없기 때문에 이러한 문제점을 해결하기
                        위한 방법이다.</li>
                    <li>SetUID의 경우 사용자가 사용할 때만 소유자 권한으로 파일을 실행시키고, SetGID의 경우 사용자가 사용할 때만 그룹 권한으로
                        파일을 생성한다.</li>
                </ul>
            </SectionBlock>

            {/* Sticky bit */}
            <SectionBlock title="Sticky bit">
                <ul className="section-list">
                    <li>일방적으로는 공용 디렉터리를 사용할 대 Sticky bit를 설정하여 사용한다.</li>
                    <li>사용자 권한을 지정하기 어려운 프로그램들이 일시적으로 특정 디렉터리에 파일을 생성하고 삭제하도록 이용된다.</li>
                    <li>설정된 디렉터리에는 누구든 접근 가능하고 파일을 생성할 수 있다.</li>
                    <li>Sticky bit가 설정되어 있는 디렉터리 안의 내용은 해당 파일의 소유자나 root만이 변경이 가능하다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">디스크 쿼터</h2>

            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>
                        파일 시스템마다 사용자나 그룹이 생성할 수 있는 파일의 용량 및 개수를 제한하는 것이다.<br/>
                        보통 블럭 단위의 용량 제한과 inode의 개수를 제한한다.
                    </li>
                    <li>사용자나 그룹이 가질 수 있는 inode의 수, 사용자나 그룹에게 할당된 디스크 블록 수를 제한한다.</li>
                    <li>쿼터는 사용자별, 파일 시스템별로 동작된다.</li>
                    <li>그룹 단위로도 용량을 제한할 수 있으며 웹호스팅 서비스를 하는 경우에 유용하다.</li>
                </ul>
            </SectionBlock>

            <SectionBlock title="디스크 쿼터 지정 단계">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">단계 1</span>
                        <span className="section-info-desc">파일 /etc/fstab에 디스크 쿼터 관련 설정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">단계 2</span>
                        <span className="section-info-desc">재마운팅 실행 후 확인</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">단계 3</span>
                        <span className="section-info-desc">마운트 된 커터를 끄고 생성된 쿼터 파일 삭제</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">단계 4</span>
                        <span className="section-info-desc">쿼터 데이터베이스 생성</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">단계 5</span>
                        <span className="section-info-desc">사용자별 쿼터 지정</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">단계 6</span>
                        <span className="section-info-desc">쿼터 현재 상태 점검</span>
                    </li>

                </ul>
            </SectionBlock>

            <SectionBlock title="디스크 쿼터 관련 명령어">
                <ul className="section-info-list">

                    <li className="section-info-item">
                        <span className="section-info-name">quotaoff</span>
                        <span className="section-info-desc">쿼터 서비스를 비활성화 한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">quotacheck</span>
                        <span className="section-info-desc">파일 시스템의 디스크 사용 상태를 검색한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">edquota</span>
                        <span className="section-info-desc">편집기를 이용하여 사용자나 그룹에 디스크 사용량을 할당하는 명령어이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">setquota</span>
                        <span className="section-info-desc">편집기가 기반이 아닌 명령행에서 직접 사용자나 그룹에 디스크 사용량을 할당하는 명령어이다.</span>
                    </li>

                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
