export const aiCapabilities = [
  "data-profiling",
  "schema-analysis",
  "data-mapping",
  "migration",
  "data-quality",
  "validation",
  "sql",
  "documentation",
  "reporting",
] as const;

export type AiCapability = (typeof aiCapabilities)[number];

export interface AiRequest {
  capability: AiCapability;
  input: string;
}

export interface AiResponse {
  capability: AiCapability;
  output: string;
  provider: string;
}

export interface AiProvider {
  readonly name: string;
  complete(request: AiRequest): Promise<AiResponse>;
}

export class UnconfiguredAiProvider implements AiProvider {
  readonly name = "unconfigured";

  async complete(_request: AiRequest): Promise<AiResponse> {
    throw new Error("An AI provider is not configured.");
  }
}
