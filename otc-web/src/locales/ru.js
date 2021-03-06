export default {
  header: {
    navigation: {
      whitepapers: 'Документация',
      downloads: 'Загрузки',
      explorer: 'Обозреватель',
      blog: 'Блог',
      roadmap: 'План',
    },
  },
  footer: {
    getStarted: 'Начать',
    explore: 'Дополнительно',
    community: 'Сообщество',
    wallet: 'Получить Кошелёк',
    infographics: 'Инфографика',
    whitepapers: 'Документация',
    blockchain: 'Блокчейн Обозреватель',
    blog: 'Блог',
    twitter: 'Twitter',
    reddit: 'Reddit',
    github: 'Github',
    telegram: 'Telegram',
    slack: 'Slack',
    roadmap: 'План',
    skyMessenger: 'Sky-Messenger',
    cxPlayground: 'CX Playground',
    team: 'Команда',
    subscribe: 'Рассылка',
    market: 'Markets',
    bitcoinTalks: 'Bitcointalks ANN',
    instagram: 'Instagram',
    facebook: 'Facebook',
    discord: 'Discord',
  },
  distribution: {
    rate: 'Текущий курс OTC: {rate} SKY/BTC',
    inventory: 'Current inventory: {coins} SKY available',
    title: 'Skycoin OTC',
    heading: 'Skycoin OTC',
    headingEnded: 'The previous distribution event finished on',
    ended: `<p>Join the <a href="https://t.me/skycoin">Skycoin Telegram</a>
      or follow the
      <a href="https://twitter.com/skycoinproject">Skycoin Twitter</a>
      to learn when the next event begins.`,
    instructions: `<p>
<p>Что необходимо для участия в распространении:</p>

<ul>
  <li>Введите ваш Skycoin адрес</li>
  <li>Вы получите уникальный Bitcoin адрес для приобретения SKY</li>
  <li>Отправьте Bitcoin на полученый адрес</li>
</ul>
    `,
    statusFor: 'Статус по {skyAddress}',
    enterAddress: 'Введите адрес Skycoin',
    enterAddressBTC: 'Введите адрес BTC',
    getAddress: 'Получить адрес',
    checkStatus: 'Проверить статус',
    loading: 'Загрузка...',
    btcAddress: 'BTC адрес',
    errors: {
      noSkyAddress: 'Пожалуйста введите ваш SKY адрес.',
      noDropAddress: 'Сначала необходимо получить BTC адрес',
      coinsSoldOut: 'Skycoin в данный момент отсутствует. Пожалуйста, повторите попытку позже.',
      paused: 'Skycoin OTC временно не принимает новые платежи. Пожалуйста, повторите попытку позже.',
      closed: 'Skycoin OTC сейчас закроты. Пожалуйста, повторите попытку позже.',
    },
    statuses: {
      waiting_deposit: '[tx-{id} {updated}] Ожидаем BTC депозит.',
      waiting_send: '[tx-{id} {updated}] BTC депозит подтверждён. Skycoin транзакция поставлена в очередь.',
      waiting_confirm: '[tx-{id} {updated}] Skycoin транзакция отправлена. Ожидаем подтверждение.',
      done: '[tx-{id} {updated}] Завершена. Проверьте ваш Skycoin кошелёк.',
    },
  },
};
