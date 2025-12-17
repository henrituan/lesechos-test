## Implemented features

- Basic design tokens for typography and colors using PandaCSS (see `panda.config.ts`)
- Article grouped by section grid, with responsive design
- Article cards with hover effect
- Dynamic CTA based on user subscription status
- User select button on Navbar to simulate different profiles (userId will be persisted in cookies)
- Dark/Light mode (using system preference)
- Server actions to fetch newsletters and user subscriptions, and transform them to client-side data
- Type safety for both server and client-side code (see `app/(newsletter)/_types`)
- Unit tests with Vitest

## Demo

- The project is available on GitHub here: [https://github.com/henrituan/lesechos-test](https://github.com/henrituan/lesechos-test)
- The project is deployed here: [https://lesechos-test.henrituan.com/](https://lesechos-test.henrituan.com/)
- You can click on the user select button on the Navbar to simulate different profiles and see different CTAs for each Card
