This is personal portfolio website created using Nextjs and Sanity.

## Main Features

This website contains following features

1. Built using Nextjs 13 (app router).

2. It integrates with Sanity cms handle all your content needs. All the sections and pages can be managed through Sanity CMS Studio.

3. It has separate project pages and write whole articles about the your projects.

4. It also supports blogs. So unleash your inner write and write about the stuff you are interested in.

5. It also have testimonial sections where you can display the reviews you received from your clients for your great work.

6. All pages are statically generated ensuring blazingly fast speed and less cms apis usage.

7. It used sanity studio for managing its data which is higly customizable.

8. You can also preview your pages before publishing them to the world thanks due preview mode provided by sanity.

9. You won't have pay for hosting and cms because generous free qouta provided by vercel and sanity cms.

## Deploy Project

1. Download the project

2. Create github repo and commit code there

3. Run following command and follow the instructions

```bash
npx vercel link
```

it will ask you to setup the current project. Don't link your project to any project.

4. Go to vercel and your project will be that, Click on it and connect git repository.

5. Got to `Settings > integrations`. Browse marketplace and search fo sanity and click on it.

6. Then Click on `Add Integration` button. It will open a popup where you will Select a Vercel Account to add the Integration to. After selecting account click on `Continue` Button.

7. Then Click on `Manage Access` button it will open popup where you will select the github project that
   has access to the sanity integration. Select your project and click on `Save` button.

8. Now click on `Configure` button. It will redirect you to the sanity. Now signin to your sanity account using your prefered method. i have signed it using Google in sanity so i will choose Google
   Signin.

9. After authenticating it will show you the list of the vercel project. Click on your project and it will show you two button `Create new Sanity project` and `Select existing Sanity project` we will be creating new sanity project so click on `Create new Sanity project`. It will automatically configure your environment variables. Now click on `Back to integration` button.

10. Now Vercel and Sanity are configured correctly now pull the environment variables in your local project. Run following command, it will download your environment variables from vercel locally

```bash
npx vercel env pull
```

11. Now to trigger deployement, commit to your repo. Every commit to your main branch will trigger new deployment build in vercel and it will update your project.

12. Vercel will give you url aftre build click on it.

13. Initially there is no home document so you have to create one. page will say

```
You don’t have a homepage document yet, create one now!
```

Click on `create one now!` link and it will take you to the poput that says `To access your content, you need to add the following URL as a CORS origin to your Sanity project.`. After adding url in sanity it will take you to the studio.
