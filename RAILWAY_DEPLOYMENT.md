# Railway Deployment Guide

## Prerequisites
- A [Railway](https://railway.app/) account
- Git repository pushed to GitHub/GitLab/Bitbucket

## Deployment Steps

### Option 1: Deploy via Railway Dashboard (Recommended)

1. **Login to Railway**
   - Go to [railway.app](https://railway.app/)
   - Sign in with your GitHub account

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `hianime-api` folder as the root directory

3. **Configure Environment Variables**
   - Go to your project settings
   - Add the following variables:
     ```
     PORT=3000
     NODE_ENV=production
     ENABLE_LOGGING=true
     ORIGIN=https://your-frontend-domain.com
     ```

4. **Deploy**
   - Railway will automatically detect the Dockerfile
   - The build and deployment will start automatically
   - Wait for the deployment to complete

5. **Get Your URL**
   - Railway will provide a public URL (e.g., `https://your-app.up.railway.app`)
   - You can also add a custom domain in the settings

### Option 2: Deploy via Railway CLI

1. **Install Railway CLI**
   ```bash
   npm i -g @railway/cli
   ```

2. **Login**
   ```bash
   railway login
   ```

3. **Initialize Project**
   ```bash
   cd hianime-api
   railway init
   ```

4. **Set Environment Variables**
   ```bash
   railway variables set PORT=3000
   railway variables set NODE_ENV=production
   railway variables set ENABLE_LOGGING=true
   railway variables set ORIGIN=https://your-frontend-domain.com
   ```

5. **Deploy**
   ```bash
   railway up
   ```

## Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 3000 | No (Railway sets this automatically) |
| `NODE_ENV` | Environment mode | production | Yes |
| `ENABLE_LOGGING` | Enable request logging | true | No |
| `ORIGIN` | CORS allowed origins | * | No |

## Post-Deployment

### Check Logs
```bash
railway logs
```

### Open in Browser
```bash
railway open
```

### Check Status
- Go to your Railway dashboard
- View deployment logs and metrics
- Monitor resource usage

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Dockerfile syntax
- Check Railway build logs

### App Crashes
- Check runtime logs: `railway logs`
- Verify environment variables are set correctly
- Ensure PORT is not hardcoded (Railway assigns it dynamically)

### CORS Issues
- Update the `ORIGIN` environment variable with your frontend URL
- Multiple origins: `ORIGIN=https://domain1.com,https://domain2.com`

## Custom Domain

1. Go to your Railway project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. Wait for SSL certificate provisioning

## Scaling

Railway automatically scales based on usage. To configure:
1. Go to project settings
2. Adjust resource limits
3. Configure autoscaling rules

## Cost Optimization

- Railway offers $5 free credit per month
- Monitor usage in the dashboard
- Set up usage alerts
- Consider upgrading to a paid plan for production apps

## Support

- [Railway Documentation](https://docs.railway.app/)
- [Railway Discord](https://discord.gg/railway)
- [Railway Status](https://status.railway.app/)
