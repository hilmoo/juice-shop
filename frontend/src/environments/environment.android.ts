/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

// Base URL of the Juice Shop server the Android app talks to.
// 10.0.2.2 is the host machine as seen from the Android emulator.
// Overwritten in CI via the JUICE_SHOP_SERVER_URL repository variable.
export const environment = {
  production: true,
  hostServer: 'http://10.0.2.2:3000'
}
