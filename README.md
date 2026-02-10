# DED-WDS_REACT

![Version](https://img.shields.io/badge/version-1.0.16--beta-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![npm](https://img.shields.io/badge/npm-%3E%3D10-brightgreen)

**DED Web Design System** - 基於 React + TypeScript 的企業級設計系統與 UI 組件庫

---

## 📖 目錄

- [專案介紹](#專案介紹)
- [技術架構](#技術架構)
- [環境需求](#環境需求)
- [快速開始](#快速開始)
- [可用指令](#可用指令)
- [專案結構](#專案結構)
- [開發規範](#開發規範)
- [封裝與發佈](#封裝與發佈)
- [測試](#測試)
- [部署](#部署)
- [貢獻指南](#貢獻指南)
- [授權與作者](#授權與作者)
- [相關連結](#相關連結)

---

## 專案介紹

DED-WDS_REACT 是一個現代化的 Web 設計系統，提供一致且可重用的 UI 組件庫，旨在提升開發效率與使用者體驗。

### 主要特色

- ✨ **完整的組件庫**: 提供豐富的 UI 組件，涵蓋常見業務場景
- 📦 **Monorepo 架構**: 使用 Nx 管理多專案，支援獨立封裝發佈
- 🎨 **Storybook 文件**: 完整的組件文件與互動式範例
- 🔧 **TypeScript**: 完整的型別支援，提升開發體驗
- 🎯 **高品質**: 遵循 SOLID 設計原則與完善的測試機制
- 🚀 **易於整合**: 可透過 npm 安裝，快速整合至專案中

---

## 技術架構

本專案採用以下技術棧：

### 核心技術

- **前端框架**: React 18.3.1
- **語言**: TypeScript 5.4.2
- **建置工具**: Vite 5.4.0
- **Monorepo 管理**: Nx 19.4.0

### 樣式方案

- **CSS 框架**: TailwindCSS 3.4.17
- **預處理器**: SCSS/Sass 1.81.0
- **PostCSS**: 8.4.49

### 開發工具

- **UI 文件**: Storybook 8.1.11
- **程式碼品質**: ESLint + Prettier
- **測試框架**: Vitest + Testing Library
- **視覺測試**: Chromatic

### 其他套件

- **圖表**: Highcharts 12.1.2
- **路由**: React Router 7.1.1
- **工具函式**: Lodash 4.17.21

---

## 環境需求

在開始之前，請確保您的開發環境符合以下要求：

- **Node.js**: >= 18
- **npm**: >= 10
- **作業系統**: Windows（指令相容 PowerShell 7+）

---

## 快速開始

### 1. 克隆專案

```bash
git clone https://github.com/uedteam/DED-WDS_REACT.git
cd DED-WDS_REACT
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm start
```

應用程式將在 `http://localhost:4200` 執行

### 4. 啟動 Storybook

```bash
npm run storybook
```

Storybook 將在 `http://localhost:6006` 執行

---

## 可用指令

### 開發相關

| 指令             | 說明           |
| ---------------- | -------------- |
| `npm start`      | 啟動開發伺服器 |
| `npm run build`  | 建置生產版本   |
| `npm test`       | 執行單元測試   |
| `npm run reset`  | 重置 Nx 快取   |
| `npm run report` | 產生 Nx 報告   |

### Storybook 相關

| 指令                       | 說明                           |
| -------------------------- | ------------------------------ |
| `npm run storybook`        | 啟動 Storybook 開發伺服器      |
| `npm run build-storybook`  | 建置 Storybook 靜態文件        |
| `npm run deploy-storybook` | 部署 Storybook 至 GitHub Pages |

### 部署與發佈

| 指令                | 說明                        |
| ------------------- | --------------------------- |
| `npm run deploy`    | 部署應用程式至 GitHub Pages |
| `npm run sync`      | 同步 UI 組件至 libs 目錄    |
| `npm run chromatic` | 執行 Chromatic 視覺測試     |

### 其他工具

| 指令                             | 說明                       |
| -------------------------------- | -------------------------- |
| `npm run artifactregistry-login` | 登入 GCP Artifact Registry |

---

## 專案結構

```
DED-WDS_REACT/
├── .storybook/          # Storybook 配置檔案
├── libs/                # 可重用的組件庫（用於 npm 發佈）
│   ├── src/             # 組件庫原始碼
│   │   └── ui/          # UI 組件
│   └── README.md        # 組件庫說明文件
├── src/                 # 主應用程式原始碼
│   ├── app/             # 應用程式主要邏輯
│   ├── elements/        # 基礎元素組件
│   ├── views/           # 頁面視圖
│   │   ├── Demo/        # 示範頁面
│   │   ├── Lab1-4/      # 實驗性功能頁面
│   │   └── Finished/    # 完成品頁面
│   └── main.tsx         # 應用程式入口
├── public/              # 靜態資源
├── build/               # 建置輸出目錄
├── dist/                # Storybook 建置輸出
├── package.json         # 專案配置與依賴
├── nx.json              # Nx 工作空間配置
├── vite.config.ts       # Vite 配置
├── tailwind.config.js   # TailwindCSS 配置
├── tsconfig.json        # TypeScript 配置
└── README.md            # 本文件
```

---

## 開發規範

本專案遵循嚴格的開發規範，確保程式碼品質與可維護性。

### 設計原則

- ✅ 採用 **SOLID 設計原則**
- ✅ 避免過度耦合
- ✅ **單一職責**（Single Responsibility）為優先考量

### 程式碼撰寫規範

- ✅ 程式碼需包含 **函式級別註解**
- ✅ 註解一律使用 **繁體中文**
- ✅ 重要參數、物件、資料結構需額外說明用途
- ❌ 禁止「看得懂就好」的自我感覺式命名

> ⚠️ **重要**: 如果未來要靠 Git blame 找人，這段註解會救你一命。

### 測試規範

#### 單元測試（Unit Test）

- ✅ 每一個小任務完成前 **必須完成單元測試**
- ✅ 測試未通過不得進行下一項任務

```bash
npm test
```

#### E2E 測試

- ✅ 專案完成後，若有前端介面，必須進行 End-to-End 測試
- ✅ 確保實際操作流程可正常運作

### 版本控管（Git）

#### Repository 建立

- ✅ 第一版需使用 GitHub 建立 Repository 並上傳
- ✅ 必須包含基本文件（README / spec）

#### 分支策略

- ✅ 當功能變動範圍較大時，需先建立功能分支（feature branch）
- ✅ 任務完成後再評估是否合併回主分支（main）

#### Commit 規範

- ✅ 每完成一項任務必須進行 commit
- ❌ 禁止「一次改一堆再一起丟」

### 文件規範

- ✅ **任何修改程式碼前，必須先更新對應文件**（`spec.md`、`README.md`）
- ✅ 撰寫程式前，必須完整理解規格文件內容
- ✅ 並與開發者（或指導者）確認理解一致

> ⚠️ **提醒**: 文件不是交差用，是避免專案後期失控用。

---

## 封裝與發佈

本專案組件庫可封裝後上傳至 **GCP Artifact Registry**，供其他專案使用。

### 設定授權

#### 1. 設定授權範圍

```bash
gcloud artifacts print-settings npm \
  --project=auo-ded \
  --repository=npm-hub \
  --location=asia-east1 \
  --scope=@ded-wds
```

#### 2. 設定 `.npmrc` 檔案

在專案根目錄新增 `.npmrc` 檔案，並將上述執行結果寫入檔案中。

#### 3. 存取憑證

```bash
npx google-artifactregistry-auth .npmrc
```

或使用專案內建指令：

```bash
npm run artifactregistry-login
```

### 上傳封裝程式

#### 1. 建置組件庫

```bash
npm run build
```

確認已產生 `build/app` 資料夾。

#### 2. 檢查 `package.json` 設定

- 封裝後的名稱: `name: "@ded-wds/ded-wds"`
- 版本正確性: `version: 1.0.16-beta`

#### 3. 發佈至 Artifact Registry

```bash
npm publish
```

### 下載封裝程式

其他專案可透過以下方式安裝：

#### 最新版本

```bash
npm install @ded-wds/ded-wds@latest
```

#### 指定版本

```bash
npm install @ded-wds/ded-wds@1.0.16-beta
```

---

## 測試

### 執行單元測試

```bash
npm test
```

### 測試覆蓋率

專案使用 Vitest 與 `@vitest/coverage-v8` 進行測試覆蓋率統計。

---

## 部署

### 部署應用程式至 GitHub Pages

```bash
npm run deploy
```

應用程式將部署至: `https://uedteam.github.io/DED-WDS_REACT`

### 部署 Storybook 至 GitHub Pages

```bash
npm run deploy-storybook
```

### Chromatic 視覺測試

```bash
npm run chromatic
```

---

## 貢獻指南

歡迎貢獻！請遵循以下步驟：

### 1. Fork 專案

### 2. 建立功能分支

```bash
git checkout -b feature/your-feature-name
```

### 3. 完成開發

- 遵循[開發規範](#開發規範)
- 撰寫單元測試
- 更新相關文件

### 4. 提交變更

```bash
git commit -m "feat: 新增某某功能"
```

提交訊息請遵循 [Conventional Commits](https://www.conventionalcommits.org/) 規範。

### 5. 推送至遠端分支

```bash
git push origin feature/your-feature-name
```

### 6. 建立 Pull Request

---

## 授權與作者

### 授權

本專案採用 [MIT License](https://opensource.org/licenses/MIT)

### 作者

- **Kevin Yang** - [kevin.kk.yang@auo.com](mailto:kevin.kk.yang@auo.com)

### 貢獻者

- **Amos Lee** - [amos.lee@auo.com](mailto:amos.lee@auo.com)

---

## 相關連結

- **GitHub Repository**: [https://github.com/uedteam/DED-WDS_REACT](https://github.com/uedteam/DED-WDS_REACT)
- **Storybook 線上文件**: [https://uedteam.github.io/DED-WDS_REACT](https://uedteam.github.io/DED-WDS_REACT)
- **GCP Artifact Registry**: [https://console.cloud.google.com/artifacts/npm/auo-ded/asia-east1/npm-hub/@ded-wds%2Fded-wds](https://console.cloud.google.com/artifacts/npm/auo-ded/asia-east1/npm-hub/@ded-wds%2Fded-wds?project=auo-ded)
- **Issues 回報**: [https://github.com/uedteam/DED-WDS_REACT/issues](https://github.com/uedteam/DED-WDS_REACT/issues)

---

**© 2026 DED Team. All rights reserved.**
