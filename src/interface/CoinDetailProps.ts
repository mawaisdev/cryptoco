export type CoinDetailProps = {
  id: string
  symbol: string
  name: string
  asset_platform_id: any
  platforms: Platforms
  detail_platforms: DetailPlatforms
  block_time_in_minutes: number
  hashing_algorithm: string
  categories: string[]
  public_notice: any
  additional_notices: any[]
  localization: Localization
  description: Description
  links: Links
  image: Image
  country_origin: string
  genesis_date: string
  sentiment_votes_up_percentage: number
  sentiment_votes_down_percentage: number
  watchlist_portfolio_users: number
  market_cap_rank: number
  coingecko_rank: number
  coingecko_score: number
  developer_score: number
  community_score: number
  liquidity_score: number
  public_interest_score: number
  market_data: MarketData
  community_data: CommunityData
  developer_data: DeveloperData
  public_interest_stats: PublicInterestStats
  status_updates: any[]
  last_updated: string
  tickers: Ticker[]
}

export type CurrencyData = {
  aed: string
  ars: string
  aud: string
  bch: string
  bdt: string
  bhd: string
  bmd: string
  bnb: string
  brl: string
  btc: string
  cad: string
  chf: string
  clp: string
  cny: string
  czk: string
  dkk: string
  dot: string
  eos: string
  eth: string
  eur: string
  gbp: string
  hkd: string
  huf: string
  idr: string
  ils: string
  inr: string
  jpy: string
  krw: string
  kwd: string
  lkr: string
  ltc: string
  mmk: string
  mxn: string
  myr: string
  ngn: string
  nok: string
  nzd: string
  php: string
  pkr: string
  pln: string
  rub: string
  sar: string
  sek: string
  sgd: string
  thb: string
  try: string
  twd: string
  uah: string
  usd: string
  vef: string
  vnd: string
  xag: string
  xau: string
  xdr: string
  xlm: string
  xrp: string
  yfi: string
  zar: string
  bits: string
  link: string
  sats: string
}
export type RegionData = {
  en: string
  de: string
  es: string
  fr: string
  it: string
  pl: string
  ro: string
  hu: string
  nl: string
  pt: string
  sv: string
  vi: string
  tr: string
  ru: string
  ja: string
  zh: string
  'zh-tw': string
  ko: string
  ar: string
  th: string
  id: string
  cs: string
  da: string
  el: string
  hi: string
  no: string
  sk: string
  uk: string
  he: string
  fi: string
  bg: string
  hr: string
  lt: string
  sl: string
}

export interface Platforms {
  '': string
}

export interface DetailPlatforms {
  '': GeneratedType
}

export interface GeneratedType {
  decimal_place: any
  contract_address: string
}

export interface Localization extends RegionData {}

export interface Description extends RegionData {}

export interface Links {
  homepage: string[]
  blockchain_site: string[]
  official_forum_url: string[]
  chat_url: string[]
  announcement_url: string[]
  twitter_screen_name: string
  facebook_username: string
  bitcointalk_thread_identifier: any
  telegram_channel_identifier: string
  subreddit_url: string
  repos_url: ReposUrl
}

export interface ReposUrl {
  github: string[]
  bitbucket: any[]
}

export interface Image {
  thumb: string
  small: string
  large: string
}

export interface MarketData {
  current_price: CurrentPrice
  total_value_locked: any
  mcap_to_tvl_ratio: any
  fdv_to_tvl_ratio: any
  roi: any
  ath: Ath
  ath_change_percentage: AthChangePercentage
  ath_date: AthDate
  atl: Atl
  atl_change_percentage: AtlChangePercentage
  atl_date: AtlDate
  market_cap: MarketCap
  market_cap_rank: number
  fully_diluted_valuation: FullyDilutedValuation
  total_volume: TotalVolume
  high_24h: High24h
  low_24h: Low24h
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_7d: number
  price_change_percentage_14d: number
  price_change_percentage_30d: number
  price_change_percentage_60d: number
  price_change_percentage_200d: number
  price_change_percentage_1y: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  price_change_24h_in_currency: PriceChange24hInCurrency
  price_change_percentage_1h_in_currency: PriceChangePercentage1hInCurrency
  price_change_percentage_24h_in_currency: PriceChangePercentage24hInCurrency
  price_change_percentage_7d_in_currency: PriceChangePercentage7dInCurrency
  price_change_percentage_14d_in_currency: PriceChangePercentage14dInCurrency
  price_change_percentage_30d_in_currency: PriceChangePercentage30dInCurrency
  price_change_percentage_60d_in_currency: PriceChangePercentage60dInCurrency
  price_change_percentage_200d_in_currency: PriceChangePercentage200dInCurrency
  price_change_percentage_1y_in_currency: PriceChangePercentage1yInCurrency
  market_cap_change_24h_in_currency: MarketCapChange24hInCurrency
  market_cap_change_percentage_24h_in_currency: MarketCapChangePercentage24hInCurrency
  total_supply: number
  max_supply: number
  circulating_supply: number
  last_updated: string
}

export interface CurrentPrice extends CurrencyData {}

export interface Ath extends CurrencyData {}

export interface AthChangePercentage extends CurrencyData {}

export interface AthDate {}

export interface Atl extends CurrencyData {}

export interface AtlChangePercentage extends CurrencyData {}

export interface AtlDate extends CurrencyData {}

export interface MarketCap extends CurrencyData {}

export interface FullyDilutedValuation extends CurrencyData {}

export interface TotalVolume extends CurrencyData {}

export interface High24h extends CurrencyData {}

export interface Low24h extends CurrencyData {}

export interface PriceChange24hInCurrency extends CurrencyData {}

export interface PriceChangePercentage1hInCurrency extends CurrencyData {}

export interface PriceChangePercentage24hInCurrency extends CurrencyData {}

export interface PriceChangePercentage7dInCurrency extends CurrencyData {}

export interface PriceChangePercentage14dInCurrency extends CurrencyData {}

export interface PriceChangePercentage30dInCurrency extends CurrencyData {}

export interface PriceChangePercentage60dInCurrency extends CurrencyData {}

export interface PriceChangePercentage200dInCurrency extends CurrencyData {}

export interface PriceChangePercentage1yInCurrency extends CurrencyData {}

export interface MarketCapChange24hInCurrency extends CurrencyData {}

export interface MarketCapChangePercentage24hInCurrency extends CurrencyData {}

export interface CommunityData {
  facebook_likes: any
  twitter_followers: number
  reddit_average_posts_48h: number
  reddit_average_comments_48h: number
  reddit_subscribers: number
  reddit_accounts_active_48h: number
  telegram_channel_user_count: any
}

export interface DeveloperData {
  forks: number
  stars: number
  subscribers: number
  total_issues: number
  closed_issues: number
  pull_requests_merged: number
  pull_request_contributors: number
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4Weeks
  commit_count_4_weeks: number
  last_4_weeks_commit_activity_series: any[]
}

export interface CodeAdditionsDeletions4Weeks {
  additions: number
  deletions: number
}

export interface PublicInterestStats {
  alexa_rank: number
  bing_matches: any
}

export interface Ticker {
  base: string
  target: string
  market: Market
  last: number
  volume: number
  converted_last: ConvertedLast
  converted_volume: ConvertedVolume
  trust_score: string
  bid_ask_spread_percentage: number
  timestamp: string
  last_traded_at: string
  last_fetch_at: string
  is_anomaly: boolean
  is_stale: boolean
  trade_url?: string
  token_info_url: any
  coin_id: string
  target_coin_id?: string
}

export interface Market {
  name: string
  identifier: string
  has_trading_incentive: boolean
}

export interface ConvertedLast {
  btc: number
  eth: number
  usd: number
}

export interface ConvertedVolume {
  btc: number
  eth: number
  usd: number
}
