/**
 * 驗收環境
 */
;(function () {
  window.SITE_CONFIG = {};

  // api 介面請求地址
  window.SITE_CONFIG['baseUrl'] = 'http://localhost:8888/louyi-admin';

  // cdn 地址 = 功能變數名稱 + 版本號
  window.SITE_CONFIG['domain']  = './'; // 功能變數名稱
  window.SITE_CONFIG['version'] = '';   // 版本號(年月日時分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain + window.SITE_CONFIG.version;
})();
