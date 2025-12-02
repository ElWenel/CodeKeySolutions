"use client";

import { useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(language === 'en' && 'bg-secondary')}
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={cn(language === 'es' && 'bg-secondary')}
      >
        ES
      </Button>
    </div>
  );
}
