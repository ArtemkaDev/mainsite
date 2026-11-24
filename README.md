# AploCoin mainsite

Статический сайт AploCoin на Next.js. Рабочий репозиторий — [ArtemkaDev/mainsite](https://github.com/ArtemkaDev/mainsite).

## Локальный запуск

Требуется Node.js 22.12 или новее.

```sh
npm ci
npm run dev
```

`npm run lint` проверяет исходники. `npm run build` создаёт статический сайт в `out/`. Чтобы проверить сборку под путём форка, запустите `PAGES_BASE_PATH=/mainsite npm run build`.

## GitHub Pages

В настройках форка выберите **Pages → Build and deployment → GitHub Actions**. Workflow публикует `out/` при отправке изменений в `main` или ручном запуске и получает путь сайта из конфигурации Pages.

## Интерфейс

Тема Aplo подключена в корневом layout. Пакет `@aplocoin/ui` устанавливается из архива в `vendor/`, чтобы сборка работала сразу после клонирования. Чтобы обновить его, соберите новую версию через `npm pack -w @aplocoin/ui` в репозитории дизайн-системы и обновите архив, зависимости и lockfile. Примеры доступны в [каталоге Aplo](https://aplo.interfuse.agency/) и [документации UI SDK](https://ui-sdk.dev/docs/react).
