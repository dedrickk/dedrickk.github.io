import {
    siGooglecloud, siDigitalocean, siJenkins, siGit, siGithubactions, siDocker, siPodman,
    siTerraform, siAnsible, siGrafana, siPrometheus, siElasticstack, siLinux, siRedhat,
    siUbuntu, siApple, siCisco, siMikrotik, siOpenvpn, siTailscale, siPihole, siProxmox,
    siGo, siOpentelemetry, siBitbucket, siPostgresql, siRabbitmq, siNginx, siKotlin,
    siAndroid, siFirebase, siTraefikproxy, siTrivy, siKubernetes,
} from 'simple-icons';

type SI = { path: string; title: string };

// label → simple-icons icon. Loki/Tempo borrow Grafana; systemd/tflint/registry use close proxies.
// Anything absent (AWS, Azure, Zabbix, abstract AWS resources) falls back to a plain text chip.
const MAP: Record<string, SI> = {
    'Google Cloud': siGooglecloud,
    'Digital Ocean': siDigitalocean,
    Jenkins: siJenkins,
    Git: siGit,
    'GitHub Actions': siGithubactions,
    Docker: siDocker,
    'Docker Compose': siDocker,
    Podman: siPodman,
    Terraform: siTerraform,
    Ansible: siAnsible,
    Grafana: siGrafana,
    Prometheus: siPrometheus,
    Loki: siGrafana,
    Tempo: siGrafana,
    'Grafana Cloud': siGrafana,
    'Elastic (ELK)': siElasticstack,
    'Elastic Stack (ELK)': siElasticstack,
    Linux: siLinux,
    'Red Hat (RHEL)': siRedhat,
    Ubuntu: siUbuntu,
    macOS: siApple,
    'Cisco (CCNA)': siCisco,
    'MikroTik (MTCNA)': siMikrotik,
    OpenVPN: siOpenvpn,
    Tailscale: siTailscale,
    'Pi-hole': siPihole,
    Proxmox: siProxmox,
    Go: siGo,
    OpenTelemetry: siOpentelemetry,
    Bitbucket: siBitbucket,
    'Bitbucket Pipelines': siBitbucket,
    PostgreSQL: siPostgresql,
    RabbitMQ: siRabbitmq,
    systemd: siLinux,
    Nginx: siNginx,
    Kotlin: siKotlin,
    Android: siAndroid,
    Firebase: siFirebase,
    Traefik: siTraefikproxy,
    Trivy: siTrivy,
    tflint: siTerraform,
    'Container Registry': siDocker,
    Kubernetes: siKubernetes,
};

export function TechIcon({ label, size = 14 }: { label: string; size?: number }) {
    const icon = MAP[label];
    if (!icon) return null;
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="currentColor"
            aria-hidden
            style={{ flexShrink: 0, display: 'block' }}
        >
            <path d={icon.path} />
        </svg>
    );
}

export function TechChip({ label }: { label: string }) {
    return (
        <span className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45ch' }}>
            <TechIcon label={label} />
            {label}
        </span>
    );
}
