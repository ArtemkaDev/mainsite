# AploCoin mainsite

Use `ArtemkaDev/mainsite` for this project. `npm run build` exports the site to `out/` for GitHub Pages. Keep routes compatible with static export. Use Next.js `Link` for internal navigation and `publicAsset()` for files under `public/`.

Use the Aplo Design System theme from `@aplocoin/ui/sdk.css`. Import interactive components from their individual `@ui-sdk/react/<component>` entries and keep the React adapter and `@ui-sdk/core` pinned to the same version as the theme.

Before working with UI SDK, read the official `ui-sdk` skill and `node_modules/@ui-sdk/react/docs/llms.txt`. The installed skill is also available at `node_modules/@ui-sdk/core/skills/ui-sdk/SKILL.md`. For a new primitive, search the same React docs directory's `core.md` by heading and read `rendering.md`.
