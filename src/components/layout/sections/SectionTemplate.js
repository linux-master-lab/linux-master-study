import {useState, useRef, useEffect} from "react";

export function SectionTemplate({title, children}) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    // 부드러운 아코디언 높이 자동 조절
    useEffect(() => {
        if (open) {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
        } else {
            contentRef.current.style.maxHeight = "0px";
        }
    }, [open]);

    return (
        <section className="section">

            {/* 제목 + 화살표 */}
            <div className="section-title-wrap" onClick={() => setOpen(!open)}>
                <h1 className="section-title">{title}</h1>
                <span className="toggle-arrow">{
                        open
                            ? "▼"
                            : "▶"
                    }</span>
            </div>

            {/* divider */}
            {open && <div className="section-divider"></div>}

            {/* 콘텐츠 */}
            <div
                ref={contentRef}
                className={`section-content ${open
                    ? "open"
                    : ""}`}>
                {children}
            </div>

        </section>
    );
}
