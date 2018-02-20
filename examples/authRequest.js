// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * Import the GoogleAuth library, and create a new GoogleAuth client.
 */
const { auth } = require('google-auth-library');
const axios = require('axios');

/**
 * Acquire a client, and make a request to an API that's enabled by default.
 */
async function main() {
  const client = await auth.getClient();
  const projectId = await auth.getDefaultProjectId();
  const url = `https://www.googleapis.com/dns/v1/projects/${projectId}`;
  const opts = await auth.authorizeRequest();
  const res = await axios.get(url, opts);
  console.log(res.data);
}

main().catch(console.error);
