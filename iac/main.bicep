@description('Location for all resources')
param parLocation string = resourceGroup().location

@description('App Service Plan Sku')
@allowed([
  'B1'
])
param parAppServiceSku string = 'B1'

@description('Docker image name')
param parDockerImageName string

var varAppServicePlanName = 'mywebapp'
var varAppName = 'costacodecraft'
var varAppServiceKind = 'linux'
var varCommonTags = {
  app: varAppName
  purpose: 'personal website'
}

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: varAppServicePlanName
  location: parLocation
  kind: varAppServiceKind
  tags: varCommonTags
  sku: {
    name: parAppServiceSku
  }
}

resource appServiceApp 'Microsoft.Web/sites@2023-01-01' = {
  name: varAppName
  location: parLocation
  tags: varCommonTags
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'DOCKER|${parDockerImageName}'
    }
  }
}

output appServiceAppHostname string = appServiceApp.properties.defaultHostName
output dockerImageName string = parDockerImageName
