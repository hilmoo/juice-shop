import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'org.owasp.juiceshop',
  appName: 'OWASP Juice Shop',
  webDir: 'dist/frontend',
  server: {
    // plain http scheme so the WebView may call the (usually http) Juice Shop server
    androidScheme: 'http',
    cleartext: true
  }
}

export default config
