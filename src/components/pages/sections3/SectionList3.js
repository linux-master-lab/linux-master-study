import { SectionHeader } from "./components/SectionHeader";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";
import { Section6 } from "./components/Section6";
import { Section7 } from "./components/Section7";

// 리눅스 세션 모음
export default function SectionList3() {
  return (
    <div className="sections-wrapper">
      <SectionHeader />
      <Section1 />
      <Section2 />  
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}
