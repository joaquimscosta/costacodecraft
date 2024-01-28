@description('Location for all resources')
param location string = resourceGroup().location

@description('App Service Plan Sku')
@allowed([
  'B1'
])
param appServiceSku string = 'B1'

@description('Docker image name')
param dockerImageName string

var appServicePlanName = 'mywebapp'
var appName = 'costacodecraft'
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
output dockerImageName string = dockerImageName
