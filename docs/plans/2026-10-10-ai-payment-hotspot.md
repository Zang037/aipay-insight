# AI 支付热点站实施计划

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将默认 AI 行业示例站定制为面向 AI 支付产品研究的全球热点站，优先发现新发布或重要更新的 AI 产品，并提炼其对 AI 支付的可借鉴机制。

**Architecture:** 保留采集、评分、聚类和发布引擎，只替换 `site/` 的站点身份与品牌，以及 `industry/` 的分类、主题、信源和编辑提示词。直接相关的 AI 支付、Agent 交易和支付基础设施进入核心分类；其他 AI 产品只有在产品机制能够迁移到 AI 支付时才进入精选。

**Tech Stack:** Node.js 24、TypeScript 7、React Router、Fastify、PostgreSQL、pg-boss、Tailwind CSS。

---

### Task 1: 定制站点身份与公开文案

**Files:**
- Modify: `site/site.ts`
- Modify: `site/changelog.json`

**Steps:**
1. 将站名、行业词、首页标题、描述、关键词、MCP 前缀和爬虫名改为 AI 支付语境。
2. 将日报时间改为北京时间 10:00，并改写关于页、分享卡片、推荐理由和报告文案。
3. 保留条款与隐私模板，不替用户填写运营主体或联系方式。

### Task 2: 重建行业分类、标签和主题

**Files:**
- Modify: `industry/taxonomy.ts`
- Modify: `industry/topics.json`
- Modify: `industry/gold.example.jsonl`

**Steps:**
1. 定义直接 AI 支付、Agent 交易、新 AI 产品、支付基础设施、信任风控和产品洞察六类内容。
2. 将产品发布设为重点发布类型，并增加授权、委托支付、商业模式、交互入口等标签。
3. 以 AI 产品公司、支付网络和关键产品方向重建主题目录。
4. 更新校准样例，但不凭感觉修改选择门槛。

### Task 3: 配置全球产品与支付信源

**Files:**
- Modify: `industry/sources.json`

**Steps:**
1. 保留能提供产品首发信息的一手 AI 官方源。
2. 增加支付、Agent commerce、开发者平台和全球科技媒体的示范源。
3. 默认关闭全文转载，只展示摘要和原文链接。

### Task 4: 重写编辑与评分标准

**Files:**
- Modify: `industry/prompts/prefilter.md`
- Modify: `industry/prompts/selection-score.md`
- Modify: `industry/prompts/content-understanding.md`
- Modify: `industry/prompts/structure.md`
- Modify: `industry/prompts/rules-domain.md`
- Modify: `industry/prompts/understand.md`
- Modify: `industry/prompts/story-digest.md`
- Modify: `industry/prompts/summarize-article.md`
- Modify: `industry/prompts/summarize-long-post.md`
- Modify: `industry/prompts/summarize-short-post.md`
- Modify: `industry/wording.ts`

**Steps:**
1. 将预筛标准改为“直接相关或具备明确 AI 支付借鉴空间”。
2. 保留五维评分结构，调整各内容类型权重与价值、噪声例子。
3. 要求标题摘要先说产品变化，再说明可借鉴机制、适用场景和支付风险。
4. 明确区分事实与编辑推断，禁止把普通套壳产品、融资新闻和空泛 AI 营销抬高。

### Task 5: 替换品牌资产

**Files:**
- Modify: `site/brand/logo.svg`
- Modify: `site/brand/Logo.tsx`
- Modify: `site/brand/icon.png`
- Modify: `site/brand/icon-192.png`
- Modify: `site/brand/apple-icon.png`
- Modify: `site/brand/favicon.ico`
- Modify: `site/brand/nameplates/*`

**Steps:**
1. 使用独立的 AI 支付标记替换模板图标，避免沿用 AIHOT 名称或 Logo。
2. 重新生成日报、周报、月报报头。
3. 检查图标尺寸和 SVG 可解析性。

### Task 6: 更新行业耦合测试并验证

**Files:**
- Modify: `tests/analyze.test.ts`
- Modify: `tests/topics.test.ts`
- Modify: any tests that use removed category keys or tags

**Steps:**
1. 将测试夹具里的默认类别、标签和主体替换为新行业对应项。
2. 运行 `npm run typecheck`。
3. 使用以 `_test` 结尾的本地测试库运行 `npm test`。
4. 启动本地站点后运行 `node scripts/smoke.ts --base http://localhost:3000`；若环境缺少 PostgreSQL、Docker 或运行凭据，记录精确阻塞原因。

