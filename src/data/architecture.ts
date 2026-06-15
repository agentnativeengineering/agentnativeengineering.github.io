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
}

export const softwareLayer: SoftwareDomain[] = [
  { num: '01', name: 'Scope & Simplicity', phase: 'build', slug: 'scope-and-simplicity', default: 'LangGraph', alts: ['Pydantic AI', 'CrewAI', 'Google ADK', 'Mastra'] },
  { num: '02', name: 'Model Selection', phase: 'build', slug: 'model-selection', default: 'LiteLLM', alts: ['vLLM', 'Envoy AI Gateway', 'Ollama', 'SGLang'] },
  { num: '03', name: 'Durable Execution', phase: 'build', slug: 'durable-execution', default: 'Temporal', alts: ['Restate', 'DBOS', 'Hatchet', 'Cadence'] },
  { num: '04', name: 'Memory & Context', phase: 'build', slug: 'memory-and-context', default: 'Mem0', alts: ['Graphiti', 'Letta', 'Qdrant', 'pgvector'] },
  { num: '05', name: 'Architecture & Orchestration', phase: 'build', slug: 'architecture-and-orchestration', default: 'Dapr Agents', alts: ['MCP', 'A2A', 'kagent', 'LangGraph'] },
  { num: '06', name: 'Reliability', phase: 'operate', slug: 'reliability', default: 'Temporal', alts: ['NATS', 'Restate', 'Kubernetes', 'DBOS'] },
  { num: '07', name: 'Autonomy, Cost & Control', phase: 'operate', slug: 'autonomy-and-cost', default: 'LiteLLM Budgets', alts: ['Envoy AI Gateway', 'OpenCost', 'Tokencost', 'Kong'] },
  { num: '08', name: 'Security', phase: 'operate', slug: 'security', default: 'LlamaFirewall', alts: ['OPA', 'NeMo Guardrails', 'gVisor', 'Presidio'] },
  { num: '09', name: 'Access & Identity', phase: 'operate', slug: 'access-and-identity', default: 'Keycloak', alts: ['SPIFFE/SPIRE', 'OPA', 'agentgateway', 'OpenFGA'] },
  { num: '10', name: 'Observability', phase: 'operate', slug: 'observability', default: 'OpenTelemetry', alts: ['Langfuse', 'SigNoz', 'ClickHouse', 'Jaeger'] },
  { num: '11', name: 'Evaluation', phase: 'engineer', slug: 'evaluation', default: 'DeepEval', alts: ['Promptfoo', 'Ragas', 'Inspect', 'Giskard'] },
  { num: '12', name: 'Harness Engineering', phase: 'engineer', slug: 'harness-engineering', default: 'OpenHands', alts: ['Goose', 'Aider', 'SWE-agent'] },
];

export const domainLayer: DomainSolution[] = [
  { name: 'Customer Support' },
  { name: 'IT Service Desk' },
  { name: 'Sales & RevOps' },
  { name: 'Marketing & Content' },
  { name: 'HR & People Ops' },
  { name: 'Finance & Accounting' },
  { name: 'Procurement' },
  { name: 'Legal & Compliance' },
  { name: 'Supply Chain & Logistics' },
  { name: 'Data & Analytics' },
  { name: 'Knowledge Management' },
  { name: 'Product Engineering' },
  { name: 'SRE & Ops' },
  { name: 'Security Operations' },
  { name: 'AI FinOps' },
];
