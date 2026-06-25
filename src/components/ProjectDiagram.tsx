/**
 * Custom architecture diagrams: hero imagery for the featured case studies.
 * Inline SVG inheriting the B&W + blood tokens via CSS variables; scales crisply.
 */

type DiagramProps = { kind: 'aform' | 'procal' };

const FONT = 'Hanken Grotesk, sans-serif';
const MONO = 'JetBrains Mono, monospace';

function Node({
    x, y, w, h = 56, title, sub, accent = false,
}: { x: number; y: number; w: number; h?: number; title: string; sub?: string; accent?: boolean }) {
    return (
        <g>
            <rect x={x} y={y} width={w} height={h} rx={2} fill="var(--ink-0)" stroke={accent ? 'var(--blood)' : 'var(--line-2)'} strokeWidth={accent ? 1.5 : 1} />
            <text x={x + 13} y={sub ? y + h / 2 - 2 : y + h / 2 + 5} fill="var(--bone)" fontFamily={FONT} fontSize={14} fontWeight={700}>{title}</text>
            {sub && <text x={x + 13} y={y + h / 2 + 15} fill="var(--ash-dim)" fontFamily={MONO} fontSize={10.5}>{sub}</text>}
        </g>
    );
}

function Lane({ x, y, label }: { x: number; y: number; label: string }) {
    return <text x={x} y={y} fill="var(--blood-bright)" fontFamily={MONO} fontSize={10.5} letterSpacing={2}>{label}</text>;
}

function Lbl({ x, y, t, anchor = 'start' }: { x: number; y: number; t: string; anchor?: 'start' | 'middle' | 'end' }) {
    return <text x={x} y={y} fill="var(--ash-dim)" fontFamily={MONO} fontSize={10} textAnchor={anchor}>{t}</text>;
}

const Arrow = ({ marker = 'arrow', dashed = false, ...p }: any) => (
    <line {...p} stroke={dashed ? 'var(--blood-bright)' : 'var(--blood)'} strokeWidth={1.5} strokeDasharray={dashed ? '4 3' : undefined} markerEnd={`url(#${marker})`} />
);

function Defs() {
    return (
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--blood)" />
            </marker>
            <marker id="arrowb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--blood-bright)" />
            </marker>
        </defs>
    );
}

function AformDiagram() {
    return (
        <svg viewBox="0 0 880 512" width="100%" role="img" aria-label="aform delivery, observability and AI-enriched alerting architecture" style={{ display: 'block' }}>
            <Defs />

            {/* DELIVERY */}
            <Lane x={20} y={24} label="DELIVERY" />
            <Node x={20} y={36} w={92} h={48} title="git push" sub="main / PR" />
            <Node x={140} y={36} w={158} h={48} title="CI Pipeline" sub="lint · test · scan" accent />
            <Node x={334} y={36} w={126} h={48} title="Artifact" sub="S3 · per-SHA" />
            <Node x={496} y={36} w={190} h={48} title="Promote" sub="dev → staging → prod" />
            <Arrow x1={112} y1={60} x2={138} y2={60} />
            <Arrow x1={298} y1={60} x2={332} y2={60} />
            <Arrow x1={460} y1={60} x2={494} y2={60} />
            <Arrow x1={219} y1={84} x2={219} y2={108} dashed marker="arrowb" />
            <Node x={140} y={110} w={210} h={36} title="Cerebras AI" sub="test-gap → fix PR" />

            <line x1={20} y1={170} x2={860} y2={170} stroke="var(--line)" strokeDasharray="2 4" />

            {/* OBSERVABILITY */}
            <Lane x={20} y={196} label="OBSERVABILITY" />
            <Node x={20} y={208} w={210} title="App + slog" sub="OTel trace_id · /metrics" accent />
            <Node x={266} y={208} w={140} title="Grafana Alloy" sub="agent" />
            <Node x={442} y={208} w={220} title="Grafana Cloud" sub="Mimir · Loki · Tempo" />
            <Arrow x1={230} y1={236} x2={264} y2={236} />
            <Arrow x1={406} y1={236} x2={440} y2={236} />

            {/* ALERTING */}
            <Lane x={442} y={300} label="ALERTING" />
            <Arrow x1={520} y1={264} x2={520} y2={324} />
            <Lbl x={528} y={296} t="alert fires · 4 rules" />
            <Node x={442} y={326} w={180} title="Discord Relay" sub="Python webhook" accent />
            <Node x={690} y={326} w={150} title="Discord" sub="primary embed" />
            <Arrow x1={622} y1={354} x2={688} y2={354} />
            <Node x={442} y={420} w={230} title="AWS Bedrock" sub="Claude Haiku · hypothesis" />
            <Arrow x1={532} y1={382} x2={532} y2={418} dashed marker="arrowb" />
            <Lbl x={540} y={406} t="reads Loki + Mimir" />
            <Arrow x1={672} y1={440} x2={748} y2={384} dashed marker="arrowb" />
            <Lbl x={690} y={470} t="AI follow-up" />

            {/* MCP */}
            <Node x={20} y={326} w={200} h={70} title="aform-ops MCP" sub="11 tools · SSH tunnel" />
            <Arrow x1={222} y1={350} x2={440} y2={250} dashed marker="arrowb" />
            <Lbl x={250} y={300} t="queries" />
        </svg>
    );
}

function ProcalDiagram() {
    return (
        <svg viewBox="0 0 880 430" width="100%" role="img" aria-label="procal-infra AWS VPC topology, CI/CD and event tier" style={{ display: 'block' }}>
            <Defs />

            {/* CI in */}
            <Node x={12} y={150} w={150} title="CI Pipeline" sub="OIDC assume-role" accent />
            <Arrow x1={162} y1={178} x2={214} y2={178} />
            <Lbl x={188} y={170} t="no keys" anchor="middle" />

            {/* VPC */}
            <rect x={216} y={36} width={648} height={300} rx={3} fill="none" stroke="var(--blood)" strokeOpacity={0.5} strokeDasharray="6 4" />
            <text x={232} y={58} fill="var(--blood-bright)" fontFamily={MONO} fontSize={11.5} letterSpacing={1}>AWS VPC · self-owned</text>

            <Node x={340} y={74} w={170} title="ALB" sub="public + internal" />

            {/* staging */}
            <rect x={234} y={136} width={262} height={120} rx={2} fill="none" stroke="var(--line-2)" />
            <text x={248} y={156} fill="var(--ash)" fontFamily={MONO} fontSize={10.5}>staging · VPN-only</text>
            <Node x={250} y={166} w={230} h={34} title="EC2 · single-AZ" />
            <rect x={250} y={208} width={230} height={36} rx={2} fill="var(--ink-0)" stroke="var(--line-2)" />
            <text x={264} y={231} fill="var(--bone)" fontFamily={FONT} fontSize={13} fontWeight={700}>RDS · Single-AZ</text>

            {/* prod */}
            <rect x={520} y={136} width={326} height={120} rx={2} fill="none" stroke="var(--blood)" strokeOpacity={0.55} />
            <text x={534} y={156} fill="var(--bone)" fontFamily={MONO} fontSize={10.5}>prod · multi-AZ</text>
            <Node x={536} y={166} w={294} h={34} title="ASG ×3 (maps · dora)" accent />
            <rect x={536} y={208} width={294} height={36} rx={2} fill="var(--ink-0)" stroke="var(--blood)" strokeOpacity={0.55} />
            <text x={550} y={231} fill="var(--bone)" fontFamily={FONT} fontSize={13} fontWeight={700}>RDS · Multi-AZ · deletion-protected</text>

            <Arrow x1={400} y1={114} x2={365} y2={164} />
            <Arrow x1={450} y1={114} x2={670} y2={164} />

            {/* events tier */}
            <Node x={234} y={272} w={150} h={44} title="SNS" sub="domain events" />
            <Node x={406} y={272} w={150} h={44} title="SQS + DLQ" sub="" />
            <Node x={578} y={272} w={170} h={44} title="Lambda · boots" sub="Go · async email" />
            <Arrow x1={384} y1={294} x2={404} y2={294} />
            <Arrow x1={556} y1={294} x2={576} y2={294} />

            <text x={216} y={372} fill="var(--ash-dim)" fontFamily={MONO} fontSize={11}>terraform test · tflint · Trivy · Infracost gate · IAM permissions-boundary</text>
        </svg>
    );
}

export function ProjectDiagram({ kind }: DiagramProps) {
    return (
        <div className="panel crosshatch" style={{ padding: 'clamp(1rem, 3vw, 1.75rem)' }}>
            {kind === 'aform' ? <AformDiagram /> : <ProcalDiagram />}
        </div>
    );
}
