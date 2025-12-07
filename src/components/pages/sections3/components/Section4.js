// Section 4. 리눅스 인터넷 서비스의 종류
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section4() {
    return (
        <SectionTemplate title="리눅스 인터넷 서비스의 종류">

            {/* 부제목 */}
            <h2 className="section-subtitle">WWW 서비스</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>프로토콜 HTTP를 기반으로 한 멀티미디어와 하이퍼텍스트를 통합한 정보 검색 시스템이다.</li>
                    <li>다양한 그래픽 유저 인터페이스를 사용하는 것이 가능하다.</li>
                    <li>WWW 서비스는 분산 클라이언트-서버 모델을 기반으로 한다.</li>
                    <li>표준 웹 프로토콜(HTTP, XML, SOAP, WSDL, UDDI)을 기본으로 하여 서로 다른 개발 환경과 운영체제에서도 상호 통신이 가능하다</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">메일 서비스</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>전자 메일 시스템은 컴퓨터 사용자끼리 편지를 주고받는 서비스이며 MTA, MUA, MDA로 구성된다.</li>
                    <li>메일 클라이언트에서 송신은 SMTP, 수신은 POP3 또는 IMAP4를 이용한다.</li>
                    <li>메일을 보내거나 메일 서버간의 메시지 교환은 SMTP프로토콜을 사용하고, 메일 서버에 도착한 메일을 사용자 컴퓨터에서 확인할 때에는
                        POP3과 IMAP를 사용한다.</li>
                    <li>MIME(Multipurpose Internet Mail Extensionn)은 멀티미디어 전자우편을 위한 표준으로, 멀티미디어 데이터를
                        ASCII 형식으로 변환할 필요 없이 인터넷 전자 우편으로 송신하기 위한 SMTP의 확장 규격이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">FTP 서비스</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>FTP(File Transafer Protocol) TCP/IP에 의해 제공되는 호스트 간의 파일 복사를 위한 프로토콜이다.</li>
                    <li>FTP의 통신 모드는 패시브 모드와 액티브 모드로 구분한다.</li>
                    <li>FTP는 20번(일반 데이터 전송용)과 21번(제어 데이터 전송용) 포트 번호를 사용한다.</li>
                    <li>FTP는 사용자계정을 가진 사용자들의 접속과 익명의 로그인을 허용하고 있다.</li>
                    <li>익명은 공개 소프트웨어를 제공하는 FTP서버에 접속할 때 입력할 수 있는 계정이다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">DNS(Domain Name System) 서비스</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>호스트 이름을 기반으로 IP주소를 변환하거나 IP주소를 기반으로 호스트 이름을 변환시켜 주는 프로토콜이다.</li>
                    <li>DNS에서는 도메인명을 분산된 트리 형태의 계층적 구조로 관리한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">Telnet과 SSH 서비스</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>네트워크상에 있는 다른 컴퓨터에 로그인하거나 원격 시스템에서 명령 실행, 파일 복사 등을 제공하는 서비스이다.</li>
                    <li>Telnet과 ssh는 사용자가 서버에 접속하여 서버 관리, 파일 편집 등을 Text모드 환경에서 시스템 명령을 실행하고 결과를 화면을
                        통해 볼 수 있다.</li>
                    <li>Telnet은 서버와 주고받는 정보를 Byte 스트림 형식으로 전송하고, ssh는 DES, RSA 등의 암호화기법을 사용해서 전송한다.
                        따라서 Telnet보다 ssh가 안전한 데이터 전송을 보장한다.</li>
                    <li>ssh는 암호화뿐만 아니라 압축 기술도 제공한다. 암호화를 통해서 늘어난 데이터의 크기를 압축하여 사용자와 서버가 송수신하는 것을
                        가능하게 한다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">NFS(Network File System)</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>네트워크 기반에 다른 시스템과 파일 시스템을 공유하기 위한 클라이언트/서버 프로그램이다.</li>
                    <li>1984년 썬 마이크로시스템즈 사에서 개발하였다.</li>
                    <li>원격지에 있는 리눅스 서버의 특정 디렉터리를 로컬 시스템의 하위 디렉터리처럼 사용할 수 있다.</li>
                    <li>다른 컴퓨터의 파일 시스템을 마운트하고 공유하여 자신의 디렉터리인 것처럼 사용할 수 있게 해준다.</li>
                    <li>NFS는 portmap이 먼저 수행되어 있어야만 NFS 서비스가 실행된다. portmap은 NIS, NFS 등 RPC(Remote
                        Procedure Call) 연결에 관여하는 데몬이다.</li>
                    <li>NFS 서비스는 nfsd, rpc.mounted, rpc, statd, rpc.rockd, rpc.rquotad 데몬들이 구동된다.</li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">RPC(Remote Procedure Call)</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-list">
                    <li>동적으로 서비스와 포트를 연결할 때 사용하는 방법이다.</li>
                    <li>기본적으로 포트와 서비스가 정적으로 구성될때는 /etc/services 파일을 참조하지만 동적으로 포트를 할당받아 사용할 때는 RPC 인
                        rpcbind를 사용한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}