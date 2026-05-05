## Применить палитру «Luminous Engine»

Меняю только цветовые токены в `src/styles.css` — структура, типографика, компоненты не трогаются. Все секции и MAX-кнопки автоматически подхватят новые значения через семантические токены (`bg-primary`, `bg-card`, `bg-surface`, `border-border` и т.д.).

### Новая палитра
- `--background` → #f8f9ff (pristine light)
- `--foreground` → глубокий чернильный сине-чёрный
- `--muted-foreground` → приглушённый сине-серый
- `--surface` → #eff4ff (container-low)
- `--card` → #e5eeff (container)
- `--secondary` → #d3e4fe (container-highest)
- `--primary` → #006d32 (energy green)
- `--primary-hover` → #00d166-зона (для glow на hover)
- `--accent` → яркий зелёный для тонких акцентов
- `--border` → мягкая ghost-граница в холодном тоне
- `--ring` → primary green

### Что нужно проверить отдельно
В Hero и Final CTA тени на главной кнопке заданы хардкодом (`shadow-[0_8px_24px_-8px_oklch(0.555_0.158_38/.55)]` — терракота). Их обновлю под зелёный, чтобы glow совпадал с новым `--primary`:
- `Hero.tsx` (строка кнопки «Отправить фото или видео в MAX»)
- `FinalCta.tsx` (та же кнопка в финальной секции)

Тон-в-тон заменю на `oklch(0.5 0.15 155 / .45)` и `/.6` для hover.

### Что НЕ меняю
- Все компоненты, тексты, разметку, навигацию.
- Шрифт остаётся Inter (без перехода на Space Grotesk — он не входил в твой запрос; если захочешь, подключим отдельно).
- Sticky mobile CTA, footer, header — без правок, цвет придёт через токены.