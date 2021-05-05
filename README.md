
# Rint

npm package to integrate with with EPA's RCRAInfo and e-Manifest system

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

## Table of Contents

  - [Features](#features)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Example](#examples)
    - [Site Exist](#site-exist)
    - [Manifest UI Link](#manifests-ui-link)
  
## Features

- Validate EPA ID
- Deep Link to e-Manifest sign
- Get site details
- Get manifest data (JSON)

  
## Installation

Currently unavailable

```bash 
  npm install 
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`RCRAINFO_API_ID`

`RCRAINFO_API_KEY`

  
## Examples

### Site Exist

```javascript
import * as eMan from 'Rint'

const siteID = 'VATEST000001'
const siteIdCheck = eMan.siteExist(siteID)
```
### manifests UI link

```javascript
import * as eMan from 'Rint'

const siteID = 'VATEST000001'
const page   = 'BulkSign'
const mtn    = ['000000001ELC', '000000002ELC', '000000003ELC']
const siteIdCheck = eMan.eManLink(page, siteID, mtn)
```
