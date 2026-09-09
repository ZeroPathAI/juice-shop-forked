/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import express from 'express'

const shipmentTrace = require('./shipmentTrace')

export const logisticsRouter = express.Router()

logisticsRouter.get('/trace', shipmentTrace())
