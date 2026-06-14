import type { Phase } from './phase';

// The Reference Architecture diagram, in two layers.
//
//   Domain layer  — the solutions you implement (HR, Sales, SRE, FinOps...), each tagged with its
//                   orchestration pattern.
//   Software layer — one card per Field Guide domain (12), each with an open-source default (★) and
//                    proven alternatives. Every pick is open-source / self-hostable.
//
// This is the single source of truth for the page; edit here, not in the template.

export interface SoftwareDomain {
  num: string;        // zero-padded order, e.g. "01"
  name: string;
  phase: Phase;
  slug: string;       // links to /guide/<slug>/
  default: string;    // the ★ pick
  alts: string[];
}

export interface DomainSolution {
  name: string;
  tag: string;        // orchestration pattern
}

export const softwareLayer: SoftwareDomain[] = [
  { num: '01', name: 'Scope & Simplicity', phase: 'build', slug: 'scope-and-simplicity', default: 'LangGraph', alts: ['Pydantic AI', 'CrewAI', 'Mastra', 'Atomic Agents'] },
  { num: '02', name: 'Model Selection', phase: 'build', slug: 'model-selection', default: 'LiteLLM', alts: ['vLLM', 'Ollama', 'RouteLLM', 'Envoy AI Gateway'] },
  { num: '03', name: 'Durable Execution', phase: 'build', slug: 'durable-execution', default: 'Temporal', alts: ['Restate', 'DBOS', 'Hatchet', 'Inngest'] },
  { num: '04', name: 'Memory & Context', phase: 'build', slug: 'memory-and-context', default: 'Mem0', alts: ['Zep', 'Letta', 'Qdrant', 'pgvector'] },
  { num: '05', name: 'Architecture & Orchestration', phase: 'build', slug: 'architecture-and-orchestration', default: 'AutoGen', alts: ['CrewAI', 'Google ADK', 'kagent', 'Dapr Agents'] },
  { num: '06', name: 'Reliability', phase: 'operate', slug: 'reliability', default: 'NATS', alts: ['Ray', 'Temporal', 'RabbitMQ', 'Kubernetes'] },
  { num: '07', name: 'Autonomy, Cost & Control', phase: 'operate', slug: 'autonomy-and-cost', default: 'OpenCost', alts: ['LiteLLM Budgets', 'Tokencost', 'Kong', 'OPA'] },
  { num: '08', name: 'Security', phase: 'operate', slug: 'security', default: 'OPA', alts: ['NeMo Guardrails', 'Llama Guard', 'gVisor', 'Presidio'] },
  { num: '09', name: 'Access & Identity', phase: 'operate', slug: 'access-and-identity', default: 'Keycloak', alts: ['SPIFFE/SPIRE', 'Ory', 'OpenFGA', 'Cerbos'] },
  { num: '10', name: 'Observability', phase: 'operate', slug: 'observability', default: 'OpenTelemetry', alts: ['Langfuse', 'Phoenix', 'Jaeger', 'Grafana'] },
  { num: '11', name: 'Evaluation', phase: 'engineer', slug: 'evaluation', default: 'Promptfoo', alts: ['DeepEval', 'Ragas', 'Inspect', 'Giskard'] },
  { num: '12', name: 'Harness Engineering', phase: 'engineer', slug: 'harness-engineering', default: 'OpenHands', alts: ['Aider', 'SWE-agent', 'GitHub Actions'] },
];

export const domainLayer: DomainSolution[] = [
  { name: 'Customer Support', tag: 'HIERARCHICAL' },
  { name: 'IT Service Desk', tag: 'HIERARCHICAL' },
  { name: 'Sales & RevOps', tag: 'HIERARCHICAL' },
  { name: 'Marketing & Content', tag: 'SEQUENTIAL' },
  { name: 'HR & People Ops', tag: 'SEQUENTIAL' },
  { name: 'Finance & Accounting', tag: 'GATED' },
  { name: 'Procurement', tag: 'GATED' },
  { name: 'Legal & Compliance', tag: 'GATED' },
  { name: 'Supply Chain & Logistics', tag: 'HIERARCHICAL' },
  { name: 'Data & Analytics', tag: 'SINGLE-AGENT' },
  { name: 'Knowledge Management', tag: 'SINGLE-AGENT' },
  { name: 'Product Engineering', tag: 'EVALUATOR' },
  { name: 'SRE & Ops', tag: 'DURABLE' },
  { name: 'Security Operations', tag: 'GUARDIAN' },
  { name: 'AI FinOps', tag: 'MONITOR' },
];
