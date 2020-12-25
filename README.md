# Setup

## Install packages

`npm i`

## Run server locally

`npm start`

## backend API Document:
  - https://documenter.getpostman.com/view/7992002/TVsxARSJ

## Tasks:

### 1. setup Mesh Conference Frontend locally.

  - Expected output:
    - `https://localhost:4443` should load a fully functional Mesh Conference Web app

  > Note: in urlFactory.js, please replace the value of `jwtToken` by the token generated from /login API


### 2. Implement `Login feature` before joinning a conference room.
  
  - Currently, joining a conference room does not require any username/password.  Please add a login feature so that only authrorized user can join the conference room.

  - Expected output:

    - Add a simple UI to enter username/password in this page: `https://imgur.com/n8mvD8t` . Frontend should auth username/password via `/login` API
    

### 3. Implement `Server selection feature` before joinning a conference room.

  - Currently, backend server is hard coded as `wss://conference-ken.meshub.tv` in urlFactory.js, please make it dynamic so we can manually choose one from a server list.

  - Expected output:
    - https://imgur.com/n8mvD8t should display a simple UI to select a server from server list. Server list can be retrieved via `/servers` API



