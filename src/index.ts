/*
 * Copyright (C) 2022 juztamau5
 * This file is part of Rock Paper Scissors Dapp - https://github.com/juztamau5/rock-paper-scissors
 *
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE.txt for more information.
 */

// Fix error:
//
//   [@snowpack/plugin-typescript] src/index.ts(13,1): error TS1208: 'index.ts'
//   cannot be compiled under '--isolatedModules' because it is considered a
//   global script file. Add an import, export, or an empty 'export {}'
//   statement to make it a module.
export {};
