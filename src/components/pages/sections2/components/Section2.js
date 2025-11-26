// Section 2. 리눅스 파일 시스템의 관리
import {SectionTemplate} from "../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../layout/sections/SectionBlock";
import "../../../styles/sections/Sections.css";

export function Section2() {
    return (
        <SectionTemplate title="리눅스 파일 시스템의 관리">

            {/* 부제목 */}
            <h2 className="section-subtitle">파일 시스템의 개요와 종류</h2>

            {/* 개요 */}
            <SectionBlock title="개요">
                <ul className="section-list">
                    <li>운영체제가 파일을 시스템의 디스크상에 구성하는 방식이다.</li>
                    <li>컴퓨터에서 파일이나 디스크상에 구성하는 방식이다.</li>
                    <li>하드디스크나 CD-ROM과 같은 물리적 저장소를 관리한다.</li>
                    <li>파일 서버상의 자료로의 접근을 제공하는 방식과 가상의 현태로서 접근 수단만이 존재하는 방식도 파일 이스템의 범위에 포함된다.</li>
                </ul>
            </SectionBlock>

            {/* 종류 */}
            <SectionBlock title="종류">
                <ul className="section-list">
                    <li>리눅스 전용 디스크 기반 시스템</li>
                </ul>

                {/* 파일 시스템 : 설명  */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">ext</span>
                        <span className="section-info-desc">리눅스 초기에 사용되던 파일 시스템이며 호환성이 없음</span>
                    </li>

                    {/* 원본 pdf에서 비워져있어서 name은 공백처리 */}
                    <li className="section-info-item">
                        <span className="section-info-name"></span>
                        <span className="section-info-desc">
                            ext2의 원형<br/>
                            2GByte의 데이터와 파일명을 255자까지 지정 가능
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ext2</span>
                        <span className="section-info-desc">
                            고용량 디스크 사용을 염두하고 셜계된 파일 시스템<br/>
                            쉽게 호환되며 업그레이드도 쉽게 설계되어 있음
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ext3</span>
                        <span className="section-info-desc">
                            리눅스의 대표적인 저널링을 지원하도록 확장된 파일 시스템<br/>
                            ACL(Access control List)를 통한 접근 제어 지원
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ext4</span>
                        <span className="section-info-desc">
                            파일에 디스크 할당 시 물리적으로 연속적인 블록을 할당<br/>
                            64비트 기억 공간 제한을 없앰<br/>
                            16TeraByte의 파일을 지원
                        </span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 저널링 파일 시스템 */}
            <SectionBlock title="저널링 파일 시스템">
                {/* 파일 시스템 : 설명  */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">JFS</span>
                        <span className="section-info-desc">
                            Journaling File System의 약자<br/>
                            IBM사의 독자적인 저널링 파일 시스템<br/>
                            GPL로 공개하여 현재 리눅스용으로 개발
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">xfs</span>
                        <span className="section-info-desc">
                            eXtended File System<br/>
                            고성능 저널링 시스템<br/>
                            64비트 주소를 지원하며 확장성이 있는 자료 구조의 알고리즘 사용<br/>
                            데이터 읽기/쓰기 트랜잭션으로 성능 저하를 최소화<br/>
                            64비트 파일 시스템으로 큰 용량의 파일도 다룰 수 있음
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ReiserFS</span>
                        <span className="section-info-desc">
                            독일의 한스 라이저가 개발한 파일 시스템<br/>
                            모든 파일 객체들을 B트리에 저장, 간결한 색인화 된 디렉터리 지원
                        </span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 네트워크 파일 시스템 */}
            <SectionBlock title="네트워크 파일 시스템">
                {/* 파일 시스템 : 설명  */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">SMB</span>
                        <span className="section-info-desc">
                            Server Message Block<br/>
                            삼바 파일 시스템을 마운트 지정<br/>
                            윈도우 계열 OS 환경에서 사용되는 파일/프린터 공유 프로토콜<br/>
                            리눅스, 유닉스 계정 OS와 윈도우 OS와의 자료 및 하드웨어 공유
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">CIFS</span>
                        <span className="section-info-desc">
                            Common Internet File System<br/>
                            SMB를 확장한 파일 시스템<br/>
                            SMB를 기초로 응용하여 라우터를 뛰어넘어 연결할 수 있는 프로토콜
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">NFS</span>
                        <span className="section-info-desc">
                            Network File System<br/>
                            썬마이크로시스템이 개발한 네트워크 공유 프로토콜<br/>
                            파일 공유 및 파일 서버로 사용됨<br/>
                            공유된 영역을 마운트할 때 지정<br/>
                            하드웨어, 운영체제 또는 네트워크 구조가 달라도 공유 가능<br/>
                            NFS서버의 특정 디렉터리를 마운트하여 사용할 수 있음
                        </span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 기타 지원 가능한 파일 시스템 */}
            <SectionBlock title="기타 지원 가능한 파일 시스템">
                {/* 파일 시스템 : 설명  */}
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">FAT</span>
                        <span className="section-info-desc">
                            Windows NT가 지원하는 파일 시스템 중 가장 간단한 시스템<br/>
                            FAT로 포맷된 디스크는 클러스터 단위로 할당<br/>
                            클러스터 크기는 볼륨 크기에 따라 결정<br/>
                            읽기 전용, 숨김, 시스템 및 보관 파일 특성만 지원<br/>
                            삼바 파일 시스템을 마운트 지정
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">VFAT</span>
                        <span className="section-info-desc">
                            Virtual FAT<br/>
                            FAT 파일 시스템이 확장된 것으로 FAT보다 제한이 적음<br/>
                            파일 이름도 최고 255자까지 만들 수 있음<br/>
                            공백이나 여러 개의 구두점도 포함
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">FAT32</span>
                        <span className="section-info-desc">
                            SMB를 확장한 파일 시스템<br/>
                            32GB보다 큰 파티션을 만들 수 없고 파티션에 4GB를 초과하는 파일을 저장할 수 없음
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">NTFS</span>
                        <span className="section-info-desc">
                            윈도우에서 사용하는 파일 시스템<br/>
                            안정성이 뛰어나고 대용량 파일도 저장<br/>
                            파일 크기 및 볼륨은 이론상으로 최대 16EB이나 실질적으로는 2TB로 한계가 있음
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">ISO 9660</span>
                        <span className="section-info-desc">
                            CD-ROM의 표준 파일 시스템<br/>
                            1988년애 재정된 표준
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">UDF</span>
                        <span className="section-info-desc">
                            Universal Disk Format의 약자로 최신 파일 시스템 형식<br/>
                            광학 매체용 파일 시스템 표준<br/>
                            ISO 9660파일 시스템을 대체하기 위한 것으로 대부분 DVD에서 사용
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">HPFS</span>
                        <span className="section-info-desc">OS/2의 운영체제를 위해 만들어진 파일 시스템</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">관련 명령어</h2>

            {/* mount와 unmount */}
            <SectionBlock title="mount와 unmount">
                <ul className="section-list">
                    <li>마운트는 특정 디바이스를 특정 디렉터리처럼 사용하기 위해 장치와 디렉터리를 연결한다.</li>
                    <li>리눅스는 PnP기능을 지원하지만 지원하는 하드웨어가 많지 않으므로 시스템 부팅후에 수동으로 마운트해서 사용을 하고 사용이 끝난 후에는
                        언마운트를 시킨다.</li>
                    <li>파일 /etc/mtab은 현재 마운트된 블록 시스템 정보를 표시한다.</li>
                </ul>
            </SectionBlock>

            {/* eject */}
            <SectionBlock title="eject">
                <ul className="section-list">
                    <li>이동식 보조기억장치등과 같은 미디어를 해제하고 장치를 제거하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* fdisk */}
            <SectionBlock title="fdisk">
                <ul className="section-list">
                    <li>새로운 파티션의 생성, 기존 파티션 삭제, 파티션의 타입 결정 등의 작업을 수행할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* mkfs */}
            <SectionBlock title="mkfs">
                <ul className="section-list">
                    <li>리눅스 파일 시스템을 생성한다.</li>
                    <li>fdisk로 하드디스크를 파티션을 나눈 후 해당 파티션에 맞는 파일 시스템을 생성한다.</li>
                </ul>
            </SectionBlock>

            {/* mke2fs */}
            <SectionBlock title="mke2fs">
                <ul className="section-list">
                    <li>ext2, ext3, ext4 타입의 리눅스 파일 시스템을 생성하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* fsck */}
            <SectionBlock title="fsck">
                <ul className="section-list">
                    <li>파일 시스템의 무결성을 점검하고 대화식으로 복구하는 명령어이다.</li>
                    <li>디렉터리 /lost+found는 fsck에서 사용하는 디렉터리이다.</li>
                </ul>
            </SectionBlock>

            {/* e2fsck */}
            <SectionBlock title="e2fsck">
                <ul className="section-list">
                    <li>ext2, ext3, ext4 타입의 리눅스 파일 시스템을 복구하는 명령어이다.</li>
                </ul>
            </SectionBlock>

            {/* du */}
            <SectionBlock title="du">
                <ul className="section-list">
                    <li>Disk Usage의 약자로 디렉터리별로 디스크 사용량을 확인할 수 있다.</li>
                </ul>
            </SectionBlock>

            {/* df */}
            <SectionBlock title="df">
                <ul className="section-list">
                    <li>시스템에 마운트된 하드디스크의 남은 용량을 확인할 때 사용하는 명령어이다.</li>
                    <li>기본적으로 1024Byte 블록 단위로 출력한다.</li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}
