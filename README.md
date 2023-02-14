# NrMaps

Todo, add a gh action that does the following (uses https://github.com/easyPEP/github-action-new-relic-upload-sourcemap)
```
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: |
        echo "REMOTE_URL=$(git remote get-url origin)" >> $GITHUB_ENV
        echo "GIT_SLUG=$(git rev-parse --short HEAD)" >> $GITHUB_ENV
        
    - name: Add source maps to New Relic
      uses: easyPEP/github-action-new-relic-upload-sourcemap@main
      with:
        api_key: ${{ secrets.NEW_RELIC_USER_API_KEY }}
        app_id: ${{ secrets.NEW_RELIC_APP_ID }}
        sourcemap_path: path/to/application.js.map
        javascript_url: https://example.com/assets/application.min.js
        release_id: ${{ env.GIT_SLUG }}
        release_name: prod-${{ env.GIT_SLUG }}
        github_repository_url: ${{ env.REMOTE_URL }}
```
