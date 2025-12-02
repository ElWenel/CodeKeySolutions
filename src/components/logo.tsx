import { Code2 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <Code2 className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold">CodeKey</span>
    </div>
  );
}
