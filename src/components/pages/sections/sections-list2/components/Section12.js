// Section 12. 리눅스 주변 장치 활용
import {SectionTemplate} from "../../../../layout/sections/SectionTemplate";
import {SectionBlock} from "../../../../layout/sections/SectionBlock";
import "../../../../../assets/css/sections/Sections.css";

export function Section12() {
    return (
        <SectionTemplate title="리눅스 주변 장치 활용">

            {/* 부제목 */}
            <h2 className="section-subtitle">프린터 설치 및 설정</h2>

            {/* BSD 계열 프린터 명령어들 */}
            <SectionBlock title="BSD 계열 프린터 명령어들">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">lpr</span>
                        <span className="section-info-desc">프린터 작업 요청을 한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">lpq</span>
                        <span className="section-info-desc">프린터 큐에 있는 작업 목록을 출력한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">lprm</span>
                        <span className="section-info-desc">
                            프린터 큐에 대기 중인 작업을 삭제한다.<br/>
                            취소할 프린트 작업 번호를 입력한다.
                        </span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">lpc</span>
                        <span className="section-info-desc">라인 프린터 컨트롤 프로그램이다.</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* System V 계열 프린터 명령어들 */}
            <SectionBlock title="System V 계열 프린터 명령어들">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">lp</span>
                        <span className="section-info-desc">프린터 작업 요청(명령어 lpr과 유사한 기능)을 한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">lpstat</span>
                        <span className="section-info-desc">프린터 큐의 상태를 확인한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">cancel</span>
                        <span className="section-info-desc">
                            프린트 작업을 취소한다.<br/>
                            취소할 요청 ID를 lpstat로 확인 후 삭제한다.
                        </span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">사운드 카드 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">alsactl</span>
                        <span className="section-info-desc">ALSA 사운드 카드를 제어한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">alsamixer</span>
                        <span className="section-info-desc">커서 라이브러리 기반의 오디오 프로그램이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">cdparanoia</span>
                        <span className="section-info-desc">오디오 CD로부터 음악 파일을 추출 시 사용한다.</span>
                    </li>
                </ul>
            </SectionBlock>

            {/* 부제목 */}
            <h2 className="section-subtitle">스캐너 관련 명령어</h2>

            {/* 내용 */}
            <SectionBlock title="내용">
                <ul className="section-info-list">
                    <li className="section-info-item">
                        <span className="section-info-name">sane-find-scanner</span>
                        <span className="section-info-desc">스캐너와 USB 스캐너 관련 장치 파일을 찾아주는 명령어이다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">scanimage</span>
                        <span className="section-info-desc">이미지를 스캔한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">scanadf</span>
                        <span className="section-info-desc">자동 문서 공급 장치가 장착된 스캐너에서 여러 개의 사진을 스캔한다.</span>
                    </li>

                    <li className="section-info-item">
                        <span className="section-info-name">xcam</span>
                        <span className="section-info-desc">GUI 기반으로 평판 스캐너나 카메라로부터 이미지 스캔한다.</span>
                    </li>
                </ul>
            </SectionBlock>

        </SectionTemplate>
    );
}