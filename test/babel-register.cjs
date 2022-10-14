/*
 * Copyright (C) 2022 juztamau5
 * This file is part of Rock Paper Scissors Dapp - https://github.com/juztamau5/rock-paper-scissors
 *
 * SPDX-License-Identifier: Apache-2.0
 * See LICENSE.txt for more information.
 */

//
// This registration file is needed to override the extensions parameter when
// registering Babel with Mocha.
//
// Normally, mocha registration is done on the command line, e.g.:
//
//   mocha --require @babel/register
//
// However, Babel only registers for .js file. This script is needed to pass
// the .ts extension to mocha registration.
//
// This file is located by the "requires" parameter of .mocharc.json.
//
// See:
//
//   https://github.com/babel/babel/issues/8673#issuecomment-420141918
//

const register = require("@babel/register").default;

register({ extensions: [".ts"] });
