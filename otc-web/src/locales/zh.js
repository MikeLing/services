export default {
  header: {
    navigation: {
      whitepapers: '白皮书',
      downloads: '下载区',
      explorer: '区块浏览器',
      blog: '开发日志',
      roadmap: 'Roadmap',
    },
  },
  footer: {
    getStarted: '开始',
    explore: '浏览',
    community: '社区',
    wallet: '下载钱包',
    infographics: '信息图表',
    whitepapers: '白皮书',
    blockchain: '区块浏览器',
    blog: '开发日志',
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
    rate: 'Current OTC rate: {rate} SKY/BTC',
    inventory: 'Current inventory: {coins} SKY available',
    title: '天空币OTC',
    heading: '天空币OTC',
    headingEnded: '天空币暂时关门',
    ended: `<p>Join the <a href="https://t.me/skycoin">Skycoin Telegram</a>
       or follow the
      <a href="https://twitter.com/skycoinproject">Skycoin Twitter</a>.`,
    instructions: `<p>
<p>参加天空币分发活动:</p>

<ul>
  <li>在下面输入您的天空币地址</li>
  <li>您将收到一个唯一的比特币地址用来购买天空币</li>
  <li>将比特币发送到您收到的地址上</li>
</ul>
    `,
    statusFor: '天空币地址{skyAddress}的订单状态',
    enterAddress: '输入天空币地址',
    enterAddressBTC: 'Enter BTC Address',
    getAddress: '获取地址',
    checkStatus: '检查状态',
    loading: '加载中...',
    btcAddress: '比特币地址',
    errors: {
      noSkyAddress: '请输入您的天空币地址',
      noDropAddress: 'Please obtain BTC address first',
      coinsSoldOut: 'Skycoin OTC is currently sold out, check back later.',
      paused: 'Skycoin OTC is temporarily not accepting any new transfers, please try again later',
      closed: 'Skycoin OTC is currently closed',
    },
    statuses: {
      done: '交易 {id}: 天空币已经发送并确认(更新于{updated}).',
      waiting_deposit: '交易 {id}: 等待比特币存入(更新于 {updated}).',
      waiting_send: '交易 {id}: 比特币存入已确认; 天空币发送在队列中 (更新于 {updated}).',
      waiting_confirm: '交易 {id}: 天空币已发送,等待交易确认 (更新于 {updated}).',
    },
  },
};
