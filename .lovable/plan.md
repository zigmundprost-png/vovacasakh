Проверил: `MAX_LINK_PLACEHOLDER` в коде нет. Все CTA в MAX используют один константный `MAX_LINK` из `src/lib/links.ts` (Hero, Brief, MaxBriefDialog, FinalCta, Footer, Header, MobileStickyCta, DesktopFloatingCta — все через эту константу или `openMaxBrief`, который ведёт на ту же ссылку).

Сейчас `MAX_LINK = "https://mnogotovarov.ru/3191299.html"` — это и есть проблема. Нужно заменить на настоящую MAX-ссылку.

Ссылка на mnogotovarov.ru остаётся только в одном месте — в `Reviews.tsx` («Открыть отзывы»), и там она зашита напрямую, не через MAX_LINK. Это правильно по предыдущей договорённости.

## Правка

**src/lib/links.ts** — заменить значение `MAX_LINK`:

```ts
export const MAX_LINK =
  "https://max.ru/u/f9LHodD0cOKGZ4xaImBDKE-TUQXZbPkFvxONgea0X4BcOyG4dStpz0y54-A";
```

Больше ничего трогать не нужно — все кнопки автоматически подхватят новую ссылку.
