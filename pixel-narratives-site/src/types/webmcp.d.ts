/** Chrome early-preview WebMCP types (W3C Web Machine Learning CG). */

interface WebMcpToolInputSchema {
  type?: string;
  properties?: Record<string, unknown>;
  required?: string[];
}

interface WebMcpToolDefinition {
  name: string;
  description: string;
  inputSchema?: WebMcpToolInputSchema;
  execute: (
    input: Record<string, unknown>,
  ) => Promise<{ content: Array<{ type: string; text: string }> }>;
}

interface WebMcpModelContext {
  registerTool: (tool: WebMcpToolDefinition) => void;
}

declare global {
  interface Navigator {
    modelContext?: WebMcpModelContext;
  }

  interface SubmitEvent {
    agentInvoked?: boolean;
  }
}

declare module "react" {
  // Generic parameter retained to match React's declaration-merging signature.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean | "";
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
    toolparamtitle?: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
    toolparamtitle?: string;
  }
}

export {};
