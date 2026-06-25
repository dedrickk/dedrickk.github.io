import type { ReactNode } from 'react';
import {
    IconCloud, IconGitBranch, IconBox, IconSettings, IconChartBar, IconServer, IconNetwork, IconTools,
} from '@tabler/icons-react';
import { skills } from '../data/profile';
import { SectionHeading, Reveal, TechChip } from '../components';

const categoryIcons: Record<string, ReactNode> = {
    'Cloud Providers': <IconCloud size={20} />,
    'CI/CD & Version Control': <IconGitBranch size={20} />,
    'Containers & Orchestration': <IconBox size={20} />,
    'Infrastructure as Code': <IconSettings size={20} />,
    'Monitoring & Observability': <IconChartBar size={20} />,
    'Systems & OS': <IconServer size={20} />,
    Networking: <IconNetwork size={20} />,
    'Tools & Platforms': <IconTools size={20} />,
};

export function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionHeading
                    index="II"
                    title="Arsenal"
                    lead="The toolkit behind the work: cloud, automation, and observability, end to end."
                />

                <div className="auto-grid" style={{ marginTop: '3rem' }}>
                    {Object.entries(skills).map(([category, list], i) => (
                        <Reveal key={category} delay={Math.min(i * 0.05, 0.3)}>
                            <div className="panel" style={{ padding: '1.4rem', height: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6ch', marginBottom: '1rem' }}>
                                    <span style={{ color: 'var(--blood)', display: 'flex' }}>{categoryIcons[category]}</span>
                                    <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--bone)', margin: 0, lineHeight: 1.25 }}>{category}</h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {list.map((skill) => <TechChip key={skill} label={skill} />)}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
