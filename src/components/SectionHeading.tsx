import { Reveal } from './Reveal';

type SectionHeadingProps = {
    index: string;
    title: string;
    lead?: string;
};

/** Section heading: a mono index marker + engraved Cinzel title + optional lead. */
export function SectionHeading({ index, title, lead }: SectionHeadingProps) {
    return (
        <Reveal>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: lead ? '1rem' : 0 }}>
                <span className="mono" style={{ color: 'var(--blood-bright)', fontSize: '0.8rem', flexShrink: 0 }}>
                    {index}
                </span>
                <h2 className="section-title" style={{ color: 'var(--bone)' }}>
                    {title}
                </h2>
            </div>
            {lead && (
                <p
                    className="pretty"
                    style={{
                        color: 'var(--ash)',
                        fontSize: 'var(--fs-lead)',
                        maxWidth: '54ch',
                        lineHeight: 1.6,
                        margin: '0 0 0 0',
                    }}
                >
                    {lead}
                </p>
            )}
        </Reveal>
    );
}
