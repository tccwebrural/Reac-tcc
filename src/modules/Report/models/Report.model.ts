
export interface Column {
    id: 'name' | 'code';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
  }