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
  { num: '10', name: 'Observability', phase: 'operate', slug: 'observability', default: 'OpenTelemetry', alts: ['Langfuse', 'Phoenix', 'SigNoz', 'ClickHouse', 'Jaeger'] },
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

// Project link for each tool chip — its homepage or GitHub. Every URL verified to resolve.
export const toolUrl: Record<string, string> = {
  'LangGraph': 'https://github.com/langchain-ai/langgraph',
  'Pydantic AI': 'https://ai.pydantic.dev',
  'CrewAI': 'https://github.com/crewAIInc/crewAI',
  'Google ADK': 'https://github.com/google/adk-python',
  'Mastra': 'https://github.com/mastra-ai/mastra',
  'LiteLLM': 'https://github.com/BerriAI/litellm',
  'LiteLLM Budgets': 'https://docs.litellm.ai/docs/proxy/users',
  'vLLM': 'https://github.com/vllm-project/vllm',
  'Envoy AI Gateway': 'https://aigateway.envoyproxy.io',
  'Ollama': 'https://github.com/ollama/ollama',
  'SGLang': 'https://github.com/sgl-project/sglang',
  'Temporal': 'https://github.com/temporalio/temporal',
  'Restate': 'https://github.com/restatedev/restate',
  'DBOS': 'https://github.com/dbos-inc/dbos-transact-py',
  'Hatchet': 'https://github.com/hatchet-dev/hatchet',
  'Cadence': 'https://github.com/cadence-workflow/cadence',
  'Mem0': 'https://github.com/mem0ai/mem0',
  'Graphiti': 'https://github.com/getzep/graphiti',
  'Letta': 'https://github.com/letta-ai/letta',
  'Qdrant': 'https://github.com/qdrant/qdrant',
  'pgvector': 'https://github.com/pgvector/pgvector',
  'Dapr Agents': 'https://github.com/dapr/dapr-agents',
  'MCP': 'https://modelcontextprotocol.io',
  'A2A': 'https://a2a-protocol.org',
  'kagent': 'https://kagent.dev',
  'NATS': 'https://github.com/nats-io/nats-server',
  'Kubernetes': 'https://kubernetes.io',
  'OpenCost': 'https://github.com/opencost/opencost',
  'Tokencost': 'https://github.com/AgentOps-AI/tokencost',
  'Kong': 'https://github.com/Kong/kong',
  'LlamaFirewall': 'https://github.com/meta-llama/PurpleLlama',
  'OPA': 'https://github.com/open-policy-agent/opa',
  'NeMo Guardrails': 'https://github.com/NVIDIA/NeMo-Guardrails',
  'gVisor': 'https://github.com/google/gvisor',
  'Presidio': 'https://github.com/microsoft/presidio',
  'Keycloak': 'https://github.com/keycloak/keycloak',
  'SPIFFE/SPIRE': 'https://github.com/spiffe/spire',
  'agentgateway': 'https://github.com/agentgateway/agentgateway',
  'OpenFGA': 'https://github.com/openfga/openfga',
  'OpenTelemetry': 'https://opentelemetry.io',
  'Langfuse': 'https://github.com/langfuse/langfuse',
  'Phoenix': 'https://github.com/Arize-ai/phoenix',
  'SigNoz': 'https://github.com/SigNoz/signoz',
  'ClickHouse': 'https://github.com/ClickHouse/ClickHouse',
  'Jaeger': 'https://github.com/jaegertracing/jaeger',
  'DeepEval': 'https://github.com/confident-ai/deepeval',
  'Promptfoo': 'https://github.com/promptfoo/promptfoo',
  'Ragas': 'https://github.com/explodinggradients/ragas',
  'Inspect': 'https://inspect.aisi.org.uk',
  'Giskard': 'https://github.com/Giskard-AI/giskard',
  'OpenHands': 'https://github.com/All-Hands-AI/OpenHands',
  'Goose': 'https://github.com/block/goose',
  'Aider': 'https://github.com/Aider-AI/aider',
  'SWE-agent': 'https://github.com/SWE-agent/SWE-agent',
};
