export function SectionBlock({title, children}) {
    return (
        <div className="section-block">
            <h3 className="section-subheading">{title}</h3>
            {children}
        </div>
    );
}
