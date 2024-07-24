# GAR Npm Registry

依照現行規劃，將封裝後的組件上傳至 GCP 所提供的 [Artifact Registry](https://console.cloud.google.com/artifacts/npm/auo-ded/asia-east1/npm-hub/@ded-wds%2Fded-wds?project=auo-ded)

## 操作流程

### 設定授權

1. 設定授權範圍</br>
   `gcloud artifacts print-settings npm \
--project=auo-ded \
--repository=npm-hub \
--location=asia-east1 \
--scope=@ded-wds`
2. 在專案根目錄新增 `.npmrc` 檔案，並將上述執行結果寫入檔案中
3. 存取憑證</br>
   `npx google-artifactregistry-auth .npmrc`

### 上傳封裝程式

1. 確認已有封裝後產生的 `dist` 資料夾
2. 檢查以下幾項 package.json 設定
   - 封裝後的名稱 `name: ded-wds`
   - 版本正確性 `version: 1.0.1`

### 下載封裝程式

這邊提供以下兩種方式，請依據需求操作

- 最新版本
  `npm install @ded-wds/ded-wds@latest`
- 指定版本
  `npm install @ded-wds/ded-wds@1.0.10`
