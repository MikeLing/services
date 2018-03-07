export default {
  header: {
    navigation: {
      whitepapers: 'Whitepapers',
      downloads: 'Downloads',
      explorer: 'Explorer',
      blog: 'Blog',
      roadmap: 'Roadmap',
    },
  },
  footer: {
    getStarted: 'Get started',
    explore: 'Explore',
    community: 'Community',
    wallet: 'Get Wallet',
    infographics: 'Infographics',
    whitepapers: 'Whitepapers',
    blockchain: 'Blockchain Explorer',
    blog: 'Blog',
    twitter: 'Twitter',
    reddit: 'Reddit',
    github: 'Github',
    telegram: 'Telegram',
    slack: 'Slack',
    roadmap: 'Roadmap',
    skyMessenger: 'Sky-Messenger',
    cxPlayground: 'CX Playground',
    team: 'Team',
    subscribe: 'Mailing List',
    market: 'Markets',
    bitcoinTalks: 'Bitcointalks ANN',
    instagram: 'Instagram',
    facebook: 'Facebook',
    discord: 'Discord',
  },
  distribution: {
    rate: 'Current OTC rate: <strong>{rate} SKY/BTC</strong>',
    inventory: 'Current inventory: {coins} SKY available',
    title: 'Skycoin OTC',
    heading: 'Skycoin OTC',
    headingEnded: 'Skycoin OTC is currently closed',
    ended: `<p>Join the <a href="https://t.me/skycoin">Skycoin Telegram</a>
      or follow the
      <a href="https://twitter.com/skycoinproject">Skycoin Twitter</a>.`,
    instructions: `<p>
<p>To use the Skycoin OTC:</p>

<ul>
  <li>Enter your Skycoin address below and hit <strong>Get Address</strong></li>
  <li>You&apos;ll receive a unique Bitcoin address to purchase SKY</li>
  <li>Send BTC to the address</li>
</ul>

<p>You can check the status of your order by entering your address and hitting <strong>Check status</strong>.</p>
<p>Each time you hit <strong>Get Address</strong>, a new BTC address is generated.</p>
    `,
    statusFor: 'Status for {skyAddress}',
    enterAddress: 'Enter Skycoin address',
    enterAddressBTC: 'Enter BTC address',
    getAddress: 'Get address',
    checkStatus: 'Check status',
    loading: 'Loading...',
    btcAddress: 'BTC address',
    errors: {
      noSkyAddress: 'Please enter your SKY address.',
      noDropAddress: 'Please obtain BTC address first',
      coinsSoldOut: 'Skycoin OTC is currently sold out, check back later.',
      paused: 'Skycoin OTC is temporarily not accepting any new transfers, please try again later',
      closed: 'Skycoin OTC is currently closed',
    },
    statuses: {
      waiting_deposit: '[{updated}] Waiting for BTC deposit.',
      waiting_send: '[{updated}] BTC deposit confirmed. Skycoin transaction is queued.',
      waiting_confirm: '[{updated}] Skycoin transaction sent.  Waiting to confirm.',
      done: '[{updated}] Completed. Check your Skycoin wallet.',
    },
  },
};
