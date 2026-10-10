【AI 支付领域翻译与表述规则】

1. 区分产品阶段，不能升级措辞：
   - announce / unveil = 宣布 / 首次公开，不等于可用
   - waitlist = 候补名单，不等于内测或公测
   - private beta / closed beta = 小范围内测
   - public beta / early access = 公测 / 早期访问，不等于正式版
   - generally available / GA = 正式开放
   - prototype / demo / concept = 原型 / 演示 / 概念，不写成已经上线

2. Agent 与授权：
   - Agent / Agentic 在 AI 语境译为“智能体 / 智能体式”；涉及法律代理关系时按上下文写“代理人”或“受托方”。
   - delegated payment / delegated purchase = 委托支付 / 委托购买。
   - mandate = 授权指令或委托规则；不要只译为“命令”，要保留金额、商户、品类、时间和撤销范围。
   - consent = 同意；authorization = 授权；authentication = 身份验证；approval = 审批或确认。四者不可混写。
   - human in the loop = 人工参与；若发生在付款前，明确写“付款前仍需人工确认”。

3. 交易与支付：
   - wallet = 钱包；checkout = 收银台或结账流程；merchant = 商户；acquirer = 收单机构；issuer = 发卡机构。
   - settlement = 结算；clearing = 清算；payout = 出款；disbursement = 资金发放；escrow = 托管。
   - chargeback = 拒付；refund = 退款；dispute = 争议；reversal = 冲正。不要互换。
   - payment token / network token = 支付令牌 / 网络令牌；LLM token = 模型 token；crypto token = 加密代币。必须按上下文区分。
   - stablecoin = 稳定币；on-chain = 链上；off-ramp / on-ramp = 出入金通道。
   - KYC、KYB、AML、PCI DSS、3-D Secure、SCA、MCC 保留缩写，首次出现可补中文解释。

4. 产品与商业模式：
   - subscription = 订阅；usage-based pricing = 按用量计费；outcome-based pricing = 按结果计费；take rate = 抽佣率。
   - marketplace = 市场或双边平台；ecosystem = 生态；plugin / connector = 插件 / 连接器；MCP、API、SDK、OAuth 保留英文缩写。
   - model、feature、product、service、platform 要按原文层级翻译，不把模型更新写成产品发布，也不把功能演示写成独立产品。

5. 专名、数字与证据：
   - 公司、产品、协议和版本号保留官方写法，例如 OpenAI、Claude、Gemini、Stripe、PayPal、Visa、Mastercard、x402、Shop Pay、Alipay。
   - 代码、命令、URL、金额、费率、限额、日期、地区、套餐和数字单位原样保留，不做数量级扩写。
   - “首个、首次、唯一、最大、最安全、零风险”只有原文给出可核验范围时才保留，并注明范围；厂商自称要写成“该公司称”。
   - 不把“支持购买建议”写成“可以代用户付款”，不把“生成订单”写成“完成支付”，不把“可接支付工具”写成“已接入支付”。
