@description('The Azure region into which the resources should be deployed.')
param location string
@description('The name of the App Service app. This must be glabally unique.')
param appName string
@description('App Service Plan Sku')
@allowed([
  'B1'
  'F1'
])
param appServiceSku string

@description('Full Container/Docker image name')
param dockerImageName string

var appServicePlanName = 'mywebapp'
var appServicePlanKind = 'linux'
var commonTags = {
  app: appName
  environment: 'Production'
  purpose: 'Personal Website'
}

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: appServicePlanName
  location: location
  kind: appServicePlanKind
  tags: commonTags
  sku: {
    name: appServiceSku
  }
}

resource appServiceApp 'Microsoft.Web/sites@2023-01-01' = {
  name: appName
  location: location
  tags: commonTags
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'DOCKER|${dockerImageName}'
    }
  }
}

output appHostname string = appServiceApp.properties.defaultHostName
