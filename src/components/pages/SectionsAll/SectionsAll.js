import SectionList1 from '../sections1/SectionList1';
import SectionList2 from '../sections2/SectionList2';
import SectionList3 from '../sections3/SectionList3';

// 리눅스 세션 모음
export default function SectionAll() {
    return (
        <div>
            <SectionList1 />
            <SectionList2 />  
            <SectionList3 />
        </div>
    );
}