# A Mono Repo for Seneca Micro Services

## Pre-requisite

- Install Lerna globally and initailize lerna.

  ```
  npm install -g lerna

  lerna init
  ```

- Configure lerna to use yarn as npmClient.

- Setup Yarn Workspaces. (instruction are @ link below)

  https://classic.yarnpkg.com/en/docs/workspaces/

## Notes:

- Use selective depencency resolution if required.
  https://classic.yarnpkg.com/en/docs/selective-version-resolutions/

![Selective Dependency Resolution](./readme-images/selective-dependency-resolution.jpg)

- Run commands using `yarn workspace`

```
yarn workspace math-service run start
```

## Seneca Notes:

- The more specific pattern always wins. In other words, the pattern with the highest number of matching attributes has precedence.

- You can chain .add and .act calls together

- The ability to easily extend the behavior of your actions by matching more specific kinds of messages is an easy way to handle new and changing requirements. This applies both while your project is in development and when it is live and needs to adapt. It also has the advantage that you do not need to modify existing code. It’s much safer to add new code to handle special cases. In a production system, you won’t even need to do a re-deploy. Your existing services can stay running as they are. All you need to do is start up your new service.

- Code reuse: Action patterns can call other action patterns to do their work. 

- 

