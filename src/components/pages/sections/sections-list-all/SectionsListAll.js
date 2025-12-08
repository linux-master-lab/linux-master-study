import SectionsList1 from '../sections-list1/SectionsList1'
import SectionsList2 from '../sections-list2/SectionsList2';
import SectionsList3 from '../sections-list3/SectionsList3';

// 리눅스 세션 모음
export default function SectionsListAll() {
    return (
        <div>
            <SectionsList1 />
            <SectionsList2 />  
            <SectionsList3 />
        </div>
    );
}