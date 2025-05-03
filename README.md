# Control App Onboarding

Onboarding page for DYNAMO-Control-App, which is part of the DYNAMO project.

## Quick Start

For a quick start you can watch video tutorial: [![YouTube | Watch Tutorial](https://img.shields.io/badge/YouTube-Watch%20Tutorial-red?logo=youtube&style=social)](https://www.youtube.com/watch?v=q9R42T-7ykI)

But if you prefer text:

1. Fork this repository and clone it to your local machine
2. Run command `npm ci` to install all the dependencies (make sure that you have installed `pip` and `node` on your machine)
3. And now you're ready to run the app with `npm run dev` command
4. To run python bot put your tokens to `bot/.env` (use `bot/example.env` as an example). Then start the bot with `npm run bot` command

## Onboarding/Paywall configuration

The heart of this project lies in the configuration. By tweaking the configuration file, you can customize the onboarding experience according to your project's requirements. The configuration file can be found at [config.ts](./app/src/config.ts).

For detailed information on configuring the app, refer to the [Configuration Guide](./configuration-guide.md).

## Integrate onboarding into your bot
The perfect location for onboarding is right at the start of the bot. It will help you to brightly present your product to the user.

To integrate onboarding to your bot, you simply need to add a **button** with a link of your deployed onboarding web application. Telegram currently supports six different ways of [launching Mini Apps](https://core.telegram.org/bots/webapps#implementing-mini-apps). For onboadring launching we recommend using [MenuButton](https://core.telegram.org/api/bots/menu) or [KeyboardButton](https://core.telegram.org/type/KeyboardButton).

### MenuButton
MenuButton is a special button which appears on the left side of the text input (see [@DurgerKingBot](https://t.me/DurgerKingBot)). This button can be configured without any server code in [@BotFather](https://t.me/BotFather):

- Go to [@BotFather](https://t.me/BotFather) → `/mybots` → *Select yout bot* → `Bot Settings` → `Menu Button` → *Send your onboarding URL* → *Send button title (e.g. "Onboarding")*

Now Menu Button with onboarding will appear in your bot.

### KeyboardButton
Try KeyboardButton in action in our [Demo Bot](https://t.me/onboarding_kit_demo_bot). It utilizes Telegram's [KeyboardButton](https://core.telegram.org/type/KeyboardButton) with [Mini App URL](https://core.telegram.org/constructor/keyboardButtonSimpleWebView) inside.


Here's a snippet for `reply_markup` implemented with [python-telegram-bot](http://python-telegram-bot.readthedocs.io/) library (see full implementation in [bot.py](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L81)):
```python
reply_markup = telegram.ReplyKeyboardMarkup.from_button(
   telegram.KeyboardButton(
      text="🌈 Onboarding",
      web_app=telegram.WebAppInfo(url={ONBOARDING_URL})
   )
)
```

Note: KeyboardButton does't send any user data to Mini App (e.g. `language_code`). But you can send all the required data with HTTP GET parameters (see [this function](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L51) as reference).

### Adding payments
Good ending of onboarding is a **paywall**: User selects a product → Chooses payment method → Gets invoice in the chat. After the paywall the bot receives data about the selected product like:
```json
{
   "title": "Title",
   "description": "Description",
   "price": 5.99,
   "currency": "USD",
   "payment_method": "wallet_pay"
}
```
This data is used for ivoice generation. We implemented 2 different payment methods: native [Telegram Payments](https://core.telegram.org/bots/payments) and [👛 Wallet Pay](https://pay.wallet.tg) (but generally any payment method can be integrated into such flow). You can find full code in [bot.py](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py):
- Telegram Payments: [[send invoice]](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L201) • [[check payment status]](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L235)
- 👛 Wallet Pay: [[send invoice]](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L245) • [[check payment status]](https://github.com/Easterok/telegram-onboarding-kit/blob/main/bot/bot.py#L326)



## 🌈 Examples/Presets

To help you understand how to create your own configuration, we provide multiple example applications in the `./examples` directory. Each example demonstrates different onboarding scenarios and includes a sample configuration file:

1. Base App

   - Located in: `./app`
   - Key features: `various slide configurations` `telegram-native design` `onboarding from demo video`
   - Run command: `npm run dev`

2. Fashion AI App

   - Located in: `./examples/ai`
   - Key features: `interactive slides` `currency configuration` `vertical products on paywall` `custom preset`
   - Run command: `npm run dev:ai`

3. Meditation App

   - Located in: `./examples/meditation`
   - Key features: `localization` `custom icons` `different image styles` `custom preset`
   - Run command: `npm run dev:meditation`

4. AI Tales App

   - Located in: `./examples/tales`
   - Key features: `language/currency localization` `interactive flow on onboarding` `custom preset`
   - Run command: `npm run dev:tales`

5. VPN App
   - Located in: `./examples/vpn`
   - Key features: `app created during YouTube tutorial using base preset`
   - Run command: `npm run dev:vpn`

6. ChatGPT App
   - Located in: `./examples/chatgpt`
   - Key features: `onboarding for real bot @chatgpt_karfly_bot` `videos`
   - Run command: `npm run dev:chagpt`

## Reusable Packages

### [@tok/ui](packages/ui/README.md)

A collection of essential UI components. Explore the potential of these components by visiting our [Figma project](https://www.figma.com/file/ssQqPZ2vqZhD4QF2xyCTd2/Telegram-Onboarding--ToolKit), where you can see them in action and gain a better understanding of their capabilities.

### [@tok/telegram-ui](packages/telegram-ui/README.md)

This package offers a convenient wrapper around the [@twa-dev/sdk](https://github.com/twa-dev/SDK), providing Vue-like components and use-case solutions for Popups, MainButton, BackButton, and Theme integration.

### [@tok/i18n](packages/i18n/README.md)

A minimalistic package for handling localization in your applications. We refrain from using third-party solutions due to concerns about the bundle sizes they introduce. While we provide this solution, feel free to replace it with your own if it better suits your needs.

### [@tok/generation](packages/generation/README.md)

The primary package for generating projects via a configuration file. It offers presets that can be easily extended within the configuration file.

### Tools:

#### [@tok/compress](packages/compress/README.md)

A Node solution for image compression. It processes PNG, JPG, and JPEG files, compressing them and converting them into WEBP, PNG, JPG, or JPEG formats.

#### [@tok/eslint-config](packages/compress/README.md)

A basic ESLint configuration for vue projects to maintain clean and consistent code.

#### [@tok/tsconfig](packages/tsconfig/README.md)

Shared `tsconfig.base.json` file for vue + vite projects

## 3rd party packages:

### [Turborepo](https://turbo.build/)

A package for managing a monorepository. If you haven't heard of it, take a look at its [documentation](https://turbo.build/repo/docs); it's worth it

### [Vite](https://vitejs.dev/)

A package for building and running modern web applications. [Documentation](https://vitejs.dev/guide/)

### [Vue](https://vuejs.org/)

Vue is a JavaScript framework for building user interfaces. [Documentation](https://vuejs.org/)

### [@twa-dev/sdk](https://github.com/twa-dev/SDK)

NPM package for Telegram Mini Apps SDK. Take a look at their [GitHub repository](https://github.com/twa-dev/SDK)

### [Lottie-web](https://github.com/airbnb/lottie-web)

Lottie is a mobile library for Web that parses Adobe After Effects animations exported as json with Bodymovin and renders them natively!

For information on how `sticker.tgs` files are rendered in this project, please refer to [this link](./packages/telegram-ui/components/Sticker/README.md)
