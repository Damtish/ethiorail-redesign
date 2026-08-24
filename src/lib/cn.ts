type ClassInput =
  | string
  | number
  | null
  | undefined
  | false
  | ClassInput[]
  | Record<string, boolean | null | undefined>;

function appendClassName(value: ClassInput, parts: string[]): void {
  if (!value) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    parts.push(String(value));
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      appendClassName(item, parts);
    }
    return;
  }

  for (const [key, isActive] of Object.entries(value)) {
    if (isActive) {
      parts.push(key);
    }
  }
}

export function cn(...inputs: ClassInput[]): string {
  const parts: string[] = [];

  for (const input of inputs) {
    appendClassName(input, parts);
  }

  return parts.join(" ");
}
