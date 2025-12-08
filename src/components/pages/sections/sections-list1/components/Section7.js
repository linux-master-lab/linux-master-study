// Section 7. 리눅스 사용자 생성 및 계정 관리
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section7() {
    return (
        <SectionTemplate title="리눅스 사용자 생성 및 계정 관리">

            {/* 부제목 */}
            <h2 className="section-subtitle">리눅스 명령어</h2>

            {/* which */}
            <SectionBlock title="which">
                <ul className="section-list">
                    <li>명령어의 경로를 확인하는 명령어이다.</li>
                    <li>명령어의 위치를 찾아주거나 alias를 보여주는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* alias */}
            <SectionBlock title="alias">
                <ul className="section-list">
                    <li>자주 사용하는 명령어를 특정 문자로 입력해 두고 명령어 대신 해당 문자를 사용할 수 있게 하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* unalias */}
            <SectionBlock title="unalias">
                <ul className="section-list">
                    <li>alias 기능을 하제한다.</li>
                </ul>
            </SectionBlock>

            {/* 환경변수 PATH */}
            <SectionBlock title="환경변수 PATH">
                <ul className="section-list">
                    <li>PATH는 실행 파일들의 디렉터리 위치를 저장해 놓는 환경 변수이다.</li>
                    <li>명령어 echo &PATH는 지정된 PATH 값을 확인할 수 있다.</li>
                    <li>기존의 PATH에 새로운 경로를 추가하는 방법에는 먕령어 PATH나 홈 디렉터리의 .bash_profile에 PATH를 추가한다. 기존
                        경로와 새 경로는 : 으로 구분한다.</li>
                </ul>
            </SectionBlock>

            <h2 className="section-subtitle">리눅스 도움말</h2>

            {/* man */}
            <SectionBlock title="man">
                <ul className="section-list">
                    <li>리눅스에서 사용하는 명령어들의 메뉴얼을 제공한다.</li>
                </ul>
            </SectionBlock>

            {/* info */}
            <SectionBlock title="info">
                <ul className="section-list">
                    <li>리눅스 명령어의 사용 방법, 옵션 등을 나타낸다.</li>
                </ul>
            </SectionBlock>

            {/* whatis */}
            <SectionBlock title="whatis">
                <ul className="section-list">
                    <li>명령어에 대한 기능을 간략하게 나타낸다.</li>
                    <li>완전히 키워드가 일치해야만 해당 명령어의 기능을 확인할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* mannpath */}
            <SectionBlock title="mannpath">
                <ul className="section-list">
                    <li>man 페이지의 위치 경로를 검색하여 표시해 주는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/*  whereis */}
            <SectionBlock title="whereis">
                <ul className="section-list">
                    <li>찾고자 하는 명령어 실행 파일 절대 경로와 소스코드, 설정 파일 및 메뉴얼 페이지를 찾아 출력하는 명령이다.</li>
                </ul>
            </SectionBlock>

            {/*  apropos */}
            <SectionBlock title="apropos">
                <ul className="section-list">
                    <li>man 페이지 설명에서 저정한 키워드를 포함하고 있는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사용자 생성 명령어</h2>

            {/* useradd */}
            <SectionBlock title="useradd">
                <ul className="section-list">
                    <li>계정을 생성하는 명령어 useradd와 동일한 기능을 갖는다.</li>
                    <li>계정자의 홈 디렉터리는 '/home/계정명'이다.</li>
                    <li>생성된 계정자 정보는 파일 /etc/passwd, /etc/shadow, /etc/group에 지정된다.</li>
                </ul>
            </SectionBlock>

            {/* passwd */}
            <SectionBlock title="passwd">
                <ul className="section-list">
                    <li>생성된 계정자의 패스워드를 이력 및 변경하는 명령어이다.</li>
                    <li>생성된 계정자의 패스워드는 /etc/shadow 파일 안에 기록된다.</li>
                </ul>
            </SectionBlock>

            {/* su */}
            <SectionBlock title="su">
                <ul className="section-list">
                    <li>su는 switch user의 줄임말이다.</li>
                    <li>현재의 사용자 계정에서 로그아웃하지 않고 다른 사용자 계정으로 로그인하여 해당 사용자의 권한을 획득하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사용자 관련 파일</h2>

            {/* /etc/default/useradd */}
            <SectionBlock title="/etc/default/useradd">
                <ul className="section-list">
                    <li>명령어 useradd로 사용자 계정을 추가할 때 사용되는 정보를 읽어오는 파일이다.</li>
                </ul>
            </SectionBlock>

            {/* /etc/passwd */}
            <SectionBlock title="/etc/passwd">
                <ul className="section-list">
                    <li>계정자의 정보를 가지고 있는 파일로 리눅스에 로그인 할 때 사용된다.</li>
                </ul>
            </SectionBlock>

            {/* /etc/shadow */}
            <SectionBlock title="/etc/shadow">
                <ul className="section-list">
                    <li>계정자의 패스워드 정보가 암호화되어 있는 파일로 암호화 패스워드 및 계정의 유효 기간 등을 기록하고 있는 파일이다.</li>
                </ul>
            </SectionBlock>

            {/* /etc/login.defs */}
            <SectionBlock title="/etc/login.defs">
                <ul className="section-list">
                    <li>사용자 계정 설정과 관련된 기본값을 정의한 파일이다.</li>
                    <li>사용자 계정을 생성할 때 반드시 참조하는 파일이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사용자 계정 관리</h2>

            {/* usermod */}
            <SectionBlock title="usermod">
                <ul className="section-list">
                    <li>디렉터리 /home에 위치한 사용자들의 정보를 변경하는 명령어이다.</li>
                    <li>사용자의 홈 디렉터리 변경, 그룹 변경, 유효기간 등을 변경한다.</li>
                </ul>
            </SectionBlock>

            {/* userdel */}
            <SectionBlock title="userdel">
                <ul className="section-list">
                    <li>기존 계정 정보를 삭제하는 명령어이다.</li>
                    <li>사용자의 홈 디렉터리 변경, 그룹 변경, 유효기간 등을 변경한다.</li>
                    <li>옵션 없이 userdel을 사용하면 /etc/passwd, /etc/shadow, /etc/group에서 해당 계정자의 정보가 삭제된다.</li>
                </ul>
            </SectionBlock>

            {/* chage */}
            <SectionBlock title="chage">
                <ul className="section-list">
                    <li>패스워드의 만료 정보를 변경하는 리눅스 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">그룹 관리</h2>

            {/* /etc/group */}
            <SectionBlock title="/etc/group">
                <ul className="section-list">
                    <li>사용자 그룹에 대해 정의되어 있는 파일</li>
                    <li>모든 계정은 한 개 이상의 그룹에 포함되어 있다.</li>
                </ul>
            </SectionBlock>

            {/* /etc/gshadow */}
            <SectionBlock title="/etc/gshadow">
                <ul className="section-list">
                    <li>그룹의 암호를 MD5로 저장하며 그룹의 소유주, 구성원 설정이 가능하다.</li>
                </ul>
            </SectionBlock>

            {/* groupadd */}
            <SectionBlock title="groupadd">
                <ul className="section-list">
                    <li>새로운 그룹을 생성하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* groupdel */}
            <SectionBlock title="groupdel">
                <ul className="section-list">
                    <li>기존의 그룹을 삭제하는 명령어이다.</li>
                    <li>그룹 안에 소속되어 있는 계정명이 있을 경우 그룹은 삭제되지 않는다.</li>
                </ul>
            </SectionBlock>

            {/* groupmod */}
            <SectionBlock title="groupmod">
                <ul className="section-list">
                    <li>그룹의 설정을 변경하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사용자 조회 명령어</h2>

            {/* users */}
            <SectionBlock title="users">
                <ul className="section-list">
                    <li>시스템에 로그인한 사용자 정보를 출력하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* who */}
            <SectionBlock title="who">
                <ul className="section-list">
                    <li>현재 시스템에 접속해 있는 사용자들을 조회하는 명령어이다.</li>
                    <li>사용자 계정명, 터미널정보, 접속시간, 접속한 서버 정보 등을 확인할 수 있다.</li>
                    <li>관리자 root와 일반 사용자 모드 사용이 가능하다.</li>
                    <li>명령어 'who am I'또는 'whoami'는 자신의 정보를 조회할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* w */}
            <SectionBlock title="w">
                <ul className="section-list">
                    <li>현재 접속 중인 사용자들의 정보를 나타내는 명령어이다.</li>
                    <li>확인 가능한 정보는 서버의 현재 시간 정보, 서버 부팅 후 시스템 작동 시간, 서버 접속자의 총 수, 접속자별 서버 평균 부하율,
                        접속자별 서버 접속 계정명, TTY명, 로그인 시간 정보 등이다.</li>
                    <li>관리자 root와 일반 사용자 모드 사용이 가능하다.</li>
                    <li>JCPU는 w TTY필드의 장치명에서 사용되는 모든 프로세스의 CPU 사용 시간이다.</li>
                    <li>PCPU는 해당 프로세스 결과값에서 WHAT필드에 나타나는 프로세스명에서 사용하는 CPU 총시간이다.</li>
                </ul>
            </SectionBlock>

            {/* id */}
            <SectionBlock title="id">
                <ul className="section-list">
                    <li>사용자 계정의 uid, gid, group을 확인하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* groups */}
            <SectionBlock title="groups">
                <ul className="section-list">
                    <li>사용자 계정이 속한 그룹 목록을 확인하는 명령어이다.</li>
                </ul>
            </SectionBlock>
        </SectionTemplate>
    );
}